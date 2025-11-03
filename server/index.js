// server/index.js
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Enable CORS for all routes
app.use(
    cors({
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
        credentials: true
    })
)

app.use(express.json())

// Test route
app.get('/api/health', (req, res) => {
    console.log('Health check received')
    res.json({
        status: 'Server is running!',
        timestamp: new Date().toISOString()
    })
})

// Email route
app.post('/api/send-email', async (req, res) => {
    try {
        console.log('Received email request:', req.body)

        const { name, company, email, phone, subject, message } = req.body

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            })
        }

        // Check if email credentials are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('Email credentials not set')
            return res.status(500).json({
                success: false,
                message: 'Email service not configured'
            })
        }

        // Create transporter
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.TO_EMAIL || process.env.EMAIL_USER,
            subject: `CRIC AFRIKA - Nouveau message: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #ea580c, #84cc16); color: white; padding: 20px; text-align: center;">
            <h1>CRIC AFRIKA SARL</h1>
            <h2>Nouveau Message de Contact</h2>
          </div>
          <div style="background: #f8fafc; padding: 20px;">
            <div style="margin-bottom: 15px;">
              <strong>Sujet:</strong> ${subject}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Nom Complet:</strong> ${name}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Entreprise:</strong> ${company || 'Non spécifié'}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Email:</strong> ${email}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Téléphone:</strong> ${phone || 'Non spécifié'}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Message:</strong>
              <div style="background: white; padding: 15px; border-left: 4px solid #84cc16;">
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}
            </div>
          </div>
        </div>
      `
        }

        await transporter.sendMail(mailOptions)
        console.log('✅ Email sent successfully')

        res.json({
            success: true,
            message: 'Email sent successfully'
        })
    } catch (error) {
        console.error('❌ Error sending email:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to send email: ' + error.message
        })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`🔗 Health check: http://localhost:${PORT}/api/health`)
    console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`)
    console.log(`✅ CORS enabled for: http://localhost:5173`)
})

// server/index.js
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { getContactEmailTemplate } from './templates/contactEmail.js'

dotenv.config()

const app = express()

// Enable CORS
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
  })
)

app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running!',
    timestamp: new Date().toISOString(),
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)
  })
})

// Email route
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, company, email, phone, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // Configuration check
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email credentials missing in .env')
      return res.status(500).json({
        success: false,
        message: 'Email service not configured'
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: `"CRIC AFRIkA SARL Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[NEW CONTACT] ${subject} - ${name}`,
      html: getContactEmailTemplate({ name, company, email, phone, subject, message })
    }

    await transporter.sendMail(mailOptions)
    console.log(`✅ Email sent successfully to ${process.env.TO_EMAIL || process.env.EMAIL_USER}`)

    res.json({
      success: true,
      message: 'Email sent successfully'
    })
  } catch (error) {
    console.error('❌ Error sending email:', error)
    res.status(500).json({
      success: false,
      message: `Failed to send email: ${error.message}`
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

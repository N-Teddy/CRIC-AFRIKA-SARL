import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { getContactEmailTemplate } from '../server/templates/contactEmail.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/send-email', async (req, res) => {
    try {
        const { name, company, email, phone, subject, message } = req.body

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, message: 'Missing required fields' })
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return res.status(500).json({ success: false, message: 'Email service not configured' })
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
        res.json({ success: true, message: 'Email sent successfully' })
    } catch (error) {
        res.status(500).json({ success: false, message: `Failed to send email: ${error.message}` })
    }
})

export default app

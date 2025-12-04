import { NextRequest, NextResponse } from 'next/server';

// Email configuration - You can use Resend, SendGrid, Nodemailer, etc.
// For now, this is a template that logs the data and can be configured later

interface QuoteItem {
    partNumber: string;
    description: string;
    category: string;
    manufacturer?: string;
    quantity: number;
}

interface QuoteRequest {
    customerInfo: {
        name: string;
        email: string;
        phone: string;
        company?: string;
        message?: string;
    };
    items: QuoteItem[];
}

export async function POST(request: NextRequest) {
    try {
        const data: QuoteRequest = await request.json();

        // Validate required fields
        if (!data.customerInfo?.name || !data.customerInfo?.email || !data.items?.length) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Build the email content
        const itemsList = data.items.map(item =>
            `• ${item.partNumber} (Qty: ${item.quantity})\n  ${item.description}\n  Category: ${item.category}${item.manufacturer ? `, Manufacturer: ${item.manufacturer}` : ''}`
        ).join('\n\n');

        const emailContent = `
NEW QUOTE REQUEST FROM SERENTE ELECTRONICS WEBSITE
================================================

CUSTOMER INFORMATION:
---------------------
Name: ${data.customerInfo.name}
Email: ${data.customerInfo.email}
Phone: ${data.customerInfo.phone}
Company: ${data.customerInfo.company || 'N/A'}

ADDITIONAL MESSAGE:
-------------------
${data.customerInfo.message || 'No additional message'}

REQUESTED ITEMS (${data.items.length} items, ${data.items.reduce((sum, item) => sum + item.quantity, 0)} total quantity):
-----------------
${itemsList}

================================================
This quote request was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        `;

        // Log for debugging (remove in production)
        console.log('=== QUOTE REQUEST RECEIVED ===');
        console.log(emailContent);

        // ============================================
        // EMAIL SENDING OPTIONS - Choose one:
        // ============================================

        // OPTION 1: Using Resend (recommended)
        // First, install: npm install resend
        // Then uncomment and configure:
        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
            from: 'Serente Electronics <quotes@yourdomain.com>',
            to: ['your-email@example.com'],
            replyTo: data.customerInfo.email,
            subject: `New Quote Request from ${data.customerInfo.name}`,
            text: emailContent,
        });
        */

        // OPTION 2: Using Nodemailer with Gmail
        // First, install: npm install nodemailer
        // Then uncomment and configure:
        /*
        const nodemailer = require('nodemailer');
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'your-receiving-email@example.com',
            replyTo: data.customerInfo.email,
            subject: `New Quote Request from ${data.customerInfo.name}`,
            text: emailContent,
        });
        */

        // OPTION 3: Using EmailJS (client-side, no backend needed)
        // Configure in the frontend instead

        // For now, we'll store in a file or database
        // In production, you'd want to save to a database

        return NextResponse.json({
            success: true,
            message: 'Quote request received successfully! Our team will contact you within 24 hours.',
        });

    } catch (error) {
        console.error('Error processing quote request:', error);
        return NextResponse.json(
            { error: 'Failed to process quote request' },
            { status: 500 }
        );
    }
}


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    console.log('📧 Email API called');

    try {
        const body = await request.json();
        const { type, ...data } = body;

        console.log('📧 Request type:', type);

        // basic validation of env vars
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('❌ SMTP configuration missing:', {
                hasHost: !!process.env.SMTP_HOST,
                hasUser: !!process.env.SMTP_USER,
                hasPass: !!process.env.SMTP_PASS
            });
            return NextResponse.json(
                { success: false, message: 'Server configuration error' },
                { status: 500 }
            );
        }

        console.log('✅ SMTP config found, attempting to send...');

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let subject = '';
        let htmlContent = '';

        if (type === 'contact') {
            subject = `New Contact Form Submission: ${data.subject || 'Inquiry'}`;
            htmlContent = `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <h3>Message:</h3>
                <p>${data.message}</p>
            `;
        } else if (type === 'quote') {
            subject = `New Quote Request from ${data.customerInfo.name}`;
            const itemsHtml = data.items.map((item: any) => `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">${item.partNumber}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${item.category}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity}</td>
                </tr>
            `).join('');

            htmlContent = `
                <h2>New Quote Request</h2>
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${data.customerInfo.name}</p>
                <p><strong>Email:</strong> ${data.customerInfo.email}</p>
                <p><strong>Phone:</strong> ${data.customerInfo.phone}</p>
                <p><strong>Company:</strong> ${data.customerInfo.company}</p>
                <p><strong>Message:</strong> ${data.customerInfo.message}</p>

                <h3>Requested Items</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <thead>
                        <tr style="background-color: #f2f2f2;">
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Part Number</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Category</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
            `;
        } else {
            return NextResponse.json({ success: false, message: 'Invalid submission type' }, { status: 400 });
        }

        // Send mail
        await transporter.sendMail({
            from: `"Serente Website" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Send to self
            subject: subject,
            html: htmlContent,
            replyTo: data.email || data.customerInfo?.email,
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: `Failed to send email: ${(error as Error).message}` },
            { status: 500 }
        );
    }
}

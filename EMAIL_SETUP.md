# Email Configuration for Quote Requests

This document explains how to set up email functionality for receiving quote requests.

## Option 1: Using Resend (Recommended)

Resend is the easiest option with a generous free tier (100 emails/day).

### Setup Steps:
1. Go to [https://resend.com](https://resend.com) and sign up
2. Create an API key in your dashboard
3. Install the package: `npm install resend`
4. Create a `.env.local` file with:
   ```
   RESEND_API_KEY=re_xxxxxxxxxx
   ```
5. Uncomment the Resend code in `/app/api/send-quote/route.ts`

---

## Option 2: Using Gmail with Nodemailer

### Setup Steps:
1. Enable 2-Factor Authentication in your Google Account
2. Go to Google Account → Security → App Passwords
3. Generate a new App Password for "Mail"
4. Install the package: `npm install nodemailer`
5. Create a `.env.local` file with:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
   ```
6. Uncomment the Nodemailer code in `/app/api/send-quote/route.ts`

---

## Quick Test

Currently, the API logs all quote requests to the console. You can:
1. Submit a test quote request
2. Check your terminal running `npm run dev`
3. You'll see the full quote details logged

Once you configure an email service, the quotes will be sent directly to your inbox!

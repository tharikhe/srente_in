/**
 * Google Apps Script for Serentech Form Submissions
 * 
 * INSTRUCTIONS:
 * 1. Create a new Google Sheet (e.g., "Serentech Website Data").
 * 2. Create two tabs in the sheet: named "Quotes" and "Contacts".
 *    - In "Quotes", add headers: Date, Name, Email, Phone, Company, Items, Total Qty, Message
 *    - In "Contacts", add headers: Date, Name, Email, Phone, Company, Subject, Message
 * 3. Go to Extensions > Apps Script.
 * 4. Paste this entire code there.
 * 5. Update the NOTIFICATION_EMAIL variable below.
 * 6. Click "Deploy" > "New deployment".
 * 7. Select type "Web app".
 * 8. Set Description to "v1".
 * 9. Set "Execute as" to "Me".
 * 10. Set "Who has access" to "Anyone" (IMPORTANT!).
 * 11. Click "Deploy" and copy the "Web App URL".
 */

// CONFIGURATION
const NOTIFICATION_EMAIL = "thareekanwar7070@gmail.com"; // Change this to your email
const SENDER_NAME = "Serentech Website Bot";

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const data = JSON.parse(e.postData.contents);

        // Determine type of submission
        const type = data.type || 'contact'; // 'quote' or 'contact'

        if (type === 'quote') {
            handleQuote(doc, data);
        } else {
            handleContact(doc, data);
        }

        return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function handleQuote(doc, data) {
    const sheet = doc.getSheetByName('Quotes');
    if (!sheet) throw new Error("Sheet 'Quotes' not found");

    const customer = data.customerInfo;
    const items = data.items;

    // Format items for the sheet
    const itemsSummary = items.map(i => `${i.partNumber} (${i.quantity})`).join(', ');
    const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

    // Save to Sheet
    sheet.appendRow([
        new Date(),
        customer.name,
        customer.email,
        customer.phone,
        customer.company || '',
        itemsSummary,
        totalQty,
        customer.message || ''
    ]);

    // Send Email Notification
    const subject = `New Quote Request: ${customer.name} (${totalQty} items)`;
    const body = `
    New Quote Request received!
    
    Customer: ${customer.name}
    Email: ${customer.email}
    Phone: ${customer.phone}
    Company: ${customer.company || 'N/A'}
    
    Items:
    ${items.map(i => ` - ${i.partNumber}: ${i.quantity} pcs (${i.manufacturer || 'N/A'})`).join('\n')}
    
    Message:
    ${customer.message || 'None'}
  `;

    MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        body: body,
        name: SENDER_NAME
    });
}

function handleContact(doc, data) {
    const sheet = doc.getSheetByName('Contacts');
    if (!sheet) throw new Error("Sheet 'Contacts' not found");

    // Save to Sheet
    sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.phone || '',
        data.company || '',
        data.subject || '',
        data.message
    ]);

    // Send Email Notification
    const subject = `New Contact Message: ${data.subject}`;
    const body = `
    New Contact Message received!
    
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone || 'N/A'}
    Company: ${data.company || 'N/A'}
    
    Subject: ${data.subject}
    
    Message:
    ${data.message}
  `;

    MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        body: body,
        name: SENDER_NAME
    });
}

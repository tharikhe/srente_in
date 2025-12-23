export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTqjuPbX6MEl11b01ld8sIqDEN4wRv-HQ8TEYEGfzg3eta4r_U3lKzD7d8DnW8-oRMVQ/exec';

export interface SubmissionResult {
    success: boolean;
    message?: string;
}

export async function submitToGoogleSheets(data: any): Promise<SubmissionResult> {
    // 1. Submit to Google Sheets (Legacy/Backup)
    if (GOOGLE_SCRIPT_URL) {
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error('Error submitting to Google Sheets:', error);
        }
    }

    // 2. Submit to Email API (Primary)
    try {
        const emailResponse = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const emailResult = await emailResponse.json();

        if (!emailResult.success) {
            return { success: false, message: emailResult.message || 'Failed to send email' };
        }

        return { success: true, message: 'Email sent successfully!' };

    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: `Connection error: ${(error as Error).message}` };
    }
}

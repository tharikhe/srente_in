export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUyj5z2N5CsPWb77oiun9eNsLMyz4BAUXPDwf1ubz9TKh94ibxK9TTvLLfDjF4waxmBg/exec';

export interface SubmissionResult {
    success: boolean;
    message?: string;
}

export async function submitToGoogleSheets(data: any): Promise<SubmissionResult> {
    if (GOOGLE_SCRIPT_URL === 'PASTE_YOUR_WEB_APP_URL_HERE' || !GOOGLE_SCRIPT_URL) {
        console.error('Google Script URL is not configured.');
        return { success: false, message: 'Configuration Error: Script URL not set.' };
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // With mode: 'no-cors', we get an opaque response. 
        // We can't check response.ok or response.json(). 
        // We assume success if no network error occurred.
        return { success: true };

    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return { success: false, message: 'Network error occurred.' };
    }
}

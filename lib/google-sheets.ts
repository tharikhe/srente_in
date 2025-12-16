export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTqjuPbX6MEl11b01ld8sIqDEN4wRv-HQ8TEYEGfzg3eta4r_U3lKzD7d8DnW8-oRMVQ/exec';

export interface SubmissionResult {
    success: boolean;
    message?: string;
}

export async function submitToGoogleSheets(data: any): Promise<SubmissionResult> {
    // URL is hardcoded, so no validation needed
    if (!GOOGLE_SCRIPT_URL) {
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

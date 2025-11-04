// Google Sheets integration for tracking chatbot leads

import { google } from 'googleapis';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  monthlyRevenue: string;
  qualified: boolean;
  industry?: string;
}

export async function appendToGoogleSheet(leadData: LeadData) {
  try {
    // Check if credentials are configured
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.log('⚠️ Google Sheets not configured - skipping sheet logging');
      return { success: false, error: 'Not configured' };
    }

    // Parse the private key (handle escaped newlines)
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    // Create auth client
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create sheets client
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Pacific/Honolulu',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const row = [
      timestamp,
      leadData.name,
      leadData.email,
      leadData.phone,
      leadData.businessType,
      leadData.monthlyRevenue,
      leadData.qualified ? 'Yes' : 'No',
      leadData.industry || 'general',
    ];

    // Append to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:H', // Adjust if your sheet has a different name
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    console.log('✅ Lead logged to Google Sheets:', leadData.email);
    return { success: true, response: response.data };

  } catch (error) {
    console.error('❌ Failed to log to Google Sheets:', error);
    return { success: false, error: String(error) };
  }
}

// Function to create/verify sheet headers
export async function setupGoogleSheetHeaders() {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      return { success: false, error: 'Not configured' };
    }

    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Check if headers exist
    const check = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: 'Sheet1!A1:H1',
    });

    if (!check.data.values || check.data.values.length === 0) {
      // Add headers if they don't exist
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Business Type',
        'Monthly Revenue',
        'Qualified',
        'Industry'
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID!,
        range: 'Sheet1!A1:H1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });

      console.log('✅ Google Sheet headers created');
    }

    return { success: true };
  } catch (error) {
    console.error('❌ Failed to setup sheet headers:', error);
    return { success: false, error: String(error) };
  }
}

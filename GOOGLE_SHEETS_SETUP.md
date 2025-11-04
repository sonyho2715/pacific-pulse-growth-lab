# 📊 Google Sheets Integration Setup Guide

This guide shows you how to set up Google Sheets tracking for chatbot leads.

---

## 🎯 What This Does

Every time someone fills out the chatbot lead form, their info automatically goes to:
1. ✅ Supabase database (for analytics)
2. ✅ Google Sheets (for easy viewing/tracking)

---

## 📋 Step 1: Create Google Sheets

1. Go to https://sheets.google.com
2. Click "Blank" to create new sheet
3. Name it: **"Pacific Pulse - Chat Leads"**
4. Add these column headers in Row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Business Type | Monthly Revenue | Qualified | Industry |

5. **Copy the Sheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the SHEET_ID_HERE part
   - Save it for later

---

## 🔑 Step 2: Set Up Google Service Account

### Option A: Using Google Cloud Console (Recommended)

1. Go to https://console.cloud.google.com
2. Create a new project or select existing:
   - Click project dropdown (top left)
   - Click "New Project"
   - Name: "Pacific Pulse Growth Lab"
   - Click "Create"

3. Enable Google Sheets API:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click on it → Click "Enable"

4. Create Service Account:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Name: "pacific-pulse-sheets"
   - Click "Create and Continue"
   - Skip optional steps → Click "Done"

5. Create Service Account Key:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" → "Create New Key"
   - Choose "JSON"
   - Click "Create"
   - **A JSON file will download - save this securely!**

6. Share your Google Sheet with the service account:
   - Open the JSON file you downloaded
   - Find the "client_email" field (looks like: `something@something.iam.gserviceaccount.com`)
   - Copy this email
   - Go to your Google Sheet
   - Click "Share" button (top right)
   - Paste the service account email
   - Give it "Editor" access
   - Uncheck "Notify people"
   - Click "Share"

---

### Option B: Using Zapier/Make (No-Code Alternative)

If you don't want to set up Google API:

1. Sign up for Zapier: https://zapier.com
2. Create Zap:
   - Trigger: Webhook (catch POST request)
   - Action: Google Sheets → Append Row
3. Use the webhook URL in the API route

**Cost**: Free tier covers ~100 leads/month

---

## 🔧 Step 3: Add Environment Variables

1. Open your `.env` file
2. Add these variables:

```bash
# Google Sheets Integration
GOOGLE_SHEET_ID=your_sheet_id_from_step_1
GOOGLE_SERVICE_ACCOUNT_EMAIL=email@from.json.file
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

**How to get GOOGLE_PRIVATE_KEY**:
- Open the JSON file from Step 2
- Find the "private_key" field
- Copy the entire value (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
- Paste it in quotes
- **Important**: Keep the `\n` characters - don't remove them!

**Example**:
```bash
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

---

## ✅ Step 4: Add to Vercel

After testing locally, add these to Vercel:

1. Go to https://vercel.com/dashboard
2. Your project → Settings → Environment Variables
3. Add all 3 variables:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
4. Check all environments: Production, Preview, Development
5. Click "Save"
6. Redeploy: `vercel --prod`

---

## 🧪 Step 5: Test It

1. Run dev server: `npm run dev`
2. Open chatbot on your site
3. Fill out the lead form
4. Submit
5. Check your Google Sheet - new row should appear!

**Expected Row**:
```
2024-11-03 9:30 PM | John Doe | john@example.com | 808-555-1234 | Spa/Massage | 10k-25k | true | spa
```

---

## 🔍 Troubleshooting

### Error: "Unable to parse range"
- Check GOOGLE_SHEET_ID is correct
- Make sure sheet name is "Sheet1" (or update the code)

### Error: "The caller does not have permission"
- Service account email not shared with sheet
- Go to sheet → Share → Add service account email with Editor access

### Error: "Invalid private key"
- GOOGLE_PRIVATE_KEY formatting is wrong
- Make sure you copied the entire key including `-----BEGIN` and `-----END`
- Keep the `\n` characters

### No data appearing in sheet
- Check browser console for errors
- Check Vercel logs: `vercel logs production`
- Verify API route is working: Test `/api/sheets-log` directly

### "Cannot find module 'googleapis'"
- Run: `npm install googleapis`
- Rebuild: `npm run build`

---

## 📊 What Gets Tracked

Every chatbot lead includes:
- **Timestamp**: When they submitted
- **Name**: Their full name
- **Email**: Email address
- **Phone**: Phone number
- **Business Type**: Spa, Auto Detail, etc.
- **Monthly Revenue**: Revenue bracket
- **Qualified**: true/false (based on $5K+ threshold)
- **Industry**: Which page they were on (spa/auto-detail/general)

---

## 🎨 Optional: Format Your Sheet

Make it easier to read:

1. **Freeze header row**:
   - Click row 1 → View → Freeze → 1 row

2. **Color code qualified leads**:
   - Select column G (Qualified)
   - Format → Conditional formatting
   - If "true" → Green background
   - If "false" → Red background

3. **Add filters**:
   - Select row 1
   - Data → Create a filter
   - Now you can filter by industry, qualified status, etc.

4. **Sort by timestamp** (newest first):
   - Click column A header
   - Data → Sort sheet → Z→A

---

## 📈 Advanced: Auto-Notifications

Want to get notified when new leads come in?

1. In Google Sheets, click "Extensions" → "Apps Script"
2. Paste this code:

```javascript
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var row = e.range.getRow();

  // Only run on Sheet1 and not on header row
  if (sheet.getName() === "Sheet1" && row > 1) {
    var email = "your-email@gmail.com";
    var name = sheet.getRange(row, 2).getValue();
    var businessType = sheet.getRange(row, 5).getValue();

    MailApp.sendEmail({
      to: email,
      subject: "🔥 New Chat Lead: " + name,
      body: "New lead just submitted!\n\nName: " + name + "\nBusiness: " + businessType + "\n\nView sheet: " + e.source.getUrl()
    });
  }
}
```

3. Save and authorize
4. Now you'll get an email for every new lead!

---

## 🔐 Security Notes

**IMPORTANT**:
- ✅ Keep service account JSON file secure
- ✅ Never commit it to git
- ✅ Never share your GOOGLE_PRIVATE_KEY
- ✅ Only share sheet with service account (not publicly)
- ✅ Set sheet permissions to "Editor" not "Owner"

---

## ✅ Checklist

Before going live, verify:

- [ ] Google Sheet created with correct headers
- [ ] Service account created in Google Cloud
- [ ] JSON key file downloaded
- [ ] Sheet shared with service account email
- [ ] Environment variables added to .env
- [ ] Tested locally (lead appears in sheet)
- [ ] Environment variables added to Vercel
- [ ] Deployed to production
- [ ] Tested on live site

---

## 📞 Need Help?

Common issues:
1. **Permission errors** → Re-share sheet with service account
2. **Private key errors** → Check formatting, keep `\n` characters
3. **No data** → Check Vercel logs for API errors

---

**Ready to set this up?** Follow Steps 1-5 above, then I'll help you test it!

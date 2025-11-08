# Pacific Pulse AI Chatbot - Wix Integration Guide

**Generated:** November 8, 2025
**Integration Type:** Embeddable AI Chatbot Widget

---

## 🚀 Quick Start (5 Minutes)

Follow these steps to add the Pacific Pulse AI chatbot to your Wix website:

---

## Option 1: Direct Embed (Recommended) ⚡

### Step 1: Access Custom Code in Wix

1. Open your Wix Editor
2. Click on **Settings** (⚙️ icon in the left sidebar)
3. Scroll down to **Advanced**
4. Click on **Custom Code**
5. Click **+ Add Custom Code** in the **Body - End** section

### Step 2: Paste the Embed Code

Copy and paste this code:

```html
<!-- Pacific Pulse AI Chatbot -->
<script>
(function() {
  // Load the chatbot
  const iframe = document.createElement('iframe');
  iframe.src = 'https://pacific-pulse-growth-lab-production.up.railway.app/embed-chatbot.html';
  iframe.style.cssText = 'position:fixed;bottom:0;right:0;width:100%;height:100%;border:none;pointer-events:none;z-index:999999';
  iframe.id = 'pacific-pulse-chatbot-iframe';

  // Allow clicks to pass through except on the chatbot
  iframe.style.pointerEvents = 'none';
  iframe.addEventListener('load', function() {
    this.contentWindow.document.body.style.pointerEvents = 'auto';
  });

  document.body.appendChild(iframe);
})();
</script>
<!-- End Pacific Pulse AI Chatbot -->
```

### Step 3: Configure Settings

1. **Name:** Pacific Pulse AI Chatbot
2. **Add Code to Pages:** Select "All pages" or specific pages
3. **Place Code in:** Select "Body - end"
4. **Load Code Once:** Leave unchecked
5. Click **Apply**

### Step 4: Publish Your Site

1. Click **Publish** in the top right
2. Test the chatbot on your live site
3. The chatbot button will appear in the bottom-right corner

---

## Option 2: HTML iFrame (Alternative) 🖼️

### Step 1: Add HTML Element

1. In Wix Editor, click **+ Add** (left sidebar)
2. Go to **Embed** → **HTML iframe**
3. Click **Enter Code**

### Step 2: Paste iFrame Code

```html
<iframe
  src="https://pacific-pulse-growth-lab-production.up.railway.app/embed-chatbot.html"
  width="100%"
  height="100%"
  frameborder="0"
  style="position:fixed;bottom:0;right:0;width:100%;height:100%;pointer-events:none;z-index:999999"
  allow="clipboard-write"
></iframe>
```

### Step 3: Position the iFrame

1. Resize the iframe element to cover the entire page
2. Right-click → **Pin to Screen** (so it stays fixed)
3. Right-click → **Send to Back** (so it doesn't block other elements)
4. Publish your site

---

## Option 3: Wix Velo Integration (Advanced) 🔧

### For developers who want full control over the chatbot:

### Step 1: Enable Velo Dev Mode

1. Click **Dev Mode** in the top menu
2. Select **Turn On Dev Mode**
3. Wait for Velo to initialize

### Step 2: Create Backend API Function

1. In the left sidebar, go to **Backend** section
2. Click **+ Add** → **New web module (.jsw)**
3. Name it `chat.jsw`
4. Paste this code:

```javascript
// chat.jsw
import { fetch } from 'wix-fetch';

export async function sendMessage(messages, industry = 'general') {
  const API_URL = 'https://pacific-pulse-growth-lab-production.up.railway.app/api/chat';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: messages,
        industry: industry
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message
    };
  } catch (error) {
    console.error('Chat API error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}
```

### Step 3: Create Frontend Chat UI

1. Add chat UI elements to your page (textbox, button, repeater for messages)
2. In **Page Code**, import and use the backend function:

```javascript
// Page code
import { sendMessage } from 'backend/chat';

$w.onReady(function () {
  let messages = [];

  // Send message on button click
  $w('#sendButton').onClick(async () => {
    const userMessage = $w('#messageInput').value;

    if (!userMessage) return;

    // Add user message to chat
    messages.push({
      role: 'user',
      content: userMessage
    });

    // Display user message
    displayMessage('user', userMessage);

    // Clear input
    $w('#messageInput').value = '';

    // Show loading
    $w('#loadingText').show();

    // Call backend
    const result = await sendMessage(messages);

    $w('#loadingText').hide();

    if (result.success) {
      messages.push({
        role: 'assistant',
        content: result.message
      });

      displayMessage('assistant', result.message);
    } else {
      displayMessage('assistant', 'Sorry, I encountered an error. Please try again.');
    }
  });

  function displayMessage(role, content) {
    // Add message to your repeater or chat display
    // Implementation depends on your UI design
    console.log(`${role}: ${content}`);
  }
});
```

---

## 🎨 Customization Options

### Change Chatbot Colors

To match your brand, modify the embed code CSS:

```css
/* In embed-chatbot.html, change these values: */

/* Primary color (blue) */
background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);

/* Button color */
background: #YOUR_BRAND_COLOR;

/* User message bubble */
background: #YOUR_ACCENT_COLOR;
```

### Change Position

```css
/* Bottom-left instead of bottom-right: */
left: 20px;  /* Instead of: right: 20px; */

/* Top-right corner: */
top: 20px;
right: 20px;
/* Remove: bottom: 20px; */
```

### Change Industry Context

Modify the API call to set industry-specific prompts:

```javascript
// Options: 'general', 'spa', 'auto-detail', 'restaurant'
industry: 'spa'  // For spa/massage businesses
industry: 'auto-detail'  // For auto detailing shops
industry: 'restaurant'  // For restaurants
```

---

## 🔧 Troubleshooting

### Chatbot Not Showing

**Problem:** Chatbot button doesn't appear after publishing

**Solutions:**
1. Clear your browser cache and reload
2. Check if custom code is set to "All Pages"
3. Verify the embed code is in "Body - End" section
4. Make sure the site is published (not just previewed)

### iFrame Blocking Content

**Problem:** iFrame covers clickable elements

**Solution:** Add `pointer-events: none` to iframe and `pointer-events: auto` to chatbot elements

### CORS Errors

**Problem:** "CORS policy" errors in browser console

**Solution:** This is expected - the backend already has CORS configured. If you see this:
1. Ensure you're using the production URL (not localhost)
2. Check that the API is deployed on Railway

### Messages Not Sending

**Problem:** Messages don't get responses

**Solutions:**
1. Check browser console for errors
2. Verify API URL is correct: `https://pacific-pulse-growth-lab-production.up.railway.app/api/chat`
3. Test the API directly with Postman/curl
4. Check Railway logs for backend errors

---

## 📊 Analytics & Tracking

### Track Chatbot Usage

Add Google Analytics events:

```javascript
// Track when chatbot opens
gtag('event', 'chatbot_opened', {
  'event_category': 'engagement',
  'event_label': 'Pacific Pulse AI'
});

// Track messages sent
gtag('event', 'chatbot_message', {
  'event_category': 'engagement',
  'event_label': 'User Message'
});
```

### Track Conversions

When users reach message limit or apply:

```javascript
// Track high-intent users
gtag('event', 'chatbot_qualified_lead', {
  'event_category': 'conversion',
  'event_value': 497
});
```

---

## 🚀 Advanced Features

### Multi-Language Support

Add language detection:

```javascript
// Detect user language
const userLang = navigator.language || 'en';

// Pass to API
{
  messages: messages,
  industry: 'general',
  language: userLang
}
```

### Custom Welcome Message

Change the initial message based on page:

```javascript
const pageTitle = document.title;
let welcomeMessage = "Aloha! 🌺 How can I help you today?";

if (pageTitle.includes('Services')) {
  welcomeMessage = "Interested in our AI automation services? Let's chat!";
} else if (pageTitle.includes('Pricing')) {
  welcomeMessage = "Questions about our Founding Client Program? I'm here to help!";
}
```

### Lead Qualification

Collect lead info before chat:

```javascript
// Show lead form first
{
  name: user.name,
  email: user.email,
  phone: user.phone,
  businessType: user.businessType,
  messages: messages
}
```

---

## 🔐 Security Best Practices

### Rate Limiting

The API has built-in rate limiting:
- 10 messages per minute per IP
- 20 messages total per session

### API Key Security

**Never expose API keys in frontend code!**

✅ **Correct:** Backend function calls API
❌ **Wrong:** Frontend directly calls OpenAI/Anthropic

### Content Security Policy

Add to Wix Custom Code (Head):

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  connect-src 'self' https://pacific-pulse-growth-lab-production.up.railway.app;
  frame-src 'self' https://pacific-pulse-growth-lab-production.up.railway.app;
">
```

---

## 📞 Support & Resources

### Need Help?

**Email:** sony@pacificpulsegrowth.com
**Website:** https://pacific-pulse-growth-lab-production.up.railway.app
**Application:** https://pacific-pulse-growth-lab-production.up.railway.app/apply

### Wix Resources

- [Wix Velo Documentation](https://www.wix.com/velo/reference)
- [Custom Code Guide](https://support.wix.com/en/article/embedding-custom-code-to-your-site)
- [HTML iFrame Guide](https://support.wix.com/en/article/adding-an-html-iframe-element)

### API Documentation

API Endpoint: `POST /api/chat`

**Request:**
```json
{
  "messages": [
    {"role": "user", "content": "Hello!"}
  ],
  "industry": "general"
}
```

**Response:**
```json
{
  "message": "Aloha! How can I help you today?"
}
```

---

## 🎯 Next Steps

### After Integration

1. **Test thoroughly** - Try the chatbot on different pages
2. **Monitor performance** - Check Railway logs for errors
3. **Track conversions** - Set up goal tracking in analytics
4. **Gather feedback** - Ask users about their experience
5. **Customize branding** - Match your site's colors and style

### Upgrade Options

Want more features?
- **Custom branding** - Remove "Powered by" footer
- **Multi-language** - Support for Spanish, Japanese, etc.
- **Advanced analytics** - Detailed conversation insights
- **CRM integration** - Auto-sync leads to HubSpot/Salesforce
- **Custom training** - Train on your specific business data

Contact sony@pacificpulsegrowth.com for enterprise features.

---

## 📄 License & Usage

This chatbot widget is provided for:
- ✅ Client websites (with permission)
- ✅ Your own Wix sites
- ✅ Testing and development

**Not allowed:**
- ❌ Reselling the widget as a product
- ❌ Removing attribution without permission
- ❌ Reverse engineering the API

---

**Questions?** Contact Sony at sony@pacificpulsegrowth.com

**Want the Founding Client Program?** Apply at:
https://pacific-pulse-growth-lab-production.up.railway.app/apply

---

*Generated by Claude Code - Wix Integration*
*Last Updated: November 8, 2025*

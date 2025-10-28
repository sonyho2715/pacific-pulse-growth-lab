# Claude API Chatbot Setup Guide

Your website now has a fully functional AI chatbot powered by Claude 3.5 Sonnet!

## 🎯 What's Included

### Components Created:
1. **`ClaudeChatbot.tsx`** - Floating chat widget with modern UI
2. **`/api/chat/route.ts`** - API endpoint that communicates with Claude
3. **Integrated into layout** - Available on every page

### Features:
- ✅ Floating chat bubble in bottom-right corner
- ✅ Smooth open/close animations
- ✅ Real-time streaming responses
- ✅ Mobile-responsive design
- ✅ Custom system prompt with all Pacific Pulse info
- ✅ Answers questions about pricing, program, ROI
- ✅ Directs users to /apply page
- ✅ Provides Sony's contact info when needed

## 🔑 Setup Instructions

### Step 1: Get Your Anthropic API Key

1. Go to [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to **API Keys**
4. Click **Create Key**
5. Copy your API key

### Step 2: Add API Key to Environment

#### For Local Development:
```bash
# Add to your .env file (already gitignored)
ANTHROPIC_API_KEY="sk-ant-your-key-here"
```

#### For Vercel Production:
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: `sk-ant-your-key-here`
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your project

#### For Railway:
```bash
# Set environment variable via CLI
railway variables set ANTHROPIC_API_KEY="sk-ant-your-key-here"
```

Or via Railway dashboard:
1. Go to your project
2. Click **Variables** tab
3. Add `ANTHROPIC_API_KEY` with your key

### Step 3: Test Locally

```bash
# Make sure your .env has the API key
npm run dev

# Visit http://localhost:3001
# Click the purple chat bubble in bottom-right
# Ask: "Tell me about the Founding Client Program"
```

## 💬 What the Chatbot Knows

The chatbot is pre-trained with all your business information:

### Program Details:
- $497/month (50% off regular $997)
- Only 8 founding client spots
- 30-day setup timeline
- 3X ROI guarantee
- Up to 2,000 conversations/month
- Multi-platform support

### Your Unique Positioning:
- Master NLP Coach with 208 hours training
- Fellow Hawaii business owner
- Revenue-capture focused approach

### Capabilities:
- Answer pricing questions
- Explain how the program works
- Qualify potential clients
- Direct serious leads to /apply page
- Provide your contact: sony@pacificpulsegrowth.com

## 🎨 Customization Options

### Change Chatbot Appearance
Edit `src/components/ClaudeChatbot.tsx`:

```typescript
// Change colors (line 90-95)
className="bg-gradient-to-br from-blue-600 to-purple-600"
// Change to your brand colors

// Change position (line 89)
className="fixed bottom-6 right-6"
// Options: bottom-6, top-6, left-6, right-6
```

### Modify System Prompt
Edit `src/app/api/chat/route.ts`:

```typescript
// Line 16-57: Update the systemPrompt
const systemPrompt = `...`;
// Add more details about your business
// Change tone/style
// Add specific FAQs
```

### Change Greeting Message
Edit `src/components/ClaudeChatbot.tsx`:

```typescript
// Line 15-19: Initial greeting
{
  role: "assistant",
  content: "Your custom greeting here...",
}
```

## 📊 Usage & Costs

### Anthropic Pricing (as of 2024):
- **Claude 3.5 Sonnet**:
  - Input: $3 per million tokens
  - Output: $15 per million tokens

### Estimated Costs:
- Average conversation: ~1,000 tokens total
- 100 conversations/month = ~$1-2/month
- 1,000 conversations/month = ~$10-20/month

**This is incredibly cheap for 24/7 AI support!**

## 🚀 Going Live

### Checklist:
- [ ] API key added to Vercel environment variables
- [ ] Redeploy Vercel project
- [ ] Test on production URL
- [ ] Try multiple conversations to ensure it works
- [ ] Monitor Anthropic dashboard for usage

### Testing Questions:
1. "What is the Founding Client Program?"
2. "How much does it cost?"
3. "What makes you different from other AI consultants?"
4. "How long does setup take?"
5. "What's the ROI guarantee?"

## 🎯 Next Steps

### Optional Enhancements:
1. **Analytics**: Track conversation topics and common questions
2. **Lead Capture**: Ask for email before chatting (optional)
3. **Handoff**: Integrate with your CRM when user wants to apply
4. **Escalation**: Auto-email you when user asks to speak with Sony
5. **A/B Testing**: Test different greetings and positioning

### Advanced Features:
```typescript
// Add conversation tracking
// Log popular questions
// Capture lead info during chat
// Auto-schedule strategy calls
// Send transcripts to your email
```

## 📝 Example Conversations

### Example 1: Pricing Question
```
User: "How much does this cost?"
Bot: "Great question! As a Founding Client, you get 50% off our regular
price. It's $497/month instead of $997/month. This includes everything:
custom AI trained on YOUR business, up to 2,000 conversations/month,
calendar integration, and built personally by Sony Ho (no outsourcing).
Plus, there's a 3X ROI guarantee - if you don't capture at least $1,491
in revenue in 90 days, you get the next 3 months free. Would you like
to apply for one of the 8 spots?"
```

### Example 2: Qualification
```
User: "Is this right for my salon?"
Bot: "Absolutely! Salons are one of the best fits for this program.
How many calls do you typically miss per week, especially after hours?
And what's your average service value?"

User: "Maybe 10-15 calls/week, $80 per service"
Bot: "Perfect! So you're potentially losing $800-$1,200 per week in
missed revenue. That's $3,200-$4,800 per month! The AI would capture
about 70% of those, which means you could recover $2,240-$3,360/month
for a $497 investment. That's a 4-7X return. Want to see if you qualify
for the Founding Client Program?"
```

## 🆘 Troubleshooting

### Chat Not Appearing:
- Check if JavaScript is enabled
- Clear browser cache
- Check browser console for errors

### "API key not configured" Error:
- Verify ANTHROPIC_API_KEY is set in .env
- Restart dev server: `npm run dev`
- For production: Check Vercel env variables

### Slow Responses:
- Normal: Claude takes 1-3 seconds
- Check your internet connection
- Monitor Anthropic status page

### Rate Limiting:
- Free tier: 50 requests/day
- Paid tier: Much higher limits
- Implement queuing if needed

## 📞 Support

If you need help:
- Check Anthropic docs: https://docs.anthropic.com
- Vercel env variables: https://vercel.com/docs/environment-variables
- Or reach out to Claude Code support

---

**Your AI chatbot is ready to capture leads 24/7!** 🎉

The chatbot will answer questions, qualify leads, and direct serious prospects to your application page - all while you sleep. This is your AI working for you, demonstrating exactly what you're selling to clients.

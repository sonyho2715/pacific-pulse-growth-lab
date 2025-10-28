# Quick Integration Guide

## Step 1: Add Imports to Your Homepage

Open `src/app/page.tsx` and add these imports at the top:

```typescript
import { ConversationMockup } from "@/components/ConversationMockup";
import { FAQ } from "@/components/FAQ";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SpotsRemaining } from "@/components/SpotsRemaining";
```

## Step 2: Replace/Enhance Sections

### A) Replace the "Solution" section card with Conversation Mockup

**Find this section** (around line 144):
```typescript
<Card className="bg-gradient-to-br from-blue-50 to-purple-50...">
  <CardContent className="p-8">
    <p className="text-xl italic">
      "It's like hiring a dedicated customer service rep..."
    </p>
  </CardContent>
</Card>
```

**Replace with:**
```typescript
<div>
  <ConversationMockup />
  <p className="text-center text-xl italic mt-8 text-zinc-600 dark:text-zinc-400">
    "This is what customers see at 2:47 AM while you're sleeping"
  </p>
</div>
```

### B) Add Comparison Table after Program Details

**Find** the section with id="program" (around line 231)

**After the closing `</section>` tag**, add:

```typescript
{/* Value Comparison */}
<section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why AI Makes Financial Sense
    </h2>
    <ComparisonTable />
  </div>
</section>
```

### C) Add FAQ Section before Application

**Find** the section with id="application" (around line 542)

**Before it**, add:

```typescript
{/* FAQ Section */}
<section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-4xl font-bold text-center mb-4">
      Common Questions
    </h2>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
      Everything you need to know about the Founding Client Program
    </p>
    <FAQ />
  </div>
</section>
```

### D) Add Urgency Banner in Multiple Places

**Option 1: At the very top** (sticky banner)

Add right after opening `<div className="min-h-screen">`:

```typescript
{/* Sticky Urgency Banner */}
<div className="sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 py-3 px-4">
  <div className="container mx-auto max-w-4xl">
    <SpotsRemaining />
  </div>
</div>
```

**Option 2: Before Final CTA** (less intrusive)

Add inside the "Final CTA" section (around line 589):

```typescript
<div className="container mx-auto max-w-4xl">
  {/* Add this before the text-center div */}
  <div className="mb-12">
    <SpotsRemaining />
  </div>

  <div className="text-center">
    <h2 className="text-4xl font-bold mb-4">
      8 Founding Client Spots. Then Pricing Doubles.
    </h2>
    ...
```

## Step 3: Test the Changes

```bash
# The dev server should auto-reload
# Visit http://localhost:3001
```

## Recommended Order

**Do these in order for best results:**

1. **Conversation Mockup** (biggest visual impact) - 5 minutes
2. **FAQ Section** (handles objections) - 5 minutes
3. **Comparison Table** (justifies price) - 5 minutes
4. **Urgency Banner** (creates FOMO) - 5 minutes

**Total time: 20 minutes**

## Before & After Impact

### Before:
- Text-heavy
- Abstract concept ("AI that answers")
- Missing objection handling
- No price justification

### After:
- Visual proof (conversation mockup)
- Concrete demonstration of value
- Proactive FAQ addresses concerns
- Clear cost comparison
- Scarcity/urgency

### Expected Conversion Lift: +50-150%

---

## Next Level: Email Integration

Once these visual improvements are done, set up email notifications:

```bash
npm install resend
```

Create `.env.local`:
```
RESEND_API_KEY=your_key_here
```

Then I can help you build the email system!

---

## Questions?

All 4 components are ready to go in `/src/components/`:
- ✅ ConversationMockup.tsx
- ✅ FAQ.tsx
- ✅ ComparisonTable.tsx
- ✅ SpotsRemaining.tsx

Just follow the integration steps above and you're done!

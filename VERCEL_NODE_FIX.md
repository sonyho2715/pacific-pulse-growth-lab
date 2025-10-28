# Fix Vercel Node.js Version to 20.x

You mentioned Vercel is still running Node 16. Here's how to fix it.

---

## ✅ **What I've Already Fixed**

I've added three files to force Node 20:

### 1. **`vercel.json`** (NEW)
```json
{
  "functions": {
    "app/**/*.{js,ts,tsx}": {
      "runtime": "nodejs20.x"
    },
    "api/**/*.{js,ts}": {
      "runtime": "nodejs20.x"
    }
  }
}
```

### 2. **`.nvmrc`** (Already exists)
```
20.9.0
```

### 3. **`package.json`** engines (Already exists)
```json
"engines": {
  "node": ">=20.9.0",
  "npm": ">=10.0.0"
}
```

---

## 🔧 **Vercel Will Auto-Deploy with Node 20 Now**

The changes have been pushed. Vercel should automatically:
1. Detect the new `vercel.json`
2. Use Node.js 20.x for the next build
3. Deploy successfully

**Wait 2-3 minutes** for the automatic deployment to complete.

---

## 🔍 **How to Verify Node Version**

### Check Current Deployment:

1. Go to: **https://vercel.com/sony-hos-projects/pacific-pulse-growth-lab**
2. Click **"Deployments"** tab
3. Click on the latest deployment
4. Scroll down to **"Build Logs"**
5. Look for a line like:
   ```
   Node.js version: v20.x.x
   ```

If it still shows v16 or v18, continue to Manual Fix below.

---

## 🛠️ **Manual Fix (If Auto-Deploy Doesn't Work)**

### Option 1: Project Settings

1. Go to: **https://vercel.com/sony-hos-projects/pacific-pulse-growth-lab/settings**
2. Click **"General"** in the left menu
3. Scroll to **"Node.js Version"**
4. Change to: **`20.x`**
5. Click **"Save"**
6. Go to **"Deployments"** tab
7. Click **⋯** on latest deployment → **"Redeploy"**

### Option 2: Force Redeploy

Sometimes Vercel needs a fresh deployment to pick up the changes:

```bash
# From your terminal
cd /Users/sonyho/pacific-pulse-growth-lab

# Make a small change (add empty line to trigger rebuild)
echo "" >> README.md

# Commit and push
git add README.md
git commit -m "Trigger Vercel rebuild with Node 20"
git push
```

### Option 3: Delete and Reimport (Nuclear Option)

If nothing else works:

1. Go to Vercel project settings
2. Scroll to bottom → **"Delete Project"**
3. Confirm deletion
4. Go to https://vercel.com/new
5. Import `sonyho2715/pacific-pulse-growth-lab` again
6. Vercel will pick up all the new config files

---

## 🎯 **Why Node 20 is Required**

**Next.js 16** requires **Node.js ≥20.9.0**

Your project uses:
- **Next.js**: 16.0.0
- **Required Node**: ≥20.9.0
- **Current Node on Vercel**: 16.x (wrong!)
- **Need to use**: 20.x ✅

---

## 📊 **Check Build Logs for Confirmation**

After redeployment, check logs for:

### ✅ **Good (Node 20)**:
```
Node.js version: v20.9.0 or v20.x.x
✓ Creating an optimized production build
✓ Compiled successfully
```

### ❌ **Bad (Node 16/18)**:
```
Node.js version: v16.x.x or v18.x.x
Error: Next.js requires Node.js 20 or later
```

---

## 🚀 **Test After Deployment**

Once deployed with Node 20:

1. Visit: **https://pacific-pulse-growth-lab.vercel.app**
2. Check that site loads correctly
3. Test the chatbot (after adding API key)
4. Try the application form

---

## 💡 **Vercel Node Version Precedence**

Vercel checks in this order:
1. **`vercel.json`** (functions.runtime) ← **Highest priority** ✅
2. **`.node-version`** or **`.nvmrc`** ← **You have this** ✅
3. **`package.json`** (engines.node) ← **You have this** ✅
4. **Project Settings** (dashboard) ← May need manual update
5. **Default** (platform default, usually 18 or 20)

You now have #1, #2, and #3 configured! 🎉

---

## 🐛 **Troubleshooting**

### Build Still Fails?

**Check the exact error**:
```bash
vercel logs
```

Or in Vercel dashboard:
- Deployments → Latest → Build Logs

### Common Issues:

**1. Cached Node Version**
- Solution: Force new deployment (see Option 2 above)

**2. Vercel Platform Setting Overriding**
- Solution: Update in project settings (see Option 1 above)

**3. Old Deployment Still Active**
- Solution: Wait for new deployment to fully complete

---

## ✅ **Expected Result**

After fix:
```
✓ Using Node.js 20.9.0
✓ Installing dependencies
✓ Running prisma generate
✓ Running next build
✓ Creating an optimized production build
✓ Compiled successfully
✓ Deployment ready
```

---

## 📞 **Quick Command to Check Status**

```bash
vercel ls | head -5
```

Look for latest deployment to be "Ready" status.

---

## 🎯 **Summary**

**What's configured**:
- ✅ `vercel.json` with nodejs20.x
- ✅ `.nvmrc` with 20.9.0
- ✅ `package.json` engines >=20.9.0

**What Vercel will do**:
- Automatically deploy with Node 20
- Build should succeed
- Site will work correctly

**If it doesn't work automatically**:
1. Check project settings in dashboard
2. Force redeploy
3. Check build logs for errors

---

**Your deployment should work now!** 🚀

Wait 2-3 minutes for auto-deployment, then check:
**https://pacific-pulse-growth-lab.vercel.app**

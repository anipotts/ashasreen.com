# Guide: Collecting Social Media Testimonials

This guide will help you efficiently collect testimonials from Instagram, Facebook, and YouTube comments to showcase on your mom's website.

## Quick Overview

**Time Investment**: 30-60 minutes
**Target**: 6-12 high-quality testimonials
**Platforms**: Instagram, Facebook, YouTube

## What Makes a Good Testimonial?

Look for comments that:
- **Are specific** - Mention specific dishes (biryani, curry, etc.)
- **Show emotion** - Express genuine excitement or satisfaction
- **Include context** - Reference events, occasions, or experiences
- **Are authentic** - Real reactions, not just "great!" or "yummy"
- **Vary in length** - Mix of short and detailed comments

**Good Examples**:
- ✅ "The biryani was absolutely amazing! Best I've ever had outside of India."
- ✅ "Asha catered our wedding and everyone couldn't stop talking about the food."
- ✅ "Made your recipe last night and my family loved it! Thank you!"

**Skip These**:
- ❌ Single emoji comments
- ❌ Generic "Nice!" or "Great!"
- ❌ Comments from spam accounts
- ❌ Your own responses or family members (unless exceptionally relevant)

---

## Method 1: Instagram Testimonials (Recommended - Fastest)

### Step 1: Access Instagram on Desktop
1. Go to https://www.instagram.com/ashasculinaryworld/
2. Log in to your account (or your mom's account)

### Step 2: Browse Posts Strategically
Focus on posts with:
- High engagement (lots of likes/comments)
- Food photos (especially biryani, large gatherings)
- Video posts (often get more detailed comments)

### Step 3: Collect Comments
**Quick Method** (15-20 minutes):
1. Open 5-10 of the most popular posts
2. Click "View all comments" on each post
3. Screenshot or copy-paste standout comments into a Notes doc
4. Record:
   - Commenter's name (first name + last initial for privacy)
   - Comment text
   - Post date (approximate is fine)

**Template** for your notes:
```
Sarah M. | Dec 2024
"The biryani was absolutely amazing! Best I've ever had outside of India."

Raj P. | Nov 2024
"Asha catered our wedding and everyone couldn't stop talking about the food."
```

### Step 4: Export Instagram Data (Optional - More Comprehensive)
If you want ALL comments:
1. Go to Instagram Settings → Security → Download your information
2. Request a download → Select "Comments"
3. Wait for email (can take 48 hours)
4. Review JSON file for testimonials

**Note**: This method is overkill for most cases. Manual collection is faster.

---

## Method 2: Facebook Testimonials

### Option A: Manual Collection (20-30 minutes)
1. Visit https://www.facebook.com/asha.anil
2. Scroll through posts
3. Click "See more comments" on posts with engagement
4. Copy-paste valuable comments into your notes
5. Record same info: Name, comment, date

### Option B: Facebook Activity Log (More Thorough)
1. Go to Facebook Profile → Activity Log
2. Filter by "Comments on Your Posts"
3. Browse through and identify positive testimonials
4. Copy-paste into notes

**Pro Tip**: Look for comments on:
- Event photos (weddings, parties)
- Biryani cooking videos
- Large-batch cooking posts

---

## Method 3: YouTube Comments

### Fastest Approach:
1. Go to https://www.youtube.com/@ashasculinaryworld
2. Sort videos by "Most Popular"
3. Open top 3-5 videos
4. Sort comments by "Top Comments"
5. Screenshot or copy standout comments

**What to look for on YouTube**:
- Comments mentioning trying the recipe
- Compliments on technique or presentation
- Questions that show genuine interest

---

## Organizing Your Testimonials

Create a simple spreadsheet or document:

| Name | Comment | Platform | Date | Use? |
|------|---------|----------|------|------|
| Sarah M. | "The biryani was absolutely amazing!" | Instagram | Dec 2024 | ✅ |
| Raj P. | "Catered our wedding, everyone loved it" | Facebook | Nov 2024 | ✅ |

### Selection Criteria:
- **Aim for 6-12 testimonials**
- Mix platforms (Instagram, Facebook, YouTube)
- Variety of topics (biryani, catering, recipes, quality)
- Recent dates preferred (last 12-18 months)

---

## Adding Testimonials to the Website

Once you've collected testimonials, update the file:
`src/lib/data.ts`

Replace the placeholder testimonials array:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    comment: 'The biryani was absolutely amazing! Best I\'ve ever had outside of India.',
    platform: 'instagram',
    date: '2024-12-15',
  },
  {
    id: '2',
    name: 'Raj P.',
    comment: 'Asha catered our wedding and everyone couldn\'t stop talking about the food. Authentic and delicious!',
    platform: 'facebook',
    date: '2024-11-20',
  },
  // Add more here...
];
```

### Important Notes:
- **Privacy**: Use first name + last initial only (e.g., "Sarah M." instead of "Sarah Martinez")
- **Escape apostrophes**: Use `\'` for apostrophes in comments
- **Date format**: YYYY-MM-DD
- **Platform**: Must be 'instagram', 'facebook', or 'youtube'

---

## Time-Saving Tips

1. **Start with Instagram** - Usually the most engaged platform for food content
2. **Focus on quality over quantity** - 6 great testimonials > 20 mediocre ones
3. **Use browser DevTools** - Right-click comments → Inspect → Copy text (avoids emojis)
4. **Screenshot first** - Take screenshots of great comments, transcribe later
5. **Set a timer** - Don't spend more than 60 minutes total

---

## Example Workflow (45 minutes)

1. **Instagram** (20 min)
   - Browse 10 popular posts
   - Collect 4-5 strong comments

2. **Facebook** (15 min)
   - Check activity log
   - Find 3-4 event/catering testimonials

3. **YouTube** (10 min)
   - Check top 3 videos
   - Grab 2-3 recipe-related comments

4. **Format & Add** (10 min)
   - Copy into `data.ts`
   - Test on website

---

## Privacy & Ethics

- ✅ **OK**: Using public comments from public posts
- ✅ **OK**: Shortening comments for clarity (keeping original meaning)
- ✅ **OK**: First name + last initial
- ❌ **Avoid**: Private messages without permission
- ❌ **Avoid**: Full names without asking
- ❌ **Avoid**: Fabricating or heavily editing comments

---

## Need Help?

If you encounter issues:
1. Comments not loading? Try refreshing or switching browsers
2. Too many comments? Focus on most recent 6 months
3. Not sure if a comment is good? Include it - we can remove later

**Remember**: The goal is social proof, not perfection. A few authentic testimonials are better than none!

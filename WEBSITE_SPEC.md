# TennisSquad Website Specification

> This document contains all content and specifications for building the TennisSquad marketing website. Hand this to your coding agent to build the site.

---

## Table of Contents
1. [Site Structure](#site-structure)
2. [Brand Guidelines](#brand-guidelines)
3. [Homepage Content](#homepage-content)
4. [Features Page](#features-page)
5. [Pricing Page](#pricing-page)
6. [Terms of Service](#terms-of-service)
7. [Privacy Policy](#privacy-policy)
8. [FAQ](#faq)
9. [Support/Contact](#supportcontact)
10. [App Store Assets](#app-store-assets)

---

## Site Structure

```
tennissquad.app/
├── / (Homepage - Hero, Features Overview, CTA)
├── /features (Detailed Features)
├── /pricing (Subscription Plans)
├── /terms (Terms of Service)
├── /privacy (Privacy Policy)
├── /faq (Frequently Asked Questions)
├── /support (Contact & Help)
└── /download (App Store redirect)
```

---

## Brand Guidelines

### Colors
```css
/* Primary */
--primary: #C4F835;          /* Neon Lime - CTAs, highlights */
--primary-muted: #A8D42E;
--primary-dark: #8AB825;

/* Background */
--background: #0D1F14;       /* Dark Forest - main bg */
--surface: #1A2F23;          /* Cards, panels */
--surface-light: #243D2E;
--surface-dark: #0A1810;

/* Text */
--text: #FFFFFF;
--text-muted: #8BA395;
--text-dark: #5A7A65;

/* Status */
--success: #4CAF50;
--warning: #FF9800;
--error: #F44336;
```

### Typography
- **Headings**: Inter (Bold, 700)
- **Body**: Inter (Regular, 400)
- **Accents**: Inter (Semi-bold, 600)

### Design Notes
- Dark theme throughout (matches app)
- Rounded corners (16px cards, 12px buttons)
- Subtle gradients on CTAs
- Tennis ball/court imagery where appropriate

---

## Homepage Content

### Hero Section

**Headline:**
> Find Your Tennis Tribe

**Subheadline:**
> The easiest way to organize matches, discover players, and climb the ranks with your local tennis community.

**CTA Buttons:**
- Primary: "Download Free" (App Store link)
- Secondary: "See Features"

**Hero Image:**
- App screenshot mockup on iPhone
- Or: Tennis players on court with app overlay

---

### Problem/Solution Section

**Headline:**
> Tired of the Tennis Shuffle?

**Pain Points (with icons):**
1. **Endless Group Chats** - "Who's free Saturday?" messages that go nowhere
2. **Mismatched Skill Levels** - Playing with people way above or below your level
3. **No Show Players** - People commit but don't show up
4. **Finding New Players** - Stuck playing with the same 4 people forever

**Solution:**
> TennisSquad brings structure to your tennis life. One app to schedule, match, compete, and grow.

---

### Key Features Overview

**Feature 1: Squad Management**
- Icon: People group
- Title: "Your Tennis Crew, Organized"
- Description: "Create or join squads with a simple code. See who's free, schedule matches, and keep everyone in sync."

**Feature 2: Smart Scheduling**
- Icon: Calendar/Heatmap
- Title: "Find the Perfect Time"
- Description: "Our availability heatmap shows when most players are free. No more back-and-forth messaging."

**Feature 3: Ladder Rankings**
- Icon: Trophy/Ranking
- Title: "Compete & Climb"
- Description: "Challenge players above you on the ladder. Win to climb the ranks and prove you're the best."

**Feature 4: Nearby Discovery**
- Icon: Location pin
- Title: "Expand Your Network"
- Description: "Find players and open matches near you. Your next hitting partner might be around the corner."

---

### Social Proof Section

**Headline:**
> Join Thousands of Players

**Stats (can be placeholder for now):**
- "5,000+ Matches Organized"
- "500+ Active Squads"
- "50+ Cities"

**Testimonials (placeholder):**
> "Finally, an app that actually helps me play more tennis!" - Sarah K.

> "Our club ladder has never been more active." - Mike T.

> "Found 3 new hitting partners in my first week." - James R.

---

### How It Works Section

**Step 1: Create or Join a Squad**
"Enter a code to join your friends, or create a new squad and invite players."

**Step 2: Set Your Availability**
"Mark when you're free to play. See the best times when most players overlap."

**Step 3: Schedule & Play**
"Create matches, join open games, or challenge rivals on the ladder."

**Step 4: Track & Improve**
"Record scores, earn badges, and watch your ranking climb."

---

### Final CTA Section

**Headline:**
> Ready to Play More Tennis?

**Subheadline:**
> Download TennisSquad free and organize your first match in minutes.

**Buttons:**
- "Download on App Store" (Apple badge)
- "Get it on Google Play" (Coming Soon badge)

---

## Features Page

### Hero
**Headline:** Everything You Need to Play More Tennis
**Subheadline:** From casual rallies to competitive ladders, TennisSquad has you covered.

---

### Feature Sections (Detailed)

#### 1. Squad Management
**Headline:** Your Tennis Crew, Organized

**Description:**
Create private squads for your club, apartment complex, or friend group. Everyone gets access to:

**Features:**
- Unique squad codes for easy joining
- Member directory with skill levels
- Admin controls for organizers
- WhatsApp integration for quick sharing
- Support for up to 25 members per squad

**Screenshot:** Squad member list screen

---

#### 2. Smart Scheduling & Availability
**Headline:** See When Everyone's Free

**Description:**
No more "who's free Saturday?" messages. Our availability heatmap shows the best times to play at a glance.

**Features:**
- Weekly availability grid (AM, PM, Evening)
- Color-coded player availability
- "Best Times to Play" recommendations
- One-tap availability updates
- See who's confirmed vs. tentative

**Screenshot:** Availability heatmap screen

---

#### 3. Match Organization
**Headline:** Schedule Matches in Seconds

**Description:**
Create matches with all the details your group needs. Players can join with one tap.

**Features:**
- Set date, time, location, and duration
- Specify skill level requirements
- Track who's coming (and who flaked)
- Optional court fees/cost splitting
- Match reminders and notifications
- Guest spots for nearby players

**Screenshot:** Create match screen

---

#### 4. Ladder Rankings
**Headline:** Climb the Ranks

**Description:**
Add friendly competition with our challenge-based ladder system. Issue challenges, win matches, and rise to the top.

**Features:**
- Real-time squad rankings
- Challenge players within range
- 7-day challenge expiration
- Win/loss tracking
- Position history

**Screenshot:** Ladder rankings screen

---

#### 5. Box Leagues
**Headline:** Monthly Competition

**Description:**
Run structured box leagues with automatic promotion and relegation. Perfect for clubs wanting regular competitive play.

**Features:**
- Monthly league cycles
- Multiple skill-based boxes
- Automatic match pairings
- Standings and statistics
- Promotion/relegation system

**Screenshot:** Box league standings

---

#### 6. Nearby Discovery
**Headline:** Find Players & Matches Near You
*Explorer & Lifetime feature*

**Description:**
Expand beyond your squad. Discover players looking for a hit and join open matches in your area.

**Features:**
- Find players within 25 miles
- See who's "Open to Play" right now
- Join public matches as a guest
- Player profiles with ratings
- Request to join private matches

**Screenshot:** Nearby players screen

---

#### 7. Gamification & Achievements
**Headline:** Earn Your Stripes

**Description:**
Stay motivated with badges, streaks, and weekly challenges. Every match counts toward something.

**Features:**
- 12 unique badges to unlock
- Win streak tracking
- Weekly challenges with points
- Career statistics
- Milestone celebrations

**Badges Preview:**
- First Rally - Play your first match
- Hot Streak - Win 3 in a row
- Ladder King - Reach #1 in your squad
- Regular - Play 50 matches

**Screenshot:** Badges/achievements screen

---

#### 8. Team Generator
**Headline:** Fair Teams, Every Time

**Description:**
Hosting a pickup session? Our team generator shuffles and balances teams based on skill level.

**Features:**
- One-tap team shuffling
- Skill-based balancing
- Support for doubles and mixed
- Re-shuffle until fair

**Screenshot:** Team generator screen

---

## Pricing Page

### Hero
**Headline:** Choose Your Plan
**Subheadline:** Start free. Upgrade when you're ready to expand your tennis network.

---

### Pricing Cards

#### Free Plan
**Price:** $0 forever

**Features:**
- 1 squad membership
- Up to 10 members per squad
- Match scheduling
- Availability heatmap
- Ladder rankings
- Weekly challenges
- Badge system

**CTA:** "Get Started Free"

---

#### Explorer Plan
**Price:** $6.99/month
**Badge:** "7-Day Free Trial"

**Features:**
- Everything in Free, plus:
- 3 squad memberships
- Up to 25 members per squad
- Nearby player discovery
- "Open to Play" visibility
- Join matches outside your squad
- Advanced match filters

**CTA:** "Start Free Trial"

---

#### Lifetime Deal
**Price:** $49 one-time
**Badge:** "75% OFF - Limited Time"
**Original Price:** ~~$199~~

**Features:**
- All Explorer features forever
- No monthly fees
- Priority support
- Early adopter benefits
- Lock in before prices increase

**CTA:** "Get Lifetime Access"

**Note below card:**
> "Early adopter special. This price won't last forever."

---

### Comparison Table

| Feature | Free | Explorer | Lifetime |
|---------|------|----------|----------|
| Squad memberships | 1 | 3 | 3 |
| Members per squad | 10 | 25 | 25 |
| Match scheduling | Yes | Yes | Yes |
| Availability heatmap | Yes | Yes | Yes |
| Ladder rankings | Yes | Yes | Yes |
| Weekly challenges | Yes | Yes | Yes |
| Nearby discovery | - | Yes | Yes |
| Open to Play | - | Yes | Yes |
| Join outside matches | - | Yes | Yes |
| Monthly cost | $0 | $6.99 | $0 |

---

### FAQ on Pricing Page

**Can I cancel anytime?**
Yes, you can cancel your Explorer subscription anytime. You'll keep access until the end of your billing period.

**What happens after my free trial?**
You'll be charged $6.99/month unless you cancel before the trial ends. We'll remind you before it converts.

**Is the Lifetime deal really lifetime?**
Yes! Pay once, own forever. No recurring charges, ever. This is our thank-you to early adopters.

---

## Terms of Service

```
TENNIS SQUAD TERMS OF SERVICE

Last Updated: [Current Date]

Welcome to TennisSquad. By using our mobile application and services, you agree to these Terms of Service ("Terms"). Please read them carefully.

1. ACCEPTANCE OF TERMS

By downloading, accessing, or using TennisSquad ("the App"), you agree to be bound by these Terms. If you do not agree, do not use the App.

2. DESCRIPTION OF SERVICE

TennisSquad is a mobile application that helps tennis players:
- Organize and schedule matches
- Manage tennis groups ("Squads")
- Track rankings and statistics
- Discover nearby players and matches
- Participate in ladder competitions and box leagues

3. ELIGIBILITY

You must be at least 13 years old to use TennisSquad. If you are under 18, you must have parental consent. By using the App, you represent that you meet these requirements.

4. ACCOUNT REGISTRATION

4.1 You must create an account to use certain features.
4.2 You are responsible for maintaining the confidentiality of your account credentials.
4.3 You agree to provide accurate and complete information.
4.4 You are responsible for all activity under your account.
4.5 Notify us immediately of any unauthorized use.

5. USER CONDUCT

You agree NOT to:
- Use the App for any unlawful purpose
- Harass, abuse, or harm other users
- Impersonate any person or entity
- Upload malicious code or interfere with the App
- Attempt to gain unauthorized access to our systems
- Use automated systems to access the App without permission
- Violate any applicable laws or regulations

6. USER CONTENT

6.1 You retain ownership of content you post (profile info, match details, etc.).
6.2 By posting content, you grant TennisSquad a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content within the App.
6.3 You are solely responsible for your content and its accuracy.
6.4 We may remove content that violates these Terms.

7. SUBSCRIPTIONS AND PAYMENTS

7.1 TennisSquad offers free and paid subscription plans.
7.2 Paid subscriptions are billed through Apple App Store or Google Play.
7.3 Subscription terms:
    - Explorer: $6.99/month, billed monthly
    - Lifetime: $49 one-time payment
7.4 Free trials convert to paid subscriptions unless cancelled.
7.5 Refunds are handled according to Apple/Google policies.
7.6 We reserve the right to change pricing with notice.

8. INTELLECTUAL PROPERTY

8.1 TennisSquad and its content are protected by copyright, trademark, and other laws.
8.2 You may not copy, modify, or distribute our content without permission.
8.3 "TennisSquad" name and logo are trademarks of [Your Company Name].

9. THIRD-PARTY SERVICES

The App may integrate with third-party services (Apple, Google, Clerk, etc.). Your use of these services is subject to their respective terms.

10. DISCLAIMERS

10.1 THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
10.2 We do not guarantee:
    - Uninterrupted or error-free service
    - Accuracy of user-provided information
    - Results from using the App
10.3 We are not responsible for:
    - User conduct at matches or events
    - Injuries occurring during tennis activities
    - Disputes between users

11. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY LAW, TENNISSQUAD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, PROFITS, OR GOODWILL.

OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, OR $100, WHICHEVER IS GREATER.

12. INDEMNIFICATION

You agree to indemnify and hold harmless TennisSquad and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the App or violation of these Terms.

13. TERMINATION

13.1 You may delete your account at any time through the App settings.
13.2 We may suspend or terminate your account for violations of these Terms.
13.3 Upon termination, your right to use the App ceases immediately.
13.4 Sections that should survive termination will remain in effect.

14. CHANGES TO TERMS

We may update these Terms from time to time. We will notify you of material changes through the App or email. Continued use after changes constitutes acceptance.

15. DISPUTE RESOLUTION

15.1 These Terms are governed by the laws of [Your State/Country].
15.2 Any disputes shall be resolved through binding arbitration.
15.3 You waive the right to participate in class actions.

16. GENERAL PROVISIONS

16.1 These Terms constitute the entire agreement between you and TennisSquad.
16.2 Our failure to enforce any provision does not waive our right to do so.
16.3 If any provision is found unenforceable, the remaining provisions remain in effect.
16.4 You may not assign these Terms; we may assign them freely.

17. CONTACT US

For questions about these Terms:
Email: legal@tennissquad.app
Address: [Your Business Address]

By using TennisSquad, you acknowledge that you have read, understood, and agree to these Terms of Service.
```

---

## Privacy Policy

```
TENNIS SQUAD PRIVACY POLICY

Last Updated: [Current Date]

TennisSquad ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.

1. INFORMATION WE COLLECT

1.1 Information You Provide
- Account information (name, email, profile photo)
- Tennis profile (skill level, NTRP rating, availability)
- Match and squad data you create
- Communications with other users
- Payment information (processed by Apple/Google)

1.2 Information Collected Automatically
- Device information (model, OS version, unique identifiers)
- Usage data (features used, matches joined, time in app)
- Log data (IP address, access times, app crashes)

1.3 Location Information
- Approximate location (city-level) for nearby discovery
- Precise location only when you enable "Open to Play" feature
- Location is NEVER stored permanently on our servers
- You can disable location access in device settings

1.4 Information from Third Parties
- Authentication data from sign-in providers (Apple, Google)
- Payment status from app stores (not payment details)

2. HOW WE USE YOUR INFORMATION

We use your information to:
- Provide and maintain the App
- Create and manage your account
- Process transactions and subscriptions
- Enable match scheduling and squad features
- Show you nearby players (if you opt in)
- Send notifications about matches and challenges
- Improve and optimize the App
- Respond to your requests and support inquiries
- Enforce our Terms of Service
- Comply with legal obligations

3. SHARING YOUR INFORMATION

3.1 With Other Users
- Profile information visible to squad members
- Match participation visible to other participants
- "Open to Play" status visible to nearby users (if enabled)
- Ladder rankings visible to squad members

3.2 With Service Providers
We share data with trusted providers who help us operate:
- Clerk (authentication)
- Convex (database hosting)
- RevenueCat (subscription management)
- Apple/Google (payments)
- Analytics providers

3.3 For Legal Reasons
We may disclose information:
- To comply with legal obligations
- To protect our rights and safety
- To prevent fraud or abuse
- In response to lawful requests

3.4 Business Transfers
In the event of a merger, acquisition, or sale, your information may be transferred to the new entity.

3.5 We Do NOT:
- Sell your personal information
- Share your data with advertisers
- Use your data for targeted advertising

4. DATA RETENTION

- Account data: Retained until you delete your account
- Match history: Retained for statistics while account is active
- Location data: Never permanently stored
- Deleted accounts: Data removed within 30 days

5. YOUR RIGHTS AND CHOICES

5.1 Access and Update
You can view and update your profile information in the App.

5.2 Delete Your Account
You can delete your account in Profile > Delete Account. This permanently removes:
- Your profile and settings
- Match history
- Squad memberships
- Ladder rankings

5.3 Notification Preferences
Control push notifications in Settings > Notifications.

5.4 Location Permissions
Control location access in your device settings.

5.5 Data Export
Contact us to request a copy of your data.

6. DATA SECURITY

We implement appropriate security measures including:
- Encryption of data in transit (HTTPS/TLS)
- Secure cloud infrastructure
- Access controls and authentication
- Regular security assessments

However, no method of transmission is 100% secure. We cannot guarantee absolute security.

7. CHILDREN'S PRIVACY

TennisSquad is not intended for children under 13. We do not knowingly collect information from children under 13. If we discover such data, we will delete it promptly.

8. INTERNATIONAL DATA TRANSFERS

Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.

9. CALIFORNIA PRIVACY RIGHTS

California residents have additional rights under the CCPA:
- Right to know what personal information we collect
- Right to delete personal information
- Right to opt-out of sale (we don't sell data)
- Right to non-discrimination

To exercise these rights, contact privacy@tennissquad.app.

10. EUROPEAN PRIVACY RIGHTS (GDPR)

EU/EEA residents have rights including:
- Access to your personal data
- Correction of inaccurate data
- Deletion of your data
- Restriction of processing
- Data portability
- Objection to processing

Legal basis for processing: Contract performance, legitimate interests, consent.

To exercise these rights, contact privacy@tennissquad.app.

11. CHANGES TO THIS POLICY

We may update this Privacy Policy periodically. We will notify you of material changes through the App or email. Your continued use after changes constitutes acceptance.

12. CONTACT US

For privacy questions or concerns:

Email: privacy@tennissquad.app
Address: [Your Business Address]

Data Protection Officer (if applicable):
Email: dpo@tennissquad.app

For complaints, you may also contact your local data protection authority.

---

By using TennisSquad, you acknowledge that you have read and understood this Privacy Policy.
```

---

## FAQ

### Getting Started

**What is TennisSquad?**
TennisSquad is a mobile app that helps tennis players organize matches, manage groups, and compete with friends. Think of it as the command center for your tennis life.

**Is TennisSquad free?**
Yes! The free plan includes all core features: match scheduling, availability tracking, ladder rankings, and weekly challenges. Premium plans unlock additional features like nearby discovery.

**How do I create a squad?**
Open the app, go to the Squad tab, and tap "Create Squad." You'll get a unique code to share with friends. They can join by entering the code.

**How do I join an existing squad?**
Get the squad code from your group organizer. Open the app, go to Squad, tap "Join Squad," and enter the code.

### Matches & Scheduling

**How do I create a match?**
Tap the + button or "Schedule Match" on the Play tab. Fill in the details (date, time, location, players needed) and save. Your squad will be notified.

**Can I see when everyone is free?**
Yes! The availability heatmap shows when most players are available. Set your own availability in the app, and you'll see the best times to schedule matches.

**What if someone doesn't show up?**
You can track participation in the app. Players who consistently no-show will be visible to organizers. We're building reputation features to help with this.

### Ladder & Competition

**How does the ladder work?**
The ladder ranks players in your squad. Challenge players ranked above you. If you win, you swap positions. If you lose, positions stay the same.

**Who can I challenge?**
You can challenge players within a certain range above you (typically 3-5 positions). This keeps challenges fair and competitive.

**What are box leagues?**
Box leagues are monthly round-robin competitions. Players are divided into boxes by skill. Top performers get promoted; bottom performers get relegated.

### Subscriptions & Billing

**What's included in the free plan?**
- 1 squad membership (up to 10 members)
- Match scheduling and availability
- Ladder rankings and challenges
- Weekly challenges and badges

**What do I get with Explorer?**
Everything in Free, plus:
- 3 squads (up to 25 members each)
- Nearby player discovery
- "Open to Play" visibility
- Join matches outside your squad

**What is the Lifetime deal?**
Pay $49 once and get all Explorer features forever. No monthly fees. This is a special offer for early adopters.

**How do I cancel my subscription?**
Subscriptions are managed through your App Store (Apple) or Play Store (Google) account. Go to your device's subscription settings to cancel.

**Can I get a refund?**
Refunds are handled by Apple/Google according to their policies. Contact their support for refund requests.

### Privacy & Data

**What data do you collect?**
We collect your profile information, match data, and usage statistics. See our full Privacy Policy for details.

**Do you share my data?**
We never sell your data. We share limited data with service providers (hosting, authentication) to operate the app. See our Privacy Policy.

**How do I delete my account?**
Go to Profile > scroll to bottom > Delete Account. This permanently removes all your data within 30 days.

**Do you use my location?**
Only if you enable the Nearby feature. Location is used to find players and matches near you. It's never stored permanently.

### Technical Issues

**The app isn't loading. What do I do?**
Try these steps:
1. Check your internet connection
2. Force close and reopen the app
3. Update to the latest version
4. Restart your device
5. Contact support if issues persist

**I'm not receiving notifications.**
Check that:
1. Notifications are enabled in the app (Profile > Notifications)
2. Notifications are enabled in your device settings
3. Do Not Disturb is off

**How do I report a bug?**
Email support@tennissquad.app with:
- Your device and OS version
- What you were doing when the bug occurred
- Screenshots if possible

### Contact & Support

**How do I contact support?**
Email us at support@tennissquad.app. We typically respond within 24 hours.

**How do I give feedback?**
We love feedback! Email feedback@tennissquad.app or use the in-app Help section.

**Is there a community or forum?**
Not yet, but we're considering it! For now, reach out via email or social media.

---

## Support/Contact

### Contact Page Content

**Headline:** We're Here to Help

**Subheadline:** Have a question, found a bug, or just want to say hi? We'd love to hear from you.

**Contact Options:**

1. **General Support**
   - Email: support@tennissquad.app
   - Response time: Within 24 hours

2. **Bug Reports**
   - Email: bugs@tennissquad.app
   - Please include device info and screenshots

3. **Feedback & Suggestions**
   - Email: feedback@tennissquad.app
   - We read every message!

4. **Business Inquiries**
   - Email: hello@tennissquad.app

5. **Legal/Privacy**
   - Email: legal@tennissquad.app

**Social Media (if applicable):**
- Twitter: @tennissquadapp
- Instagram: @tennissquad

**FAQ Link:**
> Can't find what you're looking for? Check our [FAQ](/faq).

---

## App Store Assets

### App Name
TennisSquad - Find Players & Play

### Subtitle (30 chars)
Organize Matches. Compete. Win.

### Keywords (100 chars)
tennis,match,schedule,ladder,ranking,doubles,singles,court,player,squad,group,sport,competition,NTRP

### Description (4000 chars max)

```
TennisSquad is the easiest way to organize tennis matches, manage your group, and compete with friends.

ORGANIZE YOUR TENNIS LIFE
Stop juggling group chats and spreadsheets. TennisSquad puts everything in one place:
• Create matches with date, time, and location
• See who's joining at a glance
• Track court fees and costs
• Get reminders before matches

FIND THE PERFECT TIME
Our availability heatmap shows when most players are free:
• Set your weekly availability
• See the best times to play
• No more "who's free Saturday?" messages

COMPETE ON THE LADDER
Add friendly competition with our ranking system:
• Challenge players above you
• Win to climb the ranks
• Track your wins, losses, and streaks
• Earn badges and achievements

MANAGE YOUR SQUAD
Keep your tennis group organized:
• Create private squads with invite codes
• See member skill levels and NTRP ratings
• Admin tools for organizers
• Up to 25 members per squad

DISCOVER NEARBY PLAYERS (Explorer & Lifetime)
Expand your tennis network:
• Find players in your area
• Join open matches near you
• Show when you're "Open to Play"
• Meet new hitting partners

GAMIFICATION & MOTIVATION
Stay engaged with:
• 12 unique badges to unlock
• Weekly challenges with points
• Win streak tracking
• Career statistics

SUBSCRIPTION OPTIONS
• Free: Core features, 1 squad, 10 members
• Explorer ($6.99/mo): 3 squads, nearby discovery
• Lifetime ($49): All features forever

Download TennisSquad and play more tennis!
```

### Promotional Text (170 chars)
Join thousands of players organizing matches, climbing ladders, and finding new hitting partners. Your tennis community starts here.

### What's New (for updates)
```
• NTRP rating selection with 0.5 increments
• Improved availability heatmap
• Bug fixes and performance improvements
```

### Screenshots Needed

1. **Home Screen** - Upcoming matches, quick actions
2. **Availability Heatmap** - Weekly grid showing best times
3. **Match Details** - Join match screen with participants
4. **Ladder Rankings** - Full rankings with challenge button
5. **Squad Members** - Member list with skill levels
6. **Nearby Players** - Discovery screen (premium feature)
7. **Badges/Achievements** - Gamification screen
8. **Create Match** - Match creation form

**Screenshot Guidelines:**
- iPhone 6.5" (1284 x 2778 px) - Required
- iPhone 5.5" (1242 x 2208 px) - Required
- iPad Pro 12.9" (2048 x 2732 px) - If supporting iPad
- Use device frames for polish
- Dark background to match app theme
- Add text captions above each screenshot

---

## Website Technical Requirements

### Recommended Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics or Plausible

### Pages to Build
1. Homepage (/)
2. Features (/features)
3. Pricing (/pricing)
4. Terms (/terms)
5. Privacy (/privacy)
6. FAQ (/faq)
7. Support (/support)

### SEO Requirements
- Meta titles and descriptions for each page
- Open Graph images
- Sitemap.xml
- Robots.txt
- Schema markup for app

### Performance
- Lighthouse score > 90
- Images optimized (WebP)
- Lazy loading for below-fold content
- Mobile-first responsive design

### Integrations
- App Store Smart Banner
- Analytics tracking
- Contact form (optional)

---

## Notes for Developer

1. **Domain**: tennissquad.app (referenced in iOS app)
2. **Email addresses used in app**:
   - support@tennissquad.app
   - privacy@tennissquad.app
   - legal@tennissquad.app
3. **Links in iOS app point to**:
   - /terms
   - /privacy
4. **Pricing must match** App Store/RevenueCat exactly
5. **Dark theme** should match the app aesthetic

---

*Document prepared for TennisSquad website development*
*Last updated: February 2025*

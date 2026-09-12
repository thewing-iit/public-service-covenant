# PSC Final Launch Guide

This document contains everything you need to execute the final 4 steps to launch the Public Service Covenant website.

---

## Step 1: Create Your Google Forms

Go to [Google Forms](https://forms.google.com) and create **three separate forms**. Below are the exact questions you should add to each form.

### Form A: Volunteer Intake Form
**Title:** Join the PSC Volunteer Vanguard  
**Description:** We are building a new political foundation in India based on extreme personal sacrifice. If you want a rich life, look elsewhere. If you are ready to serve, join us.

**Questions:**
1. **Full Name** (Short answer)
2. **Email Address** (Short answer)
3. **WhatsApp / Phone Number** (Short answer)
4. **State / City of Residence** (Short answer)
5. **Age** (Short answer)
6. **Profession / Skills** (Paragraph - e.g., Law, IT, Organizing, Design, Student)
7. **How many hours per week can you dedicate to the movement?** (Multiple choice: 1-5 hours, 5-10 hours, 10+ hours)
8. **Why do you want to join PSC?** (Paragraph)

---

### Form B: Candidate Application & Pledge Form
**Title:** PSC Candidate Application  
**Description:** Anyone can join PSC, but those who wish to represent PSC in elections must accept the Covenant of extreme personal sacrifice.

**Questions (Page 1 - Details):**
1. **Full Name as per Official ID** (Short answer)
2. **Date of Birth** (Date) *Note: You must be willing to retire at age 60.*
3. **Email Address** (Short answer)
4. **Phone Number** (Short answer)
5. **Constituency / City you wish to represent** (Short answer)
6. **Current Profession & Source of Income** (Paragraph)

**Questions (Page 2 - The Pledge - Make all required checkboxes):**
- [ ] I pledge to declare all my assets publicly before contesting an election.
- [ ] I pledge that my personal wealth and assets will **NOT** grow while holding public office.
- [ ] I pledge to live on a simple, strict allowance and reject the elite privileges of power.
- [ ] I pledge to strictly retire from all public office at the age of 60.
- [ ] I understand that any violation of this Covenant will result in my immediate removal from the movement.
- **Digital Signature:** Type your full legal name to accept this Covenant. (Short answer)

---

### Form C: Submit an Idea Form
**Title:** PSC Public Ideas Library  
**Description:** Great policies are built through public discussion. Submit your ideas for reforming India.

**Questions:**
1. **Name (Optional)** (Short answer)
2. **Which sector does your idea address?** (Multiple choice: Education, Agriculture, Tech, Governance, Health, Other)
3. **What is the problem?** (Paragraph - explain the issue in simple terms)
4. **What is your proposed solution?** (Paragraph - explain your idea)

---

## Step 2: Link the Forms to the Website

Once you have created the forms above, click **"Send" -> "Link"** in Google Forms to get the URL for each form.

1. Open `app/join/page.tsx` in your code editor.
2. Scroll to Line 33. You will see `href="https://forms.gle/placeholder"`.
3. Replace `"https://forms.gle/placeholder"` with the URL for your **Candidate/Volunteer Form**.
4. Open `app/ideas/page.tsx`.
5. Scroll to Line 33 and replace the placeholder link with the URL for your **Ideas Form**.

---

## Step 3: Social Sharing & SEO (Completed!)

I have already injected the correct **Open Graph and Twitter Card code** into your `app/layout.tsx` file! 

When you share your website link on WhatsApp, X (Twitter), or Facebook, it will automatically look beautiful. 

**The only thing you need to do:**
1. Create a rectangular image (1200 pixels wide by 630 pixels tall). You can use Canva (it's free) to make a nice blue graphic that says "Public Service Covenant".
2. Name the file `social-card.png`.
3. Drag and drop that image into your `public/` folder in this codebase. The code I wrote will automatically find it and use it for WhatsApp/Twitter!

---

## Step 4: Deploy to the Internet (Vercel)

To get your website live on `https://publicservicecovenant.org` or a free `.vercel.app` domain, follow these simple steps:

1. Create a free account on [GitHub.com](https://github.com).
2. Download **GitHub Desktop** (or use VS Code) to upload ("commit and push") this folder to a new GitHub repository.
3. Go to [Vercel.com](https://vercel.com) and create a free account.
4. Click **"Add New Project"** on Vercel.
5. Link your GitHub account and select the repository you just uploaded.
6. Click **Deploy**. 

Vercel will automatically build the site and give you a live URL. Whenever you update your code on your computer and push it to GitHub, Vercel will automatically update the live website!

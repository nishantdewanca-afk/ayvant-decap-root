# Ayvant IT & Cybersecurity Website

A modern static website built with Eleventy (11ty) and Decap CMS for content management.

## Features

- **Blog** with markdown support and CMS editing
- **SEO-optimized** meta tags editable via CMS
- **10 Location pages** for local SEO
- **GoHighLevel integration** (forms, chat widget)
- **Fully responsive** design

## Quick Start

### 1. Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/ayvant-website.git
git push -u origin main
```

### 2. Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Netlify will auto-detect the build settings from `netlify.toml`
5. Click "Deploy site"

### 3. Enable Decap CMS

1. In Netlify, go to **Site settings** → **Identity**
2. Click "Enable Identity"
3. Under **Registration**, select "Invite only"
4. Under **Services** → **Git Gateway**, click "Enable Git Gateway"
5. Go to **Identity** tab and click "Invite users"
6. Send yourself an invite email

### 4. Access the CMS

1. Visit `https://your-site.netlify.app/admin`
2. Click the confirmation link in your invite email
3. Set your password
4. Start editing!

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## Project Structure

```
/
├── src/
│   ├── _includes/      # Layout templates (header, footer, base)
│   ├── _data/          # Site configuration and page SEO data
│   ├── blog/           # Blog posts (markdown)
│   ├── pages/          # Service and legal pages
│   └── locations/      # Location-based SEO pages
├── admin/              # Decap CMS configuration
├── css/                # Stylesheets
├── js/                 # JavaScript
└── images/             # Static images
```

## Using the CMS

### Creating a Blog Post

1. Go to `/admin`
2. Click "Blog Posts" → "New Blog Post"
3. Fill in the fields:
   - **Title**: Your post title
   - **Publish Date**: When to publish
   - **Author**: Your name or "Ayvant Team"
   - **Excerpt**: 1-2 sentence summary
   - **Featured Image**: Upload or paste URL
   - **Tags**: Categorize your post
   - **Featured Post**: Check to show on homepage
   - **Body**: Write your content in markdown
4. Click "Publish"

### Editing Meta Tags

1. Go to `/admin`
2. Click "Page SEO"
3. Select the page you want to edit
4. Update the Meta Title and Meta Description
5. Click "Publish"

### Editing Site Settings

1. Go to `/admin`
2. Click "Site Settings" → "Site Information"
3. Update contact info, social links, etc.
4. Click "Publish"

## Customization

### Adding a New Page

1. Create a new `.njk` file in `src/pages/`
2. Add frontmatter with layout and metadata
3. Rebuild the site

### Adding a New Location

1. Create a new `.njk` file in `src/locations/`
2. Follow the existing template structure
3. Add the location to the footer navigation

## GoHighLevel Integration

The site uses GoHighLevel for:
- **Contact Form**: Embedded iframe
- **Newsletter Form**: Embedded iframe
- **Chat Widget**: Script loaded on all pages
- **Dark Web Scan Form**: Exit-intent popup

Form URLs are configured in `src/_data/site.json`.

## Support

For questions about this website, contact:
- **Email**: hello@ayvant.ca
- **Phone**: (604) 239-2090

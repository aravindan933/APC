# Setup Notes for New Features

## Required NPM Packages

The following packages need to be installed for the new features to work:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

## Features Implemented

### 1. Dark Mode Toggle ✅
- Theme context and toggle component created
- Integrated into navbar (desktop and mobile)
- Persistent theme preference (localStorage)
- System preference detection

### 2. Multi-Language Support (i18n) ✅
- English and Arabic translations
- Language switcher in navbar
- RTL layout support for Arabic
- Translation files in `src/i18n/locales/`

**Note:** Install i18next packages before using this feature.

### 3. Certificate Gallery ✅
- Certificate display page at `/certificates`
- Filter by certificate type
- Modal viewer for full-size certificates
- Certificate data in `src/data/certificates.js`

### 4. MSDS/TDS Viewer ✅
- Searchable document database at `/msds-tds`
- Filter by category, document type, and industry
- Preview and download functionality
- Document data in `src/data/msdsData.js`

### 5. Technical Database ✅
- Product specifications viewer at `/technical-database`
- Chemical compatibility matrix
- Search functionality
- Technical data in `src/data/technicalSpecs.js`

### 6. Live Chat ✅
- Chat widget with bot responses
- Integration with WhatsApp and phone
- Chat history persistence
- Context-based responses

### 7. Virtual Tour ✅
- Facility tour page at `/virtual-tour`
- Interactive navigation between locations
- Image-based tour viewer
- Tour data in `src/data/tourPoints.js`

## Navigation Updates

- Added "Certificates" to main navigation
- Added "MSDS/TDS" and "Technical Database" to "Our Business" dropdown
- Added "Virtual Tour" to main navigation

## Image Requirements

For the Virtual Tour to work properly, ensure these images exist:
- `/img/hero-industrial-1.jpg` through `/img/hero-industrial-6.jpg`
- Certificate images in `/img/certificates/` directory

## PDF Requirements

For MSDS/TDS viewer, ensure PDF files exist in `/public/pdf/` directory matching the paths in `src/data/msdsData.js`.


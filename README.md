# 🧬 Interactive Mortality & Longevity Explorer

A lightweight, static HTML/JavaScript web application for exploring life tables, survival curves, and life expectancy data across multiple countries.

## Quick Start

1. Open `index.html` in your browser
2. Select country, sex, age, and table type
3. Click "Calculate" to see results
4. Download CSV if needed

## Features

✅ **Multiple Countries**: USA, UK, South Africa  
✅ **Dual Tables**: Period (current year) & Cohort (birth year)  
✅ **Interactive Charts**: Smooth survival curves  
✅ **Life Metrics**: lx, dx, qx, ex, survival probabilities  
✅ **CSV Export**: Download results  
✅ **Responsive Design**: Mobile, tablet, desktop  
✅ **No Backend**: Pure static files  

## Data

- **Period Tables**: Snapshot of mortality at a specific time
- **Cohort Tables**: Mortality experience of a birth cohort
- **Age Range**: 0–110 years
- **12 Life Tables**: 3 countries × 2 sexes × 2 table types

## Deployment

### GitHub Pages (Recommended)

1. Create GitHub repository
2. Upload 3 files: `index.html`, `app.js`, `styles.css`
3. Settings → Pages → Deploy from main
4. Live at: `username.github.io/repository-name`

### Other Hosting

- Netlify: Drag & drop folder
- Vercel: Import GitHub repo
- Traditional web hosting: FTP upload files

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Responsive grid layout
- **JavaScript**: All calculations
- **Chart.js**: Interactive charts (via CDN)
- **No build process**: Just static files

## Customization

### Add a Country

Edit `app.js`, add to `LIFE_TABLE_DATA` object with life table metrics.

### Change Colors

Edit `styles.css` CSS variables (`--primary-color`, etc.)

### Modify Chart Type

Edit `app.js` chart configuration around line 300

## License

Free to use, modify, and distribute for educational purposes.

## Data Attribution

- USA: CDC/NCHS
- UK: ONS  
- South Africa: SA Dept of Health

Simplified for educational purposes. For research, use official databases (HMD, national statistics offices).

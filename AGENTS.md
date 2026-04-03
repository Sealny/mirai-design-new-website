# Mirai Design Website - AI Agent Guide

## Project Overview

Mirai Design is a modern, internationalized landing page website for a web design agency. The project consists of a React frontend built with Vite and a FastAPI backend with MongoDB integration. The website features a sophisticated dark-mode UI with premium aesthetics and supports six languages (English, Polish, German, French, Chinese, Japanese).

## Technology Stack

### Frontend
- **Framework**: React 18 with Vite
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **Internationalization**: i18next with react-i18next
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI React Accordion

### Backend
- **Framework**: FastAPI
- **Language**: Python
- **Database**: MongoDB with Motor (async driver)
- **Authentication**: JWT with PyJWT
- **Security**: Bcrypt, Passlib, Cryptography
- **AWS Integration**: Boto3
- **Environment**: python-dotenv

### Development Tools
- **Linting**: ESLint with React-specific rules
- **Formatting**: Black (Python), Prettier (JavaScript)
- **Type Checking**: MyPy
- **Testing**: Pytest
- **Build Tool**: Vite

## Project Structure

```
/Users/mateuszwieckowski/mirai-design-website-1/
├── frontend/                    # React Vite application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Header.jsx      # Navigation header
│   │   │   ├── Footer.jsx      # Site footer
│   │   │   ├── PremiumImage.jsx # Optimized image component
│   │   │   └── home/           # Homepage-specific components
│   │   ├── pages/              # Route components
│   │   │   ├── Home.jsx        # Homepage
│   │   │   ├── Work.jsx        # Portfolio page
│   │   │   ├── Packages.jsx    # Pricing page
│   │   │   ├── Process.jsx     # How it works
│   │   │   ├── About.jsx       # About page
│   │   │   ├── Contact.jsx     # Contact page
│   │   │   ├── Privacy.jsx     # Privacy policy
│   │   │   └── Terms.jsx       # Terms of service
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useGeoLanguage.js # Language detection
│   │   ├── locales/            # Translation files
│   │   │   ├── en.json         # English
│   │   │   ├── pl.json         # Polish
│   │   │   ├── de.json         # German
│   │   │   ├── fr.json         # French
│   │   │   ├── zh.json         # Chinese
│   │   │   └── ja.json         # Japanese
│   │   ├── content/            # Static content assets
│   │   ├── i18n.js             # Internationalization setup
│   │   ├── main.jsx            # Application entry point
│   │   ├── App.jsx             # Main application component
│   │   └── index.css           # Global styles
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── eslint.config.js        # ESLint configuration
│   └── postcss.config.js       # PostCSS configuration
├── backend/                    # FastAPI application
│   ├── server.py               # Main FastAPI application
│   └── requirements.txt        # Python dependencies
├── tests/                      # Test directory (minimal)
├── .emergent/                  # Emergent AI integration files
├── test_result.md              # Testing protocol and results
└── README.md                   # Basic instructions
```

## Build and Development Commands

### Frontend Development
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Backend Development
```bash
cd backend
pip install -r requirements.txt    # Install Python dependencies
python server.py                   # Start FastAPI server
```

### Testing
```bash
# Backend testing
pytest              # Run Python tests

# Frontend testing
# No automated frontend tests configured - manual testing via browser
```

## Code Style Guidelines

### Frontend (JavaScript/React)
- Use functional components with hooks
- Follow React naming conventions (PascalCase for components, camelCase for functions/variables)
- Use Tailwind utility classes for styling
- Implement proper prop types validation
- Use semantic HTML elements
- Follow the established component structure in `/src/components/`

### Backend (Python)
- Follow PEP 8 style guidelines
- Use type hints for function parameters and return values
- Implement Pydantic models for request/response validation
- Use async/await for database operations
- Structure API endpoints with proper HTTP methods and status codes

### General
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain consistent indentation (2 spaces for JS, 4 spaces for Python)
- Keep components and functions focused and single-purpose

## Testing Instructions

### Manual Testing Protocol
1. **Visual Testing**: Check all pages render correctly with proper styling
2. **Internationalization**: Verify content displays correctly in all 6 languages
3. **Responsiveness**: Test on different screen sizes
4. **Navigation**: Ensure all routes work correctly
5. **Forms**: Test contact forms and interactive elements

### Backend API Testing
- Test `/api/` endpoint returns "Hello World"
- Test `/api/status` POST and GET endpoints
- Verify MongoDB connection and data persistence
- Check CORS configuration

### Testing Agent Integration
The project includes a sophisticated testing protocol in `test_result.md` that tracks:
- Implementation status of features
- Working/non-working status
- Priority levels
- Status history and agent communication
- Stuck task tracking

## Security Considerations

### Environment Variables
- Backend uses `.env` file for configuration
- Sensitive data should be stored in environment variables
- Never commit `.env` files to version control

### API Security
- CORS is configured with specific origins
- JWT tokens are used for authentication
- Input validation with Pydantic models
- Password hashing with bcrypt

### Frontend Security
- No sensitive data should be hardcoded in frontend code
- API endpoints should use HTTPS in production
- Proper sanitization of user inputs

## Design System

### Color Palette
- Background: `#0a0a0b` (page), `#141416` (card), `#1a1a1d` (elevated)
- Text: `#ffffff` (primary), `#a1a1a6` (secondary), `#6b6b70` (muted)
- Accent: `#0066ff` (primary), `#0052cc` (hover)
- Borders: Various opacity levels of white

### Typography
- Font: Inter (system-ui fallback)
- Unified design language with consistent spacing and sizing

### Layout
- Max container width: 1280px
- Card border radius: 16px
- Global grid background pattern

## Deployment Notes

### Frontend Build
- Production build outputs to `frontend/dist/`
- Configured for static hosting
- All assets are optimized

### Backend Deployment
- FastAPI application ready for containerization
- MongoDB connection required
- Environment variables needed for configuration

## Key Features Implemented

1. **Multi-language Support**: Complete i18n implementation with 6 languages
2. **Premium Design**: Dark-mode UI with sophisticated animations
3. **Responsive Layout**: Mobile-first design approach
4. **Portfolio Showcase**: Demo project previews
5. **Pricing Structure**: 3-tier pricing with add-ons
6. **Contact Integration**: Email links and contact forms
7. **Legal Pages**: Privacy policy and terms of service

## Current Status

Based on the project history in `.emergent/summary.txt`, this is a completed frontend-only application that evolved from a full-stack project. The backend exists but the current deployment focuses on the React frontend. All user-requested refinements have been implemented including visual upgrades, content changes, and bug fixes.
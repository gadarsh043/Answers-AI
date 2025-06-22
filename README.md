# Charging Station Analytics Dashboard

A modern React dashboard for monitoring and analyzing charging station performance with interactive charts, KPIs, and variable management.

## 🚀 Live Demo

**[View Live Demo](https://answers-ai.netlify.app/)**

## Features Implemented

### Core Features
- **Google Authentication** - Secure login with Firebase Auth
- **Interactive Dashboard** - Real-time charging station analytics with modern UI
- **Performance Charts** - Interactive line charts with hover tooltips showing data values and percentages
- **KPI Monitoring** - Key performance indicators with dynamic refresh functionality
- **Variable Management Panel** - Comprehensive edit variables modal with:
  - Search functionality across all variables
  - Category-based organization (Primary, Secondary, Tertiary Variables)
  - Multi-select capability with visual feedback
  - Context window on hover (1.5s delay) showing variable descriptions
  - Autofill and rerun functionality
- **Best Scenario Results** - Collapsible result cards with smooth animations
- **Responsive Design** - Modern dark theme (#1a1a1a) with green accents (#a3e635)
- **Export Functionality** - Download dashboard data as JSON
- **Real-time Data Updates** - Dummy data generation for KPIs and charts

### UI/UX Features
- **Sidebar Navigation** - Fixed sidebar with SVG icons and hover tooltips
- **Header Navigation** - Tab-based navigation with search functionality
- **Page Actions** - Edit Variables, Refresh, and Export buttons with tooltips
- **Loading States** - Smooth loading animations and transitions
- **Hover Effects** - Interactive elements with visual feedback

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Environment Variables
Create a `.env` file in the root directory with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/gadarsh043/Answers-AI.git
cd Answers-AI
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Google Authentication in Authentication > Sign-in method
   - Copy your Firebase config values to the `.env` file
   - Update `src/firebase/config.js` if needed

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
   - Navigate to [http://localhost:5173](http://localhost:5173)
   - Sign in with your Google account

## Local Development Instructions

### Development Commands
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Install new dependencies
npm install <package-name>
```

### Project Structure
```
src/
├── components/           # React components
│   ├── scss/            # Component-specific SCSS files
│   ├── Login.jsx        # Google authentication component
│   ├── Sidebar.jsx      # Navigation sidebar with user profile
│   ├── Header.jsx       # Top navigation with tabs and search
│   ├── PageHeader.jsx   # Page title and action buttons
│   ├── BestScenarioResults.jsx  # Collapsible result cards
│   ├── GraphSection.jsx # Interactive chart with Recharts
│   ├── KPISection.jsx   # Performance indicators with refresh
│   ├── EditVariablesPanel.jsx  # Variable management modal
│   └── ChargingStationDashboard.jsx  # Main dashboard layout
├── firebase/            # Firebase configuration
│   └── config.js        # Firebase setup and initialization
├── App.jsx             # Main app component with auth logic
├── App.scss            # Global application styles
├── index.css           # CSS reset and base styles
└── main.jsx            # Application entry point
```

### Development Workflow
1. Make changes to components in `src/components/`
2. Styles are organized per component in `src/components/scss/`
3. Test changes with `npm run dev`
4. Build and test production with `npm run build && npm run preview`

## Technical Decisions and Trade-offs

### Architecture Decisions
- **Single Page Application**: Chose SPA architecture for smooth user experience without page reloads
- **Component-based Architecture**: Modular React components for maintainability and reusability
- **SCSS over CSS-in-JS**: Chose SCSS for better organization and familiar syntax, trade-off is additional build step
- **Firebase for Auth**: Quick setup and reliable Google OAuth, trade-off is vendor lock-in

### State Management
- **React useState**: Used local state instead of Redux for simplicity since app state is relatively simple
- **Props drilling**: Acceptable for this app size, would consider Context API or Redux for larger apps

### Styling Approach
- **SCSS with component-specific files**: Each component has its own SCSS file for better organization
- **CSS custom properties**: Used for consistent theming across components
- **Responsive design**: Mobile-first approach with CSS Grid and Flexbox

### Data Management
- **Dummy data**: Implemented realistic dummy data generation for demo purposes
- **Local state**: All data stored in component state, would integrate with real APIs in production
- **Chart library**: Chose Recharts for React-specific chart components and good customization

### Performance Considerations
- **Code splitting**: Vite handles this automatically
- **Image optimization**: Used placeholder images and optimized Firebase profile images
- **Bundle size**: Kept dependencies minimal, only essential libraries included

## Known Limitations

### Current Limitations
1. **Dummy Data Only**: All data is generated locally, no real API integration
2. **No Data Persistence**: Data resets on page refresh (by design for demo)
3. **Limited Mobile Optimization**: Optimized for desktop, mobile experience could be improved
4. **No Error Boundaries**: Basic error handling, could be more comprehensive
5. **Single User Session**: No multi-user support or role-based access

### Technical Debt
1. **PropTypes**: Some components missing comprehensive PropTypes validation
2. **Testing**: No unit tests implemented (would add Jest/React Testing Library)
3. **Accessibility**: Basic accessibility, could improve with ARIA labels and keyboard navigation
4. **SEO**: SPA limitations for SEO, would need SSR for production
5. **Browser Support**: Modern browsers only, no IE11 support

### Future Improvements
1. **Real API Integration**: Connect to actual charging station APIs
2. **Data Persistence**: Implement database for user preferences and data
3. **Advanced Charts**: More chart types and customization options
4. **Notification System**: Real-time alerts and notifications
5. **Admin Panel**: User management and system configuration

## Time Spent

### Development Breakdown
- **Initial Setup & Firebase**: 2 hours
- **Authentication System**: 1.5 hours
- **Dashboard Layout & Sidebar**: 3 hours
- **Chart Implementation**: 2.5 hours
- **KPI Section**: 1.5 hours
- **Edit Variables Panel**: 4 hours
- **Styling & Responsive Design**: 3 hours
- **Interactive Features**: 2 hours
- **Bug Fixes & Polish**: 2 hours
- **Documentation**: 1.5 hours

**Total Time: ~23 hours**

### Key Milestones
1. **Day 1**: Project setup, Firebase auth, basic layout
2. **Day 2**: Dashboard components, charts, KPI section
3. **Day 3**: Variables panel, interactions, styling polish
4. **Day 4**: Bug fixes, deployment, documentation

## Tech Stack

- **Frontend**: React 18, Vite
- **Authentication**: Firebase Auth (Google OAuth)
- **Charts**: Recharts
- **Styling**: SCSS, CSS Custom Properties
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Version Control**: Git, GitHub

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

MIT License - feel free to use this project for learning and development purposes.
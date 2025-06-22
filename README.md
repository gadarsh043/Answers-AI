# Charging Station Analytics Dashboard

A modern React dashboard for monitoring and analyzing charging station performance with interactive charts, KPIs, and variable management.

## 🚀 Live Demo

**[View Live Demo](https://answers-ai.netlify.app/)**

## Features

- **Google Authentication** - Secure login with Firebase Auth
- **Interactive Dashboard** - Real-time charging station analytics
- **Performance Charts** - Line charts with hover tooltips and data visualization
- **KPI Monitoring** - Key performance indicators with refresh functionality
- **Variable Management** - Edit variables panel with search and category filtering
- **Responsive Design** - Modern dark theme with green accents

## Tech Stack

- **React 18** - Frontend framework
- **Firebase** - Authentication and backend services
- **Recharts** - Chart library for data visualization
- **SCSS** - Styling and component design
- **Vite** - Build tool and development server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Answers-AI
```

2. Install dependencies
```bash
npm install
```

3. Set up Firebase configuration
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Google Authentication
   - Copy your Firebase config to `src/firebase/config.js`

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/           # React components
│   ├── scss/            # Component-specific styles
│   ├── Login.jsx        # Authentication component
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── Header.jsx       # Top navigation
│   ├── PageHeader.jsx   # Page title and actions
│   ├── BestScenarioResults.jsx  # Result cards
│   ├── GraphSection.jsx # Chart visualization
│   ├── KPISection.jsx   # Performance indicators
│   └── EditVariablesPanel.jsx  # Variable management
├── firebase/            # Firebase configuration
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Usage

1. **Login** - Sign in with your Google account
2. **Dashboard** - View charging station performance metrics
3. **Charts** - Hover over data points for detailed information
4. **Variables** - Click "Edit Variables" to modify configuration
5. **Export** - Download dashboard data as JSON
6. **Refresh** - Update KPI data with latest values

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit with descriptive messages
5. Push and create a pull request
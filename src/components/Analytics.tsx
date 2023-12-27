```tsx
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_TRACKING_ID');
    
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // This component doesn't render anything, it's just for analytics purposes
  return null;
};

export default Analytics;
```
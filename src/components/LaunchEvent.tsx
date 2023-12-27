```typescript
import React, { useState, useEffect } from 'react';
import './LaunchEvent.css';

interface LaunchEventProps {
  onLaunch: () => void;
}

const LaunchEvent: React.FC<LaunchEventProps> = ({ onLaunch }) => {
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    // This effect could be used to handle any pre-launch logic or API calls
  }, []);

  const handleLaunch = () => {
    setIsLaunching(true);
    // Here we would typically handle the launch logic, such as API calls
    // or setting up event listeners. For now, we'll just call onLaunch.
    onLaunch();
    // After launch logic, reset the launching state
    setIsLaunching(false);
  };

  return (
    <div className="launch-event-container">
      <h1>Official Website Launch</h1>
      <p>Join us as we unveil Michael Gruen's new website, a hub for his professional showcase, networking, and mentorship.</p>
      <button 
        className="launch-button" 
        onClick={handleLaunch} 
        disabled={isLaunching}
      >
        {isLaunching ? 'Launching...' : 'Launch Website'}
      </button>
    </div>
  );
};

export default LaunchEvent;
```
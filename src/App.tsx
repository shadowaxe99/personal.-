```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Biography from './components/Biography';
import Portfolio from './components/Portfolio';
import MediaAppearances from './components/MediaAppearances';
import Testimonials from './components/Testimonials';
import MentorshipProgram from './components/MentorshipProgram';
import CommunityForum from './components/CommunityForum';
import SubscriptionContent from './components/SubscriptionContent';
import AffiliateMarketing from './components/AffiliateMarketing';
import ConsultationBooking from './components/ConsultationBooking';
import Blog from './components/Blog';
import PodcastSeries from './components/PodcastSeries';
import VideoSeries from './components/VideoSeries';
import ResourceLibrary from './components/ResourceLibrary';
import SocialMediaFeed from './components/SocialMediaFeed';
import SEOStrategy from './components/SEOStrategy';
import EmailMarketing from './components/EmailMarketing';
import Analytics from './components/Analytics';
import Compliance from './components/Compliance';
import BetaTesting from './components/BetaTesting';
import LaunchEvent from './components/LaunchEvent';
import ContinuousUpdates from './components/ContinuousUpdates';
import TimelineBudget from './components/TimelineBudget';
import EarlyEntrepreneurship from './components/EarlyEntrepreneurship';
import Ventures from './components/Ventures';
import TalentXEntertainment from './components/TalentXEntertainment';
import NetworkingMentorship from './components/NetworkingMentorship';
import ControversiesPersistence from './components/ControversiesPersistence';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Biography} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/media-appearances" component={MediaAppearances} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/mentorship-program" component={MentorshipProgram} />
          <Route path="/community-forum" component={CommunityForum} />
          <Route path="/subscription-content" component={SubscriptionContent} />
          <Route path="/affiliate-marketing" component={AffiliateMarketing} />
          <Route path="/consultation-booking" component={ConsultationBooking} />
          <Route path="/blog" component={Blog} />
          <Route path="/podcast-series" component={PodcastSeries} />
          <Route path="/video-series" component={VideoSeries} />
          <Route path="/resource-library" component={ResourceLibrary} />
          <Route path="/social-media-feed" component={SocialMediaFeed} />
          <Route path="/seo-strategy" component={SEOStrategy} />
          <Route path="/email-marketing" component={EmailMarketing} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/compliance" component={Compliance} />
          <Route path="/beta-testing" component={BetaTesting} />
          <Route path="/launch-event" component={LaunchEvent} />
          <Route path="/continuous-updates" component={ContinuousUpdates} />
          <Route path="/timeline-budget" component={TimelineBudget} />
          <Route path="/early-entrepreneurship" component={EarlyEntrepreneurship} />
          <Route path="/ventures" component={Ventures} />
          <Route path="/talentx-entertainment" component={TalentXEntertainment} />
          <Route path="/networking-mentorship" component={NetworkingMentorship} />
          <Route path="/controversies-persistence" component={ControversiesPersistence} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```
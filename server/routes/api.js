const express = require('express');
const router = express.Router();

const biographyController = require('../controllers/biographyController');
const portfolioController = require('../controllers/portfolioController');
const mediaController = require('../controllers/mediaController');
const networkController = require('../controllers/networkController');
const mentorshipController = require('../controllers/mentorshipController');
const communityController = require('../controllers/communityController');
const subscriptionController = require('../controllers/subscriptionController');
const affiliateController = require('../controllers/affiliateController');
const consultationController = require('../controllers/consultationController');
const blogController = require('../controllers/blogController');
const podcastController = require('../controllers/podcastController');
const videoController = require('../controllers/videoController');
const resourceController = require('../controllers/resourceController');
const socialMediaController = require('../controllers/socialMediaController');
const seoController = require('../controllers/seoController');
const emailMarketingController = require('../controllers/emailMarketingController');
const analyticsController = require('../controllers/analyticsController');
const complianceController = require('../controllers/complianceController');
const testingController = require('../controllers/testingController');
const launchController = require('../controllers/launchController');
const updatesController = require('../controllers/updatesController');
const timelineBudgetController = require('../controllers/timelineBudgetController');
const entrepreneurshipController = require('../controllers/entrepreneurshipController');
const venturesController = require('../controllers/venturesController');
const talentXController = require('../controllers/talentXController');
const networkingMentorshipController = require('../controllers/networkingMentorshipController');
const controversiesController = require('../controllers/controversiesController');

// Biography and Portfolio Routes
router.get('/biography', biographyController.getBiography);
router.get('/portfolio', portfolioController.getPortfolio);

// Media Appearances Routes
router.get('/media-appearances', mediaController.getMediaAppearances);

// Networking and Mentorship Routes
router.get('/network', networkController.getNetwork);
router.get('/mentorship-programs', mentorshipController.getMentorshipPrograms);
router.get('/community-forum', communityController.getCommunityForum);

// Monetization Channels Routes
router.get('/subscriptions', subscriptionController.getSubscriptions);
router.get('/affiliate-marketing', affiliateController.getAffiliateMarketing);
router.post('/consultation-booking', consultationController.bookConsultation);

// Free Utility and Resources Routes
router.get('/blog', blogController.getBlogPosts);
router.get('/podcast-series', podcastController.getPodcastSeries);
router.get('/video-series', videoController.getVideoSeries);
router.get('/resource-library', resourceController.getResourceLibrary);

// Marketing and Promotion Routes
router.get('/social-media-feed', socialMediaController.getSocialMediaFeed);
router.get('/seo-strategy', seoController.getSEOStrategy);
router.post('/email-marketing/subscribe', emailMarketingController.subscribeToNewsletter);

// Analytics and Performance Tracking Routes
router.get('/analytics', analyticsController.getAnalyticsData);

// Compliance and Security Routes
router.get('/compliance', complianceController.getComplianceInfo);

// Launch and Future Enhancements Routes
router.get('/beta-testing', testingController.getBetaTestingFeedback);
router.get('/launch-event', launchController.getLaunchEventInfo);
router.get('/continuous-updates', updatesController.getContinuousUpdatesInfo);

// Timeline and Budget Routes
router.get('/timeline-budget', timelineBudgetController.getTimelineAndBudget);

// Michael Gruen's Career Trajectory Routes
router.get('/early-entrepreneurship', entrepreneurshipController.getEarlyEntrepreneurship);
router.get('/ventures', venturesController.getVentures);
router.get('/talent-x-entertainment', talentXController.getTalentXEntertainment);
router.get('/networking-mentorship', networkingMentorshipController.getNetworkingAndMentorship);
router.get('/controversies-persistence', controversiesController.getControversiesAndPersistence);

module.exports = router;
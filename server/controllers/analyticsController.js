```javascript
const Analytics = require('../models/Analytics');
const { google } = require('googleapis');

// Configure the Google Analytics Reporting API
const analyticsreporting = google.analyticsreporting('v4');
const VIEW_ID = process.env.GOOGLE_ANALYTICS_VIEW_ID; // Replace with your Google Analytics view ID

// Initialize the Google API client
const jwtClient = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  ['https://www.googleapis.com/auth/analytics.readonly'],
  null
);

// Controller to get analytics data
exports.getAnalyticsData = async (req, res) => {
  try {
    // Authorize the client
    const tokens = await jwtClient.authorize();
    google.options({ auth: jwtClient });

    // Set up the query parameters for the report request
    const reportRequest = {
      requestBody: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [
              {
                startDate: '30daysAgo',
                endDate: 'today',
              },
            ],
            metrics: [
              { expression: 'ga:sessions' },
              { expression: 'ga:pageviews' },
              { expression: 'ga:users' },
            ],
            dimensions: [{ name: 'ga:pagePath' }],
          },
        ],
      },
    };

    // Fetch the report data from Google Analytics
    const response = await analyticsreporting.reports.batchGet(reportRequest);

    // Process the response and send the data
    const analyticsData = response.data.reports[0].data.rows.map(row => ({
      pagePath: row.dimensions[0],
      sessions: row.metrics[0].values[0],
      pageviews: row.metrics[0].values[1],
      users: row.metrics[0].values[2],
    }));

    res.status(200).json({
      success: true,
      data: analyticsData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve analytics data',
      error: error.message,
    });
  }
};

// Controller to save analytics data to the database
exports.saveAnalyticsData = async (req, res) => {
  try {
    const { pagePath, sessions, pageviews, users } = req.body;

    // Create a new analytics data entry
    const newAnalytics = new Analytics({
      pagePath,
      sessions,
      pageviews,
      users,
    });

    // Save the entry to the database
    const savedAnalytics = await newAnalytics.save();

    res.status(201).json({
      success: true,
      message: 'Analytics data saved successfully',
      data: savedAnalytics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to save analytics data',
      error: error.message,
    });
  }
};
```
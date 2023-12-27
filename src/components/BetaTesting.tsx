import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

const BetaTesting = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback || !email) {
      setError('Please provide both email and feedback.');
      return;
    }
    // TODO: Implement the API call to submit feedback
    console.log('Feedback submitted:', { email, feedback });
    setSubmitted(true);
  };

  return (
    <div className="beta-testing-container">
      <h2>Beta Testing Feedback</h2>
      <p>Your feedback is invaluable to us. Please let us know your thoughts on the beta version of the website.</p>
      {error && <Alert color="danger">{error}</Alert>}
      {submitted ? (
        <Alert color="success">Thank you for your feedback!</Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback">Feedback</Label>
            <Input
              type="textarea"
              name="feedback"
              id="feedback"
              placeholder="Your feedback"
              value={feedback}
              onChange={handleFeedbackChange}
            />
          </FormGroup>
          <Button type="submit" color="primary">Submit Feedback</Button>
        </Form>
      )}
    </div>
  );
};

export default BetaTesting;
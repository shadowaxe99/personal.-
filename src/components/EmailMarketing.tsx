```tsx
import React, { useState } from 'react';
import axios from 'axios';

const EmailMarketing: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post('/api/subscribe', { email });
      if (response.data.success) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="email-marketing-container">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter to get the latest news and updates from Michael Gruen.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && <p className="subscription-message">{message}</p>}
    </div>
  );
};

export default EmailMarketing;
```
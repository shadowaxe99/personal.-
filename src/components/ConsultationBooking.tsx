```tsx
import React, { useState } from 'react';
import './ConsultationBooking.css';

interface ConsultationFormState {
  name: string;
  email: string;
  date: string;
  message: string;
}

const ConsultationBooking: React.FC = () => {
  const [formState, setFormState] = useState<ConsultationFormState>({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement the API call to submit the consultation booking
    console.log('Form submitted', formState);
  };

  return (
    <div className="consultation-booking">
      <h2>Book a Consultation with Michael Gruen</h2>
      <p>Use the form below to schedule a consultation session.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formState.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ConsultationBooking;
```
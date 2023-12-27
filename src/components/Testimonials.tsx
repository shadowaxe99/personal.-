```typescript
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: string;
  author: string;
  content: string;
  position: string;
  company: string;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call to fetch testimonials
    const fetchTestimonials = async () => {
      try {
        // This is a placeholder for the actual API call
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.imageUrl} alt={testimonial.author} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.content}</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-position">
                {testimonial.position} at {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
```
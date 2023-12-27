```tsx
import React from 'react';
import './Compliance.css';

const Compliance: React.FC = () => {
  return (
    <section id="compliance" className="compliance-section">
      <h2>Compliance and Security</h2>
      <p>
        We take your privacy and security seriously. In compliance with data protection laws like GDPR, we have implemented robust security protocols to protect your data.
      </p>
      <div className="compliance-details">
        <h3>Data Protection</h3>
        <p>
          Our website adheres to the strictest data protection laws, ensuring that your personal information is kept safe and secure. We only collect information that is necessary for providing our services and enhancing your experience.
        </p>
        <h3>SSL Security</h3>
        <p>
          All data transmitted to and from our website is encrypted using SSL (Secure Sockets Layer) technology. This ensures that any information you share with us is secure and protected from unauthorized access.
        </p>
        <h3>Cookie Policy</h3>
        <p>
          We use cookies to improve your experience on our website. Our cookie policy is transparent, and we provide you with the option to manage your cookie preferences.
        </p>
        <h3>User Rights</h3>
        <p>
          You have the right to access, correct, delete, or transfer your data at any time. If you have any concerns about how we handle your data, please contact us, and we will address them promptly.
        </p>
      </div>
    </section>
  );
};

export default Compliance;
```
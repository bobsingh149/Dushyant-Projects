import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Privacy Policy</h1>
      </header>
      <div className="container">
        <div className="content privacy-content">
          <h1>Privacy Policy for Cliffhanger</h1>
          <p>Last updated: [Current Date]</p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>Cliffhanger collects the following information:</p>
            <ul>
              <li>Camera data when you choose to upload photos</li>
              <li>Information you provide through the app</li>
              <li>Internet access data for app functionality</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Enabling you to share book-related content</li>
              <li>Improving user experience</li>
              <li>Providing our core social media services</li>
            </ul>
          </section>

          <section>
            <h2>3. Permissions</h2>
            <h3>Camera Permission</h3>
            <p>We request camera access to allow you to:</p>
            <ul>
              <li>Take photos of books</li>
              <li>Share book-related content</li>
              <li>Update your profile picture</li>
            </ul>

            <h3>Internet Permission</h3>
            <p>Internet access is required to:</p>
            <ul>
              <li>Connect with other users</li>
              <li>Upload and download content</li>
              <li>Access our services</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: [Your Contact Email]</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 
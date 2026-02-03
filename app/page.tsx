import ClientScript from './components/ClientScript';

export default function Home() {
  return (
    <>
      <ClientScript />
      {/* Header Navigation */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">
            <h1>CurvedSpace Investment Services</h1>
          </div>
          <ul className="nav-menu" id="navMenu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#industries" className="nav-link">Industries</a></li>
            <li><a href="#results" className="nav-link">Results</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="nav-toggle" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Strategic Treasury Management & Investor Services</h1>
          <p className="hero-subtitle">for Growing Organizations</p>
          <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-target="20">0</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$75M</div>
              <div className="stat-label">Warehouse Line Managed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="17">0</div>
              <div className="stat-label">Average Cost Reduction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="5">0</div>
              <div className="stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Comprehensive Financial Services</h2>
          <p className="section-subtitle">Expert treasury management and investor relations solutions tailored to your organization&apos;s unique needs.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3 className="service-title">Treasury Management</h3>
              <p className="service-description">Optimize cash flow, reduce costs, and streamline operations with proven treasury strategies and systems implementation.</p>
              <ul className="service-list">
                <li>Cash flow forecasting and liquidity management</li>
                <li>Disbursement operations and funding coordination</li>
                <li>Banking relationship optimization and fee reduction</li>
                <li>ACH process controls and wire transfer oversight</li>
                <li>Risk management and compliance frameworks</li>
                <li>Treasury system implementation and automation</li>
                <li>Financial reporting automation</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Investor Services</h3>
              <p className="service-description">Professional investor relations, distribution management, and stakeholder communication to strengthen relationships.</p>
              <ul className="service-list">
                <li>Investor onboarding and communication strategies</li>
                <li>Distribution management and reporting</li>
                <li>Stakeholder relationship coordination</li>
                <li>Private equity fund reconciliation</li>
                <li>Client service excellence programs</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3 className="service-title">Process Optimization</h3>
              <p className="service-description">Implement automation and controls that save time, reduce errors, and improve operational efficiency.</p>
              <ul className="service-list">
                <li>Workflow automation and process redesign</li>
                <li>System integration and data management</li>
                <li>Quality control and error reduction</li>
                <li>Performance metrics and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Proven expertise delivering measurable results for financial services organizations.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3 className="feature-title">Proven Track Record</h3>
              <p className="feature-description">Over 20 years of experience in treasury operations and investor services with documented cost savings and efficiency improvements.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Measurable Results</h3>
              <p className="feature-description">Delivered 9-17% cost reductions, captured $45K in early payment discounts, and saved 12+ hours monthly through automation.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Industry Expertise</h3>
              <p className="feature-description">Deep understanding of private lending, investment management, and financial services operations and compliance requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About CurvedSpace</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="lead">Professional treasury management and investor services for growing financial services organizations.</p>
              <p>With over 20 years of experience in treasury operations and investor services, CurvedSpace Investment Services brings senior-level expertise to organizations seeking to optimize their financial operations and strengthen investor relationships.</p>
              <h3>Key Experience Highlights</h3>
              <ul className="experience-list">
                <li>20+ years in treasury operations and investor services</li>
                <li>Managed $75MM warehouse line</li>
                <li>Reduced costs by 9-17% for clients</li>
                <li>Captured $45K in early payment discounts</li>
                <li>Implemented systems saving 12+ hours monthly</li>
              </ul>
              <h3>Our Approach</h3>
              <p>We believe in personalized, senior-level expertise delivered with attention to detail and process optimization. Our flexible engagement models—hourly, project-based, or retainer—ensure that our services align perfectly with your organization&apos;s needs and growth stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="industries">
        <div className="container">
          <h2 className="section-title">Industries Served</h2>
          <p className="section-subtitle">Specialized expertise across multiple sectors of the financial services industry.</p>
          
          <div className="industries-grid">
            <div className="industry-card">
              <h3 className="industry-title">Private Lending</h3>
              <p>Comprehensive treasury management for hard money lenders, private lenders, and alternative lending platforms. Expertise in warehouse line management, disbursement operations, and investor reporting.</p>
            </div>
            
            <div className="industry-card">
              <h3 className="industry-title">Investment Management</h3>
              <p>Professional investor relations and treasury services for investment firms, private equity funds, and asset managers. Streamlined distribution management and stakeholder communication.</p>
            </div>
            
            <div className="industry-card">
              <h3 className="industry-title">Financial Services</h3>
              <p>End-to-end treasury operations optimization for financial services organizations. Banking relationship management, process automation, and compliance framework implementation.</p>
            </div>
            
            <div className="industry-card">
              <h3 className="industry-title">Commercial Real Estate</h3>
              <p>Treasury and investor services tailored to real estate investment firms and commercial property management companies. Cash flow optimization and investor communication strategies.</p>
            </div>
            
            <div className="industry-card">
              <h3 className="industry-title">Professional Services</h3>
              <p>Fractional treasury services for growth-stage businesses in professional services sectors. Scalable solutions that grow with your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="results">
        <div className="container">
          <h2 className="section-title">Results & Impact</h2>
          <p className="section-subtitle">Measurable outcomes that drive value for our clients.</p>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-number" data-target="17">0</div>
              <div className="result-label">% Reduction in Unnecessary Bank Fees</div>
            </div>
            
            <div className="result-card">
              <div className="result-number" data-target="15">0</div>
              <div className="result-label">% Reduction in Misrouted Payment Items</div>
            </div>
            
            <div className="result-card">
              <div className="result-number" data-target="10">0</div>
              <div className="result-label">% Improvement in Payment Processing Time</div>
            </div>
            
            <div className="result-card">
              <div className="result-number">$45K</div>
              <div className="result-label">Captured in Early Payment Discounts</div>
            </div>
            
            <div className="result-card">
              <div className="result-number">12</div>
              <div className="result-label">Hours Monthly Reduction in Manual Reporting</div>
            </div>
            
            <div className="result-card">
              <div className="result-number" data-target="33">0</div>
              <div className="result-label">% Reduction in Inbound Call Traffic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Schedule a Complimentary Consultation</h2>
          <p className="section-subtitle">Let&apos;s discuss how we can optimize your treasury operations and strengthen your investor relationships.</p>
          
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <form id="contactForm" className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                  <span className="error-message" id="nameError"></span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                  <span className="error-message" id="emailError"></span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                  <span className="error-message" id="phoneError"></span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                  <span className="error-message" id="messageError"></span>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
                <div id="formSuccess" className="form-success" style={{display: 'none'}}>
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
                <div id="formError" className="form-error" style={{display: 'none'}}>
                  There was an error sending your message. Please try again or contact us directly.
                </div>
              </form>
            </div>
            
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Location:</strong>
                  <p>San Francisco Bay Area</p>
                  <p>Service Area: Northern California and beyond</p>
                </div>
                
                <div className="contact-item">
                  <strong>Email:</strong>
                  <p><a href="mailto:curvedspace@proton.me">curvedspace@proton.me</a></p>
                </div>
                
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <p><a href="tel:17075822112">(707) 582-2112</a></p>
                </div>
                
                <div className="contact-item">
                  <strong>LinkedIn:</strong>
                  <p><a href="https://linkedin.com/in/thehappyanalyst/" target="_blank" rel="noopener noreferrer">linkedin.com/in/thehappyanalyst/</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>CurvedSpace Investment Services</h4>
              <p>Professional treasury management and investor services for growing financial services organizations.</p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Treasury Management</a></li>
                <li><a href="#services">Investor Services</a></li>
                <li><a href="#services">Process Optimization</a></li>
                <li><a href="#services">Fractional Treasury</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>San Francisco Bay Area</li>
                <li><a href="mailto:curvedspace@proton.me">curvedspace@proton.me</a></li>
                <li><a href="tel:17075822112">(707) 582-2112</a></li>
                <li><a href="https://linkedin.com/in/thehappyanalyst/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 CurvedSpace Investment Services. All rights reserved. | San Francisco Bay Area</p>
          </div>
        </div>
      </footer>
    </>
  );
}

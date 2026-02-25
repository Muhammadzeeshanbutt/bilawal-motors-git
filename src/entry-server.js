/**
 * @param {string} _url
 */
export function render(_url) {
  const html = `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <header class="hero-header">
        <div class="nav-bar">
          <a href="#home" class="nav-logo-link">
            <img src="/logo.svg" alt="BM Bilawal Motors" class="nav-logo-img" />
          </a>
          <nav class="hero-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </header>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-line">Premium Vehicle</span>
          <span class="hero-title-line hero-title-line--large">Import & Export</span>
        </h1>
        <p class="hero-tagline">We are a Singapore-based company specializing in exporting quality vehicles and auto spare parts around the world.</p>
        <div class="hero-buttons">
          <a href="#gallery" class="btn btn-primary">View Stock</a>
          <a href="#contact" class="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <h2 class="services-title">Our Services</h2>
      <p class="services-subtitle">Comprehensive vehicle export solutions tailored to meet your needs</p>
      <div class="services-cards">
        <div class="service-card">
          <div class="service-icon service-icon--globe">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3 class="service-card-title">Global Export Network</h3>
          <p class="service-card-desc">We export cars around the world in the shortest time. Our regular clients are from Pakistan, Africa, and UAE.</p>
        </div>
        <div class="service-card">
          <div class="service-icon service-icon--car">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14v-5H5v5z"/><path d="M5 12V8l4-4h6l4 4v4"/><circle cx="7.5" cy="16" r="1.5"/><circle cx="16.5" cy="16" r="1.5"/></svg>
          </div>
          <h3 class="service-card-title">Quality Vehicles</h3>
          <p class="service-card-desc">We export complete quality vehicles from Singapore market and auctions. Japanese, Korean, and Continental cars available.</p>
        </div>
        <div class="service-card">
          <div class="service-icon service-icon--box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </div>
          <h3 class="service-card-title">Auto Spare Parts</h3>
          <p class="service-card-desc">Wide selection of genuine auto spare parts and accessories for all major brands and models.</p>
        </div>
      </div>
    </section>

    <section class="what-we-offer">
      <h2 class="what-we-offer-title">What We Offer</h2>
      <div class="what-we-offer-grid">
        <ul class="offer-list">
          <li><span class="offer-check"></span> Japanese brands: Toyota, Honda, Nissan, Mazda, Subaru</li>
          <li><span class="offer-check"></span> Continental brands: Mercedes-Benz, BMW, Audi, Volkswagen</li>
          <li><span class="offer-check"></span> Quality inspection and certification</li>
          <li><span class="offer-check"></span> Shipping and logistics support</li>
        </ul>
        <ul class="offer-list">
          <li><span class="offer-check"></span> Korean brands: Hyundai, Kia, Genesis</li>
          <li><span class="offer-check"></span> Complete export documentation</li>
          <li><span class="offer-check"></span> Competitive pricing and financing options</li>
          <li><span class="offer-check"></span> After-sales service and support</li>
        </ul>
      </div>
    </section>

    <section class="gallery" id="gallery">
      <h2 class="gallery-title">Stock & Gallery</h2>
      <p class="gallery-subtitle">Browse our current inventory of premium vehicles and auto parts</p>
      <div class="gallery-grid">
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-1.png" alt="Nissan GT-R" class="gallery-card-image" />
            <span class="gallery-tag">Japanese Sports</span>
          </div>
          <h3 class="gallery-card-title">Nissan GT-R</h3>
          <p class="gallery-card-price">$85,000</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> 2022</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> 15,000 km</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-2.png" alt="Mercedes-Benz S-Class" class="gallery-card-image" />
            <span class="gallery-tag">Continental Luxury</span>
          </div>
          <h3 class="gallery-card-title">Mercedes-Benz S-Class</h3>
          <p class="gallery-card-price">$120,000</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> 2023</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> 8,000 km</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-3.png" alt="Hyundai Tucson" class="gallery-card-image" />
            <span class="gallery-tag">Korean SUV</span>
          </div>
          <h3 class="gallery-card-title">Hyundai Tucson</h3>
          <p class="gallery-card-price">$45,000</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> 2023</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> 12,000 km</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-1.png" alt="Porsche 911" class="gallery-card-image" />
            <span class="gallery-tag">Continental Sports</span>
          </div>
          <h3 class="gallery-card-title">Porsche 911</h3>
          <p class="gallery-card-price">$145,000</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> 2022</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> 10,000 km</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-2.png" alt="Auto Parts" class="gallery-card-image" />
            <span class="gallery-tag">Spare Parts</span>
          </div>
          <h3 class="gallery-card-title">Auto Parts & Accessories</h3>
          <p class="gallery-card-price">Various</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> New</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> N/A</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-3.png" alt="Toyota Camry" class="gallery-card-image" />
            <span class="gallery-tag">Japanese Sedan</span>
          </div>
          <h3 class="gallery-card-title">Toyota Camry</h3>
          <p class="gallery-card-price">$38,000</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> 2023</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> 5,000 km</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
      </div>
      <p class="gallery-footer-text">Looking for something specific? We have access to thousands of vehicles.</p>
      <a href="#contact" class="gallery-cta-btn">Contact Us for More Options</a>
    </section>

    <section class="stay-connected">
      <h2 class="stay-connected-title">
        <span class="stay-connected-icon" aria-hidden="true"></span>
        Stay Connected
      </h2>
      <p class="stay-connected-subtitle">Follow us on social media for the latest updates, exclusive deals, and behind-the-scenes content.</p>
      <div class="stay-connected-cards">
        <a href="https://instagram.com/bilawamotors" target="_blank" rel="noopener" class="social-card social-card--instagram">
          <span class="social-card-icon social-card-icon--instagram" aria-hidden="true"></span>
          <h3 class="social-card-title">Instagram</h3>
          <p class="social-card-desc">Daily updates of our latest vehicles and exclusive behind-the-scenes content <strong>@bilawamotors</strong> <span class="social-arrow">→</span></p>
        </a>
        <a href="https://youtube.com/@bilawalmotors" target="_blank" rel="noopener" class="social-card social-card--youtube">
          <span class="social-card-icon social-card-icon--youtube" aria-hidden="true"></span>
          <h3 class="social-card-title">YouTube</h3>
          <p class="social-card-desc">Watch detailed vehicle reviews, walkarounds, and export process <strong>Bilawal Motors</strong> <span class="social-arrow">→</span></p>
        </a>
        <a href="https://wa.me/6512345676" target="_blank" rel="noopener" class="social-card social-card--whatsapp">
          <span class="social-card-icon social-card-icon--whatsapp" aria-hidden="true"></span>
          <h3 class="social-card-title">WhatsApp</h3>
          <p class="social-card-desc">Get instant responses to your queries. Chat with us directly for quick support <strong>+65 1234 5676</strong> <span class="social-arrow">→</span></p>
        </a>
      </div>
      <div class="dont-miss-out">
        <h3 class="dont-miss-title">Don't Miss Out!</h3>
        <p class="dont-miss-desc">Join thousands of satisfied customers who trust Bilawal Motors for their vehicle import and export needs. Follow us today for exclusive deals and early access to new inventory.</p>
        <div class="dont-miss-buttons">
          <a href="https://instagram.com/bilawamotors" target="_blank" rel="noopener" class="dont-miss-btn dont-miss-btn--instagram">Follow on Instagram</a>
          <a href="https://youtube.com/@bilawalmotors" target="_blank" rel="noopener" class="dont-miss-btn dont-miss-btn--youtube">Subscribe on YouTube</a>
          <a href="https://wa.me/6512345676" target="_blank" rel="noopener" class="dont-miss-btn dont-miss-btn--whatsapp">Chat on WhatsApp</a>
        </div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <h2 class="contact-title">Contact Us</h2>
      <p class="contact-subtitle">Get in touch with us to discuss your vehicle import/export needs</p>
      <div class="contact-grid">
        <div class="contact-panel contact-form-panel">
          <h3 class="contact-panel-title">Send us a Message</h3>
          <form class="contact-form" action="#" method="post">
            <label for="contact-name">Name</label>
            <input type="text" id="contact-name" name="name" placeholder="Your name" required />
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" name="email" placeholder="your@email.com" required />
            <label for="contact-phone">Phone</label>
            <input type="tel" id="contact-phone" name="phone" placeholder="+1 234 567 8900" />
            <label for="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell us about your requirements..."></textarea>
            <button type="submit" class="contact-submit">Send Message</button>
          </form>
        </div>
        <div class="contact-panel contact-info-panel">
          <h3 class="contact-panel-title">Get In Touch</h3>
          <div class="contact-detail">
            <span class="contact-detail-icon contact-icon--address" aria-hidden="true"></span>
            <div>
              <strong>Address</strong><br />
              Singapore Business District<br />
              Singapore
            </div>
          </div>
          <div class="contact-detail">
            <span class="contact-detail-icon contact-icon--phone" aria-hidden="true"></span>
            <div>
              <strong>Phone</strong><br />
              +65 1234 5578
            </div>
          </div>
          <div class="contact-detail">
            <span class="contact-detail-icon contact-icon--email" aria-hidden="true"></span>
            <div>
              <strong>Email</strong><br />
              info@bilawalmotors.com
            </div>
          </div>
          <h3 class="contact-panel-title contact-panel-title--connect">Connect With Us</h3>
          <div class="contact-social-icons">
            <a href="https://instagram.com/bilawamotors" target="_blank" rel="noopener" class="contact-social-icon contact-social-icon--instagram" aria-label="Instagram"></a>
            <a href="https://youtube.com/@bilawalmotors" target="_blank" rel="noopener" class="contact-social-icon contact-social-icon--youtube" aria-label="YouTube"></a>
            <a href="https://wa.me/6512345676" target="_blank" rel="noopener" class="contact-social-icon contact-social-icon--whatsapp" aria-label="WhatsApp"></a>
          </div>
          <p class="contact-connect-desc">Follow us on Instagram and YouTube for latest inventory updates. Chat with us on WhatsApp for quick inquiries.</p>
          <div class="business-hours">
            <h3 class="contact-panel-title">Business Hours</h3>
            <div class="business-hours-row">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div class="business-hours-row">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
            <div class="business-hours-row">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-col footer-about">
          <div class="footer-logo">BM <span class="footer-logo-accent">BILAWAL</span><br /><span class="footer-logo-motors">MOTORS</span></div>
          <p class="footer-desc">Your trusted partner for vehicle import and export services. Connecting buyers and sellers across the globe with quality vehicles from Singapore.</p>
        </div>
        <div class="footer-col footer-links">
          <h4 class="footer-heading">Quick Links</h4>
          <nav class="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
        <div class="footer-col footer-services">
          <h4 class="footer-heading">Our Services</h4>
          <ul class="footer-services-list">
            <li>Vehicle Export</li>
            <li>Auto Spare Parts</li>
            <li>Quality Inspection</li>
            <li>Shipping & Logistics</li>
          </ul>
        </div>
      </div>
      <div class="footer-divider"></div>
      <p class="footer-copyright">© 2026 Bilawal Motors. All rights reserved.</p>
    </footer>
  `
  return { html }
}

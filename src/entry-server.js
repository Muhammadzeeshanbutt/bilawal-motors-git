/** Gallery images (used in home gallery section and lightbox) */
const GALLERY_IMAGES = [
  { src: '/gallery-1.jpeg', alt: 'BMW X1', tag: 'BMW', title: 'BMW X1', price: 'Inquiry', year: '', km: '65,000 km', location: 'Singapore' },
  { src: '/gallery-2.jpeg', alt: 'Nissan Qashqai', tag: 'Japanese SUV', title: 'Nissan Qashqai', price: '', year: '', km: '52,000 km', location: 'Singapore' },
  { src: '/gallery-8.png', alt: 'Mazda 3', tag: 'Japanese Hatchback', title: 'Mazda 3', price: '', year: '', km: '62,000 km', location: 'Singapore' },
  { src: '/gallery-4.png', alt: 'Gold A7', tag: 'Continental', title: 'Gold A7', price: '', year: '', km: '71,000 km', location: 'Singapore' },
  { src: '/gallery-5.png', alt: 'Body Panels & Engines', tag: 'Spare Parts', title: 'Body Panels & Engines', price: 'Various', year: 'New', km: 'N/A', location: 'Singapore' },
  { src: '/gallery-6.png', alt: 'Salvage Vehicles', tag: 'Salvage Stock', title: 'Salvage Vehicles', price: 'Inquiry', year: 'Various', km: 'As-is', location: 'Singapore' },
  { src: '/gallery-7.png', alt: 'Container Loading', tag: 'Spare Parts', title: 'Container Loading', price: '', year: '', km: '', location: '' },
  { src: '/gallery-3.png', alt: 'Mazda 3 Sedan', tag: 'Japanese Sedan', title: 'Mazda 3 Sedan', price: '$45,000', year: '2023', km: '12,000 km', location: 'Singapore' },
  { src: '/gallery-9.png', alt: 'Engines', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: '' },
  { src: '/gallery-extra-1.png', alt: 'BMW 1 Series hatchback, Singapore', tag: 'BMW', title: 'BMW 1 Series', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-2.png', alt: 'Mazda 3 red, Singapore', tag: 'Japanese Hatchback', title: 'Mazda 3', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-3.png', alt: 'Nissan Qashqai silver, Singapore', tag: 'Japanese SUV', title: 'Nissan Qashqai', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-4.png', alt: 'Mazda 3 sedan container loading, Singapore', tag: 'Japanese Sedan', title: 'Mazda 3', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-5.png', alt: 'BMW white, Singapore', tag: 'BMW', title: 'BMW', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-6.png', alt: 'Nissan Qashqai bronze DIG-T, Singapore', tag: 'Japanese SUV', title: 'Nissan Qashqai', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-7.png', alt: 'Mazda 3 silver sedan, Singapore', tag: 'Japanese Sedan', title: 'Mazda 3', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-8.png', alt: 'BMW 1 Series white, Singapore', tag: 'BMW', title: 'BMW 1 Series', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-9.png', alt: 'Toyota silver sedan, Singapore', tag: 'Japanese', title: 'Toyota', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-10.png', alt: 'Mazda sedan container loading, Singapore', tag: 'Japanese Sedan', title: 'Mazda', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-11.png', alt: 'Mitsubishi Outlander with hood open, Singapore', tag: 'Japanese SUV', title: 'Mitsubishi Outlander', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-12.png', alt: 'BMW black, Singapore', tag: 'BMW', title: 'BMW', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-13.png', alt: 'Volkswagen Golf white, Singapore', tag: 'Continental', title: 'Volkswagen Golf', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-14.png', alt: 'BMW M Sport black, Singapore', tag: 'BMW', title: 'BMW', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-15.png', alt: 'Mercedes-Benz E-Class light blue, Singapore', tag: 'Continental', title: 'Mercedes-Benz E-Class', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-16.png', alt: 'White SUV container loading, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-17.png', alt: 'Two Mazda sedans stacked in shipping container, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-18.png', alt: 'Silver car secured at angle for container shipping, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-19.png', alt: 'White BMW SUV braced inside shipping container, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-20.png', alt: 'White BMW X1 secured in shipping container, Singapore', tag: 'BMW', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-21.png', alt: 'Two white BMW cars stacked in shipping container, Singapore', tag: 'BMW', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-22.png', alt: 'Mazda front clip with Skyactiv engine, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-23.png', alt: 'Mercedes-Benz front with engine bay exposed, Singapore', tag: 'Continental', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-24.png', alt: 'Shipping container packed with doors, tyres, panels and engines, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-25.png', alt: 'Export logistics yard, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-26.png', alt: 'Automotive export facility, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-27.png', alt: 'Vehicle stock yard, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-28.png', alt: 'Motor trade operations, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-29.png', alt: 'Parts export preparation, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-30.png', alt: 'Workshop yard scene, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-31.png', alt: 'Shipping yard vehicle, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-32.png', alt: 'Export inventory, Singapore', tag: 'Spare Parts', title: 'Gallery', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-33.png', alt: 'White BMW and dark Mazda sedans stacked in shipping container, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-34.png', alt: 'Toyota Harrier with open engine bay in parts yard, Singapore', tag: 'Japanese SUV', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-35.png', alt: 'Suzuki Swift rear quarter panel, Singapore', tag: 'Japanese', title: 'Parts', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-36.png', alt: 'Lexus sedan front with exposed engine bay, Singapore', tag: 'Japanese', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-37.png', alt: 'Toyota Harrier front view, Singapore', tag: 'Japanese SUV', title: 'Toyota Harrier', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-38.png', alt: 'White Toyota Harrier in dismantling yard, Singapore', tag: 'Japanese SUV', title: 'Toyota Harrier', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-39.png', alt: 'Nissan and Mercedes-Benz front half-cuts, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-40.png', alt: 'Shipping container interior with wrapped parts and components, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-41.png', alt: 'Shipping container packed with rotors, steering wheels and parts, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-42.png', alt: 'Container load of body panels, tyres and wrapped parts, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-43.png', alt: 'Gold Mazda front clip with engine bay visible, Singapore', tag: 'Japanese', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-44.png', alt: 'Honda Civic rear with roof removed, Singapore', tag: 'Japanese', title: 'Honda Civic', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-45.png', alt: 'Dense container packing of automotive parts, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-46.png', alt: 'Mercedes-Benz E-Class grey half-cut, Singapore', tag: 'Continental', title: 'Mercedes-Benz', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-47.png', alt: 'Shipping container with doors, seats and chassis sections, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-48.png', alt: 'Blue shipping container packed with parts and tyres, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-49.png', alt: 'Shipping container stacked with car body panels and hoods, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-50.png', alt: 'Container with Toyota and Honda steering wheels, engine front cut and doors, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-51.png', alt: 'Black Toyota Camry VVT-i with open engine bay, Singapore', tag: 'Japanese', title: 'Toyota Camry', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-52.png', alt: 'Toyota Harrier maroon front view, Singapore', tag: 'Japanese SUV', title: 'Toyota Harrier', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-53.png', alt: 'Lexus sedan burgundy front, Singapore', tag: 'Japanese', title: 'Lexus', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-54.png', alt: 'Honda and Toyota Harrier front clips with exposed engines, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-55.png', alt: 'Honda Civic rear with shattered window in parts yard, Singapore', tag: 'Japanese', title: 'Honda Civic', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-56.png', alt: 'Shipping container with engines, tyres, Honda steering wheel and body panels, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-57.png', alt: 'Green shipping container filled with car body panels, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-58.png', alt: 'Shipping container packed with mixed auto parts and panels, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-59.png', alt: 'White shipping container with stacked doors and body panels, Singapore', tag: 'Spare Parts', title: 'Container loading', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-60.png', alt: 'Toyota VVT-i engines packed in red transport rack, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-61.png', alt: 'Blue shipping container with doors, wiring and engine assemblies, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
  { src: '/gallery-extra-62.png', alt: 'Blue shipping container packed with doors, rotors and engine blocks, Singapore', tag: 'Spare Parts', title: 'Engines', price: '', year: '', km: '', location: 'Singapore' },
]

/** Gallery images as simple list for lightbox (src, alt) */
const GALLERY_IMAGES_DATA = GALLERY_IMAGES.map((item) => ({ src: item.src, alt: item.alt }))
const GALLERY_IMAGES_JSON = JSON.stringify(GALLERY_IMAGES_DATA).replace(/</g, '\\u003c')

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

    <section class="gallery" id="gallery">
      <h2 class="gallery-title">Stock & Gallery</h2>
      <p class="gallery-subtitle">Browse our current inventory of premium vehicles and auto parts</p>
      <div class="gallery-grid">
        <div class="gallery-card gallery-card--thumb-detail">
          <div class="gallery-card-image-wrap gallery-card-image-wrap--white-frame">
            <div class="gallery-thumb-white">
              <img src="/gallery-1.jpeg" alt="BMW X1" class="gallery-card-image gallery-card-image--thumb" />
            </div>
            <span class="gallery-tag">BMW</span>
          </div>
          <div class="gallery-thumb-meta">
            <ul class="gallery-thumb-details-column">
              <li class="gallery-thumb-line gallery-thumb-line--model">BMW X1</li>
              <li class="gallery-thumb-line gallery-thumb-line--mileage">Mileage 65,000 km</li>
              <li class="gallery-thumb-line gallery-thumb-line--location">Singapore</li>
            </ul>
          </div>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card gallery-card--thumb-detail">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-2.jpeg" alt="Nissan Qashqai" class="gallery-card-image" />
            <span class="gallery-tag">Japanese SUV</span>
          </div>
          <div class="gallery-thumb-meta">
            <ul class="gallery-thumb-details-column">
              <li class="gallery-thumb-line gallery-thumb-line--model">Nissan Qashqai</li>
              <li class="gallery-thumb-line gallery-thumb-line--mileage">Mileage 52,000 km</li>
              <li class="gallery-thumb-line gallery-thumb-line--location">Singapore</li>
            </ul>
          </div>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card gallery-card--thumb-detail">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-8.png" alt="Mazda 3" class="gallery-card-image" />
            <span class="gallery-tag">Japanese Hatchback</span>
          </div>
          <div class="gallery-thumb-meta">
            <ul class="gallery-thumb-details-column">
              <li class="gallery-thumb-line gallery-thumb-line--model">Mazda 3</li>
              <li class="gallery-thumb-line gallery-thumb-line--mileage">Mileage 62,000 km</li>
              <li class="gallery-thumb-line gallery-thumb-line--location">Singapore</li>
            </ul>
          </div>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card gallery-card--thumb-detail">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-4.png" alt="Gold A7" class="gallery-card-image" />
            <span class="gallery-tag">Continental</span>
          </div>
          <div class="gallery-thumb-meta">
            <ul class="gallery-thumb-details-column">
              <li class="gallery-thumb-line gallery-thumb-line--model">Gold A7</li>
              <li class="gallery-thumb-line gallery-thumb-line--mileage">Mileage 71,000 km</li>
              <li class="gallery-thumb-line gallery-thumb-line--location">Singapore</li>
            </ul>
          </div>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-5.png" alt="Body Panels & Engines" class="gallery-card-image" />
            <span class="gallery-tag">Spare Parts</span>
          </div>
          <h3 class="gallery-card-title">Body Panels & Engines</h3>
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
            <img src="/gallery-6.png" alt="Salvage Vehicles" class="gallery-card-image" />
            <span class="gallery-tag">Salvage Stock</span>
          </div>
          <h3 class="gallery-card-title">Salvage Vehicles</h3>
          <p class="gallery-card-price">Inquiry</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> Various</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> As-is</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card gallery-card--caption-only">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-7.png" alt="Container Loading" class="gallery-card-image" />
            <span class="gallery-tag">Spare Parts</span>
          </div>
          <h3 class="gallery-card-title gallery-card-title--solo-caption">Container Loading</h3>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-3.png" alt="Mazda 3 Sedan" class="gallery-card-image" />
            <span class="gallery-tag">Japanese Sedan</span>
          </div>
          <h3 class="gallery-card-title">Mazda 3 Sedan</h3>
          <p class="gallery-card-price">$45,000</p>
          <ul class="gallery-card-details">
            <li><span class="gallery-detail-icon gallery-icon--year"></span> 2023</li>
            <li><span class="gallery-detail-icon gallery-icon--odo"></span> 12,000 km</li>
            <li><span class="gallery-detail-icon gallery-icon--pin"></span> Singapore</li>
          </ul>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
        <div class="gallery-card gallery-card--caption-only">
          <div class="gallery-card-image-wrap">
            <img src="/gallery-9.png" alt="Engines" class="gallery-card-image" />
            <span class="gallery-tag">Spare Parts</span>
          </div>
          <h3 class="gallery-card-title gallery-card-title--solo-caption">Engines</h3>
          <a href="#contact" class="gallery-btn">Request Details</a>
        </div>
      </div>
      <p class="gallery-footer-text">Looking for something specific? We have access to thousands of vehicles.</p>
      <button type="button" class="gallery-cta-btn" id="open-gallery-lightbox">See complete gallery</button>
    </section>

    <div class="gallery-lightbox" id="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image gallery" aria-hidden="true">
      <div class="gallery-lightbox-backdrop"></div>
      <button type="button" class="gallery-lightbox-close" aria-label="Close gallery"><span aria-hidden="true">&times;</span></button>
      <div class="gallery-lightbox-content">
        <button type="button" class="gallery-lightbox-prev" aria-label="Previous image"><span aria-hidden="true">&larr;</span></button>
        <img class="gallery-lightbox-img" id="gallery-lightbox-img" src="${GALLERY_IMAGES_DATA[0].src}" alt="${GALLERY_IMAGES_DATA[0].alt.replace(/"/g, '&quot;')}" />
        <button type="button" class="gallery-lightbox-next" aria-label="Next image"><span aria-hidden="true">&rarr;</span></button>
      </div>
      <div class="gallery-lightbox-counter"><span id="gallery-lightbox-counter">1 / ${GALLERY_IMAGES_DATA.length}</span></div>
    </div>
    <script type="application/json" id="gallery-images-data">${GALLERY_IMAGES_JSON}</script>

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
        <a href="https://wa.me/6590357663" target="_blank" rel="noopener" class="social-card social-card--whatsapp">
          <span class="social-card-icon social-card-icon--whatsapp" aria-hidden="true"></span>
          <h3 class="social-card-title">WhatsApp</h3>
          <p class="social-card-desc">Get instant responses to your queries. Chat with us directly for quick support <strong>+65 9035 7663</strong> <span class="social-arrow">→</span></p>
        </a>
      </div>
      <div class="dont-miss-out">
        <h3 class="dont-miss-title">Don't Miss Out!</h3>
        <p class="dont-miss-desc">Join thousands of satisfied customers who trust Bilawal Motors for their vehicle import and export needs. Follow us today for exclusive deals and early access to new inventory.</p>
        <div class="dont-miss-buttons">
          <a href="https://instagram.com/bilawamotors" target="_blank" rel="noopener" class="dont-miss-btn dont-miss-btn--instagram">Follow on Instagram</a>
          <a href="https://youtube.com/@bilawalmotors" target="_blank" rel="noopener" class="dont-miss-btn dont-miss-btn--youtube">Subscribe on YouTube</a>
          <a href="https://wa.me/6590357663" target="_blank" rel="noopener" class="dont-miss-btn dont-miss-btn--whatsapp">Chat on WhatsApp</a>
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
            <input type="tel" id="contact-phone" name="phone" placeholder="+65 9035 7663" />
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
              Blk 45 Chai Chee Street #04-140<br />
              Singapore 461045
            </div>
          </div>
          <div class="contact-detail">
            <span class="contact-detail-icon contact-icon--phone" aria-hidden="true"></span>
            <div>
              <strong>Phone</strong><br />
              <a href="tel:+6590357663">+65 9035 7663</a>
            </div>
          </div>
          <div class="contact-detail">
            <span class="contact-detail-icon contact-icon--email" aria-hidden="true"></span>
            <div>
              <strong>Email</strong><br />
              <a href="mailto:Bilawalmotors.bm@gmail.com">Bilawalmotors.bm@gmail.com</a>
            </div>
          </div>
          <h3 class="contact-panel-title contact-panel-title--connect">Connect With Us</h3>
          <div class="contact-social-icons">
            <a href="https://instagram.com/bilawamotors" target="_blank" rel="noopener" class="contact-social-icon contact-social-icon--instagram" aria-label="Instagram"></a>
            <a href="https://youtube.com/@bilawalmotors" target="_blank" rel="noopener" class="contact-social-icon contact-social-icon--youtube" aria-label="YouTube"></a>
            <a href="https://wa.me/6590357663" target="_blank" rel="noopener" class="contact-social-icon contact-social-icon--whatsapp" aria-label="WhatsApp"></a>
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

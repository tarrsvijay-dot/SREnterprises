import React from "react";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          SR <span>ENTERPRISES</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="login-btn">
          Login
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="offer-text">
            SPECIAL OFFERS AVAILABLE
          </p>

          <h1>
            Upgrade Your Home.
            <br />
            <span>Save More.</span>
          </h1>

          <p className="hero-description">
            Discover quality appliances and electronics
            from trusted brands at great prices.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Products →
            </button>

            <button className="secondary-btn">
              View Discounts
            </button>
          </div>

          <div className="stats">
            <div>
              <strong>40+</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Brands</span>
            </div>

            <div>
              <strong>Best</strong>
              <span>Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured" id="products">
        <p className="section-label">
          FEATURED
        </p>

        <h2>
          Our Popular Products
        </h2>

        <p className="section-description">
          Quality appliances for every home.
        </p>

        <div className="product-grid">

          <div className="product-card">
            <div className="product-image">
              <img src="/images/iphone.png" alt="Mobile Phone" />
            </div>

            <h3>Mobile Phones</h3>
            <p>Latest smartphones from trusted brands.</p>

            <button>View Products</button>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="/images/washing.png" alt="Washing Machine" />
            </div>

            <h3>Washing Machines</h3>
            <p>Powerful and efficient washing machines.</p>

            <button>View Products</button>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="/images/AC.png" alt="Air Conditioner" />
            </div>

            <h3>Air Conditioners</h3>
            <p>Stay cool with modern AC systems.</p>

            <button>View Products</button>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="/images/fridge.png" alt="Refrigerator" />
            </div>

            <h3>Refrigerators</h3>
            <p>Smart and energy-efficient refrigerators.</p>

            <button>View Products</button>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="categories">
        <p className="section-label">
          SHOP BY CATEGORY
        </p>

        <h2>
          Everything Your Home Needs
        </h2>

        <div className="category-grid">
          <div className="category-card">
            <h3>📱 Electronics</h3>
            <p>Phones, TVs and more</p>
          </div>

          <div className="category-card">
            <h3>❄️ Cooling</h3>
            <p>ACs, coolers and fans</p>
          </div>

          <div className="category-card">
            <h3>🧺 Home Appliances</h3>
            <p>Washing machines and more</p>
          </div>

          <div className="category-card">
            <h3>🏠 Kitchen</h3>
            <p>Modern kitchen appliances</p>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="offers" id="offers">
        <div>
          <p className="section-label">
            SPECIAL OFFER
          </p>

          <h2>
            Great Products.
            <br />
            Better Prices.
          </h2>

          <p>
            Check out our latest deals and discounts
            on selected appliances.
          </p>

          <button className="primary-btn">
            View Offers →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <p className="section-label">
          CONTACT US
        </p>

        <h2>
          Need Help Choosing?
        </h2>

        <p>
          Our team is ready to help you find the
          right appliance for your home.
        </p>

        <button className="primary-btn">
          Contact SR Enterprises
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          SR ENTERPRISES
        </div>

        <p>
          Quality appliances. Trusted service.
        </p>

        <p className="copyright">
          © 2026 SR Enterprises. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
import "../App.css";

function Home() {
  return (
    <div className="home">

      {/* HERO / DASHBOARD */}

      <section className="hero-section" id="dashboard">

        <div className="hero-left">

          <div className="hero-badge">
            🔥 SPECIAL OFFERS AVAILABLE
          </div>

          <h1>
            Make Your Home
            <br />
            <span>Better.</span>
          </h1>

          <p>
            Discover quality home appliances at great prices.
            Trusted brands, reliable products and better value
            for your home.
          </p>

          <div className="hero-actions">
            <a href="#explore" className="hero-primary">
              Explore Products →
            </a>

            <a href="#discounts" className="hero-secondary">
              View Discounts
            </a>
          </div>

          <div className="hero-stats">

            <div>
              <strong>10+</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Brands</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Customer Focus</span>
            </div>

          </div>

        </div>


        <div className="hero-right">

          <div className="hero-background-circle"></div>

          <div className="appliance-display">

            <div className="display-top">
              <span>SR ENTERPRISES</span>
              <span>QUALITY</span>
            </div>

            <div className="display-icon">
              🏠
            </div>

            <div className="display-bottom">
              <strong>HOME APPLIANCES</strong>
              <span>Smart choices for better living</span>
            </div>

          </div>


          <div className="discount-floating">

            <small>LIMITED OFFER</small>

            <strong>
              UP TO
              <br />
              30% OFF
            </strong>

            <span>Selected Products</span>

          </div>

        </div>

      </section>


      {/* TRUST STRIP */}

      <section className="trust-strip">

        <div>
          <span className="trust-icon">✓</span>

          <div>
            <strong>Trusted Products</strong>
            <p>Quality appliances</p>
          </div>
        </div>


        <div>
          <span className="trust-icon">₹</span>

          <div>
            <strong>Great Prices</strong>
            <p>Value for money</p>
          </div>
        </div>


        <div>
          <span className="trust-icon">★</span>

          <div>
            <strong>Reliable Service</strong>
            <p>Customer first</p>
          </div>
        </div>


        <div>
          <span className="trust-icon">⚡</span>

          <div>
            <strong>Latest Models</strong>
            <p>Modern appliances</p>
          </div>
        </div>

      </section>


      {/* DISCOUNTS */}

      <section className="discount-section" id="discounts">

        <div className="section-heading">

          <div>
            <span>OFFERS & DEALS</span>

            <h2>
              Save More on Your
              <br />
              Next Appliance.
            </h2>
          </div>

          <p>
            Check out our latest appliance offers
            and discover great value for your home.
          </p>

        </div>


        <div className="discount-cards">

          <div className="offer-card blue">

            <div className="offer-icon">
              ❄️
            </div>

            <div className="offer-content">

              <small>UP TO 20% OFF</small>

              <h3>Refrigerators</h3>

              <p>
                Keep your food fresh with modern
                and energy-efficient refrigerators.
              </p>

              <a href="#explore">
                Explore →
              </a>

            </div>

          </div>


          <div className="offer-card green">

            <div className="offer-icon">
              🧺
            </div>

            <div className="offer-content">

              <small>UP TO 25% OFF</small>

              <h3>Washing Machines</h3>

              <p>
                Powerful washing performance
                with modern technology.
              </p>

              <a href="#explore">
                Explore →
              </a>

            </div>

          </div>


          <div className="offer-card purple">

            <div className="offer-icon">
              📺
            </div>

            <div className="offer-content">

              <small>UP TO 30% OFF</small>

              <h3>Televisions</h3>

              <p>
                Upgrade your entertainment
                experience with smart TVs.
              </p>

              <a href="#explore">
                Explore →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* EXPLORE */}

      <section className="explore-section" id="explore">

        <div className="section-center">

          <span>EXPLORE OUR RANGE</span>

          <h2>
            Everything Your Home Needs.
          </h2>

          <p>
            Browse our major appliance categories
            and find the right product for your home.
          </p>

        </div>


        <div className="category-grid">

          <div className="category-item refrigerator-item">

            <div className="category-emoji">
              ❄️
            </div>

            <h3>Refrigerators</h3>

            <p>
              Single door, double door
              and more.
            </p>

            <a href="#contact">
              Enquire →
            </a>

          </div>


          <div className="category-item washing-item">

            <div className="category-emoji">
              🧺
            </div>

            <h3>Washing Machines</h3>

            <p>
              Front load and top load
              models.
            </p>

            <a href="#contact">
              Enquire →
            </a>

          </div>


          <div className="category-item tv-item">

            <div className="category-emoji">
              📺
            </div>

            <h3>Televisions</h3>

            <p>
              Smart TVs and entertainment
              systems.
            </p>

            <a href="#contact">
              Enquire →
            </a>

          </div>


          <div className="category-item kitchen-item">

            <div className="category-emoji">
              🍳
            </div>

            <h3>Kitchen Appliances</h3>

            <p>
              Appliances for a smarter
              kitchen.
            </p>

            <a href="#contact">
              Enquire →
            </a>

          </div>

        </div>

      </section>


      {/* SHOP PREVIEW */}

      <section className="shop-preview" id="shop">

        <div className="shop-image-placeholder">

          <div>
            🏪
          </div>

          <strong>
            SR ENTERPRISES
          </strong>

          <span>
            Your Shop Photo
          </span>

        </div>


        <div className="shop-preview-content">

          <span>
            VISIT OUR STORE
          </span>

          <h2>
            See It.
            <br />
            Compare It.
            <br />
            Choose It.
          </h2>

          <p>
            Visit SR Enterprises and explore our range
            of appliances in person. Our team is ready
            to help you choose the right product.
          </p>

          <a href="#contact">
            Get Directions →
          </a>

        </div>

      </section>


      {/* CONTACT */}

      <section className="contact-section" id="contact">

        <div className="section-center">

          <span>GET IN TOUCH</span>

          <h2>
            We're Here to Help.
          </h2>

          <p>
            Have a question about an appliance?
            Contact SR Enterprises.
          </p>

        </div>


        <div className="contact-cards">

          <div>
            <span>📞</span>

            <h3>Call Us</h3>

            <p>
              Your phone number
            </p>

          </div>


          <div>
            <span>✉️</span>

            <h3>Email Us</h3>

            <p>
              your@email.com
            </p>

          </div>


          <div>
            <span>📍</span>

            <h3>Visit Us</h3>

            <p>
              Your shop address
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
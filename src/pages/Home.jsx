import "../App.css";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero-section" id="dashboard">

        <div className="hero-left">

          <div className="hero-badge">
            🔥 SPECIAL OFFERS AVAILABLE
          </div>

          <h1>
            Upgrade Your Home.
            <br />
            <span>Save More.</span>
          </h1>

          <p>
            Discover quality appliances and electronics
            from trusted brands at great prices.
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
              <strong>4+</strong>
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


        {/* HERO IMAGE */}
        <div className="hero-right">

          <div className="hero-glow"></div>

          <div className="hero-product-card">

            <div className="hero-product-label">
              FEATURED
            </div>

            <img
              src="/images/AC.png"
              alt="Air Conditioner"
            />

            <div className="hero-product-info">
              <span>HOME APPLIANCES</span>
              <strong>Cooler Living Starts Here.</strong>
            </div>

          </div>

          <div className="hero-offer">
            <small>LIMITED OFFER</small>
            <strong>UP TO 30% OFF</strong>
            <span>Selected products</span>
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
            <strong>Latest Products</strong>
            <p>Modern technology</p>
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
              Next Purchase.
            </h2>
          </div>

          <p>
            Check out our latest offers and discover
            great value for your home.
          </p>

        </div>


        <div className="discount-cards">

          <div className="offer-card blue">

            <img
              src="/images/fridge.png"
              alt="Refrigerator"
            />

            <div className="offer-content">
              <small>UP TO 20% OFF</small>

              <h3>Refrigerators</h3>

              <p>
                Modern refrigerators for a
                smarter and fresher home.
              </p>

              <a href="#explore">
                Explore →
              </a>
            </div>

          </div>


          <div className="offer-card green">

            <img
              src="/images/washing.png"
              alt="Washing Machine"
            />

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

            <img
              src="/images/iphone.png"
              alt="iPhone"
            />

            <div className="offer-content">
              <small>SPECIAL DEALS</small>

              <h3>Mobiles & Electronics</h3>

              <p>
                Explore the latest electronics
                and smart devices.
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
            Find What You Need.
          </h2>

          <p>
            Explore our collection of appliances
            and electronics.
          </p>

        </div>


        <div className="category-grid">

          {/* FRIDGE */}
          <div className="category-item">

            <div className="category-image">
              <img
                src="/images/fridge.png"
                alt="Refrigerator"
              />
            </div>

            <div className="category-content">
              <span>HOME APPLIANCE</span>

              <h3>Refrigerators</h3>

              <p>
                Keep your food fresh with
                modern refrigerators.
              </p>

              <a href="#contact">
                Enquire →
              </a>
            </div>

          </div>


          {/* WASHING */}
          <div className="category-item">

            <div className="category-image">
              <img
                src="/images/washing.png"
                alt="Washing Machine"
              />
            </div>

            <div className="category-content">
              <span>HOME APPLIANCE</span>

              <h3>Washing Machines</h3>

              <p>
                Powerful and efficient washing
                solutions.
              </p>

              <a href="#contact">
                Enquire →
              </a>
            </div>

          </div>


          {/* AC */}
          <div className="category-item">

            <div className="category-image">
              <img
                src="/images/AC.png"
                alt="Air Conditioner"
              />
            </div>

            <div className="category-content">
              <span>HOME APPLIANCE</span>

              <h3>Air Conditioners</h3>

              <p>
                Stay comfortable with
                modern cooling technology.
              </p>

              <a href="#contact">
                Enquire →
              </a>
            </div>

          </div>


          {/* IPHONE */}
          <div className="category-item">

            <div className="category-image">
              <img
                src="/images/iphone.png"
                alt="iPhone"
              />
            </div>

            <div className="category-content">
              <span>ELECTRONICS</span>

              <h3>Smartphones</h3>

              <p>
                Latest smartphones and
                smart devices.
              </p>

              <a href="#contact">
                Enquire →
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* SHOP */}
      <section className="shop-preview" id="shop">

        <div className="shop-image-placeholder">

          <div className="shop-icon">
            🏪
          </div>

          <strong>
            SR ENTERPRISES
          </strong>

          <span>
            Shop image coming soon
          </span>

        </div>


        <div className="shop-preview-content">

          <span>VISIT OUR STORE</span>

          <h2>
            See It.
            <br />
            Compare It.
            <br />
            Choose It.
          </h2>

          <p>
            Visit SR Enterprises and explore our
            range of appliances and electronics.
            Our team is ready to help you find
            the right product.
          </p>

          <a href="#contact">
            Contact Us →
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
            Have a question about a product?
            Contact SR Enterprises.
          </p>

        </div>


        <div className="contact-cards">

          <div>
            <span>📞</span>

            <h3>Call Us</h3>

            <p>
              9985954283
            </p>
          </div>


          <div>
            <span>✉️</span>

            <h3>Email Us</h3>

            <p>
              srenterprises72025@email.com
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
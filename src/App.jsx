import './App.css'
import {
  catalogProducts,
  finishingOptions,
  giftItems,
  materials,
  navItems,
  otherServices,
  printingTypes,
} from './data/catalog'

const logoUrl = `${import.meta.env.BASE_URL}logo.jpg`

function PriceTable({ prices, unit }) {
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {prices.map(({ quantity, price }) => (
          <tr key={quantity}>
            <td>{quantity} {unit}</td>
            <td>₹{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ProductCard({ product, index }) {
  return (
    <article className={`product-card product-card-${index + 1}`} id={product.id}>
      <div className="product-image">
        <img src={product.image} alt={`${product.name} print sample`} loading="lazy" />
        <span className="product-index">0{index + 1}</span>
      </div>
      <div className="product-body">
        <p className="product-spec">{product.spec}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="price-groups">
          {product.priceGroups.map((group) => (
            <section className="price-group" key={group.title}>
              <h4>{group.title}</h4>
              <PriceTable prices={group.prices} unit={product.unit} />
            </section>
          ))}
        </div>
        <p className="extra-charge">Design and lamination are charged separately.</p>
      </div>
    </article>
  )
}

function QuickPicks() {
  return (
    <section className="quick-picks" id="quick-picks" aria-labelledby="quick-picks-heading">
      <div className="quick-picks-heading">
        <div>
          <p className="eyebrow">Popular products</p>
          <h2 id="quick-picks-heading">Popular prints<span>.</span></h2>
        </div>
        <p>Browse popular products and see prices by quantity.</p>
      </div>
      <div className="quick-picks-grid">
        {catalogProducts.map((product) => (
          <a className="quick-pick" href={`#${product.id}`} key={product.id}>
            <div className="quick-pick-image">
              <img src={product.image} alt="" loading="lazy" />
              <span aria-hidden="true">↗</span>
            </div>
            <div className="quick-pick-copy">
              <h3>{product.name}</h3>
              <p>
                {product.priceGroups[0].prices[0].quantity} {product.unit}
                {' · '}
                <strong>₹{product.priceGroups[0].prices[0].price}</strong>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <span>Printing for businesses and individuals <i /> Chennai</span>
        <div>
          <a href="tel:+914448646506">044-4864 6506</a>
          <i />
          <a href="mailto:fourcolorprint17@gmail.com">Email the print shop</a>
        </div>
      </div>
      <header className="topbar" id="home">
        <a className="brand" href="#home" aria-label="Four Color Print home">
          <img className="brand-logo" src={logoUrl} alt="" />
          <span className="brand-name">FOUR COLOR <b>PRINT</b></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="tel:+914448646506">
          <span>Call us</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-backdrop" aria-hidden="true">
            {catalogProducts.map((product) => (
              <img key={product.id} src={product.image} alt="" />
            ))}
            <span />
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Local printing in Chennai</p>
            <h1 id="hero-heading">From business cards<br />to <em>big ideas.</em></h1>
            <p className="hero-intro">
              From visiting cards and pamphlets to letterheads, brochures and custom
              jobs, we print for businesses and individuals across Chennai.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#quick-picks">Browse popular prints <span aria-hidden="true">↓</span></a>
              <a className="hero-phone" href="tel:+919600016506">
                <span className="phone-icon" aria-hidden="true">↗</span>
                <span><small>Call us</small><b>96000 16506</b></span>
              </a>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Printing services">
          <div className="ticker-track">
            {Array.from({ length: 2 }, (_, copy) => (
              <span className="ticker-set" key={copy} aria-hidden={copy === 1}>
                <span>Visiting cards</span><i>✳</i><span>Pamphlets</span><i>✳</i>
                <span>Letterheads</span><i>✳</i><span>Brochures</span><i>✳</i>
                <span>Printing for every occasion</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <QuickPicks />

        <section className="section prices-section" id="prices" aria-labelledby="prices-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Clear prices for popular products</p>
              <h2 id="prices-heading">Prices &amp; options<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">Choose a product, quantity and print option.</p>
          </div>
          <p className="price-note">Prices are in Indian rupees (₹) for four-colour printing. Design and lamination are charged separately.</p>
          <div className="product-grid">
            {catalogProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-heading">
          <div className="services-intro">
            <p className="eyebrow eyebrow-light">More than paper printing</p>
            <h2 id="services-heading">Print for<br />every <em>idea.</em></h2>
            <p>Choose digital, offset or screen printing, then add materials and finishing to suit your project.</p>
            <a className="light-link" href="#contact">Ask about your project <span aria-hidden="true">↗</span></a>
          </div>
          <div className="services-content" id="catalog">
            <div className="service-category">
              <span className="category-number">01</span>
              <div className="category-content">
                <h3>Printing types</h3>
                <div className="pill-list">{printingTypes.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="service-category">
              <span className="category-number">02</span>
              <div className="category-content">
                <h3>Materials</h3>
                <div className="pill-list">{materials.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="service-category">
              <span className="category-number">03</span>
              <div className="category-content">
                <h3>Finishing options</h3>
                <div className="pill-list">{finishingOptions.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="service-category">
              <span className="category-number">04</span>
              <div className="category-content">
                <h3>Custom gifts</h3>
                <div className="pill-list">{giftItems.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="other-services">
              <span className="category-number">05</span>
              <div className="category-content">
                <h3>Other print products</h3>
                <p>Looking for something else? Ask us about these products and more.</p>
                <div className="other-service-grid">{otherServices.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="closing-copy">
            <p className="eyebrow">Need something printed?</p>
            <h2>Let’s plan<br />your next <em>print.</em></h2>
            <p>Call or email us to discuss your product, quantity, paper and finishing options.</p>
            <a className="button button-dark" href="tel:+914448646506">Call to discuss your order <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-card">
            <div className="contact-card-heading">
              <span>CONTACT THE PRINT SHOP</span>
              <span className="contact-flower" aria-hidden="true">✳</span>
            </div>
            <h3>Four Color Print</h3>
            <p className="contact-tagline">Printing services in Chennai</p>
            <div className="contact-details">
              <a href="tel:+914448646506"><span>Landline</span><b>044-4864 6506</b></a>
              <a href="tel:+919600016506"><span>Mobile 1</span><b>96000 16506</b></a>
              <a href="tel:+918939744269"><span>Mobile 2</span><b>89397 44269</b></a>
              <a href="mailto:pselvanika@gmail.com"><span>Email</span><b>pselvanika@gmail.com</b></a>
              <a href="mailto:fourcolorprint17@gmail.com"><span>Email</span><b>fourcolorprint17@gmail.com</b></a>
              <a href="http://www.fcprintchennai.in/" target="_blank" rel="noreferrer"><span>Website</span><b>fcprintchennai.in ↗</b></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand brand-footer" href="#home">
          <img className="brand-logo" src={logoUrl} alt="" />
          <span className="brand-name">FOUR COLOR <b>PRINT</b></span>
        </a>
        <span>Printing for businesses and individuals · Chennai</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App

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
        <p className="extra-charge">Designing and lamination are extra.</p>
      </div>
    </article>
  )
}

function QuickPicks() {
  return (
    <section className="quick-picks" id="quick-picks" aria-labelledby="quick-picks-heading">
      <div className="quick-picks-heading">
        <div>
          <p className="eyebrow">A good place to start</p>
          <h2 id="quick-picks-heading">Quick picks<span>.</span></h2>
        </div>
        <p>Popular prints, with clear prices<br />and plenty of room for your ideas.</p>
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
              <p>From <strong>₹{product.priceGroups[0].prices[0].price}</strong></p>
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
        <span>Complete printing solution <i /> Proudly serving Chennai</span>
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
          <span>Call the print shop</span>
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
            <p className="eyebrow"><span className="eyebrow-dot" /> Your local print shop · Chennai</p>
            <h1 id="hero-heading">From business cards<br />to <em>big ideas.</em></h1>
            <p className="hero-intro">
              Visiting cards, pamphlets, letterheads, brochures and custom printing —
              all from one friendly print shop.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#quick-picks">Explore popular prints <span aria-hidden="true">↓</span></a>
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
                <span>Print that stands out</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <QuickPicks />

        <section className="section prices-section" id="prices" aria-labelledby="prices-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Straightforward prices, no guesswork</p>
              <h2 id="prices-heading">Price list<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">Straightforward prices.<br />Beautifully printed results.</p>
          </div>
          <p className="price-note">All prices in Indian Rupees (₹). Four-colour printing.</p>
          <div className="product-grid">
            {catalogProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-heading">
          <div className="services-intro">
            <p className="eyebrow eyebrow-light">Not just ink on paper</p>
            <h2 id="services-heading">Print beyond<br />the <em>ordinary.</em></h2>
            <p>Digital, offset and screen printing, plus specialty materials, finishing, custom gifts and more.</p>
            <a className="light-link" href="#contact">Tell us what you have in mind <span aria-hidden="true">↗</span></a>
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
                <h3>Finishing touches</h3>
                <div className="pill-list">{finishingOptions.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="service-category">
              <span className="category-number">04</span>
              <div className="category-content">
                <h3>Gifts with a personal touch</h3>
                <div className="pill-list">{giftItems.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
            <div className="other-services">
              <span className="category-number">05</span>
              <div className="category-content">
                <h3>And a whole lot more</h3>
                <p>From booklets to voucher pads, all the things a busy business needs.</p>
                <div className="other-service-grid">{otherServices.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="closing-copy">
            <p className="eyebrow">Your idea is the starting point</p>
            <h2>Let’s make<br />something <em>good.</em></h2>
            <p>Have a print job in mind? Give us a call or drop us a line. We’ll help you take it from idea to ink.</p>
            <a className="button button-dark" href="tel:+914448646506">Let’s talk printing <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-card">
            <div className="contact-card-heading">
              <span>GOOD PRINT STARTS HERE</span>
              <span className="contact-flower" aria-hidden="true">✳</span>
            </div>
            <h3>Four Color Print</h3>
            <p className="contact-tagline">Complete Printing Solution</p>
            <div className="contact-details">
              <a href="tel:+914448646506"><span>PHONE</span><b>044-4864 6506</b></a>
              <a href="tel:+919600016506"><span>MOBILE</span><b>96000 16506</b></a>
              <a href="tel:+918939744269"><span>MOBILE</span><b>89397 44269</b></a>
              <a href="mailto:pselvanika@gmail.com"><span>EMAIL</span><b>pselvanika@gmail.com</b></a>
              <a href="mailto:fourcolorprint17@gmail.com"><span>EMAIL</span><b>fourcolorprint17@gmail.com</b></a>
              <a href="http://www.fcprintchennai.in/" target="_blank" rel="noreferrer"><span>WEB</span><b>fcprintchennai.in ↗</b></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand brand-footer" href="#home">
          <img className="brand-logo" src={logoUrl} alt="" />
          <span className="brand-name">FOUR COLOR <b>PRINT</b></span>
        </a>
        <span>Complete printing solution · Chennai</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App

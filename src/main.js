import './style.css'
import './navbar.css'
import './footer.css'
import './hero-motion.css'
import './page2.css'
import { renderPage2 } from './page2.js'
import { renderGalleryTransition, initGalleryTransition } from './galleryTransition.js'

document.querySelector('#app').innerHTML = `
  <main>

    <!-- =========================
         PAGE 1 / HERO
    ========================== -->

    <section class="hero" id="home">

      <!-- Navigation -->
      <header class="navbar">

        <div class="nav-left">

          <a href="#home" class="brand">
            Gaurav Mehta
          </a>

          <nav class="desktop-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#stories">Stories</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>

        <div class="nav-actions">

          <a href="#contact" class="nav-contact-btn" aria-label="Contact">
            <span>GET IN TOUCH</span>
          </a>

          <button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </header>


      <!-- Mobile Navigation Drawer Overlay -->
      <div class="mobile-nav-overlay" id="mobileNavOverlay" aria-hidden="true">
        <div class="mobile-nav-content">
          <button class="mobile-nav-close" id="mobileNavClose" aria-label="Close menu">&times;</button>
          <span class="mobile-nav-eyebrow">GAURAV MEHTA &bull; STUDENT PHOTOGRAPHER</span>
          <nav class="mobile-nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#stories">Stories</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <div class="mobile-nav-footer">
            <span>GRAPHIC ERA DEEMED TO BE UNIVERSITY</span>
            <a href="tel:+918923945456">+91 8923945456</a>
          </div>
        </div>
      </div>


      <!-- Decorative corner frame -->
      <div class="corner-frame top-left"></div>
      <div class="corner-frame top-right"></div>
      <div class="corner-frame bottom-left"></div>
      <div class="corner-frame bottom-right"></div>


      <!-- Hero content -->
      <div class="hero-content">

        <div class="hero-copy">

          <p class="hero-kicker">
            GAURAV MEHTA &bull; STUDENT PHOTOGRAPHER
          </p>

          <h1 class="hero-title">
            <span class="sr-only">Gaurav Mehta — Student Photographer at Graphic Era Deemed to be University</span>
            FRAME
            <span>THE</span>
            MOMENT.
          </h1>

          <p class="hero-description">
            A first-year BBA Aviation &amp; Management student exploring photography,
            visual storytelling and the art of capturing meaningful moments in Uttarakhand.
          </p>

          <div class="hero-actions">
            <a href="#gallery" class="hero-btn" aria-label="View Photography Portfolio Gallery">
              VIEW MY WORK
              <span>↗</span>
            </a>

            <a href="#about" class="hero-btn hero-btn-secondary" aria-label="Read About Gaurav Mehta">
              ABOUT GAURAV
              <span>↗</span>
            </a>
          </div>

        </div>


        <!-- Main product image -->
        <div class="hero-product hero-main-image">

          <div class="hero-glow"></div>

          <img
            src="${import.meta.env.BASE_URL}assets/hero.png"
            alt="Camera gear used by Gaurav Mehta for campus and landscape photography"
            loading="eager"
            decoding="async"
            width="600"
            height="400"
          >

        </div>


        <!-- Small floating image -->
        <div class="hero-side-image">

          <img
            src="${import.meta.env.BASE_URL}assets/side-image.jpg"
            alt="Campus visual story photographed by Gaurav Mehta"
            loading="lazy"
            decoding="async"
            width="300"
            height="300"
          >

        </div>

      </div>


      <!-- Bottom information -->
      <div class="hero-bottom hero-footer">

        <div class="gallery-profile">

          <div class="profile-stack">
            <span></span>
            <span></span>
            <span>+</span>
          </div>

          <span>
            STUDENT PHOTOGRAPHER
          </span>

        </div>

        <p>
          Documenting campus life,<br>
          landscapes, and stories with<br>
          creative visual clarity.
        </p>

      </div>

    </section>


    <!-- =========================
         STUDENT PROFILE / IDENTITY
    ========================== -->

    <section class="identity-section" id="about">
      <div class="identity-card">

        <div class="identity-header">
          <span class="identity-tag">STUDENT PROFILE</span>
          <span class="identity-badge">STUDENT PHOTOGRAPHER</span>
        </div>

        <div class="identity-body">
          <div class="identity-main">
            <h2>GAURAV MEHTA</h2>
            <p class="identity-program">BBA AVIATION &amp; MANAGEMENT &bull; FIRST YEAR</p>
            <p class="identity-institution">GRAPHIC ERA DEEMED TO BE UNIVERSITY</p>
          </div>

          <div class="identity-meta">
            <div class="identity-meta-item">
              <span class="meta-label">HOMETOWN</span>
              <span class="meta-value">Pithoragarh, Uttarakhand</span>
            </div>

            <div class="identity-meta-item">
              <span class="meta-label">PHONE</span>
              <span class="meta-value">+91 8923945456</span>
            </div>

            <div class="identity-meta-item">
              <span class="meta-label">FOCUS</span>
              <span class="meta-value">Photography &amp; Visual Storytelling</span>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- =========================
         MY APPROACH / PHILOSOPHY
    ========================== -->

    <section class="approach-section" id="approach">
      <div class="approach-container">

        <div class="approach-header">
          <span class="section-tag">CREATIVE PHILOSOPHY</span>
          <h2>MY <span>APPROACH</span></h2>
        </div>

        <div class="approach-content">

          <blockquote class="approach-quote">
            “I am interested in capturing moments that communicate a feeling, a place or a story.
            Through photography and visual content, I want to document campus life, natural landscapes, and the
            people who make those moments meaningful.”
          </blockquote>

          <div class="approach-pillars">
            <div class="pillar-card">
              <span class="pillar-num">01</span>
              <h3>CAMPUS LIFE &amp; EVENTS</h3>
              <p>Preserving memories and vibrant university moments through authentic frames.</p>
            </div>

            <div class="pillar-card">
              <span class="pillar-num">02</span>
              <h3>PORTRAITURE</h3>
              <p>Focusing on human expressions, personality, and character in natural lighting.</p>
            </div>

            <div class="pillar-card">
              <span class="pillar-num">03</span>
              <h3>SCENIC &amp; MOUNTAINS</h3>
              <p>Capturing landscapes, architecture, and atmospheric mountain compositions.</p>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- =========================
         STATEMENT BANNER
    ========================== -->

    <section class="media-banner">
      <div class="media-banner-content">
        <span>I CAPTURE.</span>
        <span>I FRAME.</span>
        <span class="highlight">I COMMUNICATE.</span>
      </div>
    </section>


    <!-- =========================
         VISUAL STORIES (PHOTO FRAMES)
    ========================== -->

    <section class="campus-stories" id="stories">

      <div class="campus-intro">
        <span class="section-tag">VISUAL HIGHLIGHTS</span>
        <h2>CREATIVE <span>STORIES</span></h2>
        <p>Selected visual moments capturing campus life, portraits, landscapes, and storytelling perspectives.</p>
      </div>

      <div class="campus-grid">

        <div class="campus-frame">
          <div class="frame-photo">
            <img src="${import.meta.env.BASE_URL}assets/Screenshot_20260917_142303_Gallery.jpg" alt="Campus Life photography by Gaurav Mehta" loading="lazy" decoding="async">
            <div class="frame-overlay"></div>
            <span class="frame-num">01</span>
            <span class="frame-tag">CAMPUS LIFE</span>
          </div>
        </div>

        <div class="campus-frame">
          <div class="frame-photo">
            <img src="${import.meta.env.BASE_URL}assets/Screenshot_20260917_143245_Instagram.jpg" alt="University Events photography by Gaurav Mehta" loading="lazy" decoding="async">
            <div class="frame-overlay"></div>
            <span class="frame-num">02</span>
            <span class="frame-tag">UNIVERSITY EVENTS</span>
          </div>
        </div>

        <div class="campus-frame">
          <div class="frame-photo">
            <img src="${import.meta.env.BASE_URL}assets/Screenshot_20260917_143005_Instagram.jpg" alt="Portraiture photography by Gaurav Mehta" loading="lazy" decoding="async">
            <div class="frame-overlay"></div>
            <span class="frame-num">03</span>
            <span class="frame-tag">PORTRAITURE</span>
          </div>
        </div>

        <div class="campus-frame">
          <div class="frame-photo">
            <img src="${import.meta.env.BASE_URL}assets/Screenshot_20260917_142511_Gallery.jpg" alt="Mountains & Travel photography by Gaurav Mehta" loading="lazy" decoding="async">
            <div class="frame-overlay"></div>
            <span class="frame-num">04</span>
            <span class="frame-tag">MOUNTAINS &amp; TRAVEL</span>
          </div>
        </div>

      </div>

    </section>


    <!-- =========================
         CREATIVE VISION SECTION
    ========================== -->

    <section class="studio" id="studio">

      <div class="studio-left">

        <p class="section-tag">
          CREATIVE PERSPECTIVE
        </p>

        <h2>
          VISUAL
          <br>
          STORYTELLING
          <br>
          <span>&amp; FRAMES</span>
        </h2>


        <div class="services-card">

          <h3>
            FOCUS AREAS:
          </h3>

          <p>Campus Life Documentation</p>
          <p>Student &amp; Youth Portraits</p>
          <p>Mountain &amp; Landscape Scenes</p>
          <p>University Event Coverage</p>
          <p>Creative Visual Content</p>

        </div>

      </div>


      <div class="studio-right">

        <div class="studio-image-glow"></div>

        <img
          src="${import.meta.env.BASE_URL}assets/studio-camera.png"
          alt="Camera lens"
        >

      </div>


      <div class="studio-title">
        STORYTELLING
      </div>

      <div class="studio-subtitle">
        CAPTURING MOMENTS
        <br>
        WITH CREATIVE
        <span>PERSPECTIVE &amp; CLARITY</span>
      </div>

    </section>


    <!-- =========================
         PAGE 2 (ARCH & CENTER CAMERA)
    ========================== -->

    ${renderPage2()}


    <!-- =========================
         CAMERA TRANSITION & GALLERY
    ========================== -->

    ${renderGalleryTransition()}


    <!-- =========================
         ABOUT & CONTACT SECTION
    ========================== -->

    <section class="contact-section" id="contact">
      <div class="contact-container">

        <div class="contact-left">
          <span class="section-tag">GET IN TOUCH</span>
          <h2>
            LET'S
            <br>
            CREATE
            <br>
            <span>SOMETHING VISUAL.</span>
          </h2>

          <p class="contact-sub">
            Based in Pithoragarh &amp; Dehradun, Uttarakhand. Open for campus photography, event documentation, and visual collaborations.
          </p>

          <a href="tel:+918923945456" class="contact-btn">
            GET IN TOUCH (+91 8923945456)
            <span>↗</span>
          </a>
        </div>


        <div class="contact-right">

          <div class="about-card">
            <h3>ABOUT GAURAV</h3>
            <p>
              I am a first-year <strong>BBA Aviation &amp; Management</strong> student at
              <strong>Graphic Era Deemed to be University</strong>, hailing from <strong>Pithoragarh, Uttarakhand</strong>.
            </p>
            <p>
              Interested in photography, visual storytelling, people, places, moments, and creative visual expression.
            </p>

            <div class="about-details">
              <div class="about-detail">
                <span>NAME</span>
                <strong>Gaurav Mehta</strong>
              </div>

              <div class="about-detail">
                <span>ROLE</span>
                <strong>Student Photographer</strong>
              </div>

              <div class="about-detail">
                <span>COURSE</span>
                <strong>BBA Aviation &amp; Management (1st Year)</strong>
              </div>

              <div class="about-detail">
                <span>INSTITUTION</span>
                <strong>Graphic Era Deemed to be University</strong>
              </div>

              <div class="about-detail">
                <span>HOMETOWN</span>
                <strong>Pithoragarh, Uttarakhand</strong>
              </div>

              <div class="about-detail">
                <span>PHONE</span>
                <strong>+91 8923945456</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>
`

function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle')
  const closeBtn = document.querySelector('#mobileNavClose')
  const overlay = document.querySelector('#mobileNavOverlay')
  const links = document.querySelectorAll('.mobile-nav-links a')

  if (!toggleBtn || !overlay) return

  function openNav() {
    overlay.classList.add('open')
    overlay.setAttribute('aria-hidden', 'false')
    document.body.classList.add('menu-open')
  }

  function closeNav() {
    overlay.classList.remove('open')
    overlay.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('menu-open')
  }

  toggleBtn.addEventListener('click', openNav)
  if (closeBtn) closeBtn.addEventListener('click', closeNav)

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeNav()
  })

  links.forEach(link => {
    link.addEventListener('click', closeNav)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeNav()
    }
  })
}

requestAnimationFrame(() => {
  initGalleryTransition()
  initMobileNav()
})


import './galleryTransition.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Asset discovery for public/assets/ strictly matching Screenshot_* files
const screenshotImages = import.meta.glob(
  '/public/assets/Screenshot_*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

// Asset discovery for src/assets/gallery/ subfolders if present
const gallerySubfolderImages = import.meta.glob(
  './assets/gallery/**/*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

// Explicit list of assets used elsewhere in the page layout (Page 2 photo fan) - do NOT duplicate
const USED_GALLERY_ASSETS = new Set([
  'project-1.jpg',
  'project-2.jpg',
  'project-3.jpg',
  'project-4.jpg',
  'project-5.jpg',
  'run.jpg'
])

// All supported photography categories
const ALL_CATEGORIES = [
  'featured',
  'mountains',
  'scenic',
  'campus',
  'portraits',
  'events',
  'lifestyle',
  'creative'
]

function isScreenshotEligible(filename) {
  const name = filename.toLowerCase()

  // Must start with "screenshot_"
  if (!name.startsWith('screenshot_')) return false

  // Exclude ChatGPT screenshots or UI reference exports
  if (name.includes('chatgpt') || name.includes('screen_') || name.includes('ui_')) {
    return false
  }

  // Must not be already used elsewhere in the page layout
  if (USED_GALLERY_ASSETS.has(name)) return false

  return true
}

function getFeaturedPhotography() {
  const featuredPhotography = []
  const seenAssets = new Set()

  function addPhoto(url, filename) {
    const fileKey = filename.toLowerCase()
    if (seenAssets.has(fileKey) || seenAssets.has(url)) return

    seenAssets.add(fileKey)
    seenAssets.add(url)
    featuredPhotography.push(url)
  }

  // 1. Process public/assets/ Screenshot_* files
  Object.entries(screenshotImages).forEach(([path, url]) => {
    const parts = path.split('/')
    const filename = parts[parts.length - 1]

    if (!filename || !isScreenshotEligible(filename)) return

    const resolvedUrl = typeof url === 'string' ? url : path.replace('/public', '')
    addPhoto(resolvedUrl, filename)
  })

  // 2. Process src/assets/gallery/ subfolder photos if present
  Object.entries(gallerySubfolderImages).forEach(([path, url]) => {
    const parts = path.split('/')
    const filename = parts[parts.length - 1]

    if (!filename) return
    if (USED_GALLERY_ASSETS.has(filename.toLowerCase())) return

    const resolvedUrl = typeof url === 'string' ? url : path
    addPhoto(resolvedUrl, filename)
  })

  // Deterministic sorting
  featuredPhotography.sort()

  return featuredPhotography
}

const featuredPhotography = getFeaturedPhotography()

function createGallery() {
  const photosHTML = featuredPhotography.map((src, index) => {
    const layoutClass =
      index % 6 === 0
        ? 'gallery-photo-wide'
        : index % 6 === 3
        ? 'gallery-photo-tall'
        : ''

    return `
      <article class="gallery-photo ${layoutClass}">
        <img
          src="${src}"
          alt="Featured photography captured by Gaurav Mehta ${index + 1}"
          loading="lazy"
          decoding="async"
        />
      </article>
    `
  }).join('')

  return `
    <section class="gallery-wrapper">

      <!-- ==========================================
           GALLERY MAIN
      =========================================== -->

      <section class="gallery-main" id="gallery">

        <div class="gallery-intro">
          <span class="gallery-eyebrow">
            GAURAV MEHTA &bull; STUDENT PHOTOGRAPHER
          </span>

          <h1>MY GALLERY</h1>

          <h2>
            FEATURED
            <span>PHOTOGRAPHY.</span>
          </h2>

          <p>
            A curated collection of moments, places and visual stories
            captured by Gaurav Mehta.
          </p>
        </div>


        <div class="gallery-content">
          <section class="gallery-category" data-category="featured">
            <div class="gallery-grid">
              ${photosHTML}
            </div>
          </section>
        </div>

      </section>


      <!-- ==========================================
           FOOTER
      =========================================== -->

      <footer class="p2-footer main-footer">

        <div class="p2-footer-column">
          <h4>QUICK LINKS</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#stories">Stories</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="p2-footer-center">
          <strong>GAURAV MEHTA</strong>
          <span>STUDENT PHOTOGRAPHER</span>
          <span>BBA AVIATION &amp; MANAGEMENT</span>
          <span>GRAPHIC ERA DEEMED TO BE UNIVERSITY</span>
          <span>PITHORAGARH, UTTARAKHAND</span>
          <span>+91 8923945456</span>
        </div>

        <div class="p2-footer-column p2-footer-social">
          <h4>CONTACT &amp; DETAILS</h4>
          <a href="tel:+918923945456">+91 8923945456</a>
          <a href="#contact">Pithoragarh, Uttarakhand</a>
          <a href="#contact">Graphic Era University</a>
        </div>

      </footer>

    </section>
  `
}

export function renderGalleryTransition() {
  return createGallery()
}

export function initGalleryTransition() {
  const page2 = document.querySelector('.page2')
  const camera = document.querySelector('.p2-center-camera')
  const black = document.querySelector('.camera-black-overlay')
  const copy = document.querySelector('.camera-transition-copy')
  const galleryMain = document.querySelector('.gallery-main')

  if (!page2 || !camera || !black) return

  /*
   * ONE CAMERA ONLY (.p2-center-camera).
   * Camera is centered right in the MIDDLE OF THE PAGE (top: 50%, left: 50%, y: 0).
   * Zoom starts from the middle of the viewport and zooms in place smoothly over an extended scroll length (3800px).
   */

  gsap.set(camera, {
    xPercent: -50,
    y: 0,
    scale: 1,
    transformOrigin: '50% 50%',
    zIndex: 20
  })

  gsap.set(black, { opacity: 0 })
  if (copy) gsap.set(copy, { opacity: 0 })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page2,
      start: 'top top',
      end: '+=3800',  // Extended scroll length for much slower, graceful camera zoom
      scrub: 1.5,     // Ultra smooth scrubbing
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (galleryMain) {
          if (self.progress >= 0.90 && self.progress < 1) {
            galleryMain.classList.add('gallery-revealing')
            galleryMain.classList.remove('gallery-active')
          } else if (self.progress >= 1) {
            galleryMain.classList.remove('gallery-revealing')
            galleryMain.classList.add('gallery-active')
          } else {
            galleryMain.classList.remove('gallery-revealing', 'gallery-active')
          }
        }
      }
    }
  })

  // -------------------------------------------------------------
  // 1. BREATHING PAUSE / CENTER LOCK (0% -> 20%)
  // Camera stays locked right in the middle of the viewport (y: 0)
  // -------------------------------------------------------------
  tl.to(camera, {
    y: 0,
    scale: 1.0,
    duration: 0.20,
    ease: 'none'
  }, 0)

  // -------------------------------------------------------------
  // 2. SLOW CAMERA ZOOM IN PLACE FROM MIDDLE OF PAGE (20% -> 82%)
  // Camera remains in the middle of the page (y: 0) while scaling up smoothly (1.0 -> 5.5)
  // -------------------------------------------------------------
  tl.to(camera, {
    y: 0,
    scale: 5.5,
    duration: 0.62,
    ease: 'none'
  }, 0.20)

  // -------------------------------------------------------------
  // 3. BLACK OVERLAY (65% -> 85%): Fades in 0 -> 1 over scaling lens
  // -------------------------------------------------------------
  tl.to(black, {
    opacity: 1,
    duration: 0.20,
    ease: 'none'
  }, 0.65)

  // -------------------------------------------------------------
  // 4. BLACK HOLD & STORY COPY (83% -> 92%)
  // -------------------------------------------------------------
  if (copy) {
    tl.to(copy, {
      opacity: 1,
      duration: 0.05,
      ease: 'none'
    }, 0.83)
    .to(copy, {
      opacity: 0,
      duration: 0.04,
      ease: 'none'
    }, 0.89)
  }

  // -------------------------------------------------------------
  // 5. GALLERY REVEAL FROM BLACK (90% -> 100%)
  // -------------------------------------------------------------
  if (galleryMain) {
    tl.fromTo(galleryMain, {
      opacity: 0,
      filter: 'blur(14px)',
      scale: 0.98
    }, {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1.0,
      duration: 0.10,
      ease: 'none'
    }, 0.90)
  }

  initGalleryReveal()
  initGalleryLightbox()
}

function initGalleryReveal() {
  const elements = document.querySelectorAll('.gallery-category, .gallery-photo')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.08
    }
  )

  elements.forEach((el) => {
    observer.observe(el)
  })
}

function initGalleryLightbox() {
  const photos = document.querySelectorAll('.gallery-photo img, .p2-photo img, .frame-photo img, .hero-side-image img')

  if (!photos.length) return

  let overlay = document.querySelector('.gallery-lightbox')

  if (!overlay) {
    overlay = document.createElement('div')
    overlay.className = 'gallery-lightbox'

    overlay.innerHTML = `
      <button
        class="gallery-lightbox-close"
        aria-label="Close image"
      >
        ×
      </button>

      <img
        class="gallery-lightbox-image"
        alt=""
      />
    `

    document.body.appendChild(overlay)
  }

  const preview = overlay.querySelector('.gallery-lightbox-image')
  const close = overlay.querySelector('.gallery-lightbox-close')

  photos.forEach((image) => {
    image.addEventListener('click', () => {
      preview.src = image.src
      preview.alt = image.alt
      overlay.classList.add('open')
      document.body.classList.add('lightbox-open')
    })
  })

  function closeLightbox() {
    overlay.classList.remove('open')
    document.body.classList.remove('lightbox-open')
    preview.src = ''
  }

  close.addEventListener('click', closeLightbox)

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeLightbox()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox()
    }
  })
}

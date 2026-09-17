export function renderPage2() {
  const base = import.meta.env.BASE_URL
  return `
    <section class="page2" id="features">

      <div class="page2-artboard">

        <!-- TOP CAMERA -->
        <div class="p2-top-camera">
          <img
            src="${base}assets/hero.png"
            alt="Camera gear used by Gaurav Mehta"
            loading="lazy"
            decoding="async"
          />
        </div>


        <!-- ======================================
             SEMI CIRCLE GALLERY
        ======================================= -->

        <div class="p2-gallery">

          <div class="p2-photo p2-photo-1">
            <img
              src="${base}assets/Screenshot_20260917_141907_Gallery.jpg"
              alt="Campus life photography by Gaurav Mehta"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="p2-photo p2-photo-2">
            <img
              src="${base}assets/Screenshot_20260917_142159_Gallery.jpg"
              alt="University event photography by Gaurav Mehta"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="p2-photo p2-photo-3">
            <img
              src="${base}assets/Screenshot_20260917_142303_Gallery.jpg"
              alt="Featured portrait photography by Gaurav Mehta"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="p2-photo p2-photo-4">
            <img
              src="${base}assets/Screenshot_20260917_142354_Gallery.jpg"
              alt="Mountain landscape photography from Uttarakhand by Gaurav Mehta"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="p2-photo p2-photo-5">
            <img
              src="${base}assets/Screenshot_20260917_142408_Gallery.jpg"
              alt="Scenic visual story photographed by Gaurav Mehta"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>


        <!-- ======================================
             CENTER CAMERA
        ======================================= -->

        <div class="p2-center-camera">

          <img
            src="${base}assets/studio-camera.png"
            alt="Camera lens visual transition by Gaurav Mehta"
            loading="lazy"
            decoding="async"
          />

        </div>


        <!-- ======================================
             BLACK OVERLAY & STORY COPY
        ======================================= -->

        <div class="camera-black-overlay"></div>

        <div class="camera-transition-copy">
          <span>EVERY FRAME</span>
          <h2>
            HAS A
            <em>STORY.</em>
          </h2>
        </div>

      </div>

    </section>
  `
}


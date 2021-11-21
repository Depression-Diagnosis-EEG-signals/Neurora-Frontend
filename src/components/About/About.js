import "./About.css";
import eeg from "./Images/eeg1.jpg";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.png";
import img4 from "./Images/img4.png";
function About() {
  return (
    <div className="About">
      <div class="container">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 about-header-content">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={eeg}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-7 fw-bold lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p class="lead">
              Our Neurora interface offers specialized and integrated treatment
              with personalized solutions for depression. In these areas Neurora
              employs only state-of-the-art and evidence-based techniques,
              integrated and embedded in a clinical-psychological setting.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row service-card-row">
          <div class="col">
            <div class="card text-center service-card">
              <div class="card-body">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="hospital"
                  class="svg-inline--fa fa-hospital"
                  role="img"
                  height="73px"
                  color="rgb(0, 174, 255)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M336 .0145h-288c-26.51 0-48 21.49-48 48v432c0 17.67 14.33 32 32 32l112-.0073v-79.99c0-26.51 21.49-48.01 48-48.01s48 21.5 48 48.01v79.99l112 .0073c17.67 0 32-14.33 32-32v-432C384 21.5 362.5 .0145 336 .0145zM128 304c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-32c0-8.838 7.164-16 16-16h32c8.836 0 16 7.162 16 16V304zM224 304c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-32c0-8.838 7.164-16 16-16h32c8.836 0 16 7.162 16 16V304zM247.7 153.6h-30.08v30.08c0 4.594-3.727 8.32-8.32 8.32H174.7c-4.594 0-8.32-3.727-8.32-8.32V153.6H136.3C131.7 153.6 128 149.9 128 145.3V110.7c0-4.594 3.727-8.32 8.32-8.32h30.08V72.34c0-4.594 3.727-8.32 8.32-8.32h34.56c4.594 0 8.32 3.727 8.32 8.32v30.08h30.08C252.3 102.4 256 106.1 256 110.7v34.56C256 149.9 252.3 153.6 247.7 153.6zM320 304c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-32c0-8.838 7.164-16 16-16h32c8.836 0 16 7.162 16 16V304z"
                  ></path>
                </svg>
                <h5 class="card-title card-title-css">
                  Hospital & Healthcare Systems
                </h5>
                <a href="#part1" class="btn btn-outline-info">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center service-card">
              <div class="card-body">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="house-medical"
                  class="svg-inline--fa fa-house-medical"
                  role="img"
                  color="rgb(0, 174, 255)"
                  height="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM328 232V176C328 167.2 320.8 160 312 160H264C255.2 160 248 167.2 248 176V232H192C183.2 232 176 239.2 176 248V296C176 304.8 183.2 312 192 312H248V368C248 376.8 255.2 384 264 384H312C320.8 384 328 376.8 328 368V312H384C392.8 312 400 304.8 400 296V248C400 239.2 392.8 232 384 232H328z"
                  ></path>
                </svg>
                <h5 class="card-title card-title-css">
                  In-Home Ambulatory EEG Providers
                </h5>
                <a href="#part2" class="btn btn-outline-info">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center service-card">
              <div class="card-body">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="brain"
                  class="svg-inline--fa fa-brain"
                  role="img"
                  height="73px"
                  color="rgb(0, 174, 255)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z"
                  ></path>
                </svg>
                <h5 class="card-title card-title-css">
                  Neurology <br />
                  Practices
                </h5>
                <a href="#part3" class="btn btn-outline-info">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center service-card">
              <div class="card-body">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="book"
                  class="svg-inline--fa fa-book"
                  role="img"
                  color="rgb(0, 174, 255)"
                  height="73px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"
                  ></path>
                </svg>
                <h5 class="card-title card-title-css">
                  Clinical Trial Sponsors or CROs
                </h5>
                <a href="#part4" class="btn btn-outline-info">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal">Our Services</h1>
          <p class="fs-5 text-muted">
            Accessible, Reliable, and Intuitive EEG system
          </p>
        </div>
      </div>
      <div class="container">
        <div class="card mb-3">
          <div class="row g-0 details-card-row" id="part1">
            <div class="col-6">
              <img
                src={img1}
                class="img-fluid rounded-start card-images"
                alt="..."
              />
            </div>
            <div class="col-6">
              <div class="card-body">
                <h2 class="card-title">Hospital & Healthcare Systems</h2>
                <br />
                <p class="card-text lead">
                  Lifelines Neuro is helping healthcare systems democratize
                  patient access for LTM, routine, and ambulatory EEG for safe,
                  secure and reliable mobile EEG anywhere – EMU, ICU, ED and
                  outpatient settings. Our secure EEG systems are convenient and
                  HIPAA-ready. We deliver superior patient outcomes and expand
                  reach, enabling streaming physician review from any location,
                  anytime.
                </p>
              </div>
            </div>
          </div>
          <div class="row g-0 details-card-row-right" id="part2">
            <div class="col-6">
              <div class="card-body">
                <h2 class="card-title">In-Home Ambulatory EEG Providers</h2>
                <br />
                <p class="card-text lead">
                  We partner with EEG entrepreneurs to help your business
                  achieve new heights. Whether you have an established business,
                  or are a technologist launching a new service, you can trust
                  Lifelines Neuro to guide you not only with our exceptional
                  systems, but also with best practices, workflows and
                  information on optimal CPT coding. Leading service providers
                  trust Trackit systems for in-home EEG with lab-quality
                  recordings.
                </p>
              </div>
            </div>
            <div class="col-6">
              <img src={img2} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
          <div class="row g-0 details-card-row" id="part3">
            <div class="col-6">
              <img src={img3} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-6">
              <div class="card-body">
                <h2 class="card-title">Neurology Practices</h2>
                <br />
                <p class="card-text lead">
                  We help neurology practices achieve peak performance,
                  resulting in premier patient care and positive profits. From
                  in-office routine EEG to ambulatory options for in-home
                  studies, we help physicians expand their reach to care for
                  more patients.
                </p>
              </div>
            </div>
          </div>
          <div class="row g-0 details-card-row-right" id="part4">
            <div class="col-6">
              <div class="card-body">
                <h2 class="card-title">Clinical Trial Sponsors or CROs</h2>
                <br />
                <p class="card-text lead">
                  Lifelines Neuro offers turnkey services for clinical trials
                  with EEG protocol, allowing for seamless execution and a
                  faster drug to market pipeline. Our cloud solution EEG
                  software streams data, for live monitoring to ensure
                  successful studies.
                </p>
              </div>
            </div>
            <div class="col-6">
              <img src={img4} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import "./Home.css";
import person1 from "./Image/person1-nobg.png";
import { Container, Accordion, Image } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <Container>
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Neurora</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Vestibulum consequat
              scelerisque elit sit amet consequat.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Learn More
            </button>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col col1">
              <div class="home-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  color="#FFFFFF"
                  fill="currentColor"
                  class="bi bi-clock "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <br />
                <div class=" home-card-svg-title">
                  <span class=" home-card-svg-title-text">WORKING HOURS</span>
                  <p class="home-card-svg-title-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum consequat scelerisque elit sit amet consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col col2">
              <div class="home-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  color="#FFFFFF"
                  fill="currentColor"
                  class="bi bi-envelope-open "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"
                  />
                </svg>
                <br />
                <div class=" home-card-svg-title">
                  <span class=" home-card-svg-title-text">GET IN TOUCH</span>
                  <p class="home-card-svg-title-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum consequat scelerisque elit sit amet consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col col3">
              <div class="home-card-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  color="#FFFFFF"
                  fill="currentColor"
                  class="bi bi-bag-plus "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <br />
                <div class=" home-card-svg-title">
                  <span class="home-card-svg-title-text">QUICK HELP</span>
                  <p class="home-card-svg-title-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum consequat scelerisque elit sit amet consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row about-clinic">
          <div class="col-4">
            <Image src={person1} fluid />
          </div>
          <div class="col-8 about-clinic-content">
            <span class="about-clinic-content-heading">About Our Clinic</span>
            <p class="about-clinic-content-byline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consequat scelerisque elit sit
            </p>
            <div class="clinic-acc">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Accordion Item #4</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
      <br />
    </div>
  );
}

export default Home;

import Nav from "./navigation";

export default function Home() {
  return (
    <>
      <Nav />
      <section class="about-section text-center">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4">About</h2>
              <p class="text-white-50">
                URL shortening is a technique on the World Wide Web in which a
                Uniform Resource Locator may be made substantially shorter and
                still direct to the required page. This is achieved by using a
                redirect which links to the web page that has a long URL
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

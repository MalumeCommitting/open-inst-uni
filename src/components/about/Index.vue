<script>
export default {};
</script>
<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    style="height:50%;"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner" style="height:50%">
      <div class="carousel-item active">
        <img
          src="../../assets/slide1.jpg"
          class="d-block w-100"
          alt="Slide One"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>More than just studying</h5>
          <p>Walk in as classmates and out as friends.</p>
          <button
            class="btn btn-primary"
            type="submit"
            style="border-radius: 20px;"
          >
            Register today
          </button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/slide2.jpg"
          class="d-block w-100"
          alt="Slide Two"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Put it into pracitce</h5>
          <p>
            State of the art equipment to practice what you learnt in class.
          </p>
          <button
            class="btn btn-primary"
            type="submit"
            style="border-radius: 20px;"
          >
            Register today
          </button>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing" style="margin-top: 20px;">
    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img src="../../assets/link1.jpg" class="img-thumbnail" alt="..." />

        <h2 class="text-center text-white" style="margin-top:-80px">
          Fun studying
        </h2>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img src="../../assets/link2.jpg" class="img-thumbnail" alt="..." />
        <h2 class="text-center text-white" style="margin-top:-80px">
          Serious times
        </h2>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img src="../../assets/link3.jpg" class="img-thumbnail" alt="..." />
        <h2 class="text-center text-white" style="margin-top:-80px">
          Group work
        </h2>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider" style="margin-top: 80px" />

    <div class="row featurette">
      <div class="col-md-5" style="margin-top: auto; margin-bottom: auto;">
        <h2 class="featurette-heading">
          First featurette heading.
          <span class="text-muted">It’ll blow your mind.</span>
        </h2>
        <p class="lead">
          Some great placeholder content for the first featurette here. Imagine
          some exciting prose here.
        </p>
        <p>
          <a class="btn btn-secondary" href="#" style="border-radius: 20px;"
            >View details &raquo;</a
          >
        </p>
      </div>
      <div class="col-md-5">
        <img src="../../assets/feature1.jpg" class="img-responsive" alt="..." />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div
        class="col-md-5 order-md-2"
        style="margin-top: auto; margin-bottom: auto;"
      >
        <h2 class="featurette-heading">
          Oh yeah, it’s that good.
          <span class="text-muted">See for yourself.</span>
        </h2>
        <p class="lead">
          Another featurette? Of course. More placeholder content here to give
          you an idea of how this layout would work with some actual real-world
          content in place.
        </p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-md-5 order-md-1">
        <img src="../../assets/feature2.jpg" class="img-responsive" alt="..." />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-5" style="margin-top: auto; margin-bottom: auto;">
        <h2 class="featurette-heading">
          And lastly, this one. <span class="text-muted">Checkmate.</span>
        </h2>
        <p class="lead">
          And yes, this is the last block of representative placeholder content.
          Again, not really intended to be actually read, simply here to give
          you a better view of what this would look like with some actual
          content. Your content.
        </p>
        <p>
          <router-link to="/signup" class="nav-link">
                <button
                  class="btn btn-primary"
                  type="button"
                  style="border-radius: 20px;"
                >
                  Register now
                </button>
              </router-link>
              </p>
      </div>
      <div class="col-md-5">
        <img src="../../assets/feature3.jpg" class="img-responsive" alt="..." />
      </div>
    </div>

    <hr class="featurette-divider" />
    <!-- /END THE FEATURETTES -->

    <div class="container">
      <h2 class="mb-sm text-center">Our <strong>Partners</strong></h2>
      <strong>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="square-holder">
              <img
                alt=""
                src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg"
              />
            </div>
          </div>
        </div>
      </strong>
    </div>

  </div>
  <!-- /.container -->
</template>
<style>
a {
  color: #818494;
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #007bff;
  text-decoration: none;
}

footer {
  background: #ebf4fa;
}

.square-holder {
  padding: 30px;
  border: 1px solid #cecece;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f1f1f1;
  min-height: 200px;
}

.square-holder img {
  max-width: 100%;
  filter: grayscale(100%);
  transition: all 0.3s;
}

.square-holder:hover img {
  filter: none;
}
</style>

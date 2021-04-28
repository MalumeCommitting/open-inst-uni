<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "OrdersIndex",
  data() {
    return {
      orders: [],
      moment: moment,
      orderToDelete: "",
    };
  },
  created() {
    //this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      axios
        .get("https://codechallenge.pikdrive.com/api/orders")
        .then(({ data }) => {
          this.orders = data.data;
        });
    },
    setOrderToDelete(order) {
      this.orderToDelete = order.orderNumber;
    },
    deleteOrders(order) {
      this.orderToDelete = order.orderNumber;

      axios
        .post("https://codechallenge.pikdrive.com/api/delete-order", {
          id: order.id,
        })
        .then(() => {
          /*
          //Use this if one user is using the system to avoid unnecessary networkcalls 
           this.orders = this.orders.filter(item => item.id != order.id); 
          */
          this.fetchOrders();
        });
    },
  },
};
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
        <p><a class="btn btn-secondary" href="#" style="border-radius: 20px;">View details &raquo;</a></p>
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
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-md-5">
        <img src="../../assets/feature3.jpg" class="img-responsive" alt="..." />
      </div>
    </div>

    <hr class="featurette-divider" />

    <!-- /END THE FEATURETTES -->
  </div>
  <!-- /.container -->
  <div class="container col-md-12">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
    >
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">World</strong>
        <h3 class="mb-0">Featured post</h3>
        <div class="mb-1 text-muted">Nov 12</div>
        <p class="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <a href="#" class="stretched-link">Continue reading</a>
      </div>
      <div class="col-auto d-none d-lg-block">
        <svg
          class="bd-placeholder-img"
          width="200"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
      </div>
    </div>
  </div>
<div class="container-fluid">
  <footer>
    <div class="container pt-5 border-bottom">
      <div class="row">
        <div class="col-md-3 col-sm-12 mb-3 text-center">
          <img
            class="img-fluid"
            style="width: 200px; height: 60px;"
            src="../../assets/OILogoFooter.png"
            alt=""
          />
        </div>
        <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
          <h5 class="mb-4 font-weight-bold text-uppercase">Solutions</h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../sales/sales-performance-market-pipeline.html"
                >About</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../project-management/project-management.html"
                >Programmes</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../workforce/workforce-organization-management-hr.html"
                >Cohort</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../e-commerce/e-commerce.html"> Gallery</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
          <h5 class="mb-4 font-weight-bold text-uppercase">Contact Us</h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://github.com/naologic">Email: oiuni@gmail.com</a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="tel:254-726-304245">Tel: 0722000000</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
          <h5 class="mb-4 font-weight-bold text-uppercase">We are social</h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://www.linkedin.com/in/oyaro"
                > LinkedIn</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://twitter.com/osmadeit"
                > Twitter</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://www.facebook.com/osmadeit/" target="_blank"
                > Facebook</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
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
</style>

<script>
export default {};
</script>
<template>
  <div class="container" style="margin-top: 150px;">
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-primary">
      <div class="col-md-6 px-0">
        <h2 class="display-4c">Open Institute University <strong>Programmes</strong></h2>
      </div>
    </div>

    <div class="row mb-2">
      <div
        class="col-md-6"
        data-bs-toggle="modal"
        data-bs-target="#civilModal"
      >
        <div
          class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary"
              >School of Engineering</strong
            >
            <h3 class="mb-0">Civil Engineering</h3>
            <div class="mb-1 text-muted">Bachelor of Science</div>
            <p class="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" class="stretched-link">Learn more...</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img
              class="bd-placeholder-img"
              src="../../assets/civil.jpg"
              alt=""
              width="250"
              height="200"
              style="margin-top:6px; margin-right:6px"
            />
          </div>
        </div>
        <!-- Civil Engineering Modal -->
        <div
          class="modal fade"
          id="civilModal"
          tabindex="-1"
          aria-labelledby="civilModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="civilModalLabel">
                  Civil Engineering
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Civil engineering is a professional engineering discipline that
                deals with the design, construction, and maintenance of the
                physical and naturally built environment, including public works
                such as roads, bridges, canals, dams, airports, sewerage
                systems, pipelines, structural components of buildings, and
                railways.
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style="border-radius: 20px;"
                >
                  Close
                </button>
                <router-link to="/signup" class="nav-link">
                  <button
                    class="btn btn-primary"
                    type="button"
                    style="border-radius: 20px;"
                  >
                    Register now
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6"
        data-bs-toggle="modal"
        data-bs-target="#csModal">
        <div
          class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success"
              >School of Computing</strong
            >
            <h3 class="mb-0">Computer Science</h3>
            <div class="mb-1 text-muted">Masters</div>
            <p class="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" class="stretched-link">Learn more...</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img
              class="bd-placeholder-img"
              src="../../assets/cs.jpg"
              alt=""
              width="250"
              height="200"
              style="margin-top:6px; margin-right:6px"
            />
          </div>
        </div>
        <!-- Computer Science Modal -->
        <div
          class="modal fade"
          id="csModal"
          tabindex="-1"
          aria-labelledby="csModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="csModalLabel">
                  Computer Science
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Computer science is the study of computers and computing as well
                as their theoretical and practical applications. Computer
                science applies the principles of mathematics, engineering, and
                logic to a plethora of functions, including algorithm
                formulation, software and hardware development, and artificial
                intelligence.
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style="border-radius: 20px;"
                >
                  Close
                </button>
                <router-link to="/signup" class="nav-link">
                  <button
                    class="btn btn-primary"
                    type="button"
                    style="border-radius: 20px;"
                  >
                    Register now
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6"
        data-bs-toggle="modal"
        data-bs-target="#bcomModal">
        <div
          class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-warning"
              >School of Business</strong
            >
            <h3 class="mb-0">B.Com</h3>
            <div class="mb-1 text-muted">PhD</div>
            <p class="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" class="stretched-link">Learn more...</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img
              class="bd-placeholder-img"
              src="../../assets/business.jpg"
              alt=""
              width="250"
              height="200"
              style="margin-top:6px; margin-right:6px"
            />
          </div>
        </div>

        <!-- Bachelor of Commerce Modal -->
        <div
          class="modal fade"
          id="bcomModal"
          tabindex="-1"
          aria-labelledby="bcomModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="bcomModalLabel">
                  Bachelor of Commerce
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                A Bachelor of Commerce is an undergraduate degree in business,
                usually awarded in Canada, Australia, India, Sri Lanka,
                Pakistan, Ireland, New Zealand, Ghana, South Africa, Myanmar,
                Egypt, and additional Commonwealth countries; however, the
                degree is no longer offered in the United Kingdom.
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style="border-radius: 20px;"
                >
                  Close
                </button>
                <router-link to="/signup" class="nav-link">
                  <button
                    class="btn btn-primary"
                    type="button"
                    style="border-radius: 20px;"
                  >
                    Register now
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6"
        data-bs-toggle="modal"
        data-bs-target="#baModal">
        <div
          class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-info"
              >School of Arts</strong
            >
            <h3 class="mb-0">Acting Sciences</h3>
            <div class="mb-1 text-muted">BA</div>
            <p class="mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" class="stretched-link">Learn more...</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img
              class="bd-placeholder-img"
              src="../../assets/arts.jpg"
              alt=""
              width="250"
              height="200"
              style="margin-top:6px; margin-right:6px"
            />
          </div>
        </div>
        <!-- Bachelor of Arts Modal -->
        <div
          class="modal fade"
          id="baModal"
          tabindex="-1"
          aria-labelledby="baModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="baModalLabel">
                  Bachelor of Arts
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                A Bachelor of Arts is an undergraduate degree in business,
                usually awarded in Canada, Australia, India, Sri Lanka,
                Pakistan, Ireland, New Zealand, Ghana, South Africa, Myanmar,
                Egypt, and additional Commonwealth countries; however, the
                degree is no longer offered in the United Kingdom.
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style="border-radius: 20px;"
                >
                  Close
                </button>
                <router-link to="/signup" class="nav-link">
                  <button
                    class="btn btn-primary"
                    type="button"
                    style="border-radius: 20px;"
                  >
                    Register now
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- /.row -->
  </div>
  </template>
<style></style>

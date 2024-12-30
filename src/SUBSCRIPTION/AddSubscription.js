import React, { useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddSubscription() {
  const [package_name, setPackage_name] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/subscriptionadd", {
        package_name,
        price,
        duration,
        features
      })
      .then((res) => {
        navigate("/Subscription");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="main-wrapper">
        <NavBar />

        <div className="page-wrapper cardhead">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Add/Edit Subscription</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 class="fw-semibold mb-1">Subscription Information</h5>
                    <p>Provide the information below</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <form
                          onSubmit={handleSubmit}
                          className="needs-validation"
                        >
                          <div className="form-row row">
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Name of Subscription
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Name of Subscription"
                                onChange={(e) => setPackage_name(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a package_name of Subscription.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Price <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Price.
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Duration <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Duration"
                                onChange={(e) => setDuration(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Duration.
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Features <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Features"
                                onChange={(e) => setFeatures(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Features.
                              </div>
                            </div>
                          </div>

                          <div className="mb-12"></div>
                          <button className="btn btn-success" type="submit">
                            Submit form
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSubscription;

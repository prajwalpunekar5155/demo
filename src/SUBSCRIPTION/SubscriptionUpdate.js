import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserSubscription() {
  const { id } = useParams();

  const [package_name, setPackage_name] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/getsingleSubscription/" + id)
      .then((res) => {
        setPackage_name(res.data[0].package_name);
        setPrice(res.data[0].price);
        setDuration(res.data[0].duration);
        setFeatures(res.data[0].features);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/subscriptionedit/" + id, {
        package_name,
        price,
        duration,
        features,
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
                          className="needs-validation"
                          noValidate
                          onSubmit={handleSubmit}
                        >
                          <div className="form-row row">
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Subscription <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Subscription name"
                                value={package_name}
                                onChange={(e) =>
                                  setPackage_name(e.target.value)
                                }
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Subscription name.
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
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Description.
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
                                value={duration}
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
                                value={features}
                                onChange={(e) => setFeatures(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Features.
                              </div>
                            </div>
                          </div>

                          <button className="btn btn-success" type="submit">
                            Update
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

export default UserSubscription;

import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserCategory() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/getsinglecategory/" + id)
      .then((res) => {
        setName(res.data[0].name);
        setDescription(res.data[0].description);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/categoryedit/" + id, { name, description })
      .then((res) => {
        navigate("/Category");
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
                  <h3 className="page-title">Add/Edit Category</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 class="fw-semibold mb-1">Category Information</h5>
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
                                Category <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="First name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Category.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Description <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Middle name"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Description.
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

export default UserCategory;

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddSubCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [categories, setCategories] = useState([]); // State to store categories
  const navigate = useNavigate();

  // Fetch categories on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8081/getallCategory")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log("Error fetching categories", err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/subcategoryadd", {
        name,
        description,
        category_id, // Sending the selected category_id
      })
      .then((res) => {
        navigate("/SubCategory");
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
                  <h3 className="page-title">Add/Edit Sub-category</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="fw-semibold mb-1">
                      Sub-category Information
                    </h5>
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
                                htmlFor="validationCustom01"
                              >
                                Sub-category
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Sub-category"
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Sub-category.
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                htmlFor="validationCustom01"
                              >
                                Description{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Description.
                              </div>
                            </div>

                            {/* Dropdown for Category */}
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                htmlFor="categorySelect"
                              >
                                Category <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="categorySelect"
                                onChange={(e) => setCategory_id(e.target.value)}
                                required
                              >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.name}
                                  </option>
                                ))}
                              </select>
                              <div className="invalid-feedback">
                                Please select a Category.
                              </div>
                            </div>
                          </div>

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

export default AddSubCategory;

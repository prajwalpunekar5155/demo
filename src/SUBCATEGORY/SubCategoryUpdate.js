import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SubCategory() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/getallCategory")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log("Error fetching categories", err));
  }, []);

  // Fetch the subcategory details to be edited, including its category
  useEffect(() => {
    axios
      .get("http://localhost:8081/getsinglesubcategory/" + id)
      .then((res) => {
        setName(res.data[0].name);
        setDescription(res.data[0].description);
        setCategory_id(res.data[0].category_id);
      })
      .catch((err) => console.log("Error fetching subcategory", err));
  }, [id]);

  // Handle form submission for editing the subcategory
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/subcategoryedit/" + id, {
        name,
        description,
        category_id,
      })
      .then((res) => {
        navigate("/SubCategory");
      })
      .catch((err) => console.log("Error updating subcategory", err));
  };

  return (
    <div>
      <div className="main-wrapper">
        <NavBar />
        <div className="page-wrapper cardhead">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Edit Sub-category</h3>
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
                    <form onSubmit={handleSubmit}>
                      <div className="form-row row">
                        {/* Subcategory Name Input */}
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Sub-category <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a sub-category name.
                          </div>
                        </div>

                        {/* Subcategory Description Input */}
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Description <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a description.
                          </div>
                        </div>

                        {/* Category Dropdown */}
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Category <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            value={category_id}
                            onChange={(e) =>
                              setCategory_id(parseInt(e.target.value, 10))
                            } // Ensure the ID is correctly updated
                            required
                          >
                            <option value="" disabled>
                              Select a category
                            </option>{" "}
                            {/* Placeholder */}
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                          <div className="invalid-feedback">
                            Please select a category.
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button className="btn btn-success" type="submit">
                        Update Sub-category
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
  );
}

export default SubCategory;

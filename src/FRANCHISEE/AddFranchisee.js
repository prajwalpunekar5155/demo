import React, { useState } from "react";
import NavBar from "../NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddFranchisee() {
  const [fname, setFName] = useState("");
  const [mobile_no, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [ofname, setOFName] = useState("");
  const [omname, setOMName] = useState("");
  const [olname, setOLName] = useState("");
  const [omobile_no, setOPhoneno] = useState("");
  const [oemail, setOEmail] = useState("");
  const [oaddress, setOAddress] = useState("");
  const [ocountry, setOCountry] = useState("");
  const [ostate, setOState] = useState("");
  const [ocity, setOCity] = useState("");
  const [opincode, setOPincode] = useState("");
  const [gst_number, setGst_number] = useState("");
  const [pancard, setPancard] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/franchiseeadd", {
        fname,
        mobile_no,
        email,
        address,
        country,
        state,
        city,
        pincode,
        ofname,
        omname,
        olname,
        omobile_no,
        oemail,
        oaddress,
        ocountry,
        ostate,
        ocity,
        opincode,
        gst_number,
        pancard,
      })
      .then((res) => {
        navigate("/Franchisee");
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
                  <h3 className="page-title">Add/Edit Franchisee</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 class="fw-semibold mb-1">Franchisee Information</h5>
                    <p>Provide the information below</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <form
                          onSubmit={handleSubmit}
                          className="needs-validation"
                          // noValidate
                        >
                          <div className="form-row row">
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Franchisee name{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Franchisee
                                 name"
                                onChange={(e) => setFName(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a franchisee Name.
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom02"
                              >
                                Contact Number <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Contact Number"
                                onChange={(e) => setPhoneno(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Contact Number.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom02"
                              >
                                Email <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Email.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3"></div>
                          </div>

                          <div class="border-bottom mb-3 pb-3"></div>
                          <div class="border-bottom mb-3 pb-3">
                            <h5 class="fw-semibold mb-1">Address</h5>
                            <p>Please enter the address details</p>
                          </div>

                          <div className="form-row row">
                            <div className="col-md-12 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                Address <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid Address.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                Country <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid Country.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                State / Provine{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="State"
                                onChange={(e) => setState(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid State.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                City <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid City.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom05"
                              >
                                Zip
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                placeholder="Zip"
                                onChange={(e) => setPincode(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid zip.
                              </div>
                            </div>
                          </div>

                          <div className="form-row row">
                            <div class="border-bottom mb-3 pb-3"></div>
                            <div class="border-bottom mb-3 pb-3">
                              <h5 class="fw-semibold mb-1">Owner Details</h5>
                              <p>Please enter the owner details</p>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                First name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="First name"
                                onChange={(e) => setOFName(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a first Name.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom01"
                              >
                                Middle name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Middle name"
                                onChange={(e) => setOMName(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Middle Name.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom02"
                              >
                                Last name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Last name"
                                onChange={(e) => setOLName(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Last Name.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom02"
                              >
                                Phone Number <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Phone Number"
                                onChange={(e) => setOPhoneno(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Phone Number.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom02"
                              >
                                Email <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Email"
                                onChange={(e) => setOEmail(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a Email.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3"></div>
                          </div>

                          <div class="border-bottom mb-3 pb-3"></div>
                          <div class="border-bottom mb-3 pb-3">
                            <h5 class="fw-semibold mb-1">Address</h5>
                            <p>Please enter the address details</p>
                          </div>

                          <div className="form-row row">
                            <div className="col-md-12 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                Address <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Address"
                                onChange={(e) => setOAddress(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid Address.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                Country <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Country"
                                onChange={(e) => setOCountry(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid Country.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                State / Provine{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="State"
                                onChange={(e) => setOState(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid State.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                City <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="City"
                                onChange={(e) => setOCity(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid City.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom05"
                              >
                                Zip
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                placeholder="Zip"
                                onChange={(e) => setOPincode(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid zip.
                              </div>
                            </div>
                          </div>

                          <div class="border-bottom mb-3 pb-3"></div>
                          <div class="border-bottom mb-3 pb-3">
                            <h5 class="fw-semibold mb-1">Other Details</h5>
                            <p>Please enter the other details</p>
                          </div>

                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                GST number <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Date of Birth"
                                onChange={(e) => setGst_number(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid GST number.
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label
                                className="form-label"
                                for="validationCustom03"
                              >
                                Pan Card <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Pan Card"
                                onChange={(e) => setPancard(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid Pan Card.
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

export default AddFranchisee;

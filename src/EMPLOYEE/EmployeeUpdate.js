import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeUpdate() {

    const {id} = useParams();

    const [fname, setFname] = useState('');
    const [mname, setMName] = useState('');
    const [lname, setLName] = useState('');
    const [mobile_no, setPhoneno] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [dob, setDob] = useState('');
    const [pancard, setPancard] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8081/getsingleuser/'+id)
        .then(res => {

            setFname(res.data[0].fname);
             setMName(res.data[0].mname);
            setLName(res.data[0].lname);
            setPhoneno(res.data[0].mobile_no);
            setEmail(res.data[0].email);
            setAddress(res.data[0].address);
            setCountry(res.data[0].country);
            setState(res.data[0].state);
            setCity(res.data[0].city);
            setPincode(res.data[0].pincode);
            setDob(res.data[0].dob);
            setPancard(res.data[0].pancard);

        })
        .catch(err => console.log(err))
    },[])
    

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/useredit/'+id,{fname,mname,lname,mobile_no,email,address,country,state,city,pincode,dob,pancard})
        .then(res=>{
           navigate('/Users');
        }).catch(err => console.log(err));
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
                                    <h3 className="page-title">Add/Edit User</h3>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                    <h5 class="fw-semibold mb-1">User Information</h5>
                                    <p>Provide the information below</p>

                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm">
                                                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                                                    <div className="form-row row">
                                                        <div className="col-md-4 mb-3">
                                                            <label className="form-label" for="validationCustom01">First
                                                                name <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03"
                                                                placeholder="First name" value={fname}
                                                                onChange={e => setFname(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a first Name.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="form-label" for="validationCustom01">Middle
                                                                name <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom01"
                                                                placeholder="Middle name" value={mname}
                                                                onChange={e => setMName(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a Middle Name.
                                                            </div>

                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="form-label" for="validationCustom02">Last name <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom02"
                                                                placeholder="Last name" value={lname}
                                                                onChange={e => setLName(e.target.value)}  required />
                                                            <div className="invalid-feedback">
                                                                Please provide a Last Name.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="form-label" for="validationCustom02">Phone Number <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom02"
                                                                placeholder="Phone Number" value={mobile_no}
                                                                onChange={e => setPhoneno(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a Phone Number.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="form-label" for="validationCustom02">Email <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom02"
                                                                placeholder="Email" value={email}
                                                                onChange={e => setEmail(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a Email.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            
                                                        </div>
                                                     

                                                      
                                                    </div>

                                                        <div class="border-bottom mb-3 pb-3"></div>
                                                        <div class="border-bottom mb-3 pb-3">
                                                        <h5 class="fw-semibold mb-1">Address</h5>
                                                        <p>Please enter the address details</p>
                                                        </div>
                                                    
                                                    <div className="form-row row">

                                                        <div className="col-md-12 mb-3">
                                                            <label className="form-label" for="validationCustom03">Address <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03"
                                                                placeholder="Address" value={address}
                                                                onChange={e => setAddress(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a valid Address.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="form-label" for="validationCustom03">Country <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03"
                                                                placeholder="Country" value={country}
                                                                onChange={e => setCountry(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a valid Country.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="form-label" for="validationCustom03">State / Provine <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03"
                                                                placeholder="State" value={state}
                                                                onChange={e => setState(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a valid State.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="form-label" for="validationCustom03">City <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03" value={city}
                                                                placeholder="City" onChange={e => setCity(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a valid City.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label className="form-label" for="validationCustom05">Zip Code</label>
                                                            <input type="text" className="form-control" id="validationCustom05" value={pincode}
                                                                placeholder="Zip" onChange={e => setPincode(e.target.value)} required />
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
                                                            <label className="form-label" for="validationCustom03">Date Of Birth <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03" value={dob}
                                                                placeholder="Date of Birth" onChange={e => setDob(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a valid Date of birth.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="form-label" for="validationCustom03">Pan Card <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control" id="validationCustom03" value={pancard}
                                                                placeholder="Pan Card" onChange={e => setPancard(e.target.value)} required />
                                                            <div className="invalid-feedback">
                                                                Please provide a valid Pan Card.
                                                            </div>
                                                        </div>
                                                        
                                                       
                                                       
                                                        
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value
                                                                id="invalidCheck" required />
                                                            <label className="form-check-label" for="invalidCheck">
                                                                Agree to terms and conditions
                                                            </label>
                                                            <div className="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-success" type="submit">Update</button>
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
    )
}

export default EmployeeUpdate
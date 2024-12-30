import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function UnderMaintanance() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="main-wrapper">
                <div class="d-flex flex-wrap w-100 vh-100 overflow-hidden">
                    <div class="d-flex align-items-center justify-content-center flex-fill flex-column vh-100 overflow-auto">
                        <div class="error-img mb-4">
                            <img src="assets/img/authentication/maintenance-img.png" class="img-fluid" />
                        </div>
                        <div class="text-center">
                            <h3 class="fs-28 mb-3">We are Under Maintenance</h3>
                            <p class="fs-16">Sorry for any inconvenience caused, we have almost <br /> done Will get back soon!
                            </p>
                            <Link  to={'..'}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }} class="btn btn-primary">
                            <i class="ti ti-arrow-narrow-left"></i> Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div >
  )
}

export default UnderMaintanance
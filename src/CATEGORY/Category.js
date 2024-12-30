import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CAvatar,
  CCollapse,
  CButton,
  CBadge,
  CCardBody,
} from "@coreui/react";

function Users() {
  const [categorylist, setCategoryList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // For filtering search
  const [details, setDetails] = useState([]);
  const [deleteid, setDeleteId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // Pagination state
  const usersPerPage = 5; // Users per page

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/getallcategory")
      .then((res) => {
        setCategoryList(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Filter user list when search term changes
    const filtered = categorylist.filter(
      (user) =>
        user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(0); // Reset to the first page when search changes
  }, [searchTerm, categorylist]);

  function handleDelete() {
    axios
      .post("http://localhost:8081/categorydelete/" + deleteid)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function handleDelete_STEP1(id) {
    setDeleteId(id);
  }

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = [...details];
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(offset, offset + usersPerPage);

  return (
    <div>
      <div className="main-wrapper">
        <NavBar />
        <div className="page-wrapper">
          <div className="content">
            <h4 className="page-title">Category List</h4>
            <div className="card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="dropdown">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-package-export me-2"></i> Export
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Export as PDF
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Export as Excel
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center">
                    {/* Search Bar */}
                    <input
                      type="text"
                      className="form-control me-2"
                      style={{ width: "250px" }} // Shortened width
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div>
                      <Link to="/AddCategory" className="btn btn-primary">
                        <i className="ti ti-square-rounded-plus me-2"></i> Add
                        Category
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Avatar</CTableHeaderCell>
                      <CTableHeaderCell>Name</CTableHeaderCell>
                      <CTableHeaderCell>Description</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>Actions</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {currentUsers.map((data, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>
                          <CAvatar src={`assets/img/profiles/avatar-19.jpg`} />
                        </CTableDataCell>
                        <CTableDataCell>{data.name}</CTableDataCell>
                        <CTableDataCell>{data.description}</CTableDataCell>

                        <CTableDataCell>
                          <CBadge color={getBadge(data.status)}>
                            {data.status}
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="primary"
                            variant="outline"
                            size="sm"
                            onClick={() => toggleDetails(data.id)}
                          >
                            {details.includes(data.id) ? "Hide" : "Show"}
                          </CButton>
                          <CCollapse visible={details.includes(data.id)}>
                            <CCardBody>
                              <h4>{data.name}</h4>
                              <p>Description: {data.description}</p>

                              <CButton color="info" size="sm">
                                <Link to={`/CategoryUpdate/${data.id}`}>
                                  Edit
                                </Link>
                              </CButton>

                              <CButton
                                color="danger"
                                size="sm"
                                className="ms-1"
                              >
                                {" "}
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_contact"
                                  onClick={(e) => handleDelete_STEP1(data.id)}
                                >
                                  Delete
                                </Link>
                              </CButton>
                            </CCardBody>
                          </CCollapse>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>

                {/* Pagination */}
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={Math.ceil(filteredUsers.length / usersPerPage)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-end"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="delete_contact" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="text-center">
                  <h4 className="mb-2">Remove User?</h4>
                  <p className="mb-0">
                    Are you sure you want to remove the selected user?
                  </p>
                  <div className="d-flex justify-content-center mt-4">
                    <a
                      href="#"
                      className="btn btn-light me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <a onClick={handleDelete} className="btn btn-danger">
                      Yes, Delete it
                    </a>
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

export default Users;

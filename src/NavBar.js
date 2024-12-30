import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/session_get")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.token_id);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const location = useLocation();

  const getLinkStyles = (paths) => {
    const isActive = paths.some(
      (path) =>
        location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
    return {
      color: isActive ? "#E41F07" : "#333", // Red when active, default when inactive
      backgroundColor: isActive ? "#FCE9E6" : "transparent", // Light background for active link
    };
  };

  // Function to apply icon styles dynamically
  const getIconStyles = (paths) => {
    const isActive = paths.some(
      (path) =>
        location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
    return {
      color: isActive ? "white" : "#333", // Icon color set to white
      backgroundColor: isActive ? "#E41F07" : "#F6F6F6", // Red background for active icon, default when inactive
      padding: "5px", // Padding for visibility of the background color
      borderRadius: "4px", // Optional: Rounded corners for the icon background
    };
  };

  return (
    <div>
      <div className="header">
        <div className="header-left active">
          <Link to="/Dashboard" className="logo logo-normal">
            <img src="assets/img/logo.svg" alt="Logo" />
            <img
              src="assets/img/white-logo.svg"
              className="white-logo"
              alt="Logo"
            />
          </Link>
          <Link to="/Dashboard" className="logo-small">
            <img src="assets/img/logo-small.svg" alt="Logo" />
          </Link>
          <Link id="toggle_btn" to="javascript:void(0);">
            <i className="ti ti-arrow-bar-to-left"></i>
          </Link>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <div className="header-user">
          <ul className="nav user-menu">
            <li className="nav-item nav-search-inputs me-auto">
              <div className="top-nav-search">
                <a href="javascript:void(0);" className="responsive-search">
                  <i className="fa fa-search"></i>
                </a>
                <form action="#" className="dropdown">
                  <div className="searchinputs" id="dropdownMenuClickable">
                    <input type="text" placeholder="Search" />
                    <div className="search-addon">
                      <button type="submit">
                        <i className="ti ti-command"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item nav-list">
              <ul className="nav">
                <li className="dark-mode-list">
                  <a
                    href="javascript:void(0);"
                    id="dark-mode-toggle"
                    className="dark-mode-toggle"
                  >
                    <i className="ti ti-sun light-mode active"></i>
                    <i className="ti ti-moon dark-mode"></i>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-header-list"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-layout-grid-add"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end menus-info">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="menu-list">
                          <li>
                            <Link to="/Users">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-violet">
                                  <i className="ti ti-user-up"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Users</p>
                                  <span>Add New User</span>
                                </div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <a href="pipeline.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-green">
                                  <i className="ti ti-timeline-event-exclamation"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Pipline</p>
                                  <span>Add New Pipline</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="activities.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-pink">
                                  <i className="ti ti-bounce-right"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Activities</p>
                                  <span>Add New Activity</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="analytics.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-info">
                                  <i className="ti ti-analyze"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Analytics</p>
                                  <span>Shows All Information</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="projects.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-danger">
                                  <i className="ti ti-atom-2"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Projects</p>
                                  <span>Add New Project</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="menu-list">
                          <li>
                            <a href="leads.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-secondary">
                                  <i className="ti ti-chart-arcs"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Leads</p>
                                  <span>Add New Leads</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="companies.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-tertiary">
                                  <i className="ti ti-building-community"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Company</p>
                                  <span>Add New Company</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="tasks.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-success">
                                  <i className="ti ti-list-check"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Tasks</p>
                                  <span>Add New Task</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="campaign.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-purple">
                                  <i className="ti ti-brand-campaignmonitor"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Campaign</p>
                                  <span>Add New Campaign</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            <li className="nav-item nav-item-email nav-item-box">
              <a href="email.html">
                <i className="ti ti-message-circle-exclamation"></i>
                <span className="badge rounded-pill">14</span>
              </a>
            </li>

            <li className="nav-item dropdown nav-item-box">
              <a
                href="javascript:void(0);"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-bell"></i>
                <span className="badge rounded-pill">13</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end notification-dropdown">
                <div className="topnav-dropdown-header">
                  <h4 className="notification-title">Notifications</h4>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="Profile"
                            />
                            <span className="badge badge-info rounded-pill"></span>
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              Welcome to our portal
                            </p>
                            <p className="noti-time">
                              Last Wednesday at 9:42 am
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities.html" className="view-link">
                    View all
                  </a>
                  <a href="javascript:void(0);" className="clear-link">
                    Clear all
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="javascript:void(0);"
                className="nav-link userset"
                data-bs-toggle="dropdown"
              >
                <span className="user-info">
                  <span className="user-letter">
                    <img
                      src="assets/img/profiles/avatar-20.jpg"
                      alt="Profile"
                    />
                  </span>
                  <span className="badge badge-success rounded-pill"></span>
                </span>
              </a>
              <div className="dropdown-menu menu-drop-user">
                <div className="profilename">
                  <a className="dropdown-item" href="index-2.html">
                    <i className="ti ti-layout-2"></i> Dashboard
                  </a>
                  <a className="dropdown-item" href="profile.html">
                    <i className="ti ti-user-pin"></i> My Profile
                  </a>
                  <a className="dropdown-item" href="login.html">
                    <i className="ti ti-lock"></i> Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="dropdown mobile-user-menu">
          <a
            href="javascript:void(0);"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="index-2.html">
              <i className="ti ti-layout-2"></i> Dashboard
            </a>
            <a className="dropdown-item" href="profile.html">
              <i className="ti ti-user-pin"></i> My Profile
            </a>
            <a className="dropdown-item" href="login.html">
              <i className="ti ti-lock"></i> Logout
            </a>
          </div>
        </div>
      </div>

      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="clinicdropdown">
                <Link to="/Dashboard">
                  <img
                    src="assets/img/profiles/avatar-14.jpg"
                    className="img-fluid"
                    alt="Profile"
                  />
                  <div className="user-names">
                    <h5>{name}</h5>
                    <h6>Tech Lead</h6>
                  </div>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h6 className="submenu-hdr">Main Menu</h6>
                <ul>
                  <li>
                    <Link to="/Dashboard" style={getLinkStyles(["/Dashboard"])}>
                      <i
                        className="ti ti-user-up"
                        style={getIconStyles(["/Dashboard"])}
                      ></i>
                      <span
                        style={{ color: getLinkStyles(["/Dashboard"]).color }}
                      >
                        Dashboard
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Users"
                      style={getLinkStyles([
                        "/Users",
                        "/AddUser",
                        "/UserUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/Users",
                          "/AddUser",
                          "/UserUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/Users",
                            "/AddUser",
                            "/UserUpdate",
                          ]).color,
                        }}
                      >
                        Users
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Franchisee"
                      style={getLinkStyles([
                        "/Franchisee",
                        "/AddFranchisee",
                        "/FranchiseeUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/Franchisee",
                          "/AddFranchisee",
                          "/FranchiseeUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/Franchisee",
                            "/AddFranchisee",
                            "/FranchiseeUpdate",
                          ]).color,
                        }}
                      >
                        Franchisee
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/Leads" style={getLinkStyles(["/Leads"])}>
                      <i
                        className="ti ti-chart-arcs"
                        style={getIconStyles(["/Leads"])}
                      ></i>
                      <span style={{ color: getLinkStyles(["/Leads"]).color }}>
                        Leads
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/Team" style={getLinkStyles(["/Team"])}>
                      <i
                        className="ti ti-users"
                        style={getIconStyles(["/Team"])}
                      ></i>
                      <span style={{ color: getLinkStyles(["/Team"]).color }}>
                        Team Lead
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Category"
                      style={getLinkStyles([
                        "/Category",
                        "/AddCategory",
                        "/CategoryUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/Category",
                          "/AddCategory",
                          "/CategoryUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/Category",
                            "/AddCategory",
                            "/CategoryUpdate",
                          ]).color,
                        }}
                      >
                        Category
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SubCategory"
                      style={getLinkStyles([
                        "/SubCategory",
                        "/SubAddCategory",
                        "/SubCategoryUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/SubCategory",
                          "/SubAddCategory",
                          "/SubCategoryUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/SubCategory",
                            "/SubAddCategory",
                            "/SubCategoryUpdate",
                          ]).color,
                        }}
                      >
                        Sub-category
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Subscription"
                      style={getLinkStyles([
                        "/Subscription",
                        "/AddSubscription",
                        "/SubscriptionUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/Subscription",
                          "/AddSubscription",
                          "/SubscriptionUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/Subscription",
                            "/AddSubscription",
                            "/SubscriptionUpdate",
                          ]).color,
                        }}
                      >
                        Subscription
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Employee"
                      style={getLinkStyles([
                        "/Employee",
                        "/AddEmployee",
                        "/EmployeeUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/Employee",
                          "/AddEmployee",
                          "/EmployeeUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/Employee",
                            "/AddEmployee",
                            "/EmployeeUpdate",
                          ]).color,
                        }}
                      >
                        Employee
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/DeliveryMan"
                      style={getLinkStyles([
                        "/DeliveryMan",
                        "/AddDeliveryMan",
                        "/DeliveryManUpdate",
                      ])}
                    >
                      <i
                        className="ti ti-building-community"
                        style={getIconStyles([
                          "/DeliveryMan",
                          "/AddDeliveryMan",
                          "/DeliveryManUpdate",
                        ])}
                      ></i>
                      <span
                        style={{
                          color: getLinkStyles([
                            "/DeliveryMan",
                            "/AddDeliveryMan",
                            "/DeliveryManUpdate",
                          ]).color,
                        }}
                      >
                        Delivery Man
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr">Reports</h6>
                <ul>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i className="ti ti-file-invoice"></i>
                      <span>Reports</span>
                      <span className="menu-arrow"></span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/b">Lead Reports</Link>
                      </li>
                      <li>
                        <Link to="/b">Deal Reports</Link>
                      </li>
                      <li>
                        <Link to="/b">Contact Reports</Link>
                      </li>
                      <li>
                        <Link to="/b">Company Reports</Link>
                      </li>
                      <li>
                        <Link to="/b">Project Reports</Link>
                      </li>
                      <li>
                        <Link to="/b">Task Reports</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr">Settings</h6>
                <ul>
                  <li>
                    <Link to="/Team">
                      <i className="ti ti-lock"></i>
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

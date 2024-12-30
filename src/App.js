import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './Dashboard';
import Users from './USER/Users';
import Navbar from './NavBar';
import AddUser from './USER/AddUser';
import UnderMaintanance from './UnderMaintanance';
import UserUpdate from './USER/UserUpdate';
import Franchisee from "./FRANCHISEE/Franchisee";
import AddFranchisee from "./FRANCHISEE/AddFranchisee";
import FranchiseeUpdate from "./FRANCHISEE/FranchiseeUpdate";
import Category from "./CATEGORY/Category";
import AddCategory from "./CATEGORY/AddCategory";
import CategoryUpdate from "./CATEGORY/CategoryUpdate";
import Subscription from "./SUBSCRIPTION/Subscription";
import AddSubscription from "./SUBSCRIPTION/AddSubscription";
import SubscriptionUpdate from "./SUBSCRIPTION/SubscriptionUpdate";
import SubCategory from "./SUBCATEGORY/SubCategory";
import AddSubCategory from "./SUBCATEGORY/AddSubCategory";
import SubCategoryUpdate from "./SUBCATEGORY/SubCategoryUpdate";
import Employee from './EMPLOYEE/Employee';
import AddEmployee from './EMPLOYEE/AddEmployee';
import EmployeeUpdate from './EMPLOYEE/EmployeeUpdate';
import DeliveryMan from './DELIVERYMAN/DeliveryMan';
import AddDeliveryMan from './DELIVERYMAN/AddDeliveryman';
import DeliveryManUpdate from './DELIVERYMAN/DeliverymanUpdate';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Navbar" element={<Navbar />}></Route>
        <Route path="/AddUser" element={<AddUser />}></Route>
        <Route path="/UserUpdate/:id" element={<UserUpdate />}></Route>
        <Route path="/Franchisee" element={<Franchisee />}></Route>
        <Route path="/AddFranchisee" element={<AddFranchisee />}></Route>
        <Route path="/FranchiseeUpdate/:id" element={<FranchiseeUpdate />}></Route>
         <Route path="/Category" element={<Category />}></Route>
        <Route path="/AddCategory" element={<AddCategory />}></Route>
        <Route path="/CategoryUpdate/:id" element={<CategoryUpdate />}></Route>
        <Route path="/Subscription" element={<Subscription />}></Route>
        <Route path="/AddSubscription" element={<AddSubscription />}></Route>
        <Route
          path="/SubscriptionUpdate/:id"
          element={<SubscriptionUpdate />}
        ></Route>
        <Route path="/SubCategory" element={<SubCategory />}></Route>
        <Route path="/AddSubCategory" element={<AddSubCategory />}></Route>
        <Route
          path="/SubCategoryUpdate/:id"
          element={<SubCategoryUpdate />}
        ></Route>
         <Route path="/Employee" element={<Employee />}></Route>
          <Route path="/AddEmployee" element={<AddEmployee />}></Route>
          <Route path="/EmployeeUpdate" element={<EmployeeUpdate />}></Route>
          <Route path="/Deliveryman" element={<DeliveryMan />}></Route>
          <Route path="/AddDeliveryman" element={<AddDeliveryMan />}></Route>
          <Route path="/DeliverymanUpdate" element={<DeliveryManUpdate />}></Route>

        <Route path="*" element={<UnderMaintanance />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

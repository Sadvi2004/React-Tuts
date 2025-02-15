import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Siderbar1 from "./components/Siderbar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <div className="main-container">
//       <Navbar />
//       <Main />
//       <div className="sidebar">
//         <Siderbar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>
//   )
// }
// export default App;
// import Prop1 from "./Propsexample/Prop1";
// import Prop2 from "./Propsexample/Prop2";
// import PropsChildern from "./Propsexample/PropsChildern";
// import ChildProps from "./Propsexample/ChildProps";
// import Chi from "./Propsexample/Chi";
// import CounterEx from "./statesExample/CounterEx";
// import ExuseEffect from "./hooks/ExuseEffect";
// import RefEx from "./hooks/RefEx";
// import ContextApi from "./contextapi/ContextApi";
// import ContextC1 from "./contextapi/ContextC1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
// import Aboutpage from "./Pages/Aboutpage";
// import PageNotFound from "./components/PageNotFound";
// import Profile from "./Pages/Profile";
// import MyAccount from "./Pages/MyAccount";
// import MySettings from "./Pages/MySettings";
// import UserForm from "./components/UserForm";
// import TeachForm from "./components/TeachForm";

import Create from "./crudcomponents/Create";
import Edit from "./crudcomponents/Edit";
import Home from "./crudcomponents/Home";
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <div>
      {/* <Prop1 name="Sadvi" age={20} desig={['developer', 'designer']} userdetails={{ city: "Hyd", area: "maisammaguda" }} sendFun={function () { alert("Hi im from parent component") }} />
      <Prop2 name="John" isLoggedIn={true} hobbies={["basketball", "coding", "playing", "music"]} />
      <PropsChildern username="sadvi" company="Meta">
        <h1>This data is passed as props children</h1>
        <ChildProps />
      </PropsChildern>
      <Chi name="vishnu" />
      <StateEx /> */}
      {/* <CounterEx /> */}
      {/* <ExuseEffect /> */}
      {/* <RefEx /> */}
      {/* <ContextApi>
        <ContextC1 />
      </ContextApi> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="myaccount" element={<MyAccount />} />
            <Route path="mysettings" element={<MySettings />} />
          </Route>
          <Route path="/userform" element={<UserForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <TeachForm /> */}


      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>


    </div>
  )
}
export default App;
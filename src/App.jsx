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
import Prop1 from "./Propsexample/Prop1";
import Prop2 from "./Propsexample/Prop2";
function App() {
  return (
    <div>
      <Prop1 name="Sadvi" age={20} />
      <Prop2 name="John" age={25} />
      <Prop1 name="Bob" age={30} />
      <Prop2 name="Alice" age={35} />
    </div>
  )
}
export default App;
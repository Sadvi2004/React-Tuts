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
// import StateEx from "./statesExample/StateEx";
import CounterEx from "./statesExample/CounterEx";
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
      <CounterEx />
    </div>
  )
}
export default App;
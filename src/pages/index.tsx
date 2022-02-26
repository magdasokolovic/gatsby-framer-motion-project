import React from "react";
import Home from "../containers/Home";
// import Loadable from "react-loadable";
import "../styles/home.scss";

// function LoadingComponent(props) {
//   return <div/>
// }

// const HomeLazy = Loadable({
//   loader: () => import("../containers/Home"),
//   loading: LoadingComponent,
// });


const Index = () => {
  return (
    <>
      {/* <HomeLazy/> */}
      <Home/>
    </>
  )
}

export default Index
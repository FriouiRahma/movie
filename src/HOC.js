import React from "react";
import SpinnerComp from "./spinner";

// const Hoc = List =>{
//     return props => props.isLoding === true ? <Spinner/> : <List {...props}/>
// }

function Hoc(WrappedComponent) {
    return class Hoc1 extends React.Component {
      render() {
        if (this.props.isLoding) {
          return <SpinnerComp/>;
        } else {
          return <WrappedComponent {...this.props} />; 
        }
      }
    };
  }
  export default Hoc;
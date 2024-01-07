import React from "react";
import "../../../assets/scss/components/app-loader.scss";
import LOGO from 'assets/LogoBlack.png'
class SpinnerComponent extends React.Component {
  render() {
    return (
      <div className="fallback-spinner vh-100">
        <img className="fallback-logo" src={LOGO} alt="logo" />
        <div className="loading">
          <div className="effect-1 effects"></div>
          <div className="effect-2 effects"></div>
          <div className="effect-3 effects"></div>
        </div>
      </div>
    );
  }
}

export default SpinnerComponent;

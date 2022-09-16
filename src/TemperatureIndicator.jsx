import React from "react";

class TemperatureIndicator extends React.Component {
  render(){
    return(
      <div className="temperature-display-container">
				<div className={"temperature-display " + this.props.indicatorColor}>{this.props.value}°C</div>
			</div>
      // <div className={"circle " + this.props.indicatorColor}>
      //   <h2>{this.props.value}°C</h2>
      // </div>
    )
  }
}

export default TemperatureIndicator;

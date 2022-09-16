import './App.css';
import React from 'react';
import TemperatureIndicator from './TemperatureIndicator';

class Temperature extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		temperature: 0,
		indicatorColor: "normal-temperature"
	  };
	}

	handleChangeIndicatorColor(temperature){
		let updatedIndicatorColor;
		if (temperature > 30) {
		  updatedIndicatorColor = "hot-temperature";
		} else if (temperature <= 30 && temperature >= 0) {
		  updatedIndicatorColor = "normal-temperature";
		} else if (temperature < 0) {
		  updatedIndicatorColor = "cold-temperature";
		} else {
		  updatedIndicatorColor = "normal-temperature";
		}
		this.setState({
		  indicatorColor: updatedIndicatorColor
		})
	  }
	
	  handleIncreaseTemperature(){
		const increasedTemperature = this.state.temperature + 1;
		this.handleChangeIndicatorColor(increasedTemperature)
		this.setState({
		  temperature: increasedTemperature,
		})
	  }
	
	  handleDecreaseTemperature(){
		const decreaseTemperature = this.state.temperature - 1;
		this.handleChangeIndicatorColor(decreaseTemperature)
		this.setState({
		  temperature: decreaseTemperature,
		})
	  }
	  render() {
    return(
        <div className='app-container'>
			<h2 className="app-title">Remote AC</h2>
				<TemperatureIndicator value={this.state.temperature} indicatorColor={this.state.indicatorColor}/>
			<div className='button-container'>
				<button onClick={() => this.handleDecreaseTemperature()}>-</button>
				<button onClick={() => this.handleIncreaseTemperature()}>+</button>
			</div>
		</div>
    )
	}
}
    export default Temperature;
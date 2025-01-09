import React from "react";
import "./datacard.css";

export class DataCard extends React.Component {
  render() {
    const storedData = JSON.parse(localStorage.getItem("data") || "{}");
    var data = storedData[this.props.name] || {};

    const currentTime = new Date();
    const currentHours = currentTime.getHours() - 12;
    const currentMinutes = currentTime.getMinutes();

    var rawFood = 0;

    for (let timeSlot in data) {
      let [start] = timeSlot.split("-").map(Number);

      // Check if the current time is within or after the end time of the slot
      if (currentHours <= start) {
        rawFood += parseFloat(data[timeSlot]);
      }
    }

    var partialAmount = 0;
    if (currentHours !== 11) {
      const amt = parseFloat(data[`${currentHours}-${currentHours + 1}`]);
      partialAmount = -amt;
      partialAmount += amt * ((60 - currentMinutes) / 60);
      partialAmount /= this.props.divisor;
    }

    const pansByTheHour = rawFood / this.props.divisor;
    const total = Object.values(data).reduce(
      (acc, value) => acc + parseFloat(value),
      0
    );

    return (
      <div className="data-card">
        <h1 className="title">{this.props.name}</h1>
        <span className="needed">
          Pans: {pansByTheHour.toFixed(2)}{" "}
          <span>({(pansByTheHour + partialAmount).toFixed(2)})</span>
        </span>

        <div className="sub-info">
          <span className="raw">Raw: {rawFood.toFixed(2)}</span>
          <span className="total">Total: {total.toFixed(2)}</span>
        </div>
      </div>
    );
  }
}

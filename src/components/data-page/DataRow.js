import React, { Component } from "react";
import "./datarow.css";

export class DataRow extends Component {
  constructor(props) {
    super(props);

    // Retrieve data from localStorage or initialize it
    const storedData = JSON.parse(localStorage.getItem("data") || "{}");
    this.state = {
      rowData: storedData[this.props.name] || {},
    };
  }

  onValueChange(id, val) {
    console.log(`[${this.props.name}] ${id} changed to ${val}`);

    // Update state and data in localStorage
    const updatedRowData = { ...this.state.rowData, [id]: val };
    this.setState({ rowData: updatedRowData });

    const data = JSON.parse(localStorage.getItem("data") || "{}");
    data[this.props.name] = updatedRowData;
    localStorage.setItem("data", JSON.stringify(data));
  }

  render() {
    return (
      <tr className={`data-row-${this.props.name}`}>
        <td>{this.props.name}</td>
        <td>
          <input
            className="data-input row-4-5"
            placeholder="0.0"
            value={this.state.rowData["4-5"] || ""}
            onChange={(e) => this.onValueChange("4-5", e.target.value)}
          />
        </td>
        <td>
          <input
            className="data-input row-5-6"
            placeholder="0.0"
            value={this.state.rowData["5-6"] || ""}
            onChange={(e) => this.onValueChange("5-6", e.target.value)}
          />
        </td>
        <td>
          <input
            className="data-input row-6-7"
            placeholder="0.0"
            value={this.state.rowData["6-7"] || ""}
            onChange={(e) => this.onValueChange("6-7", e.target.value)}
          />
        </td>
        <td>
          <input
            className="data-input row-7-8"
            placeholder="0.0"
            value={this.state.rowData["7-8"] || ""}
            onChange={(e) => this.onValueChange("7-8", e.target.value)}
          />
        </td>
        <td>
          <input
            className="data-input row-8-9"
            placeholder="0.0"
            value={this.state.rowData["8-9"] || ""}
            onChange={(e) => this.onValueChange("8-9", e.target.value)}
          />
        </td>
        <td>
          <input
            className="data-input row-9-10"
            placeholder="0.0"
            value={this.state.rowData["9-10"] || ""}
            onChange={(e) => this.onValueChange("9-10", e.target.value)}
          />
        </td>
        <td>
          <input
            className="data-input row-10-11"
            placeholder="0.0"
            value={this.state.rowData["10-11"] || ""}
            onChange={(e) => this.onValueChange("10-11", e.target.value)}
          />
        </td>
      </tr>
    );
  }
}

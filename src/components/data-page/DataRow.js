import React, { Component } from "react";

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
    const rows = ["4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11"];
    
    return (
      <tr className={`data-row-${this.props.name}`}>
        <td>{this.props.name}</td>
        {rows.map((row) => (
          <td key={row}>
            <input
              className={`data-input row-${row}`}
              placeholder="0.0"
              value={this.state.rowData[row] || ""}
              type="number"
              onChange={(e) => this.onValueChange(row, e.target.value)}
              style={{ width: "25px", textAlign: "center", backgroundColor: "#18181a", color: "white", border: "none", outline: "none", padding: "0.7em" }}
            />
          </td>
        ))}
      </tr>
    );
  }
}

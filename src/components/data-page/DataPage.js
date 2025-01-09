import React from "react";
import { DataRow } from "./DataRow";

export class DataPage extends React.Component {
  onClickedClearData() {
    if (window.confirm("Clear data?")) {
      delete localStorage["data"];
    }
  }

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "#18181a",
          color: "white",
        }}
      >
        <table
          border={1}
          style={{
            margin: "auto",
            marginTop: "50px",
            borderCollapse: "collapse",
            width: "80%",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "15px" }}>Name</th>
              <th>4-5</th>
              <th>5-6</th>
              <th>6-7</th>
              <th>7-8</th>
              <th>8-9</th>
              <th>9-10</th>
              <th>10-11</th>
            </tr>
          </thead>
          <tbody>
            <DataRow name="White" />
            <DataRow name="Brown" />
            <DataRow name="Steak" />
            <DataRow name="Chicken" />
            <DataRow name="Brisket" />
          </tbody>
        </table>

        <button
          onClick={this.onClickedClearData}
          style={{
            display: "block",
            margin: "auto",
            backgroundColor: "red",
            color: "white",
            marginTop: "10px",
            border: "none",
            cursor: "pointer",

            borderRadius: "50%",

            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "10px",
            width: "50px",
            height: "50px",
          }}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    );
  }
}

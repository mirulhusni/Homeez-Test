import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, ALIGN_CENTER } from "react-svg-pan-zoom";
import { AutoSizer } from "react-virtualized";
import './App.css';
import FloorPlan from "./FloorPlan/FloorPlan/FloorPlan";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="item floorplan">
          <div style={{ width: "90%", height: "90%"}}>
            <FloorPlan/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

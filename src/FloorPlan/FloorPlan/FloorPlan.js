import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import "../../App.css"
import * as d3 from 'd3';

class Rect extends React.Component {
  componentDidMount() {
    //draggable function
    const handleDrag = d3.drag()
      .subject(function() {
        const me = d3.select(this);
        return { x: me.attr('x'), y: me.attr('y') }
      })
      .on('drag', function() {
        const me = d3.select(this);
        me.attr('x', d3.event.x);
        me.attr('y', d3.event.y);
      });
    const node = ReactDOM.findDOMNode(this);
    handleDrag(d3.select(node));
  }
  render() {
    //return furniture
    return <rect x="20" y="20" width="60" height="90" style={{fill:"rgb(255,248,0)", stroke:"black;stroke-width:1px"}} {...this.props}/>
  }
}

class FloorPlan extends Component {

state = { tool: TOOL_NONE, value: INITIAL_VALUE };
  Viewer = null;

  //highlights hovered room
  isActiveRoom(value) {
    return "floorplan__room " + (value === this.state.selected ? "active" : "");
  }

  constructor( props ){
    super( props )
    //hide furniture
    this.state = { show : false };
    
    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv = () => {
      const { show } = this.state;
      this.setState( { show : !show } )
  }

  render() {
    return (
      <div>
        <center><br/>
        <button onClick={ this.toggleDiv } className="button">Show/Hide Furniture</button><br/>
        <svg
              style={{ border: '1px solid', marginLeft: '100px', marginTop: '40px' }} 
              width={860} height={760}
              viewBox="0 0 860 760"
            >
              <polygon
                className={this.isActiveRoom("gravity-0-029")}
                id="living-room"
                points="0,0 325,0 325,565 412,565 412,705 170,705 170,465 0,465"
              />
              <polygon
                className={this.isActiveRoom("gravity-0-029")}
                id="bed-room"
                points="325,0 635,0 635,368 325,368"
              >Bed Room</polygon>
              <polygon
                className={this.isActiveRoom("gravity-0-029")}
                id="bath/WC"
                points="325,368 532,368 532,565 325,565"
              />
              <polygon
                className={this.isActiveRoom("gravity-0-029")}
                id="aircon-ledge"
                points="532,368 635,368 635,565 532,565"
              />
              <polygon
                className={this.isActiveRoom("gravity-0-029")}
                id="household-shelter"
                points="0,465 170,465 170,705 0,705"
              />
              <polygon
                className={this.isActiveRoom("gravity-0-029")}
                id="kitchen"
                points="412,565 860,565 860,760 412,760"
              />
              <path
                className={this.isActiveRoom("gravity-0-029")}
                id="random-dome"
                d="M635,368 C775,368 775,565 635,565 Z"
              />
              <path
                className={this.isActiveRoom("gravity-0-029")}
                id="unhackable-corner"
                d="m 412,705 v 60 h 100"
              />
              <path
                className={this.isActiveRoom("gravity-0-029")}
                id="shelter-wall"
                d="m 170,625 v 80 h -170 v -240 h 170 v 80"
              />
              <path
                className={this.isActiveRoom("gravity-0-029")}
                id="unhackable-wall"
                d="m 0,0 v 124"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="unhackable-wall"
              d="m 325,368 h 124"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="unhackable-wall"
              d="m 635,0 v 124"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="unhackable-wall"
              d="m 635,244 v 124"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="unhackable-wall"
              d="m 860,565 v 200"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall"
              d="m 0,125 v 330"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall"
              d="m 512,765 h 341"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall"
              d="m 312,705 h 90"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall-windows"
              d="m 0,0 h 635"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall-windows"
              d="m 635,125 v 124"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall-windows"
              d="m 635,368 v 203"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall-windows"
              d="m 635,565 h 225"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="external-wall-windows"
              d="M635,368 C775,368 775,565 635,565"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="hackable-wall"
              d="m 325,0 v 250"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="hackable-wall"
              d="m 325,355 v 90"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="hackable-wall"
              d="m 325,565 h 310"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="hackable-wall"
              d="m 532,368 v 197"
              />
              <path
              className={this.isActiveRoom("gravity-0-029")}
              id="hackable-wall"
              d="m 450,368 h 197"
              />
              {
                this.state.show &&
                //draggable furniture
                <Rect
                className={this.isActiveRoom("gravity-0-029")}></Rect>
              }
            </svg></center>
      </div>
    );
  }
}

export default FloorPlan;

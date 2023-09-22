import React from "react";

class BGParticle extends React.Component {
  constructor({ index }) {
    super();
    this.midline = 500;
    this.index = index;
    this.x = Math.random() * 1000;
    this.speed = 0.5;
    this.minRadius = 8;
    this.r = 3 + Math.round(Math.random() * this.minRadius);
    this.radians = this.x;
    this.amplitude = Math.round(Math.random() * 200);
    this.y = 0 + Math.cos(this.radians) * this.amplitude;
    this.position = { x: this.x, y: this.y };
    this.hue = Math.round(Math.random() * 360);
    this.color = `hsl(${this.hue}, 50%, 90%)`;

    this.isSin = Math.random() > 0.5 ? true : false;
    this.holder = null;
    this.line = null;
  }

  update() {
    if (this.holder === null) {
      this.holder = document.querySelector(`#circ_${this.index}`);
      this.line = document.querySelector(`#line_${this.index}`);
    }
    this.position.x += this.speed;
    if (this.position.x > 1000 + this.r) this.position.x = -this.r;
    this.radians = Math.PI * 2 * (this.position.x / 1000);
    this.position.y = this.isSin
      ? this.midline + Math.sin(this.radians) * this.amplitude
      : this.midline + Math.cos(this.radians) * this.amplitude;
    //this.position.y = this.midline + Math.sin(this.radians) * this.amplitude;
    this.holder.setAttribute(
      "transform",
      `translate(${this.position.x} ${this.position.y})`
    );
  }

  render() {
    return (
      <>
        <g
          key={`g_${this.index}`}
          id={`circ_${this.index}`}
          transform={`translate(${this.position.x} ${this.position.y})`}
        >
          <circle
            cx={0}
            cy={0}
            r={this.r}
            fill={this.color}
            fillOpacity={0.3}
            stroke={"black"}
            strokeOpacity={0.15}
            strokeWidth={1}
          />

          {/* <circle cx={0} cy={0} r={this.r / 2} fill={this.color} opacity={0.05} /> */}
        </g>
      </>
    );
  }
}

export default BGParticle;

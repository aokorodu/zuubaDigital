import React from "react";

class BGParticle extends React.Component {
  constructor({ index }) {
    super();
    this.index = index;
    this.x = Math.random() * 1000;
    this.speed = 0.5;
    this.minRadius = 5;
    this.r = 3 + Math.round(Math.random() * this.minRadius);
    this.radians = ((Math.PI * 2) / 1000) * this.x;
    this.amplitude = Math.round(Math.random() * 200);
    this.y = 0 + Math.cos(this.radians) * this.amplitude;
    this.position = { x: this.x, y: this.y };
    this.hue = Math.round(Math.random() * 360);
    this.color = `hsl(${this.hue}, 100%, 90%)`;

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
    this.radians = ((Math.PI * 2) / 1000) * this.position.x;
    this.position.y = this.isSin
      ? 500 + Math.sin(this.radians) * this.amplitude
      : 500 + Math.cos(this.radians) * this.amplitude;
    //this.position.y = 500 + Math.sin(this.radians) * this.amplitude;
    this.holder.setAttribute(
      "transform",
      `translate(${this.position.x} ${this.position.y})`
    );
    const baseY = 500; // - (Math.sin(this.radians) * this.amplitude) / 2;
    const baseX = this.position.x - 50;
    const controlX = baseX + 50;
    const controlY = 500 + (this.position.y - 500) / 2;
    const endX = this.position.x;
    const endY = this.position.y;
    const str = `M${baseX},${baseY} Q${controlX},${controlY} ${endX},${endY}`;
    this.line.setAttribute("d", str);
    // this.line.setAttribute(
    //   "d",
    //   `M${this.position.x - 50},${baseY} L${this.position.x} ${this.position.y}`
    // );
  }

  render() {
    return (
      <>
        <path
          id={`line_${this.index}`}
          d={"M0, 0"}
          stroke="white"
          stroke-opacity={0.1}
          fill="none"
        />
        <g
          id={`circ_${this.index}`}
          transform={`translate(${this.position.x} ${this.position.y})`}
        >
          <circle
            cx={0}
            cy={0}
            r={this.r}
            fill={this.color}
            fill-opacity={0.3}
          />

          {/* <circle cx={0} cy={0} r={this.r / 2} fill={this.color} opacity={0.05} /> */}
        </g>
      </>
    );
  }
}

export default BGParticle;

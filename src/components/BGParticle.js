import React from "react";

class BGParticle extends React.Component {
  constructor({ index }) {
    super();
    this.index = index;
    this.x = Math.random() * 1000;
    this.speed = 0.2;
    this.r = 10 + Math.round(Math.random() * 30);
    this.radians = ((Math.PI * 2) / 1000) * this.x;
    this.amplitude = 10 + Math.round(Math.random() * 200);
    this.y = 0 + Math.cos(this.radians) * this.amplitude;
    this.position = { x: this.x, y: this.y };
    this.hue = 180 + Math.round(Math.random() * 10);
    this.color = `hsl(${this.hue}, 100%, 70%)`;
    this.holder = null;
    this.isSin = Math.random() > 0.5 ? true : false;
  }

  update() {
    if (this.holder === null) {
      this.holder = document.querySelector(`#circ_${this.index}`);
    }
    this.position.x += 0.2;
    if (this.position.x > 1000 + this.r) this.position.x = -this.r;
    this.radians = ((Math.PI * 2) / 1000) * this.position.x;
    this.position.y = this.isSin
      ? 500 + Math.sin(this.radians) * this.amplitude
      : 500 + Math.cos(this.radians) * this.amplitude;
    this.holder.setAttribute(
      "transform",
      `translate(${this.position.x} ${this.position.y})`
    );
  }

  render() {
    return (
      <g
        id={`circ_${this.index}`}
        transform={`translate(${this.position.x} ${this.position.y})`}
      >
        <circle cx={0} cy={0} r={this.r} fill={this.color} opacity={0.05} />
        <circle cx={0} cy={0} r={this.r / 2} fill={this.color} opacity={0.05} />
      </g>
    );
  }
}

export default BGParticle;

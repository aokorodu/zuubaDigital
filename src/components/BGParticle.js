import React from "react";
import PVector from "../utils/PVector";

class BGParticle extends React.Component {
  constructor({ index }) {
    super();

    // boundary, position stuff;
    this.right = 1000;
    this.left = 0;
    this.top = 1000;
    this.bottom = 0;

    this.flowStart = new PVector(500, 1000);
    this.midline = 500;
    this.index = index;
    this.x = Math.random() * 1000;
    this.speed = 0.5;
    this.minRadius = 8;
    this.r = 3 + Math.round(Math.random() * this.minRadius);

    // physics vars
    // -- gravity
    this.acceleration = new PVector(0, 0.1);
    this.velocity = new PVector(0, 0);

    // sin vars
    this.isSin = Math.random() > 0.5 ? true : false;
    this.radians = this.x;
    this.amplitude = Math.round(Math.random() * 200);
    this.y = 0 + Math.cos(this.radians) * this.amplitude;
    this.position = new PVector(this.x, this.y);

    // color vars
    this.hue = Math.round(Math.random() * 360);
    this.color = `hsl(${this.hue}, 50%, 90%)`;

    this.holder = null;

    this.flow = "sin";
  }

  changeFlow(newFlow) {
    this.flow = newFlow;
  }

  update() {
    if (this.holder === null) {
      this.holder = document.querySelector(`#circ_${this.index}`);
    }

    switch (this.flow) {
      case "sin":
        this.midline = this.position.y;
        this.sinFlow();
        break;

      case "waterFlow":
        this.waterFlow();
        break;

      default:
        this.sinFlow();
    }

    this.draw();
  }

  // sinFlow ------------
  sinFlow() {
    if (this.midline != 500) {
      this.midline = this.midline + (500 - this.position.y) / 10;
    }
    this.position.x += this.speed;
    if (this.position.x > 1000 + this.r) this.position.x = -this.r;
    this.radians = Math.PI * 2 * (this.position.x / 1000);
    if (Math.abs(this.midline - 500) > 1) {
    }
    this.position.y = this.isSin
      ? this.midline + Math.sin(this.radians) * this.amplitude
      : this.midline + Math.cos(this.radians) * this.amplitude;
  }

  // waterFlow ---------
  waterFlow() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.restartFlowIfNeeded();
  }

  restartFlowIfNeeded() {
    if (this.position.y > this.top) {
      this.reset();
      return;
    }

    if (this.position.x > this.right) {
      this.position.x = this.right;
      this.velocity.x *= -1;
    } else if (this.position.x < this.r) {
      this.position.x = this.r;
      this.velocity.x *= -1;
    }
  }

  reset() {
    this.position = new PVector(this.flowStart.x, this.flowStart.y);
    this.velocity = new PVector(1 - Math.random() * 2, -7 - Math.random() * 6);
  }

  draw() {
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

import React from "react";
import PVector from "../utils/PVector";

class BGParticle extends React.Component {
  constructor({ index }) {
    super();

    this.index = index;

    // boundary, position stuff;

    // physics vars
    this.physics = {
      minRadius: 11,
      radius: 2 + Math.round(Math.random() * 11),
      gravity: new PVector(0, 0.4),
      acceleration: new PVector(0, 0.4),
      velocity: new PVector(0, 0),
      position: new PVector(
        Math.random() * 1000,
        Math.random() > 0.5 ? 0 : 1000
      ),
      boundary: {
        right: 1000,
        left: 0,
        top: 1000,
        bottom: 0,
      },
      flowStart: new PVector(500, 1000),
      reset: function () {
        this.position = new PVector(this.flowStart.x, this.flowStart.y);
        this.velocity = new PVector(
          2 - Math.random() * 4,
          -14 - Math.random() * 12
        );
      },
      waterFlow: function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.restartFlowIfNeeded();
      },
      restartFlowIfNeeded: function () {
        if (this.position.y > this.boundary.top) {
          this.reset();
          return;
        }

        if (this.position.x > this.boundary.right) {
          this.position.x = this.boundary.right;
          this.velocity.x *= -1;
        } else if (this.position.x < this.radius) {
          this.position.x = this.radius;
          this.velocity.x *= -1;
        }
      },
    };

    // trig vars
    this.trig = {
      speed: 1,
      midline: 500,
      readyToStartSinFlow: false,
      isSin: Math.random() > 0.5 ? true : false,
      amplitude: Math.round(Math.random() * 200),
      radians: null,
      setRadians: function (newRadians) {
        this.radians = newRadians;
      },
      get ypos() {
        const pos = this.isSin
          ? this.midline + Math.sin(this.radians) * this.amplitude
          : this.midline + Math.cos(this.radians) * this.amplitude;
        return pos;
      },
    };

    // sin vars

    this.trig.setRadians(Math.PI * 2 * (this.physics.position.x / 1000));
    this.target = new PVector(this.physics.position.x, this.trig.ypos);

    // color vars
    this.hue = Math.round(Math.random() * 360);
    this.color = `hsl(${this.hue}, 50%, 80%)`;

    this.holder = null;

    this.flow = "sin";
  }

  changeFlow(newFlow) {
    this.flow = newFlow;
    this.trig.readyToStartSinFlow = false;
    if (this.flow === "waterFlow") this.physics.velocity.y = 0;
  }

  update() {
    if (this.holder === null) {
      this.holder = document.querySelector(`#circ_${this.index}`);
    }

    switch (this.flow) {
      case "sin":
        this.sinFlow();
        break;

      case "waterFlow":
        this.physics.waterFlow();
        break;
    }

    this.draw();
  }

  // sinFlow ------------

  inSinPosition() {
    const dist = PVector.GetDistance(this.physics.position, this.target);
    const isClose = dist < 1 ? true : false;

    return isClose;
  }

  moveToSinPosition() {
    const dx = this.target.x - this.physics.position.x;
    const moveX = dx / 10;
    this.physics.position.x += moveX;

    const dy = this.target.y - this.physics.position.y;
    const moveY = dy / 10;
    this.physics.position.y += moveY;
  }

  sinFlow() {
    console.log(
      "this.trig.readyToStartSinFlow? ",
      this.trig.readyToStartSinFlow
    );
    if (!this.trig.readyToStartSinFlow) {
      if (this.inSinPosition()) {
        this.trig.readyToStartSinFlow = true;
      } else {
        this.moveToSinPosition();
        return;
      }
    }

    if (!this.trig.readyToStartSinFlow) return;

    console.log("sinflowing");
    this.physics.position.x += this.trig.speed;
    if (this.physics.position.x > 1000 + this.physics.radius)
      this.physics.position.x = -this.physics.radius;
    this.trig.setRadians(Math.PI * 2 * (this.physics.position.x / 1000));

    this.physics.position.y = this.trig.isSin
      ? this.trig.midline + Math.sin(this.trig.radians) * this.trig.amplitude
      : this.trig.midline + Math.cos(this.trig.radians) * this.trig.amplitude;
  }

  draw() {
    this.holder.setAttribute(
      "transform",
      `translate(${this.physics.position.x} ${this.physics.position.y})`
    );
  }

  render() {
    return (
      <>
        <g
          key={`g_${this.index}`}
          id={`circ_${this.index}`}
          transform={`translate(${this.physics.position.x} ${this.physics.position.y})`}
        >
          <circle
            cx={0}
            cy={0}
            r={this.physics.radius}
            fill={"white"}
            fillOpacity={0.2}
            stroke={"white"}
            strokeOpacity={0.3}
            strokeWidth={5}
          />

          {/* <circle cx={0} cy={0} r={this.physics.radius / 2} fill={this.color} opacity={0.05} /> */}
        </g>
      </>
    );
  }
}

export default BGParticle;

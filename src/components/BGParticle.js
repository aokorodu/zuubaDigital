import React from "react";

class BGParticle extends React.Component {
  constructor({ x, y }) {
    super();
    this.r = 5 + Math.round(Math.random() * 10);
    this.position = { x, y };
  }

  render() {
    return (
      <circle
        cx={this.position.x}
        cy={this.position.y}
        r={this.r}
        fill={"black"}
        opacity={0.1}
      />
    );
  }
}

export default BGParticle;

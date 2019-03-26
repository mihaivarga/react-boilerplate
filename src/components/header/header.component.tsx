import React, { Component } from "react";
import { HeaderComponentProps } from "./header.props";
import { HeaderComponentState } from "./header.state";
import "./header.component.scss";


export class HeaderComponent extends Component<HeaderComponentProps, HeaderComponentState> {
  readonly state: HeaderComponentState = { enthusiasm: this.props.enthusiasm || 1, name: this.props.name || ""};

  onIncrement = () => this.updateEnthusiasm(this.state.enthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.enthusiasm - 1);

  render() {
    const { enthusiasm } = this.props;

    if (this.state.enthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.state.enthusiasm}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateEnthusiasm(enthusiasm: number) {
    this.setState({ enthusiasm });
  }
}

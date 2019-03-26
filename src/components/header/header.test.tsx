import React from "react";
import ReactDOM from "react-dom";
import { HeaderComponent } from "./header.component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HeaderComponent name="test" enthusiasm={1}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import { data } from "./directory.data";
import "./directory.style.scss";

export class directoryComponent extends Component {
  state = {
    sections: data
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherParameter }) => (
          <MenuItem key={id} {...otherParameter} />
        ))}
      </div>
    );
  }
}

export default directoryComponent;

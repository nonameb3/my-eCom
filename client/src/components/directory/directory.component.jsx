import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryData } from '../../redux/directory/directory.selectors'
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

export class directoryComponent extends Component {
  state = {
    sections: this.props.sectionsData
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

const mapStateToProps = createStructuredSelector({
  sectionsData: selectDirectoryData
});

export default connect(mapStateToProps)(directoryComponent);

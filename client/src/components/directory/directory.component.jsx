import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryData } from '../../redux/directory/directory.selectors'
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

function directoryComponent({sectionsData}) {
  return (
    <div className="directory-menu">
      {sectionsData.map(({ id, ...otherParameter }) => (
        <MenuItem key={id} {...otherParameter} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sectionsData: selectDirectoryData
});

export default connect(mapStateToProps)(directoryComponent);

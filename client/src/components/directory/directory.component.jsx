import React from "react";
import { useSelector } from "react-redux";

import { selectDirectoryData } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

function DirectoryComponent() {
  const sectionsData = useSelector(state => selectDirectoryData(state));

  return (
    <div className="directory-menu">
      {sectionsData.map(({ id, ...otherParameter }) => (
        <MenuItem key={id} {...otherParameter} />
      ))}
    </div>
  );
}

export default DirectoryComponent;

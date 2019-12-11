import React, { Component } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.style.scss";

export class CollectionOverview extends Component {
  render() {
    const { collections } = this.props;
    return (
      <div className="collection-overview">
        {collections &&
          collections.map(({ id, ...Other }) => (
            <CollectionPreview key={id} {...Other} />
          ))}
      </div>
    );
  }
}

export default CollectionOverview;

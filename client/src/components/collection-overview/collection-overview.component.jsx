import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsArray } from "../../redux/shop/shop.selection";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.style.scss";

function CollectionOverview({collections}) {
  return (
    <div className="collection-overview">
      {collections &&
        collections.map(({ id, ...Other }) => (
          <CollectionPreview key={id} {...Other} />
        ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsArray
});

export default connect(mapStateToProps)(CollectionOverview);

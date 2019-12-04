import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsArray } from "../../redux/shop/shop.selection";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.style.scss";

function CollectionOverview() {
  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectShopCollectionsArray
    })
  );

  return (
    <div className="collection-overview">
      {collections &&
        collections.map(({ id, ...Other }) => (
          <CollectionPreview key={id} {...Other} />
        ))}
    </div>
  );
}

export default CollectionOverview;

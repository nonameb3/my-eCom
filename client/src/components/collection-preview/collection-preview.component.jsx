import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {items !== null &&
          items
            .filter((e, idx) => idx < 4)
            .map(items => (
              <CollectionItem key={items.id} items={items} />
            ))}
      </div>
    </div>
  );
}

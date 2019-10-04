import React from "react";
import "./collection-preview.scss";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="preview">
        {items !== null &&
          items
            .filter((e, idx) => idx < 4)
            .map(item => <div key={item.key}>{item.name}</div>)}
      </div>
    </div>
  );
}

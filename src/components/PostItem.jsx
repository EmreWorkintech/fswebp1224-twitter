import React from "react";

function PostItem({ item }) {
  return (
    <div className="p-4 border-b border-slate-200">
      <h2 className="font-bold">{item.title}</h2>
      {item.body}
    </div>
  );
}

export default PostItem;

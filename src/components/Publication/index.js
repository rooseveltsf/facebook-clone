import React from "react";

import "./style.css";

export default function Publication({ post }) {
  return (
    <div className="container">
      <div className="info">
        <div className="test">
          <div className="image">
            <img src={post.author.avatar} alt="" />
          </div>
          <div className="info-people">
            <h2 className="name">{post.author.name}</h2>
            <span className="date">{post.date}</span>
          </div>
        </div>

        <div className="post">
          <p>{post.content}</p>
        </div>
      </div>

      <hr />

      {post.comments.map(comment => (
        <div key={comment.id} className="coments">
          <div>
            <img src={comment.author.avatar} alt="" />
          </div>
          <div className="data">
            <span className="name">{comment.author.name} </span>
            <span className="coment">{comment.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

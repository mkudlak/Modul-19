import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>UP</button>
    <button onClick={() => thumbDownComment(id)}>DOWN</button>
  </li>;

export default Comment;
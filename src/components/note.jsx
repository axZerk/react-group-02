import React from 'react';

const Note = ({ text, onDelete }) => (
  <div>
    <p>{text}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default Note;

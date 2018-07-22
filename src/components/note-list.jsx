import React from 'react';
import Note from './note';

const NoteList = ({ notes, onDelete }) => (
  <ul>
    {notes.map(note => (
      <li key={note.id}>
        <Note text={note.text} onDelete={() => onDelete(note.id)} />
      </li>
    ))}
  </ul>
);

export default NoteList;

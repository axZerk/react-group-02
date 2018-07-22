import React, { Component } from 'react';
import v4 from 'uuid/v4';
// import Counter from './counter';
// import Toggle from './toggle';
// import SignupForm from './signup-form';
import NoteEditor from './note-editor';
import NoteList from './note-list';
import SearchBar from './search-bar';
import { getVisibleNotes } from '../services/selectors';

export default class App extends Component {
  state = {
    notes: [],
    filter: '',
  };

  addNote = text => {
    const note = {
      id: v4(),
      text,
    };

    this.setState(prevState => ({
      notes: [note, ...prevState.notes],
    }));
  };

  deleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { notes, filter } = this.state;

    const visibleNotes = getVisibleNotes(notes, filter);

    return (
      <div>
        <NoteEditor onSubmit={this.addNote} />
        <SearchBar value={filter} onChange={this.changeFilter} />
        <NoteList notes={visibleNotes} onDelete={this.deleteNote} />
        {/* <SignupForm /> */}
        {/* <Counter startValue={15} step={5} /> */}
        {/* <Toggle>
          <p>
            Nunc nulla. Nullam accumsan lorem in dui. Praesent egestas neque eu
            enim.
          </p>
        </Toggle> */}
      </div>
    );
  }
}

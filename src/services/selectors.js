export const getVisibleNotes = (allNotes, filter) =>
  allNotes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase()),
  );

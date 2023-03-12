import React, { useState } from "react";
import { storeNotes } from "./redux/store";
import { addNote, deleteNote } from "./redux/action";

const NoteReduces = () => {
  const [state, setState] = useState(storeNotes.getState());
  const [note, setNote] = useState("");

  storeNotes.subscribe(() => {
    setState(storeNotes.getState())
    setNote('');
  });

  return (
    <div>
      <div className="d-flex mb-3">
        <input
          className="form-control"
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Ingrese una nueva nota"
          value={note}
        />
        <button className="btn btn-success w-25" onClick={() => addNote(note)}>
          add note
        </button>
      </div>
      <ul className="list-group">
        {state &&
          state.map((note, index) => {
            return (
              <div key={index} className="list-group-item list-group-item-dark" >
                <li >
                  {note.content},{note.id}
                </li>
                <button className="btn btn-danger" onClick={()=>deleteNote(note.id)}>Delete note</button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default NoteReduces;

import React, { useState } from "react";
import { storeNotes } from "./redux/store";
import { addNote, deleteNote, editNote } from "./redux/action";

const NoteReduces = () => {
  const [state, setState] = useState(storeNotes.getState());
  const [notes, setNote] = useState("");

  storeNotes.subscribe(() => {
    setState(storeNotes.getState());
    setNote("");
  });

  return (
    <div>
      <div className="d-flex mb-3">
        <input
          className="form-control"
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Ingrese una nueva nota"
          value={notes}
        />
        <button className="btn btn-success w-25" onClick={() => addNote(notes)}>
          add note
        </button>
      </div>
      <ul className="list-group">
        {state &&
          state.map((note, index) => {
            return (
              <div key={index} className="list-group-item list-group-item-dark">
                <li>
                  {note.content},{note.id}
                </li>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-success" onClick={()=> editNote(notes,note.id)}>Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete note
                  </button>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default NoteReduces;

import { storeNotes } from "./store";

export const note = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE": {
      return state.concat(action.payload);
    }
    case "DELETE_NOTE": {
      return state.filter((e) => e.id !== action.payload.id);
    }
    case "EDIT_NOTE": {
      const res = state.filter((e) => e.id === action.payload.id)[0];
      res.content = action.payload.content;
      return state;
    }
    default:
      return state;
  }
};

export const editNote = (data = "", id) => {
  storeNotes.dispatch({
    type: "EDIT_NOTE",
    payload: {
      content: data,
      id: id,
    },
  });
};

export const addNote = (data) => {
  const id = Math.random();
  storeNotes.dispatch({
    type: "NEW_NOTE",
    payload: {
      content: data,
      id: id,
    },
  });
};

export const deleteNote = (id) => {
  storeNotes.dispatch({
    type: "DELETE_NOTE",
    payload: {
      id: id,
    },
  });
};

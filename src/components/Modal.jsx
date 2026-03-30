import React from "react";
import { v4 } from "uuid";
import { useNotesStore } from "../store";

const Modal = () => {
  const id = v4();
  const { lang, setUpdate, update, modal, setModal, text, title, setTitle, setText, notes, setNotes } =
    useNotesStore();
  const cancel = () => {
    setModal(false);
    setTitle("");
    setText("");
    setUpdate({id:"", edit: false})

  };

  const addNote = () => {
    const newNote = {
      id: update.edit ? update.id : id,
      title: title,
      text: text,
      date: new Date().toLocaleDateString(),
    };
    if (update.edit) {
      setNotes(notes.map(note => note.id === update.id ? newNote : note))
      setUpdate({ id:"", edit: false})
    } else{
      setNotes([...notes, newNote]);
    }
    cancel()
  };

  return (
    <>
      <div className={`modal ${modal ? "active" : ""}`}>
        <div className="modal_card">
          <h2 className="modal_title">{update.edit ? lang.titlewindowedit :lang.titlewindow}</h2>
          <label className="modal_label">
            <span>Title</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
            />
          </label>

          <label className="modal_label">
            <span>Content</span>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Content"
            />
          </label>
          <div className="modal_btns">
            <button className="btn danger" onClick={cancel}>
              {lang.closebtn}
            </button>
            <button className="btn primary" onClick={addNote}>
              {update.edit ? lang.editwindowbtn : lang.addbtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

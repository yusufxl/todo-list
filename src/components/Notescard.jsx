import React from "react";
import pencilIcon from "../assets/images/pencil.svg";
import trashIcon from "../assets/images/trash.svg";
import { useNotesStore } from "../store";

const Notescard = ({ note }) => {
  const { title, date, text } = note;
  const {
    lang,
    setUpdate,
    setTitle,
    setText,
    setModal,
    setModall,
    setSelectedNote,
  } = useNotesStore();
  const updateNote = (note) => {
    setUpdate({ id: note.id, edit: true });
    setTitle(note.title);
    setText(note.text);
    setModal(true);
  };
  // const deleteNote = (id) => {
  //   setNotes(notes.filter((note) => note.id !== id));
  // };

  return (
    <>
      <div className="notes_card">
        <div className="notes_card_title">{title}</div>
        <p className="notes_card_date">{date}</p>
        <p className="notes_card_text">{text}</p>
        <div className="notes_card_btns">
          <button className="btn primary" onClick={() => updateNote(note)}>
            <img src={pencilIcon} alt="" />
            {lang.editbtn}
          </button>
          <button
            className="btn danger"
            onClick={() => {
              setSelectedNote(note);
              setModall(true);
            }}
          >
            <img src={trashIcon} alt="" />
            {lang.deledit}
          </button>
        </div>
      </div>
    </>
  );
};

/* <button className="btn danger" onClick={()=> deleteNote(note.id)}>
  <img src={trashIcon} alt=""/>
  {lang.deledit}
</button> */

export default Notescard;

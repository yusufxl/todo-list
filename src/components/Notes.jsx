import React, { useState } from "react";
import listIcon from "../assets/images/list.svg";
import gridIcon from "../assets/images/grid.svg";
import { useNotesStore } from "../store";
import Notescard from "./Notescard";
const Notes = () => {
  const [grid, setgrid] = useState(true);
  const { lang, notes, value } = useNotesStore();
  const filterNote = notes.filter((note) => {
    return value.trim() != ""
      ? note.title.toLowerCase().includes(value.toLowerCase())
      : note;
  });

  return (
    <div className="notes">
      {
        filterNote.length ?
              <div className="container">
          <div className="notes_top">
            <h2 className="notes_top_title">{lang.infobar}</h2>
            <button className="notes_top_btn" onClick={() => setgrid(!grid)}>
              {grid ? (
                <>
                  <img src={listIcon} alt="" />
                  <span>{lang.list}</span>
                </>
              ) : (
                <>
                  <img src={gridIcon} alt="" />
                  <span>{lang.grid}</span>
                </>
              )}
            </button>
          </div>
          <div className={`notes_box ${!grid && "active"}`}>
            {filterNote.map((note) => (
              <Notescard key={note.id} note={note} />
            ))}
          </div>

      </div>
        : <h2 className="nonote">{lang.nonote}</h2>
      }
      
    </div>
  );
};
  
export default Notes;

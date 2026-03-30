

import { useNotesStore } from "../store";
 const Modall = () => { 
    
    const { modall, lang, notes, setNotes, selectedNote, setModall } = useNotesStore(); 
    const deleteNote = (id) => { 
    setNotes (notes.filter(note => note.id !== id ));
    setModall(false);

    } 


//  const cancel = () => 
//     {   setModal(false); 
//         setTitle(""); 
//         setText(""); 
//         setUpdate({id:"", edit: false})     
//     }; 
    const cancel = () => {
    setModall(false);
    };


    return ( <div className={`modall ${modall ? "active" : ""}`}> 
    <div className="modall_card"> 
        <h2 className="modall_title">{lang.sorov}</h2> 
    <div className="modall_card_title">{selectedNote?.title}</div> 
        <div className="modall_btns">
        <button
            className="btn danger"
            onClick={() => deleteNote(selectedNote.id)}
        >
            <img src={lang.closebtn} alt=""/>
            {lang.deledit}
        </button> 

            <button className="btn primary" onClick={cancel}> 
             {lang.closebtn}
            </button>

            </div> 
        </div> 
    </div>
          
    ); 
    }; 
    
    export default Modall;
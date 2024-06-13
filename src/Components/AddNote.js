import React, { useState } from 'react'

export const AddNote = ({handleAddNote}) => {
    const [noteText,setNoteText] = useState('');
    const handleChange= (event)=>{
        if(characterLimit- event.target.value.length>=0 ){
        setNoteText(event.target.value)
    }
    };

    const handleSaveClick =()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }

    }
    const characterLimit = 1500;
  return (
    <div className='note new'>
        <textarea rows='8'
         cols='10' 
         placeholder='type to add note' 
         value={noteText}
         onChange={handleChange}
         ></textarea>
            <div className='note-footer'>
                <small >{characterLimit-noteText.length } remaining </small>
            <button onClick={handleSaveClick} className='save'>Save</button>
            </div>
        
    </div>
  )
}

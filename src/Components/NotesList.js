import React from 'react'
import { Note } from './Note'
import { AddNote } from './AddNote'


export const NotesList = ({notes, handleAddNote,
    handleDeleteNote,}) => {
  return (
    <div className='notes-list'>
        {notes.map((note) => ( note.text &&  note.id &&note.date && handleDeleteNote ? <Note 
            id={note.id}
             text={note.text}  
             date = {note.date}
             handleDeleteNote={handleDeleteNote}/> : ""))}

        {/* {
            notes.map((note)=>(
            <Note 
            id={note.id}
             text={note.text}  
             date = {note.date}
             handleDeleteNote={handleDeleteNote}/>))
        } */}
     <AddNote handleAddNote={handleAddNote}
    
     />
        
        </div>
  )
}

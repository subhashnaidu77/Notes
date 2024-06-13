//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { NotesList } from './Components/NotesList';
import {nanoid} from 'nanoid';
import { Search } from './Components/Search';
import { Header } from './Components/Header';
function App() {
  const [notes, setNotes] = useState(
    !localStorage.getItem("react-notes-app-data")?[
    {
    id: nanoid(),
    text:"This is my first note",
    date:"09/06/2024"
  },
  {
    id: nanoid(),
    text:"This is my second note",
    date:"09/06/2024"
  },
  {
    id: nanoid(),
    text:"This is my third note",
    date:"09/06/2024"
  } ,
]:   JSON.parse(
  localStorage.getItem('react-notes-app-data'))
);


const [searchText,setSearchText] = useState('');
const [darkMode,setDarkMode]= useState(false);

useEffect(()=>{
const savedNotes= JSON.parse(
  localStorage.getItem('react-notes-app-data'));

if(savedNotes){
  setNotes(savedNotes)
  
}
},[]);

useEffect(()=>{
  localStorage.setItem(
    'react-notes-app-data', 
    JSON.stringify(notes))
  
},[notes]);


const addNote = (text)=>{
  const date = new Date()
  const newNote ={
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  }
const newNotes = [...notes,newNote];
setNotes(newNotes);

};
const deleteNote =(id)=>{
const newNotes= notes.filter((note)=>note.id!==id);
setNotes(newNotes);
};
  return (
    <div className={`${darkMode &&'dark-mode'}`}>
       <div className="container">
      <Header handleToggleDarkMode ={setDarkMode}/>
      <Search handleSearchNote ={setSearchText} />
  
  <NotesList
  
  notes={notes.filter((note)=>
    note.text.toLocaleLowerCase().includes(searchText)
  )}
   handleAddNote={ addNote}
    handleDeleteNote={deleteNote}
  />

    </div>
    </div>
   
  );
}

export default App;

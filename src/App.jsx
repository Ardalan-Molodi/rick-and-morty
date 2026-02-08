import{allCharacters} from '../data/data'
import "./App.css";
import CharacterDetail from "./componentss/CharacterDetail";
import CharacterList from "./componentss/CharacterList";
import Navbar from "./componentss/Navbar";

export default function App(){
  return (
    <div className="app">
       <Navbar />
    <div className="main">
        <CharacterList characters={allCharacters} />
        <CharacterDetail />
    </div>
    </div>
   
  )
}
import { HeartIcon } from "@heroicons/react/20/solid";

export default function Navbar() {

  return <div className="navbar">
    <div className="navbar__logo">Logo❤️</div>;
    <input type="text" className="text-field " placeholder="serch..."/>
   <div className="navbar__result">Found x characters</div>
   <button className="heart">
    <HeartIcon className="icon"/>
    <span className="badge">5</span>
   </button>
    </div> 
}

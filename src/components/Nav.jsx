import { useState } from "react";
import uzFlag from "../assets/images/Uzbekistan-flag.webp";
import ruFlag from "../assets/images/russia.png";
import searchIcon from "../assets/images/search.svg";
import backIcon from "../assets/images/backImage.svg";
import clearIcon from "../assets/images/clearIcon.svg";
import { ru, uz } from "../lang";
import { useNotesStore } from "../store";

const Nav = () => {
    const {lang, setLang, setValue, value} = useNotesStore()
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState(false)
    const changeLang = (str) => {
        setActive(!active)
        setLang(str == 'ru' ? ru : uz)
    }
    const back = ()=> {
        setSearch(false)
        setValue('')
    }
    return (
        <>
            <nav className="nav">
                <div className="nav_lang">
                    <button className={`nav_lang_btn ${active && 'active'}`} onClick={() => changeLang('uz')}>
                        Uz
                        <img src={uzFlag} alt="" />
                    </button>
                    <button className={`nav_lang_btn ${!active && 'active'}`} onClick={() => changeLang('ru')}>
                        Ru
                        <img src={ruFlag} alt="" />
                    </button>
                </div>
                <h2 className="nav_title">{lang.appbartitle}</h2>
                <button className="nav_search" onClick={() => setSearch(true)}>
                    <img src={searchIcon} alt="" />
                </button>
            </nav>
            <nav className={`nav search ${search ? "active" : ""}`}>
                <button className="nav_back" onClick={back}>
                    <img src={backIcon} alt="" />
                </button>
                <div className="container">
                    <input
                    className="nav_input" 
                    type="text"
                    placeholder={lang.appbarseacrch}
                    value = {value}
                    onChange={(e) =>setValue(e.target.value)}
                    />
                    
                </div>
                <button className="nav_clear" onClick={()=> setValue('')}>
                    <img src={clearIcon} alt="" />
                </button>
            </nav>
        </>
    )
}

export default Nav
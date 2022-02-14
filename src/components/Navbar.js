import React from "react";
import '../App.css';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import img from '../images/pro.jfif';
import SearchIcon from '@mui/icons-material/Search';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="company">
                <h1 className="comp">Sales Machine</h1>
            </div>
                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" placeholder="Search.." id="form1" className="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary">
                        <SearchIcon />
                    </button>
                </div>
            <div className="profile">
               <div className="pro-item"><img src={img} className="img"/></div>
               <div className="pro-item"><CompareArrowsIcon /></div>
               <div className="pro-item"><KeyboardTabIcon /></div>
            </div>
        </div>
    )
}

export default Navbar;
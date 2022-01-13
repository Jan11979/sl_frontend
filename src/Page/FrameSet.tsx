import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

import {Route, Routes} from "react-router-dom";
import DrawMenu from "./NavMenu";

import './FrameSet.css';
//import getAll, {getListById, getTodoById } from "../Controller/GetFetch";
//import { FetchListNameData, IListNames } from "../Controller/DataService";

// import ShoppingListBasicBox from "./ShopListBasic";
// import BasicEditBox from "./BasicEditBox";

import axios from 'axios'
import {FetchListNameData, FetchListPData, IListNames} from "../Controller/DataService";
import getAll, {getTodoById} from "../Controller/Fetching";
// import getAll, {getListById, getTodoById } from "../Controller/GetFetch";
// import { FetchListNameData, IListNames } from "../Controller/DataService";
// import MidFrame from "./MidFrame";

export interface IShopListItem {
    name: string;
    count: number;
}

export interface IPersonalShopList {
    id: number;
    name: string;
    list: IShopListItem[];
}

export interface IShopList {
    id: number;
    name: string;
//    list:   IShopListItem[];
    listP: IPersonalShopList[];
}




function DrawFrameSet() {

    let tmpPersonalShopList:IPersonalShopList = {name: "", id: -1, list: []};
    const [listP, setListP] = useState(tmpPersonalShopList);
    useEffect(() => { getTodoById(0)
        .then(data => setListP( FetchListPData(data) ) ) }, [])

    let temp:IListNames[] = [];
    const [listeListName, setListeListName] = useState(temp);
    useEffect(() => { getAll("/ListName")
        .then(data => setListeListName( FetchListNameData(data) ) ) }, [])





//    let dataitem : IDataItem = {id: "1", description: "Hallo Text", status: "Status Text" }

    // const STORAGE_KEY = '234234234234MeinWirklichTollerKey123456789';
    // const [listeAllData, setListe] = useState([]);// CreateData(STORAGE_KEY));
    // useEffect(() => {
    //     //localStorage.setItem(STORAGE_KEY, JSON.stringify(listeAllData));
    //     console.log("useEffect->StoreContent:", listeAllData.name));
    // }

    return (
        <div>
            <div>
                <header className="Header">
                    <div>
                        <Routes>
                            <Route path="/" element={<Typography variant="h3">Home</Typography>}/>
                            <Route path="/Edit" element={<Typography variant="h3">Edit</Typography>}/>
                            <Route path="/About" element={<Typography variant="h3">About</Typography>}/>
                        </Routes>
                        < DrawMenu/>
                    </div>
                </header>
            </div>
            <div className="Body">
                <div className="LeftBody">
                    <Typography variant="h3">Left</Typography>
                </div>
                <div className="MidBody">
                    <Routes>

                        {/*<Route path="/" element={< ShoppingListBasicBox list={listeAllData}/>} />*/}
                        {/*/!*<Route path="/" element={< ShoppingListBasicBox list={listeListName}/>} />*!/*/}
                        {/*<Route path="/Edit" element={ <MidFrame listName={listeListName} listP={listP} />}/>*/}
                        <Route path="/" element={<Typography variant="h3">Home</Typography>}/>
                        <Route path="/Edit" element={<Typography variant="h3">Edit</Typography>}/>
                        <Route path="/About" element={<Typography variant="h3">About</Typography>}/>
                    </Routes>
                </div>
                <div className="RightBody">
                    <Routes>
                        <Route path="/" element={<Typography variant="h3">Home</Typography>}/>
                        <Route path="/Edit" element={<Typography variant="h3">Edit</Typography>}/>
                        <Route path="/About" element={<Typography variant="h3">About</Typography>}/>
                        {/*<Route  path="/" element={<BasicEditBox  listData={listeAllData} setterListe={setListe} />}/>*/}
                        {/*<Route  path="/Edit" element={<BasicEditBox  listData={listeAllData} setterListe={setListe} />}/>*/}
                        {/*<Route path="/About" element={<BasicEditBox  listData={listeAllData} setterListe={setListe} />}/>*/}
                    </Routes>
                </div>
            </div>
            <div className="BottomBody">
                <Typography variant="h4">Ende</Typography>
            </div>
        </div>
    )
}

export default DrawFrameSet;
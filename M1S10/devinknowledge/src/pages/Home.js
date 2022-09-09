import { useState } from "react";

import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import "./index.css";
export default function Home() {
 
  const [tipList, setTipList] = useState([]);
  return (
    <div id="conteiner">
      <SideBar
        tipList={tipList}
        setTipList={setTipList}
      />
      <MainContent tipList={tipList} />
    </div>
  );
}

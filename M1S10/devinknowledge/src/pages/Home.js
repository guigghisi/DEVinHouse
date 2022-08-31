import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import "./index.css";
export default function Home() {
  return (
    <div id="conteiner">
      <SideBar />
      <MainContent />
    </div>
  );
}

import "./App.css";

import { useEffect } from "react";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";

function App() {
  useEffect(() => {
    const menuList = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuList.forEach((ele) => ele.classList.remove("active"));
      this.classList.add("active");
    }

    menuList.forEach((ele) => ele.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      <div className="iconMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="activeCircle"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;

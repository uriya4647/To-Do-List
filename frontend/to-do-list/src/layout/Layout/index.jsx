import Header from "../Header";
import Main from "../Main.jsx/index.jsx";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
};

export default Layout;

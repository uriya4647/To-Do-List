import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout/index.jsx";
import backgrounds from "../src/images/preview.jpg";

function App() {
  return (
    <div style={{ marginTop: "0%", backgroundImage: `url(${backgrounds})` }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;

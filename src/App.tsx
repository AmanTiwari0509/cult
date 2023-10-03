import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Layout />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomPage from "./components/WelcomPage";
import ContainerPage from "./components/ContainerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomPage />} />
        <Route path="/next" element={<ContainerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

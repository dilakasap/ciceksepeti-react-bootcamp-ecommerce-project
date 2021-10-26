import "./App.scss";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;

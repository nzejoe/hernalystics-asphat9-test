import Home from "./components/Home";
import "./App.css";
import axios from "axios";

function App() {
    // set axios default baseURL
    axios.defaults.baseURL = "https://elect-her.herokuapp.com/api/v1";
    return <Home />;
}

export default App;

import { Provider } from "react-redux";
import store from "./store/redux";
import Navbar from "./components/AppHeader/Navbar";
import Main from "./components/AppBody/Main";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;

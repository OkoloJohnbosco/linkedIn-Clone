import classes from "./App.module.css";
import { useAppContext } from "./store/AppContext";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  const { state } = useAppContext();
  console.log(state);
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.app__content}>
        <Sidebar />
        <div className={classes.app__main}>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

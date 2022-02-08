import "./App.css";
import { Header } from "./components/Header";
import { Route, Switch } from "react-router-dom";
import { Mountain } from "./components/Mountain";
import { Road } from "./components/Road";
import { Bmx } from "./components/Bmx";
import { Track } from "./components/Track";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Bmx} />
        <Route path="/mountain" component={Mountain} />
        <Route path="/road" component={Road} />
        <Route path="/track" component={Track} />
      </Switch>
    </div>
  );
}

export default App;

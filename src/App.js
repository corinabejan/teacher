import "./App.css";
import Teacher from "./Teacher";
import { Switch, Route } from 'react-router-dom';
import RegularLesson from "./Lessons/RegularLesson";
import LiveSession from './Lessons/LiveSession';
import CustomLesson from "./Lessons/CustomLesson";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Teacher}/>
        <Route path="/regularlesson" component={RegularLesson}/>
        <Route path="/livesession" component={LiveSession} />
        <Route path="/customlesson" component={CustomLesson}/>
      </Switch>
    </div>
  );
}

export default App;

import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";

function App() {
  return (
    <div className="App">
      <h1 className="bg-slate-200 font-bold text-4xl ext-base leading-normal text-gray-500 dark:text-black py-2 font-oswald">
        The Movies Saga!
      </h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>

        {/* Details page */}
        {/* <Details /> */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;

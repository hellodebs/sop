import "./App.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Order from "./components/Order.js";
import Bill from "./components/Bill.js";
import Service from "./components/Service.js";

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/bill">
            <Bill />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/">
            <Redirect to="/menu" />
          </Route>
        </Switch>
      </header>
      <main className="app__main">
        <p>Dish 1</p>
        <p>Dish 2</p>
        <p>Dish 3</p>
        <p>Dish 4</p>
        <p>Dish 5</p>
        <p>Dish 6</p>
      </main>
      <footer className="app__footer">
        <nav className="app__nav">
          <NavLink className="app__navlink" to="/menu">
            Menu
          </NavLink>
          <NavLink className="app__navlink" to="/order">
            Order
          </NavLink>
          <NavLink className="app__navlink" to="/bill">
            Bill
          </NavLink>
          <NavLink className="app__navlink" to="/service">
            Service
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;

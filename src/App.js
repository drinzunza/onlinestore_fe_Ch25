import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import About from "./components/about";
import Todo from "./components/todo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <About />

      <h1>Welcome to my super online store!</h1>

      <Catalog />

      <Todo />

      <Footer />
    </div>
  );
}

export default App;

/**
 *
 * 1 - create Catalog component
 * 2 - create the Product product
 * 3 - on App.js render Catalog
 * 4 - on catalog render 5 Product
 * 5 - Product render QuantityPicker
 */

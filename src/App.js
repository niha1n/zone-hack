import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from './pages/Contact'

function App() {
  return (
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <AboutPage />
              }
            ></Route>
            <Route
              exact
              path="/contact"
              element={
                <ContactPage />
              }
            ></Route>
          </Routes>
          
        </div>
      </Router>
  );
}

export default App;
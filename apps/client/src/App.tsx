import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Books } from "./pages/books/Books.tsx";
import { Book } from "./pages/books/book/Book.tsx";
import { ThemeProvider, useTheme } from "./ThemeContext.tsx";

function App() {
  const isDarkMode = useTheme();

  return (
    <>
      <ThemeProvider value={isDarkMode}>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/books"}>Books</Link>
            </li>
            <li>
              <Link to={"/books/1"}>Book 1</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/books"} element={<Books />} />
          <Route path={"/books/:id"} element={<Book />} />
          <Route path={"*"} element={<h1>Not Found Page</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

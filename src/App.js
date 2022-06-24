import { Route, Routes } from "react-router-dom";

import Books from "./pages/Books";
import BookInformation from "./pages/BookInformation";
import SearchField from "./components/layout/SearchField";

function App() {
  return (
    <div>
      <SearchField />
      <Routes>
        <Route path="/" element={<Books />} exact />
        <Route path="/book-information" element={<BookInformation />} />
      </Routes>
    </div>
  );
}

export default App;

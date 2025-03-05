import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div className="bg-light text-dark min-vh-100">
      <Navbar setCategory={setCategory} />
      <div className="container mt-4">
        <NewsBoard category={category} />
      </div>
    </div>
  );
};

export default App;

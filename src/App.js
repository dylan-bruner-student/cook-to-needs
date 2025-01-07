import React, { useState } from "react";
import { FloatingEditButton } from './components/FloatingEditButton'
import { DataPage } from "./components/data-page/DataPage";
import { DataCard } from "./components/DataCard";

function App() {
  const [showDataPage, setShowDataPage] = useState(false);

  const toggleDataPage = () => {
    setShowDataPage((prev) => !prev);
  };

  return (
    <div className="App" style={{ backgroundColor: "#18181a" }}>
      {showDataPage && <DataPage />}
      <FloatingEditButton onClick={toggleDataPage} />

      <DataCard name="Chicken" divisor={5} />
      <DataCard name="Steak" divisor={5} />
      <DataCard name="Brisket" divisor={1} />
      <DataCard name="Brown" divisor={1} />
      <DataCard name="White" divisor={1} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import type { Bowler } from './types/Bowler';
import Header from './components/Header';
import BowlerTable from './components/BowlerTable';

function App() {
  // State variable to hold the list of bowlers fetched from the API
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  // Async function that fetches bowler data from the ASP.NET API
  const fetchBowlers = async () => {
    const response = await fetch('http://localhost:5000/api/bowlers');
    const data = await response.json();
    setBowlers(data);
  };

  // useEffect ensures fetchBowlers only runs once when the component first loads
  // The empty array [] prevents infinite re-fetching
  useEffect(() => {
    fetchBowlers();
  }, []);

  return (
    <>
      {/* Render the header component */}
      <Header />
      {/* Pass the bowlers state down to the table component as a prop */}
      <BowlerTable bowlers={bowlers} />
    </>
  );
}

export default App;

import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>TODO React App</h1>
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button>
    </div>
  );
}

export default App;

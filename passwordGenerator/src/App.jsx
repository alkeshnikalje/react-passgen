import { useState } from "react";
import Passgen from "./components/passgen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Passgen />
    </div>
  );
}

export default App;

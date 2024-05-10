import React from "react";
import Background from "./components/Background"; // Import the Background component
import Foreground from "./components/foreground";

function App() {
  return (
    <div className="h-screen w-full  bg-zinc-800">
      <Background /> {/* Add the Background component */}
      <Foreground /> {/* Add the foreground component */}
   
    </div>
  );
}

export default App;

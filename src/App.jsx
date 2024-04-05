import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Garry" animal="Cat" breed="Mixed" />
    <Pet name="Speed" animal="Cat" breed="Free Spirit" />
    <Pet name="Tao" animal="Dog" breed="Cute" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

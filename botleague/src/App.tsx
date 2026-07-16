import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Home from "@/pages/Home";

function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation in the tree
    // respect the OS-level "prefers reduced motion" accessibility setting.
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;

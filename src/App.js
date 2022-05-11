import { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  const InnerRef = useRef();
  const [scrollReached, setScrollReached] = useState(false);
  const onScroll = () => {
    if (InnerRef.current) {
      const { scrollTop } = InnerRef.current;
      if (scrollTop > 105 && !scrollReached) {
        setScrollReached(true);
      } else if (scrollTop < 105 && scrollReached) {
        setScrollReached(false);
      }
    }
  };
  return (
    <div
      style={{ overflowY: "auto" }}
      className="App"
      onScroll={onScroll}
      ref={InnerRef}
    >
      <header>
        <NavBar scrollReached={scrollReached} />
      </header>
      <Home scrollReached={scrollReached} />
    </div>
  );
}

export default App;

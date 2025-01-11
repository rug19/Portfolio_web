import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Stairs from "./Stairs";

const StairTransition = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
      {children}
    </>
  );
};

export default StairTransition;

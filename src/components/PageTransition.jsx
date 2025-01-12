import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const PageTransition = ({children}) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div key={location.pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-black top-0 pointer-events-none z-40"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;

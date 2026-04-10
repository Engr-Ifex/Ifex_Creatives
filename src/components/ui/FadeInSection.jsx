import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
        initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
            scale: 0.98,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
        }}
        transition={{
            duration: 0.7,
            ease: "easeOut",
        }}
        viewport={{ once: true, margin: "-100px" }}
        >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
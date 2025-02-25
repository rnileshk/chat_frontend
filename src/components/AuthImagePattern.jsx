import React from 'react';
import { motion } from 'framer-motion';

export default function AuthImagePattern() {
  const bubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center min-h-[100%] bg-blue-100">
      <div className="space-y-4">
        {["Hello!", "Let's chat!", "Using QuickChat", "First Sign Up", "And Then Sign In", "With your credentials", "Start chating......"].map((message, index) => (
          <motion.div
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md max-w-xs"
            initial="hidden"
            animate="visible"
            variants={bubbleVariants}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            {message}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

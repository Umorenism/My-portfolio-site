import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  content: string;
  onReadMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  content,
  onReadMore,
}) => {
  return (
    <motion.div
      className="max-w-lg rounded overflow-hidden shadow-lg p-4 bg-slate-800 w-full text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="font-bold text-xl mb-2 text-white">{title}</div>
      <p className="text-white text-base mb-4 font-semibold">{content}</p>
      <button
        onClick={onReadMore}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Read More
      </button>
    </motion.div>
  );
};

export default ServiceCard;

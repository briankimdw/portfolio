import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import { FiCode, FiGlobe, FiDatabase, FiTool, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const getIcon = (category) => {
    const icons = {
      "Programming Languages": FiCode,
      "Web Development": FiGlobe,
      "Data Science & Machine Learning": FiCpu,
      "Databases": FiDatabase,
      "Tools": FiTool,
    };
    return icons[category] || FiCode;
  };

  const getGradient = (index) => {
    const gradients = [
      "from-blue-500/10 to-blue-600/10",
      "from-green-500/10 to-green-600/10", 
      "from-purple-500/10 to-purple-600/10",
      "from-orange-500/10 to-orange-600/10",
      "from-pink-500/10 to-pink-600/10",
    ];
    return gradients[index % gradients.length];
  };

  const getIconColor = (index) => {
    const colors = [
      "text-blue-400",
      "text-green-400",
      "text-purple-400", 
      "text-orange-400",
      "text-pink-400",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Technical Skills</span>
          </motion.h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => {
              const Icon = getIcon(category);
              return (
                <motion.div
                  key={category}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                  
                  <motion.div
                    className="relative glass-card glass-card-hover rounded-2xl p-8 h-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Header with icon and title */}
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${getGradient(index)} border border-gray-600/30`}>
                        <Icon className={`${getIconColor(index)} group-hover:scale-110 transition-transform duration-300`} size={28} />
                      </div>
                      <h3 className="text-xl font-bold ml-4 text-white group-hover:text-gray-100 transition-colors">
                        {category}
                      </h3>
                    </div>
                    
                    {/* Skills list */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {items.join(", ")}
                      </p>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-full opacity-50"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-gray-600/30 to-gray-700/30 rounded-full opacity-30"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
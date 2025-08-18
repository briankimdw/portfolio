import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/briankimdw', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/brian-kim-19637a1a3', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:briankimdw@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
              <img 
                src="/profile.jpg" 
                alt="Brian Kim"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-gray-600"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 opacity-20 blur-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-2">
              <span className="text-white">Brian Kim</span>
            </h1>
            <motion.div
              className="h-1 w-32 mx-auto bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </motion.div>
          
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.p>
          
          {/* About Me Content */}
          <motion.div
            className="mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                4th year student at <span className="text-white font-medium">Duke University</span> triple majoring in 
                <span className="text-white font-medium"> Electrical Engineering</span>, 
                <span className="text-white font-medium"> Computer Science</span>, and 
                <span className="text-white font-medium"> Statistics</span>.
              </p>
              
              <p>
                Passionate about teaching and mentoring — served as a TA for 5 semesters across mathematics 
                and statistics courses including Calculus, Linear Algebra, Probability, and Statistical Inference.
              </p>
              
              <p>
                Software Engineering experience at <span className="text-white font-medium">Cisco/Duke University</span> and 
                <span className="text-white font-medium"> Pospal</span>, focusing on full-stack development 
                and scalable application design.
              </p>
              
              <p>
                Enthusiast for data science and applying mathematical concepts to solve real-world problems 
                through innovative technology solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 overflow-hidden rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-100 dark:to-gray-200"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="group px-8 py-4 rounded-xl border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-300 glass-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'briankimdw@gmail.com',
      href: 'mailto:briankimdw@gmail.com',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/brian-kim-19637a1a3',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/briankimdw',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={20} />
                  <span>{method.value}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
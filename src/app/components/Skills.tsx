import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Layers,
  GitBranch,
  Terminal,
  Sparkles,
} from 'lucide-react';

const skillCategories = [
  // {
  //   title: 'Frontend Development',
  //   icon: Code2,
  //   skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  //   color: 'from-blue-500 to-cyan-500',
  // },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Python', 'FastAPI', 'SQL Server', 'MongoDB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: ['Azure', 'Web App Service', 'Azure Datalake', 'CI/CD'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['LangChain', 'ChromaDB', 'RAG Systems', 'OpenAI', 'PyTorch', 'LLM Fine-tuning'],
    color: 'from-orange-500 to-red-500',
  },
  // {
  //   title: 'Architecture',
  //   icon: Layers,
  //   skills: ['Microservices', 'REST APIs', 'GraphQL', 'System Design'],
  //   color: 'from-indigo-500 to-blue-500',
  // },
  {
    title: 'Tools & Workflow',
    icon: GitBranch,
    skills: ['Git', 'GitHub Actions', 'Mind Meister','VS Code', 'Selenium','Data Automation'],
    color: 'from-yellow-500 to-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 cursor-default"
          >
            <Terminal className="size-4 text-blue-400" />
            <span className="text-sm text-slate-300">Technical Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable, and intelligent applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <div className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden">
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-3 bg-gradient-to-br ${category.color} rounded-xl mb-4 relative z-10`}
                >
                  <category.icon className="size-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl text-white mb-4 relative z-10">{category.title}</h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mt-12 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          
          <div className="flex items-start gap-4 relative z-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
            >
              <Sparkles className="size-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl text-white mb-2">Always Learning</h3>
              <p className="text-slate-300 mb-4">
                Continuously expanding my expertise in emerging technologies and best practices. 
                Currently exploring advanced RAG architectures, vector databases, and LLM fine-tuning.
              </p>
              <div className="flex flex-wrap gap-2">
                {['LangGraph', 'Pinecone', 'Llama 3', 'Azure AI'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm ${
                      i === 0 ? 'text-blue-300' : i === 1 ? 'text-purple-300' : i === 2 ? 'text-green-300' : 'text-orange-300'
                    } cursor-default`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
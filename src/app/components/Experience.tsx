import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'NUVO RETAIL',
    role: 'Jr. Data Engineer',
    period: 'FEB 2025 - Present',
    location: 'Delhi, IN',
    description: 'Built Data Pipelines from various Ecommerce and Quick Commerce platforms | Document Intelligence System using RAG and LLMs',
    achievements: [
      'Designed and implemented an end-to-end RAG pipeline integrating vector databases and LLMs for accurate retrieval from text documents',
      'Design and maintain complex data pipelines to extract, transform, and load product, pricing, and inventory data from various source systems into structured data warehouses for analytics and reporting.',
      'Orchestrate automated ETL workflows using Python and SQL, incorporating robust error handling, session management, and data validation to ensure high data integrity and reliability.',
      'Collaborated with cross-functional teams to integrate the system into production workflows',
    ],
    technologies: ['Python', 'Selenium', 'Backend APIs','Azure', 'ChromaDB', 'FastAPI', 'LLM', 'RAG', 'Web Automation'],
  },
  {
    company: 'NUVO RETAIL',
    role: 'Data Analyst Trainee',
    period: 'AUG 2024 - FEB 2025',
    location: 'Delhi, IN',
    description: 'Developed Scalable Data Pipelines, Implemented AI Solutions and System Automations.',
    achievements: [
      'Built a data pipeline to gathered the data of pan india level bakery resturants listed on swiggy portal and validate their FSSAI license numbers via the official FSSAI portal, enabling a client to target compliant businesses.',
      'Automated data extraction and validation processes using Python and Selenium, and implemented logger for monitoring and debugging, and improved data accuracy.',
      'built a image categorization system to categorize the product images into various categories such as product_image, detai_image, life_style_image',
],
    technologies: ['Python', 'Azure Data Studio', 'Azure VMs', 'Web Automation', 'LLMs', 'Selenium','Image to Text Model'],
  },
  // {
  //   company: 'StartUp Inc',
  //   role: 'Frontend Developer',
  //   period: 'Jan 2020 - May 2021',
  //   location: 'New York, NY',
  //   description: 'Created responsive and accessible user interfaces for SaaS platform.',
  //   achievements: [
  //     'Redesigned main product UI improving user engagement by 35%',
  //     'Implemented comprehensive component library reducing development time by 50%',
  //     'Achieved 98+ Lighthouse scores for performance and accessibility',
  //     'Contributed to open-source projects and internal tooling',
  //   ],
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest', 'Storybook'],
  // },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
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
            <Briefcase className="size-4 text-green-400" />
            <span className="text-sm text-slate-300">Career Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Professional experience building impactful solutions for leading tech companies
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  className="absolute left-0 md:left-8 top-8 -translate-x-1/2 size-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 cursor-pointer"
                >
                  {/* Pulsing ring */}
                  <motion.div
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [1, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden group"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1), transparent 50%)",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  
                  {/* Header */}
                  <div className="mb-4 relative z-10">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-2xl text-white mb-2"
                    >
                      {exp.role}
                    </motion.h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <motion.span
                        whileHover={{ scale: 1.05, color: "#60a5fa" }}
                        className="text-lg text-blue-400 cursor-default"
                      >
                        {exp.company}
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 cursor-default"
                      >
                        <Calendar className="size-4" />
                        {exp.period}
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 cursor-default"
                      >
                        <MapPin className="size-4" />
                        {exp.location}
                      </motion.span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4 relative z-10">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4 relative z-10">
                    <h4 className="text-sm text-slate-400 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-2 text-slate-300"
                        >
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="text-blue-400 mt-1.5"
                          >
                            •
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-lg text-sm text-slate-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://drive.google.com/file/d/1t7LEQSTnhcCgJXlgtz3-u2aZ3tPdWMX4/view?usp=drive_link"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all text-white"
          >
            <Briefcase className="size-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
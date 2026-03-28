import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'RAG Intelligence Suite - (Under Development)',
    description: 'Enterprise-grade document intelligence system with advanced AI retrieval. Features real-time document processing pipeline, ChromaDB vector storage, and sophisticated chat interface with glass morphism UI.',
    image: 'src/image/rag_system.png',
    tags: ['Python', 'Vector Embeddings','ChromaDB', 'LLMs', 'Langchain', 'RAG Methodology'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Naukri Profile Updater',
    description: 'Built a fully automated system that extracts content from a LaTeX resume and updates a Naukri profile daily. Reduced profile maintenance time to zero by automating the entire process.',
    image: 'src/image/naukri_profile_updater.png',
    tags: ['LLMs', 'Generative AI', 'Python', 'Langchain','Selenium'],
    liveUrl: '#',
    githubUrl: 'https://github.com/yuvrajthakurrrr/naukri_automation',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
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
            whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 cursor-default"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="size-4 text-purple-400" />
            </motion.div>
            <span className="text-sm text-slate-300">Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            A selection of my recent work showcasing expertise in AI, web development, and cloud solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group block h-full"
              >
                <div className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all relative">
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="size-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="size-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm text-white flex items-center gap-2"
                      >
                        <Sparkles className="size-4" />
                        Featured
                      </motion.div>
                    )}

                    {/* Overlay Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.githubUrl && (
                        <motion.button
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.githubUrl, '_blank');
                          }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Github className="size-5 text-white" />
                        </motion.button>
                      )}
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.liveUrl, '_blank');
                        }}
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="size-5 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-400 cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yuvrajthakurrrr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-white"
          >
            <Github className="size-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
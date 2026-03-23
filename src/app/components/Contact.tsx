import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
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
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 cursor-default"
          >
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Send className="size-4 text-blue-400" />
            </motion.div>
            <span className="text-sm text-slate-300">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:vikramsingh5682@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
              }}
            />
            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl"
              >
                <Mail className="size-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl text-white mb-2">Email</h3>
                <p className="text-slate-300">vikramsingh5682@gmail.com</p>
                <p className="text-sm text-slate-400 mt-2">Send me an email anytime</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yuvrajthakur"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15), transparent 70%)",
              }}
            />
            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl"
              >
                <Linkedin className="size-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl text-white mb-2">LinkedIn</h3>
                <p className="text-slate-300">@yuvrajthakur</p>
                <p className="text-sm text-slate-400 mt-2">Let's connect professionally</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/yuvrajthakurrrr"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)",
              }}
            />
            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"
              >
                <Github className="size-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl text-white mb-2">GitHub</h3>
                <p className="text-slate-300">@yuvrajthakurrrr</p>
                <p className="text-sm text-slate-400 mt-2">Check out my code</p>
              </div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15), transparent 70%)",
              }}
            />
            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl"
              >
                <MapPin className="size-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl text-white mb-2">Location</h3>
                <p className="text-slate-300">Delhi, IN</p>
                <p className="text-sm text-slate-400 mt-2">Open to Remote|Hybrid|On-site opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden group"
        >
          {/* Animated particles in background */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-1 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, Math.random() * 100 + "%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          <h3 className="text-2xl text-white mb-4 relative z-10">Ready to start a project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto relative z-10">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <motion.a
            href="mailto:vikramsingh5682@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all text-white relative z-10"
          >
            <Mail className="size-5" />
            Send a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
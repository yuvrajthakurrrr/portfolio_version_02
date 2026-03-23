import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl text-white mb-3">Yuvraj Singh</h3>
            <p className="text-slate-400 text-sm">
              Building the future with AI, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/yuvrajthakurrrr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-110"
              >
                <Github className="size-5 text-slate-300" />
              </a>
              <a
                href="https://linkedin.com/in/yuvrajthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-110"
              >
                <Linkedin className="size-5 text-slate-300" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-110"
              >
                <Mail className="size-5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} Yuvraj Singh. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="size-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

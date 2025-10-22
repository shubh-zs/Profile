import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar, Briefcase, GraduationCap, Award, Code, Database, Globe, Smartphone, Palette, Zap, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-400">
              Shubh Aggarwal
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        {/* Floating Download CV Button - Bottom Right */}
        <div className="fixed right-8 bottom-8 z-40">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-violet-600 rounded-lg font-semibold transition-all duration-300 glow-button shadow-lg hover:shadow-purple-500/50 flex items-center gap-2 text-white">
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm<br />
              <span className="cyber-glow-enhanced text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Shubh Aggarwal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-2 cyber-text">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto cyber-text">
              I create digital experiences that combine beautiful design with powerful functionality. 
              Passionate about building scalable web applications and solving complex problems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-violet-600 hover:from-purple-700 hover:via-pink-600 hover:to-violet-700 rounded-lg font-semibold transition-all duration-300 glow-button shadow-lg hover:shadow-purple-500/50"
            >
              Get In Touch
            </button>
            <button className="px-8 py-3 border border-purple-500 hover:border-purple-400 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 neon-border hover:shadow-lg hover:shadow-purple-500/25">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors glow-icon">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Optimized Dust Particle System */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Medium dust particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={`medium-${i}`}
              className="dust-medium"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 15}s`
              }}
            />
          ))}
          
          {/* Small dust particles */}
          {Array.from({ length: 80 }).map((_, i) => (
            <div 
              key={`small-${i}`}
              className="dust-small"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${18 + Math.random() * 12}s`
              }}
            />
          ))}
          
          {/* Micro dust particles */}
          {Array.from({ length: 120 }).map((_, i) => (
            <div 
              key={`micro-${i}`}
              className="dust-micro"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Animated scroll down button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 glow-border"
          >
            <ChevronDown size={24} className="animate-pulse" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        {/* Smoke effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="smoke-effect"></div>
          <div className="smoke-effect" style={{animationDelay: '3s'}}></div>
          <div className="smoke-effect" style={{animationDelay: '6s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 cyber-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 neon-text">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed neon-text">
                I'm a passionate Full Stack Developer with over 3 years of experience in creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and have a keen eye for user experience design.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed neon-text">
                My journey in tech started with curiosity about how things work on the web, 
                and it has evolved into a career where I get to build amazing products that 
                solve real-world problems.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-purple-400" size={20} />
                <span className="text-gray-300 neon-text">New Delhi, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" size={20} />
                <span className="text-gray-300 neon-text">shubhaggarwal.2003@gmail.com</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-purple-400" size={24} />
                  <h4 className="text-xl font-semibold neon-text">Frontend Development</h4>
                </div>
                <p className="text-gray-300 neon-text">
                  Creating responsive and interactive user interfaces using React, Vue.js, and modern CSS frameworks.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-purple-400" size={24} />
                  <h4 className="text-xl font-semibold neon-text">Backend Development</h4>
                </div>
                <p className="text-gray-300 neon-text">
                  Building robust server-side applications with Node.js, Python, and various database technologies.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="text-purple-400" size={24} />
                  <h4 className="text-xl font-semibold neon-text">Full Stack Solutions</h4>
                </div>
                <p className="text-gray-300 neon-text">
                  End-to-end development from concept to deployment, ensuring seamless integration across all layers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50 relative">
        {/* Grid pattern effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="grid-pattern"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-heading">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 neon-card backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2 neon-text">Senior Full Stack Developer</h3>
                  <h4 className="text-xl text-gray-300 mb-2 neon-text">TechCorp Solutions</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>2022 - Present</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 neon-text">
                Leading development of enterprise web applications serving 100k+ users. Architected microservices 
                infrastructure and implemented CI/CD pipelines that reduced deployment time by 60%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">React</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">Node.js</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">AWS</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">Docker</span>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 neon-card backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2 neon-text">Full Stack Developer</h3>
                  <h4 className="text-xl text-gray-300 mb-2 neon-text">StartupXYZ</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>2020 - 2022</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 neon-text">
                Developed and maintained multiple client projects using modern web technologies. 
                Collaborated with design teams to create pixel-perfect, responsive user interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">Vue.js</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">Python</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">PostgreSQL</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">MongoDB</span>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 neon-card backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2 neon-text">Junior Developer</h3>
                  <h4 className="text-xl text-gray-300 mb-2 neon-text">WebDev Agency</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>2019 - 2020</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 neon-text">
                Started my professional journey building websites and web applications. 
                Gained experience in frontend technologies and learned best practices in software development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">HTML/CSS</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">JavaScript</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">PHP</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm neon-tag">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        {/* Particle wave effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle-wave"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-heading">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold neon-text">Frontend</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">React</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">Vue.js</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">TypeScript</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">Tailwind CSS</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold neon-text">Backend</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">Node.js</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">Python</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">PostgreSQL</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">MongoDB</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold neon-text">DevOps & Tools</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">AWS</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">Docker</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">Git</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 neon-text">CI/CD</span>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 neon-progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50 relative">
        {/* Circuit pattern effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="circuit-pattern"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-heading">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg border border-purple-500/30 overflow-hidden hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105 neon-card backdrop-blur-sm">
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-purple-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3 neon-text">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4 text-sm neon-text">
                  Full-stack e-commerce solution with payment integration, inventory management, 
                  and admin dashboard. Built with React and Node.js.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs neon-tag">React</span>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs neon-tag">Node.js</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                      <Github size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg border border-purple-500/30 overflow-hidden hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105 neon-card backdrop-blur-sm">
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <Palette className="w-16 h-16 text-purple-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3 neon-text">Design System</h3>
                <p className="text-gray-300 mb-4 text-sm neon-text">
                  Comprehensive design system and component library used across multiple projects. 
                  Built with Storybook and TypeScript.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs neon-tag">React</span>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs neon-tag">Storybook</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg border border-purple-500/30 overflow-hidden hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105 neon-card backdrop-blur-sm">
              <div className="h-48 bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center">
                <Zap className="w-16 h-16 text-green-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-3 neon-text">Real-time Analytics</h3>
                <p className="text-gray-300 mb-4 text-sm neon-text">
                  Real-time data visualization dashboard with WebSocket integration. 
                  Processes and displays live metrics for business intelligence.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs neon-tag">Vue.js</span>
                    <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs neon-tag">Socket.io</span>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                      <Github size={16} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        {/* Energy field effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="energy-field"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-heading">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 neon-text">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed neon-text">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg border border-purple-500/30 neon-card">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 neon-text">ayush.negi@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg border border-purple-500/30 neon-card">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 neon-text">New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg border border-purple-500/30 neon-card">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 neon-text">linkedin.com/in/ayushnegi</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/30 neon-card backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2 neon-text">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 neon-input backdrop-blur-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2 neon-text">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 neon-input backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2 neon-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none neon-input backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 neon-button shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/30 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 neon-text">
            © 2025 Ayush Negi. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
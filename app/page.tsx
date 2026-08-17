"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, BrainCircuit, Code2, ExternalLink, Mail, Award, Layout, Database, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // State for Certificate Modal
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certData = {
    databases: {
      title: "IT Specialist – Databases",
      issuer: "Certiport · Pearson VUE",
      date: "Mar 2025",
      url: "https://www.credly.com/badges/6fffaf00-9976-4ac0-b66a-adafc256c4fe/public_url",
      learned: "Demonstrated proficiency in relational database design, advanced SQL querying, and data manipulation. Gained hands-on experience in managing database objects and optimizing structural performance.",
      skills: ["SQL", "Relational Modeling", "Database Security", "Normalization"]
    },
    networking: {
      title: "IT Specialist – Networking",
      issuer: "Certiport · Pearson VUE",
      date: "Mar 2025",
      url: "https://www.credly.com/badges/a67822d2-6aa0-438e-8422-d59cc1309709/public_url",
      learned: "Developed a strong foundation in networking concepts including the OSI model, IP routing, subnets, and network security protocols.",
      skills: ["TCP/IP", "Network Security", "Routing", "OSI Model"]
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-purple-600/30 font-sans relative">
      
      {/* Navbar (Sticky Top) */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">
          <span className="text-white">ACS</span>
          <span className="text-purple-500">.DEV</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#what-i-do" className="hover:text-purple-400 transition-colors">What I Do</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex bg-white/10 hover:bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300">
          LET'S TALK
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
              I BUILD DATA-DRIVEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 text-glow-purple">
                WEB APPLICATIONS.
              </span>
            </h1>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Agnes Catherine Suico</h2>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Computer Science student specializing in <strong className="text-purple-400 font-semibold">Data Science & Full-Stack Development</strong>, turning ideas and real-world problems into functional, user-focused applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 tracking-wide">
                VIEW MY WORK
              </a>
              <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 tracking-wide">
                LET'S CONNECT
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Who is Agnes? <span className="text-purple-500">.</span></h2>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 md:p-12 rounded-2xl border-l-4 border-l-purple-500">
            <p className="text-xl text-neutral-300 leading-relaxed mb-6 font-light">
              I'm a fourth-year Computer Science student specializing in Data Science and Full-Stack Development. I enjoy building applications that combine thoughtful interfaces, backend systems, and data-driven decision making.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              Most of my work revolves around solving practical problems through software—from disaster response systems and government services to machine learning and data visualization.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              I'm currently looking for opportunities where I can grow as a developer, contribute to real-world projects, and learn from experienced teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="what-i-do" className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Build <span className="text-purple-500">.</span></h2>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl border-t-4 border-t-purple-500 hover:bg-white/5 transition-all duration-300">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Layout className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Full-Stack Development</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Building responsive web applications with React, TypeScript, Node.js, SQL, and REST APIs.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl border-t-4 border-t-purple-600 hover:bg-white/5 transition-all duration-300">
              <div className="bg-purple-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BrainCircuit className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Science & ML</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Working with Python, data processing, predictive modeling, machine learning, and visualization.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl border-t-4 border-t-purple-400 hover:bg-white/5 transition-all duration-300">
              <div className="bg-purple-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data & Dashboards</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Turning datasets into understandable insights through Power BI and data visualization.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Bring <span className="text-purple-500">.</span></h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeIn} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Build</h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                Frontend and backend development for functional web applications.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Analyze</h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                Data processing, visualization, and machine learning for data-driven problems.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Solve</h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                Breaking down complex problems and turning them into practical technical solutions.
              </p>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects <span className="text-purple-500">.</span></h2>
            <h3 className="text-2xl text-neutral-300 mb-4 font-bold">Turning Ideas Into Working Solutions</h3>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
              A look at the projects I've built, from full-stack web applications to data-driven systems and machine learning solutions. Each project reflects how I approach real-world problems: understand the challenge, build the solution, and use technology to make it work.
            </p>
          </motion.div>

          {/* Featured Project 01: LIKAS */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-24">
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Image Showcase */}
                <div className="h-80 lg:h-auto bg-neutral-900 relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-neutral-900/80 z-10 mix-blend-multiply transition-opacity group-hover:opacity-30"></div>
                  <img src="/assets/images/likas_screenshot_10.png" alt="LIKAS System Interface" className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  <div className="relative z-20 text-center drop-shadow-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-6xl font-black text-white/50 tracking-tighter block mb-2">LIKAS</span>
                    <span className="text-purple-300 font-mono text-sm tracking-widest font-bold">DECISION SUPPORT SYSTEM</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="mb-2">
                    <span className="text-purple-400 font-mono text-sm font-bold tracking-wider">01 — Machine Learning + Full Stack</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">LIKAS</h3>
                  <h4 className="text-xl text-neutral-300 mb-6 font-medium">Flood Prioritization Decision Support System</h4>
                  
                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    A web-based decision support system designed to help prioritize flood-affected areas using machine learning and vulnerability data.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h5 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">My Role</h5>
                      <p className="text-neutral-400 text-sm">Full-Stack Developer · ML Researcher</p>
                    </div>
                    <div>
                      <h5 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Built With</h5>
                      <p className="text-neutral-400 text-sm">React · TypeScript · Node.js · Python · PostgreSQL · Random Forest · XGBoost</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">What I Worked On</h5>
                    <ul className="space-y-2 text-sm text-neutral-400">
                      <li className="flex items-start"><ChevronRight className="text-purple-500 shrink-0 mr-2" size={16} /> Developed the web application interface</li>
                      <li className="flex items-start"><ChevronRight className="text-purple-500 shrink-0 mr-2" size={16} /> Integrated flood and vulnerability datasets</li>
                      <li className="flex items-start"><ChevronRight className="text-purple-500 shrink-0 mr-2" size={16} /> Engineered features for priority classification</li>
                      <li className="flex items-start"><ChevronRight className="text-purple-500 shrink-0 mr-2" size={16} /> Compared Random Forest and XGBoost for flood-priority classification using engineered hazard and vulnerability features</li>
                      <li className="flex items-start"><ChevronRight className="text-purple-500 shrink-0 mr-2" size={16} /> Built data-driven visualizations and decision-support features</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <a href="/assets/Likas-Assets/LIKAS%20-PROPOSAL.pdf" target="_blank" className="inline-flex items-center font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider text-sm bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                      Project Proposal <ExternalLink size={14} className="ml-2" />
                    </a>
                    <a href="/assets/Likas-Assets/LIKAS%20-%20DETAILED%20USER%20MANUAL.pdf" target="_blank" className="inline-flex items-center font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider text-sm bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                      User Manual <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* More Projects Grid */}
          <h3 className="text-2xl font-bold text-white mb-8">More Projects</h3>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 02 */}
            <motion.div variants={fadeIn} className="glass-card rounded-2xl hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full overflow-hidden group">
              <div className="h-48 w-full bg-neutral-800 relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-purple-900/30 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img src="/assets/images/gov_screenshot_10.png" alt="Gov Appointment System" className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-purple-400 font-mono text-xs font-bold tracking-wider mb-2">02 — Full Stack</span>
                <h4 className="text-xl font-bold text-white mb-3">Gov Appointment System</h4>
                <p className="text-neutral-400 text-sm mb-6 flex-grow">
                  Developed a web-based appointment system that supports appointment scheduling, user management, and record tracking for government services. Designed a system supporting multiple user roles, structured workflows, and secure database entities.
                </p>
                <div className="mb-4">
                  <a href="/assets/25057-GRP2-SRS-Final.pdf" target="_blank" className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center">
                    View SRS Document <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">React</span>
                  <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">SQL</span>
                  <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">Node</span>
                </div>
              </div>
            </motion.div>

            {/* Project 03 Placeholder */}
            <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
              <span className="text-purple-400 font-mono text-xs font-bold tracking-wider mb-2">03 — Data Science</span>
              <h4 className="text-xl font-bold text-white mb-3">Data Science Project</h4>
              <p className="text-neutral-400 text-sm mb-6 flex-grow">
                Comprehensive data science report covering data exploration, predictive modeling, and insight generation using Python and Scikit-learn.
              </p>
              <div className="mb-4">
                <a href="/assets/Final+Report+Document.pdf" target="_blank" className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center">
                  View Final Report <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">Python</span>
                <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">Scikit-learn</span>
              </div>
            </motion.div>

            {/* Project 04 Placeholder */}
            <motion.div variants={fadeIn} className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
              <span className="text-purple-400 font-mono text-xs font-bold tracking-wider mb-2">04 — Technical Project</span>
              <h4 className="text-xl font-bold text-white mb-3">Technical Implementation</h4>
              <p className="text-neutral-400 text-sm mb-6 flex-grow">
                Detailed technical paper outlining the problem, architectural solutions, and development phases for a comprehensive software implementation.
              </p>
              <div className="mb-4">
                <a href="/assets/Final-Paper-incomplete.pdf" target="_blank" className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center">
                  View Final Paper <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">Software Architecture</span>
                <span className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">Development</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills <span className="text-purple-500">.</span></h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
            
            {/* Development */}
            <motion.div variants={fadeIn} className="border-l-2 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'REST APIs', 'SQL'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data & ML */}
            <motion.div variants={fadeIn} className="border-l-2 border-purple-400 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Data & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Predictive Modeling', 'Data Processing'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300 hover:border-purple-400/50 hover:bg-purple-400/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Data Visualization */}
            <motion.div variants={fadeIn} className="border-l-2 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Data Visualization</h3>
              <div className="flex flex-wrap gap-3">
                {['Power BI', 'Data Visualization', 'Dashboard Development'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300 hover:border-purple-600/50 hover:bg-purple-600/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Other */}
            <motion.div variants={fadeIn} className="border-l-2 border-neutral-600 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Other</h3>
              <div className="flex flex-wrap gap-3">
                {['C#', 'WinForms', 'PHP', 'Git', 'Manual Testing / UAT'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300 hover:border-neutral-400/50 hover:bg-neutral-800 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications & Achievements <span className="text-purple-500">.</span></h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <motion.div variants={fadeIn} className="glass-card p-6 rounded-xl flex items-center justify-between hover:border-purple-500/30 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full group-hover:bg-purple-500/30 transition-colors"><Award className="text-purple-400" /></div>
                <div>
                  <h4 className="font-bold text-white">Dean's List / Academic Achievement</h4>
                  <p className="text-sm text-neutral-400">Adamson University</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} onClick={() => setSelectedCert(certData.databases)} className="glass-card p-6 rounded-xl flex items-center justify-between hover:border-purple-500/50 hover:bg-white/5 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-purple-500/20 transition-colors"><CheckCircle2 className="text-neutral-300 group-hover:text-purple-400 transition-colors" /></div>
                <div>
                  <h4 className="font-bold text-white">IT Specialist – Databases</h4>
                  <p className="text-sm text-neutral-400">Certiport · Click to view details</p>
                </div>
              </div>
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                Verify <ExternalLink size={12} className="ml-1" />
              </span>
            </motion.div>

            <motion.div variants={fadeIn} onClick={() => setSelectedCert(certData.networking)} className="glass-card p-6 rounded-xl flex items-center justify-between hover:border-purple-500/50 hover:bg-white/5 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-purple-500/20 transition-colors"><CheckCircle2 className="text-neutral-300 group-hover:text-purple-400 transition-colors" /></div>
                <div>
                  <h4 className="font-bold text-white">IT Specialist – Networking</h4>
                  <p className="text-sm text-neutral-400">Certiport · Click to view details</p>
                </div>
              </div>
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                Verify <ExternalLink size={12} className="ml-1" />
              </span>
            </motion.div>

            <motion.div variants={fadeIn} className="glass-card p-6 rounded-xl flex items-center gap-4 hover:border-purple-500/30 transition-colors cursor-pointer">
              <div className="bg-white/5 p-3 rounded-full"><CheckCircle2 className="text-neutral-300" /></div>
              <div>
                <h4 className="font-bold text-white">Software Quality Assurance</h4>
                <p className="text-sm text-neutral-400">Certification</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-white/5 p-8 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Award size={120} /></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <div className="flex flex-wrap items-center text-sm font-medium text-neutral-400 gap-3">
                    <span>{selectedCert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                    <span>{selectedCert.date}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">What I Learned</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedCert.learned}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill: string) => (
                      <span key={skill} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <button onClick={() => setSelectedCert(null)} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-wider">
                    Close
                  </button>
                  <a href={selectedCert.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold bg-purple-600 hover:bg-purple-500 text-white py-3 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-105 uppercase tracking-wider">
                    Verify Certificate <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="bg-purple-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 border border-purple-500/20">
              <Mail className="text-purple-400" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something together.</h2>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
              Have a project, opportunity, or internship in mind? I'm currently looking for roles where I can contribute to real-world software.
            </p>
            <a href="mailto:agnes@example.com" className="inline-flex items-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 text-lg">
              LET'S TALK <ChevronRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

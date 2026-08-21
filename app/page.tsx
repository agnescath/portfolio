"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Terminal, BrainCircuit, Code2, ExternalLink, Mail, Award, Layout, Database, BarChart3, ChevronRight, CheckCircle2, GraduationCap, FileText, X, Menu } from 'lucide-react';

/* ─── Project data ─── */
const PROJECTS = [
  {
    id: 'likas',
    num: '01',
    tag: 'Full Stack Dev · Academic',
    year: '2026',
    title: 'LIKAS',
    subtitle: 'Flood Prioritization Decision Support System',
    tagline: 'Using machine learning to help prioritize flood-affected communities and guide faster, smarter disaster response.',
    screenshot: '/assets/images/projects/likas/Visual_and_Main_Face.png',
    github: null,
    stats: [{ val: '2', label: 'ML Models' }, { val: '4', label: 'Key Features' }, { val: '91%', label: 'Accuracy' }],
    stack: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Flask'],
    tasks: ['ML Research', 'Full-Stack Developer', 'Feature Engineering', 'Data Visualization', 'Model Evaluation', 'Database Design'],
    origin: 'LIKAS was born from a real need: during flood events in highly vulnerable communities, disaster response teams often lack a clear, data-backed way to decide which areas need help first. Manual processes are slow and prone to bias. We built LIKAS to bring objectivity to that decision.',
    problem: [
      { title: '1 — No Standardized Prioritization', desc: 'There was no consistent framework for determining which flood-affected barangays should be prioritized for response and resource allocation.' },
      { title: '2 — Fragmented Flood & Vulnerability Data', desc: 'Flood incidents, population data, and vulnerability indicators were stored across different sources, making it difficult to view and assess barangay-level risk in one place.' },
      { title: '3 — Limited Decision Support', desc: 'Existing information required manual assessment, making it harder for responders to quickly compare barangays and identify areas that may need greater attention.' },
    ],
    solution: [
      { title: '1 — Machine Learning-Based Prioritization', desc: 'Implemented and compared Random Forest and XGBoost models to assess flood-related vulnerability and generate priority scores for barangays.' },
      { title: '2 — Interactive Web-Based Dashboard', desc: 'Developed a React and TypeScript web application that allows users to view barangay information, flood records, vulnerability data, and model-generated priorities in one platform.' },
      { title: '3 — Flood Incident Management', desc: 'Built features for recording and managing flood incidents, including barangay selection, map-based location pinning, flood depth, cause, and incident details.' },
      { title: '4 — Data-Driven Visualization', desc: 'Added dashboards, charts, maps, and comparison views to help users understand flood patterns, population and vulnerability data, and barangay priorities.' },
    ],
    impact: [
      { title: 'Faster Decision-Making', desc: 'Decision-support tool reduces the time needed to identify high-priority areas from hours to seconds.' },
      { title: 'Data-Driven Aid Allocation', desc: 'Priority scores backed by ML eliminate guesswork, ensuring resources reach the most vulnerable communities first.' },
      { title: 'Reproducible Research', desc: 'System and methodology were fully documented and validated as an academic capstone project.' },
    ],
    learned: ['The challenge of training ML models on imbalanced disaster datasets and the importance of feature selection in determining real-world accuracy.'],
    learnedTags: ['Random Forest', 'XGBoost', 'Feature Engineering', 'React State Management', 'Data Pipeline Design'],
    images: [
      '/assets/images/projects/likas/Visual.png',
      '/assets/images/projects/likas/Visual_2.png',
      '/assets/images/projects/likas/Visual_3.png',
      '/assets/images/projects/likas/Visual_4.png',
      '/assets/images/projects/likas/Visual_5.png',
      '/assets/images/projects/likas/Visual_6.png',
      '/assets/images/projects/likas/Visual_7.png',
      '/assets/images/projects/likas/Visual_8.png',
      '/assets/images/projects/likas/Visual_9.png',
      '/assets/images/projects/likas/Visual_10.png',
      '/assets/images/projects/likas/Visual_11.png'
    ],
    links: [
      { label: 'Project Proposal', href: '/assets/Likas-Assets/LIKAS%20-PROPOSAL.pdf' },
      { label: 'User Manual', href: '/assets/Likas-Assets/LIKAS%20-%20DETAILED%20USER%20MANUAL.pdf' },
    ],
  },
  {
    id: 'gov',
    num: '02',
    tag: 'Frontend Developer · Academic',
    year: '2026',
    title: 'ServPH',
    subtitle: 'Web-Based Appointment Management Platform',
    tagline: 'Streamlining government service scheduling with multi-role workflows, status tracking, and a secure normalized database.',
    screenshot: '/assets/images/projects/gov/main_face.png',
    github: null,
    stats: [{ val: '3', label: 'User Roles' }, { val: '5+', label: 'Core Modules' }, { val: '1', label: 'SRS Document' }],
    stack: ['React', 'Node.js', 'MySQL', 'REST APIs', 'Express'],
    tasks: ['Frontend Development', 'Frontend Developer', 'Role-Based Auth', 'Workflow Design', 'SRS Documentation'],
    origin: 'Government appointment processes are often paper-based, confusing, and inaccessible. This system was designed to digitize and streamline the scheduling of appointments for citizens visiting government offices — reducing wait times and administrative overhead.',
    problem: [
      { title: 'Manual Scheduling Chaos', desc: 'Staff managed appointments manually through paper logs, leading to double-bookings, missed slots, and frustrated citizens.' },
      { title: 'No Role Separation', desc: 'Different staff types (admin, frontline) had no defined access boundaries, creating security and accountability issues.' },
      { title: 'Lack of Visibility', desc: 'There was no way to track appointment status in real time — citizens couldn\'t check if their appointment was confirmed, rescheduled, or cancelled.' },
    ],
    solution: [
      { title: 'Multi-Role User System', desc: 'Designed and implemented three distinct roles: Admin (full control), Staff (appointment management), and Citizen (self-service scheduling).' },
      { title: 'Appointment Workflow Engine', desc: 'Built a full scheduling workflow with status transitions (Pending → Confirmed → Completed/Cancelled) and notification triggers.' },
      { title: 'Normalized Relational Schema', desc: 'Designed a 3NF-compliant database schema ensuring data integrity, eliminating redundancy, and supporting efficient multi-table querying.' },
      { title: 'Formal SRS Documentation', desc: 'Produced a complete Software Requirements Specification document outlining all functional and non-functional requirements.' },
    ],
    impact: [
      { title: 'Paperless Scheduling', desc: 'Replaced manual logs with a digital system, eliminating double-booking and lost appointment records.' },
      { title: 'Clear Accountability', desc: 'Role-based access ensures each user type only sees and does what they\'re supposed to — no more unauthorized edits.' },
      { title: 'Real-Time Status Tracking', desc: 'Citizens and staff can always see the current state of any appointment, reducing follow-up calls and confusion.' },
    ],
    learned: ['This project deepened my understanding of relational schema design and how proper normalization prevents data anomalies at scale — especially in multi-user environments.'],
    learnedTags: ['Relational Modeling', '3NF Normalization', 'Role-Based Auth', 'REST API Design', 'Requirements Engineering'],
    images: [
      '/assets/images/projects/gov/Visual.png',
      '/assets/images/projects/gov/Visual_2.png',
      '/assets/images/projects/gov/Visual_3.png',
      '/assets/images/projects/gov/Visual_4.png',
      '/assets/images/projects/gov/Visual_5.png'
    ],
    links: [
      { label: 'View SRS Document', href: '/assets/25057-GRP2-SRS-Final.pdf' },
    ],
  },
  {
    id: 'optical',
    num: '03',
    tag: 'UI/UX and Backend Developer · Academic',
    year: '2025',
    title: 'Dr. M.K. Optical Clinic',
    subtitle: 'Patient Records Management System',
    tagline: 'A secure, clinic-ready records system built from scratch — handling patient data, prescriptions, and encrypted backups.',
    screenshot: '/assets/images/projects/optical/main_face.png',
    github: null,
    stats: [{ val: '1', label: 'Live Clinic' }, { val: '3', label: 'Core Modules' }, { val: '100%', label: 'Custom UI' }],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    tasks: ['UI/UX Design', 'UI/UX and Backend Developer', 'Database Design', 'Encrypted Backup', 'Patient Records Module', 'Prescription Tracking'],
    origin: 'A local optical clinic was managing all patient records manually on paper. As a required project, I was brought in to digitize their operations and build a secure, easy-to-use records management system that clinic staff could use without technical training.',
    problem: [
      { title: 'Paper-Based Records', desc: 'All patient history and prescriptions were stored on paper — prone to loss, difficult to search, and impossible to back up.' },
      { title: 'No Prescription Tracking', desc: 'Clinic staff had no way to quickly retrieve a patient\'s eyeglass or contact lens prescription history across multiple visits.' },
      { title: 'Data Loss Risk', desc: 'There was no backup system — a single incident like fire or flood could permanently destroy all patient records.' },
    ],
    solution: [
      { title: 'Patient Records Module', desc: 'Built a full CRUD patient management interface allowing staff to create, view, update, and search patient profiles with visit history.' },
      { title: 'Prescription Tracking', desc: 'Designed a prescription module that logs eyeglass and contact lens details per visit, with the ability to view historical prescription changes.' },
      { title: 'Encrypted Backup & Restore', desc: 'Developed a one-click backup feature that exports an encrypted database snapshot, and a corresponding restore flow to recover data safely.' },
      { title: 'Clean Staff-Friendly UI', desc: 'Designed the entire interface from scratch to be simple, fast, and usable by non-technical clinic staff without any training overhead.' },
    ],
    impact: [
      { title: 'Fully Digitized Clinic Records', desc: 'The clinic transitioned from a paper-based system to a fully digital one, making patient lookup instant and reliable.' },
      { title: 'Protected Patient Data', desc: 'Encrypted backups now protect years of patient history against hardware failure, theft, or accidental deletion.' },
      { title: 'Faster Service', desc: 'Staff can now retrieve any patient\'s complete record and prescription history in seconds, reducing appointment delays.' },
    ],
    learned: ['Building for a non-technical end user taught me the importance of UX clarity over feature richness — every interaction had to be intuitive enough for a clinic receptionist with zero software background.'],
    learnedTags: ['PHP Backend', 'MySQL', 'UX for Non-Technical Users', 'Data Encryption', 'Freelance Workflow'],
    images: [
      '/assets/images/projects/optical/Visual.png',
      '/assets/images/projects/optical/Visual_2.png',
      '/assets/images/projects/optical/Visual_3.png',
      '/assets/images/projects/optical/Visual_4.png'
    ],
    links: [],
  },
];

/* ─── More Project data ─── */
const MORE_PROJECTS = [
  {
    num: "04", tag: "Data Mining & Analytics", title: "Social Media Addiction Analysis",
    desc: "Analyzed social media addiction, sleep patterns, and mental health using Random Forest and K-Means Clustering.",
    link: "/assets/Final+Report+Document.pdf", linkLabel: "View Final Report",
    tags: ["Python", "Machine Learning", "Power BI"],
    learned: "I learned how to preprocess real-world survey data, apply clustering to find user segments, and use predictive modeling to forecast the impact of social media on sleep quality. This hands-on analysis improved my data visualization skills in Power BI and my understanding of machine learning algorithms in a research context.",
    learnedTags: ["Data Preprocessing", "K-Means Clustering", "Random Forest", "Data Visualization"]
  },
  {
    num: "05", tag: "Quality Assurance", title: "QHC Test Cases & Execution",
    desc: "Developed and executed comprehensive test cases for the QHC system to ensure functional reliability and user experience.",
    link: "/assets/QHC-Test-Cases.xlsx", linkLabel: "Download Test Cases (Excel)",
    tags: ["Manual Testing", "Test Case Design", "QA"],
    learned: "I gained hands-on experience in manual software testing. Check out my specific part in the attached Excel file where I formulated detailed test scenarios, edge cases, and execution logs to validate system requirements.",
    learnedTags: ["Test Execution", "Bug Reporting", "UAT", "Test Documentation"]
  }
];

/* ─── Project Modal ─── */
const ProjectModal = ({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Sheet */}
      <motion.div
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-neutral-950 border border-white/10 sm:rounded-3xl rounded-t-3xl shadow-[0_0_80px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col"
      >
        {/* ── Header ── */}
        <div className="relative bg-gradient-to-br from-purple-900/30 to-neutral-950 border-b border-white/8 p-6 md:p-10 shrink-0">
          {/* Close */}
          <button onClick={onClose}
            className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-full transition-colors border border-white/10">
            <X size={18} />
          </button>

          <span className="inline-block bg-purple-500/15 border border-purple-500/20 text-purple-400 font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            {project.num} — {project.tag} · {project.year}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-1 mb-2 tracking-tight">{project.title}</h2>
          <p className="text-purple-300 text-base font-medium mb-5">{project.subtitle}</p>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">{project.tagline}</p>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 pt-6 border-t border-white/5 text-center">
            {project.stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white">{s.val}</div>
                <div className="text-xs font-medium text-neutral-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech stack */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">What I Did</h3>
              <div className="flex flex-wrap gap-2">
                {project.tasks.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 text-neutral-300 text-xs rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Origin */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Origin</h3>
            <p className="text-neutral-300 text-sm leading-relaxed p-5 bg-white/5 border border-white/10 rounded-2xl">{project.origin}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">The Problem</h3>
              <div className="space-y-5">
                {project.problem.map((p, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs shrink-0">{i + 1}</div>
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">{p.title}</span>
                      <span className="text-neutral-400 text-sm leading-relaxed">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">The Solution</h3>
              <div className="space-y-5">
                {project.solution.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs shrink-0">{i + 1}</div>
                    <div>
                      <span className="text-white text-sm font-bold block mb-1">{s.title}</span>
                      <span className="text-neutral-400 text-sm leading-relaxed">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impact.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-colors">
                  <div className="text-white text-sm font-bold mb-2">{item.title}</div>
                  <div className="text-neutral-400 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-3xl p-6 md:p-8">
            <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Award size={16}/> What I Learned</h3>
            <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-6">{project.learned[0]}</p>
            <div className="flex flex-wrap gap-2">
              {project.learnedTags.map(t => (
                <span key={t} className="text-xs font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 rounded-full px-4 py-2">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.links.length > 0 || project.github) && (
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 bg-white hover:bg-neutral-200 px-6 py-3 rounded-full transition-all shadow-lg hover:scale-105">
                  <ExternalLink size={16} /> GitHub Repo
                </a>
              )}
              {project.links.map(l => (
                <a key={l.label} href={l.href} target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-purple-300 hover:text-purple-200 bg-purple-500/10 px-6 py-3 rounded-full border border-purple-500/30 transition-all hover:bg-purple-500/20 hover:scale-105">
                  {l.label} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}

          {/* Visual Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mt-12 border-t border-white/5 pt-10">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-8 text-center">Gallery & Visuals</h3>
              <div className="space-y-6">
                {project.images.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

/* ─── More Project Modal ─── */
const MoreProjectModal = ({ project, onClose }: { project: typeof MORE_PROJECTS[0]; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
        className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col"
      >
        <div className="relative bg-gradient-to-br from-purple-900/40 to-neutral-900 border-b border-white/5 p-6 md:p-8 shrink-0">
          <button onClick={onClose} className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition-colors border border-white/10">
            <X size={16} />
          </button>
          <span className="inline-block bg-purple-500/15 border border-purple-500/20 text-purple-400 font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            {project.num} — {project.tag}
          </span>
          <h2 className="text-2xl font-bold text-white mt-1 mb-2">{project.title}</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">{project.desc}</p>
        </div>

        <div className="p-6 md:p-8 space-y-6 md:space-y-8">
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Tech & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => <span key={t} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs rounded-full">{t}</span>)}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Award size={16}/> What I Learned & Did</h3>
            <p className="text-neutral-200 text-sm leading-relaxed mb-5">{project.learned}</p>
            <div className="flex flex-wrap gap-2">
              {project.learnedTags.map(t => (
                <span key={t} className="text-xs font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 rounded-full px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button onClick={onClose} className="text-sm text-neutral-400 hover:text-white transition-colors">Close</button>
            <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-white bg-purple-600 px-6 py-2.5 rounded-full transition-all hover:bg-purple-500 hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {project.linkLabel} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Magnetic button ─── */
const MagneticBtn = ({ children, className = "", href = "#", target, rel, ...props }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.a ref={ref} href={href} target={target} rel={rel} style={{ x, y }}
      onMouseMove={handleMouseMove} onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`magnetic-btn ${className}`} {...props}>
      {children}
    </motion.a>
  );
};

        {/* WOW Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#a855f7_50%,#000000_100%)] blur-[100px]"
          />
        </div>

/* ─── Laptop mockup for projects ─── */
const LaptopMockup = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full flex items-center justify-center p-6">
    {/* Glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3/4 h-1/2 bg-purple-600/20 blur-[60px] rounded-full" />
    </div>
    {/* Laptop */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-sm"
    >
      {/* Screen */}
      <div className="relative bg-neutral-800 rounded-t-xl border border-white/10 overflow-hidden" style={{ paddingBottom: '62%' }}>
        <div className="absolute top-0 left-0 right-0 h-5 bg-neutral-900 flex items-center px-3 gap-1.5 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
        </div>
        <img src={src} alt={alt} className="absolute top-5 left-0 right-0 bottom-0 w-full h-full object-cover object-top" />
      </div>
      {/* Base */}
      <div className="h-3 bg-neutral-700 rounded-b-sm mx-2" />
      <div className="h-1.5 bg-neutral-800 rounded-b-xl mx-0 border-t border-white/5" />
    </motion.div>
  </div>
);

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
  };

  // Scroll-aware navbar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  // Hero parallax
  const heroY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Custom cursor
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorDotRef.current) { cursorDotRef.current.style.left = e.clientX + 'px'; cursorDotRef.current.style.top = e.clientY + 'px'; }
      setTimeout(() => { if (cursorRingRef.current) { cursorRingRef.current.style.left = e.clientX + 'px'; cursorRingRef.current.style.top = e.clientY + 'px'; } }, 60);
    };
    const over = (e: MouseEvent) => setIsHovering(!!(e.target as HTMLElement).closest('a,button,[role="button"]'));
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);

  // Project modal
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [selectedMoreProject, setSelectedMoreProject] = useState<typeof MORE_PROJECTS[0] | null>(null);

  // Certificate modal
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const certData = {
    databases: {
      title: "IT Specialist – Databases",
      issuer: "Certiport · Pearson VUE", date: "May 2025",
      url: "https://www.credly.com/badges/6fffaf00-9976-4ac0-b66a-adafc256c4fe/public_url",
      learned: "Demonstrated proficiency in relational database design, advanced SQL querying, and data manipulation. Gained hands-on experience in managing database objects and optimizing structural performance.",
      skills: ["SQL", "Relational Modeling", "Database Security", "Normalization"]
    },
    networking: {
      title: "IT Specialist – Networking",
      issuer: "Certiport · Pearson VUE", date: "May 2026",
      url: "https://www.credly.com/badges/a67822d2-6aa0-438e-8422-d59cc1309709/public_url",
      learned: "Developed a strong foundation in networking concepts including the OSI model, IP routing, subnets, and network security protocols.",
      skills: ["TCP/IP", "Network Security", "Routing", "OSI Model"]
    },
    sqa: {
      title: "Software Quality Assurance",
      issuer: "Coursera", date: "Aug 2026",
      url: "https://coursera.org/share/2a2b120b6afac58556b97a9846368035",
      learned: "Gained comprehensive knowledge in Software Quality Assurance methodologies, testing strategies, bug tracking, and delivering high-quality software products.",
      skills: ["Manual Testing", "Test Case Design", "Bug Reporting", "QA Processes"]
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-purple-600/30 font-sans relative">

      {/* Custom cursor */}
      <div ref={cursorDotRef} className={`cursor-dot ${isHovering ? 'hovering' : ''}`} />
      <div ref={cursorRingRef} className={`cursor-ring ${isHovering ? 'hovering' : ''}`} />

      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Floating orbs */}
      <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />

      {/* ─── Navbar ─── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-neutral-950/90 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.08)]' : 'py-4 bg-transparent border-b border-white/5'} px-6 md:px-12 flex justify-between items-center`}
      >
        <motion.div className="font-bold text-xl tracking-tighter" whileHover={{ scale: 1.05 }}>
          <span className="text-white">ACS</span><span className="text-purple-500">.DEV</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors relative group" whileHover={{ y: -1 }}>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <MagneticBtn href="#contact"
            className="hidden md:inline-flex bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            LET'S TALK
          </MagneticBtn>
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* ─── Mobile Nav Overlay ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} 
            className="fixed inset-0 z-[60] bg-neutral-950/98 backdrop-blur-3xl flex flex-col p-6">
            <div className="flex justify-between items-center mb-16">
              <div className="font-bold text-xl tracking-tighter">
                <span className="text-white">ACS</span><span className="text-purple-500">.DEV</span>
              </div>
              <button className="text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full border border-white/10" onClick={() => setMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-bold text-neutral-300">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-auto mb-8">
              <a href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-purple-600 hover:bg-purple-500 text-white text-center py-4 rounded-full font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                LET'S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Hero ─── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>



        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="mb-6 inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
            I BUILD DATA-DRIVEN <br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-glow-purple inline-block"
              style={{ backgroundSize: "200% 200%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
              WEB APPLICATIONS.
            </motion.span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Agnes Catherine Suico</h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Agnes. I bridge the gap between complex data science and full-stack web development to build{' '}
              <strong className="text-purple-400 font-semibold">functional, high-impact applications.</strong>
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticBtn href="#projects"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] tracking-wide">
              VIEW MY WORK
            </MagneticBtn>
            <MagneticBtn href="#contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:border-purple-500/50 tracking-wide">
              LET'S CONNECT
            </MagneticBtn>
          </motion.div>

          {/* Scroll cue — moved outside, bottom of section */}
        </motion.div>

        {/* Scroll indicator — fixed bottom of hero section, outside the parallax container */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-9 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── About + Education ─── */}
      <section id="about" className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me <span className="text-purple-500">.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Who is Agnes */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-l-purple-500 hover-glow flex flex-col justify-center h-full">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                I'm a developer passionate about transforming raw data into intuitive web products. My background in Computer Science at Adamson University gave me a strong foundation in machine learning and full-stack development, allowing me to build systems that aren't just functional, but smart.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                When I'm not glued to my screen building applications, you'll usually find me exploring new tech trends, dancing, or taking a quick break to recharge before diving into the next project. I'm currently looking for opportunities where I can grow as a developer and contribute to real-world products.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="text-purple-400" size={22} /> Education
              </h3>

              {/* University */}
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 rounded-2xl hover-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/15 p-3 rounded-xl border border-purple-500/20 shrink-0">
                    <GraduationCap className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Adamson University</h4>
                    <p className="text-purple-300 text-sm font-medium mt-0.5">BS Computer Science</p>
                    <p className="text-neutral-500 text-sm mt-1">2023 – Present · 4th Year</p>
                    <p className="text-neutral-400 text-sm mt-2">Major in Data Science </p>
                  </div>
                </div>
              </motion.div>

              {/* Dean's List */}
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 rounded-2xl hover-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 shrink-0">
                    <Award className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dean's List</h4>
                    <p className="text-purple-300 text-sm font-medium mt-0.5">Academic Excellence</p>
                    <p className="text-neutral-500 text-sm mt-1">Adamson University</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {[{ val: "3+", label: "Years coding" }, { val: "5+", label: "Projects built" }, { val: "3", label: "Certs earned" }].map(s => (
                  <motion.div key={s.label} whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 rounded-xl text-center border border-white/5 hover:border-purple-500/20 transition-colors">
                    <div className="text-2xl font-black text-purple-400">{s.val}</div>
                    <div className="text-xs text-neutral-500 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── What I Build ─── */}
      <section id="what-i-do" className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Build <span className="text-purple-500">.</span></h2>
            <p className="text-neutral-400 max-w-xl">The areas I focus on — blending frontend craft, backend logic, and data science.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: <Layout size={24} className="text-purple-400" />,
              title: "Full-Stack Development",
              desc: "Responsive web apps with React, TypeScript, Node.js, SQL, and REST APIs.",
              tags: ["React", "Node.js", "SQL"], accent: "border-t-purple-500"
            }, {
              icon: <BrainCircuit size={24} className="text-purple-400" />,
              title: "Data Science & ML",
              desc: "Python pipelines, predictive models, and machine learning for real-world problems.",
              tags: ["Python", "Scikit-learn", "ML"], accent: "border-t-purple-600"
            }, {
              icon: <BarChart3 size={24} className="text-purple-400" />,
              title: "Data & Dashboards",
              desc: "Turning raw datasets into clear insights through visualizations and Power BI.",
              tags: ["Power BI", "Pandas", "EDA"], accent: "border-t-purple-400"
            }].map((card, i) => (
              <motion.div key={i} variants={fadeIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`glass-card p-6 md:p-8 rounded-2xl border-t-4 ${card.accent} hover-glow cursor-default`}>
                <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-purple-500/20">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map(t => <span key={t} className="text-xs text-neutral-500 border border-neutral-700 rounded-full px-2.5 py-1">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section id="projects" className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Featured Projects <span className="text-purple-500">.</span></h2>
            <p className="text-neutral-400 max-w-2xl leading-relaxed">
              From full-stack web apps to data-driven systems and ML solutions — each project is a real problem, solved.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/40 hover-glow transition-all duration-500 cursor-pointer group relative flex flex-col h-full">
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-purple-300 bg-purple-500/15 border border-purple-500/20 px-3 py-1 rounded-full shadow-xl">Click to explore →</span>
                  </div>
                  {/* Laptop mockup on top */}
                  <div className="bg-neutral-900/50 p-6 flex items-center justify-center border-b border-white/5 min-h-[320px]">
                    <LaptopMockup src={project.screenshot!} alt={project.title} />
                  </div>
                  {/* Content on bottom */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <span className="text-purple-400 font-mono text-xs font-bold tracking-wider uppercase mb-2">
                      My Role: {project.tasks[1] === 'Full-Stack Dev' ? 'Full-Stack Developer' : project.tasks[1] || 'Developer'}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-neutral-300 text-sm font-medium mb-4">{project.subtitle}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-1">
                      {project.tagline}
                    </p>
                    {/* Stats */}
                    <div className="flex justify-center gap-4 sm:gap-8 mt-auto pt-4 border-t border-white/5 text-center">
                      {project.stats.slice(0, 3).map(s => (
                        <div key={s.label}>
                          <div className="text-lg font-black text-purple-400">{s.val}</div>
                          <div className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects grid */}
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-xl font-bold text-white mt-16 mb-6">More Projects</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MORE_PROJECTS.map((card, idx) => (
              <motion.div key={card.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedMoreProject(card)}
                className="glass-card p-7 rounded-2xl hover-glow flex flex-col group cursor-pointer">
                <span className="text-purple-400 font-mono text-xs font-bold tracking-wider mb-2">{card.num} — {card.tag}</span>
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-grow">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <a href={card.link} target="_blank" className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center transition-colors">
                    {card.linkLabel} <ExternalLink size={11} className="ml-1" />
                  </a>
                  <div className="flex gap-1.5">
                    {card.tags.slice(0, 2).map(t => <span key={t} className="text-xs text-neutral-600 border border-neutral-800 rounded-full px-2.5 py-0.5">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Skills ─── */}
      <section id="skills" className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills <span className="text-purple-500">.</span></h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-10">
            {[{
              label: "Development", color: "border-purple-500", skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'REST APIs', 'SQL']
            }, {
              label: "Data & Machine Learning", color: "border-purple-400", skills: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Predictive Modeling', 'Data Processing']
            }, {
              label: "Data Visualization", color: "border-purple-600", skills: ['Power BI', 'Data Visualization', 'Dashboard Development']
            }, {
              label: "Other", color: "border-neutral-600", skills: ['C#', 'WinForms', 'PHP', 'Git', 'Manual Testing / UAT']
            }].map((group) => (
              <motion.div key={group.label} variants={fadeIn} className={`border-l-2 ${group.color} pl-6`}>
                <h3 className="text-lg font-bold text-white mb-4">{group.label}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map(skill => (
                    <motion.span key={skill} whileHover={{ scale: 1.08, y: -2 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Certifications ─── */}
      <section className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Certifications <span className="text-purple-500">.</span></h2>
            <p className="text-neutral-400">Verified credentials.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* IT Specialist – Databases */}
            <motion.div variants={fadeIn} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedCert(certData.databases)}
              className="glass-card p-6 rounded-2xl hover-glow cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <CheckCircle2 className="text-purple-400" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-0.5">IT Specialist – Databases</h4>
                  <p className="text-sm text-neutral-400">Certiport · Pearson VUE · May 2025</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full px-3 py-1">Click to view details</span>
                    <ExternalLink size={13} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IT Specialist – Networking */}
            <motion.div variants={fadeIn} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedCert(certData.networking)}
              className="glass-card p-6 rounded-2xl hover-glow cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <CheckCircle2 className="text-purple-400" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-0.5">IT Specialist – Networking</h4>
                  <p className="text-sm text-neutral-400">Certiport · Pearson VUE · May 2026</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full px-3 py-1">Click to view details</span>
                    <ExternalLink size={13} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SQA */}
            <motion.div variants={fadeIn} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedCert(certData.sqa)}
              className="glass-card p-6 rounded-2xl hover-glow cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <CheckCircle2 className="text-purple-400" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-0.5">Software Quality Assurance</h4>
                  <p className="text-sm text-neutral-400">Coursera · Jul 2026</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full px-3 py-1">Click to view details</span>
                    <ExternalLink size={13} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Certificate Modal ─── */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)} className="absolute inset-0 bg-black/70 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }} transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden">
              {/* Close button */}
              <button onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-full transition-colors">
                <X size={16} />
              </button>
              {/* Header */}
              <div className="bg-gradient-to-br from-purple-900/40 to-neutral-900 p-6 md:p-8 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/20 p-2.5 rounded-xl border border-purple-500/20">
                    <CheckCircle2 className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                    <p className="text-sm text-neutral-400">{selectedCert.issuer} · {selectedCert.date}</p>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">What I Learned</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">{selectedCert.learned}</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((s: string) => (
                      <span key={s} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-5 border-t border-white/5">
                  <button onClick={() => setSelectedCert(null)} className="text-sm text-neutral-400 hover:text-white transition-colors">Close</button>
                  <a href={selectedCert.url} target="_blank" rel="noreferrer"
                    className="inline-flex items-center text-sm font-bold bg-purple-600 hover:bg-purple-500 text-white py-2.5 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-105">
                    Verify Certificate <ExternalLink size={13} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Project Modal ─── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* ─── More Project Modal ─── */}
      <AnimatePresence>
        {selectedMoreProject && (
          <MoreProjectModal project={selectedMoreProject} onClose={() => setSelectedMoreProject(null)} />
        )}
      </AnimatePresence>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-32 relative border-t border-white/5 overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center">
            <motion.div variants={fadeIn}>
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-4 block">Open to Opportunities</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Let's build something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">worth remembering.</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Have a project, an opportunity, or just want to say hi? I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <MagneticBtn href="mailto:acfsuico@gmail.com"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] text-base">
                <Mail size={18} /> Get In Touch
              </MagneticBtn>
              <MagneticBtn href="/assets/resume.pdf" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-white font-bold py-4 px-10 rounded-full transition-all text-base">
                <FileText size={18} /> View Resume
              </MagneticBtn>
            </motion.div>

            <motion.div variants={fadeIn} className="flex justify-center gap-6 text-neutral-500 text-sm">
              <span>acfsuico@gmail.com</span>
              <span>·</span>
              <a href="https://github.com/agnescath" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/agnes-catherine-suico-2ba55b1ab/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

import {
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  Palette,
} from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

export const skillsData = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Building responsive and modern UI with performance in mind.",
    skills: [
      {  name: "React.js", icon: FaReact  },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Creating scalable APIs and server-side logic.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    description: "Managing data and deploying modern applications.",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    description: "Core languages used to build applications.",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    description: "Tools that improve workflow and development efficiency.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Postman" },
    ],
  },
  {
    title: "Creative Design",
    icon: Palette,
    description: "Designing visually compelling and user-friendly graphics.",
    skills: [
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
    ],
  },
];
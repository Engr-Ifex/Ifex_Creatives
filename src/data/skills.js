import {
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  Palette,
} from "lucide-react";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiJavascript,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiGit
} from "react-icons/si";

export const skillsData = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Building responsive and modern UI with performance in mind.",
    skills: [
      {  name: "React.js", icon:  SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Creating scalable APIs and server-side logic.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    description: "Managing data and deploying modern applications.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon:  SiSupabase },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    description: "Core languages used to build applications.",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    description: "Tools that improve workflow and development efficiency.",
    skills: [
      { name: "Git", icon: SiGit},
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Creative Design",
    icon: Palette,
    description: "Designing visually compelling and user-friendly graphics.",
    skills: [
      { name: "Adobe Photoshop", icon: DiPhotoshop },
      { name: "Adobe Illustrator", icon: DiIllustrator },
    ],
  },
];
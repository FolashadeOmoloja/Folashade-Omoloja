import ExperienceCard from "./experience-cards";

export default function Experiences() {
  const experiences = [
    {
  role: "React Native Developer",
  company: "Game Company",
  period: "Oct 2025 – Present",
  description:
    "Developing interactive mobile gaming experiences with React Native, implementing real-time multiplayer features using WebSockets, building smooth animations, and optimizing app performance across devices.",
  tech: [
    "React Native",
    "TypeScript",
    "WebSockets",
    "Reanimated",
    "Expo",
  ],
},
    {
      role: "Software Developer",
      company: "Plabosce",
      period: "Mar 2025 – May 2025",
      description:
        "Contributed to a modern web platform for AI PLAB 2 prep, built core UIs, implemented secure Stripe payments with coupons, and developed APIs to manage user subscriptions.",
      tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind"],
    },
    {
      role: "Software Developer",
      company: "JobKitt",
      period: "Nov 2024 – Feb 2025",
      description:
        "Built core features for an AI resume builder including dynamic forms, custom templates, and text editing tools. Maintained global state and ensured consistent UX across devices.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "React DnD",
        "quill.js",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Freelance- Client project",
      period: "Apr 2024 – Nov 2024",
      description:
        "Built a full-stack hiring platform with user authentication, admin dashboards, job board, and application tracking. Integrated Cloudinary, Calendly, and Nodemailer for enhanced functionality.",
      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Hitec City Technologies",
      period: "Jan 2023 – Jun 2023",
      description:
        "Built responsive pages and reusable components for the Lenders NG website. Ensured cross-device functionality and clean design while contributing to Agile workflows.",
      tech: ["Next js", "Styled-Components", "JavaScript", "Git"],
    },
  ];
  return (
    <section
      id="experience"
      className=" text-white sm:pb-32 sm:px-6 px-4 mb-16"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 xsm:mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          My Dev <span className="bg-text">Experience</span>
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg text-center mx-auto">
          A timeline of where I started, what I built, and how I grew as a
          developer.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <section className="flex flex-col gap-[20px] lg:gap-4 mt-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              expArrLength={experiences.length}
              experience={experience}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

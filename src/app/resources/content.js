import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shalini",
  lastName: "Kallepalli",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "DevOps Engineer",
  avatar: "/images/avatar.jpg",
  location: "Dallas, TX",
  languages: ["English"],
};

// Simplify the remaining objects to focus on essential data

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about cloud technologies and DevOps practices.</>,
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://linkedin.com/in/shalini-kv",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shalukallepalli21@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>DevOps Engineer and Cloud Specialist</>,
  subline: <>I'm Shalini, a DevOps Engineer specializing in AWS and Azure cloud platforms.</>,
};

// Simplified objects for other sections...

export { person, social, newsletter, home };
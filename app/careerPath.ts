export const careers:jobType[] = [
  {
    title: "Learning & Development Specialist",
    date: "Feb 2024 - Present",
    company: "Foundever",
    location: "Warsaw, Poland",
    responsibilities: [
      "Facilitated comprehensive training programs for new hires, ensuring a smooth onboardnig process",
      "Developed and delivered engaging training sessions on upskilling existing agents and introducing new topics relevant to the customer service role",
      "Effectively communicated complex information in a clear and concise manner",
    ],
  },
  {
    title: "Customer Service Representative",
    date: "Feb 2022 - Feb 2023",
    company: "Foundever",
    location: "Warsaw, Poland",
    responsibilities: [
      "Provided exceptional phone and email support to clients, resolving inquiries and exceeding satisfaction expectations. (Achieved over 95% CSAT and QA ratings)",
      "Utilized Slack, Microsoft Teams, Salesforce, Jira",
      " Provided technical support to customers,troubleshooting issues with software, applications, and online services",
    ],
  },
];


interface jobType {
  title: string;
  date: string;
  company: string;
  location: string;
  responsibilities: string[];
}
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Signature Metal Cards",
      description: "An Ecommerce app for Metal Cards purchase.",
      tools: "Reactjs, Tailwind CSS",
      link: "https://www.signaturecards.ng",
    },
    {
      title: "Caregiver Specialists Clinic",
      description: "Website for a Neurology and Endocrinology Clinic.",
      tools: "Nextjs, Tailwind CSS",
      link: "https://www.caregiverspecialistclinics.com.ng",
    },
    {
      title: "RAININ Hackathon",
      description: "Official RAININ hackathon website.",
      tools: "Nextjs, Tailwind CSS",
      link: "https://hackathon.rainigeria.com/",
    },
    {
      title: "RAININ Tech Summit",
      description: "Official RAININ Tech Summit website.",
      tools: "Nextjs, Tailwind CSS",
      link: "https://summit.rainigeria.com/",
    },
    {
      title: "Aleeyah",
      description: "AI chatbot for nutrition recommendation.",
      tools: "Nextjs, Tailwind CSS, MongoDB, Gemini",
      link: "https://aleeyah-beta.vercel.app/",
    },
    {
      title: "Rendezvous Event",
      description: "Website to scout for events and details.",
      tools: "Vuejs, Tailwind CSS",
      link: "https://rendezvous-event.vercel.app/",
    },
    {
      title: "Lendsqr Dashboard",
      description: "Admin Dashboard for 500 customers.",
      tools: "React, SCSS",
      link: "https://muhammad-nabeel-lendsqr-fe-test.vercel.app/",
    },
    {
      title: "Web Wing Agency",
      description: "Website for a Software Agency Company.",
      tools: "HTML, CSS, JavaScript",
      link: "https://web-wing-geekhive-team-project-one.netlify.app/",
    },
  ];

  return (
    <div className="mt-10 max-w-7xl mx-auto p-4">
      <h2 className="font-sans font-medium text-xl">
        Some cool stuffs I have contributed to{" "}
      </h2>

      <div className="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-start gap-2 bg-gray-100 p-5 rounded-md">
              <h2 className="text-xl font-semibold font-sans">
                {project.title}
              </h2>
              <p className="text-gray-500">{project.description}</p>
              <p className="text-gray-500">Technology: {project.tools}</p>

              <Link
                href={project.link}
                className="text-gray-500 flex items-center gap-2 mt-2 hover:text-gray-800 transition-all duration-200 ease-in-out border-b-2 border-gray-500 hover:border-gray-800 "
                target="_blank"
                rel="noopener noreferrer">
                View Project{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

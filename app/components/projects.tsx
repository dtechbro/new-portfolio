import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Projects() {
  const projects = [
    // {
    //   title: "Signature Metal Cards",
    //   description: "An Ecommerce app for Metal Cards purchase.",
    //   tools: "Reactjs, Tailwind CSS",
    //   link: "https://www.signaturecards.ng",
    // },
    {
      title: "Meetro ",
      description:
        "An event management application handling creation, ticketing, and guest managing",
      tools: "Reactjs, Javascript, Tailwind CSS, Zustand",
      link: "https://beta.meetro.live/",
      image: "/meetro.svg",
    },
    {
      title: "Enyata Talent Board",
      description:
        "Global talent management system to discover Africa's top tech talent.",
      tools: "Nextjs, Typescript, Tailwind CSS, Zustand",
      link: "https://talents.enyata.com/",
      image: "/enyata.svg",
    },
    {
      title: "Caregiver Specialists Clinic",
      description: "Website for a Neurology and Endocrinology Clinic.",
      tools: "Nextjs, Tailwind CSS",
      link: "https://www.caregiverspecialistclinics.com.ng",
      className: "lg:row-span-2",
      image: "/caregiver.png",
    },
    {
      title: "Lendsqr Dashboard",
      description: "Admin Dashboard for 500 customers.",
      tools: "React, SCSS",
      link: "https://muhammad-nabeel-lendsqr-fe-test.vercel.app/",
      className: "lg:row-span-2",
      image: "/lendsqr.svg",
    },
    // {
    //   title: "RAININ Hackathon",
    //   description: "Official RAININ hackathon website.",
    //   tools: "Nextjs, Tailwind CSS",
    //   link: "https://hackathon.rainigeria.com/",
    // },
    // {
    //   title: "RAININ Tech Summit",
    //   description: "Official RAININ Tech Summit website.",
    //   tools: "Nextjs, Tailwind CSS",
    //   link: "https://summit.rainigeria.com/",
    // },
    // {
    //   title: "Aleeyah",
    //   description: "AI chatbot for nutrition recommendation.",
    //   tools: "Nextjs, Tailwind CSS, MongoDB, Gemini",
    //   link: "https://aleeyah-beta.vercel.app/",
    // },
    {
      title: "Web Wing Agency",
      description: "Website for a Software Agency Company.",
      tools: "HTML, CSS, JavaScript",
      link: "https://web-wing-geekhive-team-project-one.netlify.app/",

      image: "/web-wing.svg",
    },
    {
      title: "Rendezvous Event",
      description: "Website to scout for events and details.",
      tools: "Vuejs, Tailwind CSS",
      link: "https://rendezvous-event.vercel.app/",
      className: "lg:col-span-2",
      image: "/rendezvous.svg",
    },
  ];

  return (
    <div className="mt-10 max-w-5xl mx-auto p-4">
      <h2 className="font-sans font-medium text-xl mb-4">
        Some cool stuffs I built
      </h2>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group flex flex-col items-start justify-end gap-2 bg-gray-50 p-5 rounded-xl min-h-60 ${project.className}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={50}
                height={50}
                className="w-12 h-12"
              />

              <h2 className="text-xl font-semibold font-sans">
                {project.title}
              </h2>

              <p className="text-gray-500">{project.description}</p>

              {/* Animated container */}
              <div className=" overflow-hidde max-h-0 group-hover:max-h-10 transition-[max-height] duration-300 ease-out">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        mt-2 flex items-center gap-2
        text-gray-500 border-b-2 border-gray-500
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300 ease-out
        hover:text-gray-800 hover:border-gray-800
      "
                >
                  View Project <GoArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

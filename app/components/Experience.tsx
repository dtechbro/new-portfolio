import { CircleDashed } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      title: "Frontend Engineer",
      company: "Princeps Credit Systems Limited",
      location: "Remote",
      date: "Jul 2025 - Dec 2025",
    },
    {
      title: "Frontend Engineer",
      company: "Meetro",
      location: "Remote",
      date: "May 2025 - Sep 2025",
    },
    {
      title: "Software Engineer",
      company: "Apexbyte Technologies",
      location: "Remote",
      date: "Sep 2024 - Feb 2025",
    },
    {
      title: "Frontend Engineer",
      company: "Animation Hub",
      location: "Remote",
      date: "Jul 2024 - Aug 2024",
    },
    {
      title: "Web Developer",
      company: "Flip to Tech",
      location: "Remote",
      date: "Oct 2022 - Dec 2023",
    },
    // {
    //   title: "Software Engineer",
    //   company: "Enyata",
    //   location: "Remote",
    //   date: "2022 - Present",
    // },
  ];
  return (
    <div className="flex flex-col max-w-5xl mx-auto gap-5 p-4">
      <div className="my-20 flex flex-col gap-5">
        <h2 className="text-2xl uppercase mb-2">Work Experience</h2>

        <div className="flex flex-col gap-6">
          {experience.map((experience) => (
            <div
              key={experience.company}
              className="grid grid-cols-3 items-center"
            >
              <h2 className="italic text-xs md:text-[15px] text-gray-600">
                {experience.date}
              </h2>

              <div className="col-span-2 flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
                <h2 className="font-sans text-lg md:text-2xl font-medium">
                  {experience.title}
                </h2>

                <div className="flex gap-1 items-center text-white bg-gray-500 w-fit py-1 px-3 rounded-lg">
                  <CircleDashed size={12} />
                  <h2 className=" text-xs md:text-sm ">
                    {experience.company}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

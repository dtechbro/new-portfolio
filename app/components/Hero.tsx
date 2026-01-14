import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-5 p-4 mt-5">
      <div className="mt-20 flex flex-col items-center gap-5">
        <h2 className="font-semibold text-4xl md:text-5xl font-sans">
          Hey, I&apos;m Muhammad-Nabeel <br />
          Software Engineer
        </h2>

        <p className="md:w-[68%] text-gray-600">
          I&apos;m a software developer who crafts reliable, scalable web and mobile applications for a global audience.I focus on building impactful digital products that combine clean architecture, performance, and exceptional user experiences. I&apos;m passionate about turning ideas into well-engineered solutions, solving real-world problems, and helping businesses grow through thoughtful, user-centered technology.
        </p>

        <a href="/Muhammad-Nabeel--Resume.pdf" download>
          <button className="border-[#707581] mt-5 rounded-lg border px-5 py-2.5 text-sm text-darkText">
            Check Resume
          </button>
        </a>

        <div className="flex gap-3">
          <Link href="https://linkedin.com/in/olaoye-md-nabeel">
            <Linkedin />
          </Link>

          <Link href="https://github.com/dtechbro">
            <Github />
          </Link>
          <Link href="https://x.com/dtechbro">
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
}

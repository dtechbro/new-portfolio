import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-5xl p-4 py-12 mx-auto">
      <h4 className="uppercase mb-2">Let get in touch</h4>
      <Link
        href="mailto:princeakinola05@gmail.com"
        className="text-darkText tracking-tighter hover:text-blue-600 underline-offset-4 hover:underline font-semibold text-2xl sm:text-4xl"
      >
        Let work together and bring your ideas to life.
        princeakinola05@gmail.com
      </Link>
      <div className="flex gap-5 text-lg uppercase mt-2.5">
        <a
          href="https://x.com/dtechbro"
          className="hover:underline hover:text-darkText"
        >
          X
        </a>
        •
        <a
          href="https://linkedin.com/in/olaoye-md-nabeel"
          className="hover:underline hover:text-darkText"
        >
          Linkedin
        </a>
        •
        <a
          href="https://instagram.com/dtechbro"
          className="hover:underline hover:text-darkText"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

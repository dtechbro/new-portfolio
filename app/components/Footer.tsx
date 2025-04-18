import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto py-8 gap-2">
      {/* <Image src={"/favicon.png"} alt="aesthetics" width={24} height={24} /> */}
      <h2 className="font-sans pt-10">
        I&apos;m available on{" "}
        <Link href={"https://www.linkedin.com/in/olaoye-md-nabeel/"} className="underline">
          LinkedIn
        </Link>{" "}
        and <Link href={"https://www.x.com/dtechbro"} className="underline">X</Link>
      </h2>
    </div>
  );
}

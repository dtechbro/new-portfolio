import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="fixed top-5 flex gap-2 py-2.5 backdrop-blur-md items-center rounded-3xl border-black/10 bg-[#707581]/10 border p-5 font-sans w-fit">
        <Image src={"/favicon.png"} alt="aesthetics" width={24} height={24} />
        <h2 className="font-medium text-lg md:text-xl whitespace-nowrap">
          Muhammad-Nabeel
        </h2>
      </div>
    </div>
  );
}

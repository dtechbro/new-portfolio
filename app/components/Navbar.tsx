import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center max-w-7xl mx-auto py-5 gap-2">
        <Image src={'/favicon.png'} alt="aesthetics" width={24} height={24}/>
        <h2 className="font-sans font">Muhammad-Nabeel</h2>
      </div>
      <hr />
    </>
  );
}

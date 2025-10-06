import Link from "next/link";
import { H4, Text } from "./ui/typography";
import data from "@/data/data.json";

const Navbar = () => {
  return (
    <nav className="w-screen z-1 relative">
      <div className="container px-8 mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/"><H4>{data.navbar.brand}</H4></Link>
          <Link href="/deploy-your-agent" className="underline">{data.navbar.link}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

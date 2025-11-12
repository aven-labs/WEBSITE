import Link from "next/link";
import { H4, Text } from "./ui/typography";
import data from "@/data/data.json";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-screen z-1 relative">
      <div className="container px-8 mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="operator_uplift_logo" className="h-6 w-fit" src="/logo2.svg" width={100} height={100} />
            <Text className="text-xl uppercase">OU</Text>
          </Link>
          <Link href="/deploy-your-agent" className="underline">
            {data.navbar.link}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

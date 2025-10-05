import { H4, Text } from "./ui/typography";
import data from "@/data/data.json";

const Navbar = () => {
  return (
    <nav className="w-screen border-b bg-background z-1 relative">
      <div className="container px-8 mx-auto py-4">
        <div className="flex items-center justify-between">
          <H4>{data.navbar.brand}</H4>
          <Text className="text-muted text-right">{data.navbar.tagline}</Text>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

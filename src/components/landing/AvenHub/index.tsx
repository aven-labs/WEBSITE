import { H3, Text } from "@/components/ui/typography";
import AgentConnect from "./AgentConnect";

function index() {
  return (
    <div id="aven-hub" className="relative pb-36">
      {/* AgentConnect with scroll area */}
      <div className="relative">
        <AgentConnect />
      </div>

      {/* Content that appears after scroll */}
      <div className="container px-8 mx-auto text-right flex flex-col gap-4">
        <H3 className="text-6xl">New ERA, New WAY</H3>
        <Text className="">Install, Plug and Work</Text>
      </div>
    </div>
  );
}

export default index;

import { H3, Text } from "@/components/ui/typography";
import AgentConnect from "./AgentConnect";
import { useViewport } from "@/hooks/useViewport";

function index() {
  const {isMobile} = useViewport()
  return (
    <div id="aven-hub" className="pb-36 max-md:pt-24 gap-20 flex max-md:flex-col-reverse flex-col">
      {/* AgentConnect with scroll area */}
      <AgentConnect direction={isMobile ? "vertical" : "horizontal"} />

      {/* Content that appears after scroll */}
      <div className="container px-8 mx-auto md:text-right flex flex-col gap-4">
        <H3 className="text-6xl">New ERA, New WAY</H3>
        <Text className="">Install, Plug and Work</Text>
      </div>
    </div>
  );
}

export default index;

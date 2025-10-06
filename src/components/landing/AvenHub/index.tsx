import { H3, Text } from "@/components/ui/typography";
import AgentConnect from "./AgentConnect";
import { useViewport } from "@/hooks/useViewport";
import { ArrowRight } from "lucide-react";

function index() {
  const { isMobile } = useViewport();
  return (
    <div
      id="aven-hub"
      className="pb-36 max-md:pt-24 gap-20 flex max-md:flex-col-reverse flex-col"
    >
      {/* AgentConnect with scroll area */}
      <AgentConnect direction={isMobile ? "vertical" : "horizontal"} />

      {/* Content that appears after scroll */}
      <div className="container px-8 mx-auto md:text-right flex flex-col items-end gap-4">
        <H3 className="text-6xl">New ERA, New WAY</H3>
        <Text className="flex text-right items-center gap-2 text-muted">
          Install <ArrowRight className="w-4 h-4" /> Plug{" "}
          <ArrowRight className="w-4 h-4" /> Run
        </Text>
      </div>
    </div>
  );
}

export default index;

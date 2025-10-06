import React from "react";
import { H4, Text } from "./ui/typography";
import { Button } from "./ui/button";
import data from "@/data/data.json";
import Link from "next/link";

export const AccessButton = () => {
  return (
    <Link href="/waitlist">
      <Button className="p-8 px-12 text-md" variant="magic" size="lg">
        {data.hero.buttons.primary}
      </Button>
    </Link>
  );
};

export const AccessHub = () => {
  return (
    <Link href="/deploy-your-agent">
      <Button className="p-8 px-12 text-md" variant="default" size="lg">
        {data.hero.buttons.secondary}
      </Button>
    </Link>
  );
};

function Access() {
  return (
    <div className="bg-foreground/5 flex flex-col md:items-center justify-center gap-4 mx-auto container p-6 px-8 md:p-24 rounded-2xl mb-24">
      <H4 className="text-4xl md:text-6xl">Join Our Waitlist</H4>
      <Text className="text-xl md:mt-4">
        Access Aven, and be the first to access Aven for free.
      </Text>
      <div className="mt-4" />
      <AccessButton />
    </div>
  );
}

export default Access;

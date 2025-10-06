import React from "react";
import { H4, Text } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step8Props {
  register: UseFormRegister<FormData>;
}

const Step8: React.FC<Step8Props> = ({ register }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Social Media Handles</H4>
      <Text className="text-muted">All fields are optional</Text>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="twitter">Twitter/X</Label>
          <Input
            id="twitter"
            type="text"
            placeholder="@yourhandle"
            {...register("twitter")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            type="text"
            placeholder="linkedin.com/in/yourprofile"
            {...register("linkedin")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            type="text"
            placeholder="github.com/yourusername"
            {...register("github")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="discord">Discord</Label>
          <Input
            id="discord"
            type="text"
            placeholder="username#1234"
            {...register("discord")}
          />
        </div>
      </div>
    </div>
  );
};

export default Step8;

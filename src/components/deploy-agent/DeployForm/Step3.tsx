import React from "react";
import { H4, Text } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step3Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step3: React.FC<Step3Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Demo Video URL</H4>
      <Text className="text-muted">Preferred: YouTube or Loom (Optional)</Text>
      <div className="space-y-2">
        <Input
          id="demoVideoUrl"
          type="url"
          placeholder="https://youtube.com/watch?v=..."
          {...register("demoVideoUrl")}
          className="text-lg py-6"
          autoFocus
        />
        {errors.demoVideoUrl && (
          <p className="text-sm text-destructive">
            {errors.demoVideoUrl.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step3;

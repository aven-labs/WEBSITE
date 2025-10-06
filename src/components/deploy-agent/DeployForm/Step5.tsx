import React from "react";
import { H4, Text } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step5Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step5: React.FC<Step5Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Website URL</H4>
      <Text className="text-muted">(Optional)</Text>
      <div className="space-y-2">
        <Input
          id="websiteUrl"
          type="url"
          placeholder="https://yourwebsite.com"
          {...register("websiteUrl")}
          className="text-lg py-6"
          autoFocus
        />
        {errors.websiteUrl && (
          <p className="text-sm text-destructive">
            {errors.websiteUrl.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step5;

import React from "react";
import { H4 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step1Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step1: React.FC<Step1Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">What&apos;s your agent called?</H4>
      <div className="space-y-2">
        <Input
          id="agentName"
          type="text"
          placeholder="e.g., Super Assistant Pro"
          {...register("agentName")}
          className={`text-lg py-6 ${
            errors.agentName
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }`}
          autoFocus
        />
        {errors.agentName && (
          <p className="text-sm text-destructive">{errors.agentName.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step1;

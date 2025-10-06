import React from "react";
import { H4 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step2Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step2: React.FC<Step2Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Describe your agent in one line</H4>
      <div className="space-y-2">
        <Input
          id="description"
          type="text"
          placeholder="e.g., An AI agent that automates your daily tasks"
          {...register("description")}
          className={`text-lg py-6 ${
            errors.description
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }`}
          autoFocus
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step2;

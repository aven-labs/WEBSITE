import React from "react";
import { H4, Text } from "@/components/ui/typography";
import { Textarea } from "@/components/ui/textarea";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step4Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step4: React.FC<Step4Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">What does it do?</H4>
      <Text className="text-muted">
        Provide a detailed description of your agent's capabilities
      </Text>
      <div className="space-y-2">
        <Textarea
          id="whatItDoes"
          placeholder="Explain the features, use cases, and benefits of your agent..."
          {...register("whatItDoes")}
          rows={6}
          className={`resize-none ${
            errors.whatItDoes
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }`}
          autoFocus
        />
        {errors.whatItDoes && (
          <p className="text-sm text-destructive">{errors.whatItDoes.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step4;

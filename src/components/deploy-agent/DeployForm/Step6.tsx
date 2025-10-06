import React from "react";
import { H4 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step6Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step6: React.FC<Step6Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Contact Details</H4>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="contactName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contactName"
            type="text"
            placeholder="John Doe"
            {...register("contactName")}
            className={
              errors.contactName
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }
          />
          {errors.contactName && (
            <p className="text-sm text-destructive">
              {errors.contactName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactEmail">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contactEmail"
            type="email"
            placeholder="john@example.com"
            {...register("contactEmail")}
            className={
              errors.contactEmail
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }
          />
          {errors.contactEmail && (
            <p className="text-sm text-destructive">
              {errors.contactEmail.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactPhone">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contactPhone"
            type="tel"
            placeholder="+1 234 567 8900"
            {...register("contactPhone")}
            className={
              errors.contactPhone
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }
          />
          {errors.contactPhone && (
            <p className="text-sm text-destructive">
              {errors.contactPhone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step6;

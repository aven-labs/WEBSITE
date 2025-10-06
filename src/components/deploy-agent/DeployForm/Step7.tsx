import React from "react";
import { H4 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./types";

interface Step7Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Step7: React.FC<Step7Props> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Office Location</H4>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="officeLocation">
            Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="officeLocation"
            type="text"
            placeholder="123 Main Street"
            {...register("officeLocation")}
            className={
              errors.officeLocation
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }
          />
          {errors.officeLocation && (
            <p className="text-sm text-destructive">
              {errors.officeLocation.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">
              City <span className="text-destructive">*</span>
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="New York"
              {...register("city")}
              className={
                errors.city
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
            />
            {errors.city && (
              <p className="text-sm text-destructive">{errors.city.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">
              Country <span className="text-destructive">*</span>
            </Label>
            <Input
              id="country"
              type="text"
              placeholder="USA"
              {...register("country")}
              className={
                errors.country
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
            />
            {errors.country && (
              <p className="text-sm text-destructive">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step7;

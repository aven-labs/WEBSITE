import React from "react";
import { H4 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormData } from "./types";

interface Step9Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
  pricingModel?: string;
  hasFreeTrial?: string;
}

const Step9: React.FC<Step9Props> = ({
  register,
  errors,
  setValue,
  pricingModel,
  hasFreeTrial,
}) => {
  return (
    <div className="space-y-4">
      <H4 className="text-2xl">Pricing Model</H4>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pricingModel">
            Select Pricing Model <span className="text-destructive">*</span>
          </Label>
          <Select
            value={pricingModel}
            onValueChange={(value) => setValue("pricingModel", value as "free" | "onetime" | "subscription")}
          >
            <SelectTrigger
              className={
                errors.pricingModel
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
            >
              <SelectValue placeholder="Select pricing model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="onetime">One-Time Purchase</SelectItem>
              <SelectItem value="subscription">Subscription</SelectItem>
            </SelectContent>
          </Select>
          {errors.pricingModel && (
            <p className="text-sm text-destructive">
              {errors.pricingModel.message}
            </p>
          )}
        </div>

        {pricingModel === "onetime" && (
          <div className="space-y-2">
            <Label htmlFor="price">One-Time Price</Label>
            <Input
              id="price"
              type="text"
              placeholder="$99"
              {...register("price")}
            />
          </div>
        )}

        {pricingModel === "subscription" && (
          <div className="space-y-2">
            <Label htmlFor="monthlyPrice">Monthly Price</Label>
            <Input
              id="monthlyPrice"
              type="text"
              placeholder="9.99"
              {...register("monthlyPrice")}
            />
          </div>
        )}

        {pricingModel !== "free" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="hasFreeTrial">Do you offer a free trial?</Label>
              <Select
                value={hasFreeTrial}
                onValueChange={(value) => setValue("hasFreeTrial", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {hasFreeTrial === "yes" && (
              <div className="space-y-2">
                <Label htmlFor="trialDays">Trial Duration (Days)</Label>
                <Input
                  id="trialDays"
                  type="number"
                  placeholder="7"
                  {...register("trialDays")}
                />
              </div>
            )}
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="specialNote">Special Note (Optional)</Label>
          <Textarea
            id="specialNote"
            placeholder="Any additional pricing details or special offers..."
            {...register("specialNote")}
            rows={3}
            className="resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Step9;

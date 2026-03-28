import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type SelectFieldProps = ComponentProps<"select"> & {
  label: string;
  hint?: string;
  error?: string;
  id: string;
};

export function SelectField({
  label,
  hint,
  error,
  id,
  className,
  required,
  children,
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint && `${id}-hint`, error && `${id}-error`]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={cn(
          "min-h-11 w-full rounded-lg border border-border bg-white px-3 py-2 text-foreground shadow-sm",
          "focus:border-primary focus:ring-2 focus:ring-primary/25",
          error && "border-red-600 focus:border-red-600 focus:ring-red-200",
          className,
        )}
        required={required}
        {...props}
      >
        {children}
      </select>
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

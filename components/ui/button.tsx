import { cn } from "@/lib/cn";

type ButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "solid" | "outline";
};

export function ButtonLink({ variant = "solid", className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors",
        variant === "solid" && "bg-ink hover:bg-cobalt text-white",
        variant === "outline" &&
          "border-ink text-ink hover:bg-ink border hover:text-white",
        className,
      )}
      {...props}
    />
  );
}

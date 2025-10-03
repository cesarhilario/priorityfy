import clsx from "clsx";

type SpinnerLoaderProps = {
  className?: string;
};

export function Spinner({ className = "" }: SpinnerLoaderProps) {
  const classes = clsx("flex", "items-center", "justify-center", className);

  return (
    <div className={classes}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-100",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
}

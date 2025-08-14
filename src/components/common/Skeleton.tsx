export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-neutral-200/80 dark:bg-neutral-700/50 ${className}`}
      aria-hidden
    />
  );
}

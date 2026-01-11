'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <p className="text-red-600">
        Something went wrong while loading products.
      </p>
      <button
        onClick={reset}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Retry
      </button>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg border bg-white p-4"
        >
          <div className="h-40 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-3/4 rounded bg-gray-200" />
          <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

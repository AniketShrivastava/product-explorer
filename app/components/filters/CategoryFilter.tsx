'use client';

type Props = {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({
  categories,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded border px-3 py-2 text-sm"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

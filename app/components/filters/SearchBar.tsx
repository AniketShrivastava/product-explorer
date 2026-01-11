'use client';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
    />
  );
}

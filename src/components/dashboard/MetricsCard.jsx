export default function MetricsCard({ title, value, description }) {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded shadow-sm">
      <h3 className="text-sm font-semibold text-gray-600 uppercase">{title}</h3>
      <div className="mt-2 text-2xl font-bold text-black">{value}</div>
      {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
    </div>
  );
}

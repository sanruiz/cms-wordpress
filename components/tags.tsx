export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl px-0 mx-auto">
      {tags.nodes.map((tag, index) => (
        <span
          key={index}
          className="ml-3 whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs  leading-6 text-slate-700"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

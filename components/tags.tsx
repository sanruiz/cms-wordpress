export default function Tags({ tags }) {
  return (
    <div className="px-1 mt-2 flex-wrap flex flex-row justify-center  gap-x-4 gap-y-2 ">
      {tags.nodes.map((tag, index) => (
        <span
          key={index}
          className="whitespace-nowrap rounded-lg bg-slate-100  px-2 text-xs  leading-6 text-slate-700"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

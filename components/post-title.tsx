export default function PostTitle({ children }) {
  return (
    <h1
      className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-6 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

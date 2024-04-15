import Contents from "./ui/Contents";

export default function Home() {
  return (
    <article className="h-[90vh] overflow-scroll">
      <section className="w-full h-full flex flex-col relative items-center justify-center before:bg-white before:w-32 before:h-1 before:rounded-sm before:right-0 before:absolute before:top-52  after:bg-white after:w-32 after:h-1 after:rounded-sm after:left-0 after:absolute after:bottom-52">
        <h1 className="font-black text-6xl">WEBSTER</h1>
        <p className="text-sm">WEB DEVELOPER</p>
      </section>
      <Contents />
    </article>
  );
}

import { stats } from "../constants";
export default function Stats() {
  return (
    <section className="text-white xl:px-48 sm:px-16 px-6 flex items-center justify-between py-5">
      {stats.map((stat) => (
        <div className="flex items-center gap-6" key={stat.id}>
          <h3 className="text-[36px] font-semibold">{stat.value}</h3>
          <span className="text-gradient uppercase">{stat.title}</span>
        </div>
      ))}
    </section>
  );
}

{
  /* <div className="w-[3px] h-[15px] bg-white/[.6]" /> */
}

import { feedback } from "../constants";
import { quotes } from "../assets";
export default function Testimonials() {
  return (
    <section className="text-white xl:px-48 sm:px-16 px-6">
      <div className="flex items-center gap-28 mb-20">
        <h2 className="basis-[500px] text-[44px] font-semibold leading-[76px] mb-6">
          What people are saying about us
        </h2>
        <p className="basis-[600px] text-white/[0.7] leading-[170%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex gap-8">
        {feedback.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === 0 ? "bg-black-gradient" : ""
            } flex-1 py-14 px-10 rounded-lg feedback-card`}
          >
            <img src={quotes} alt="Quotes" className="w-10 h-auto mb-10" />
            <p className="mb-6">{item.content}</p>
            <div className="flex items-center gap-4">
              <img src={item.img} alt="People" className="w-12 h-12" />
              <div>
                <h4 className="text-[20px] leading-8">{item.name}</h4>
                <p className="text-white/[0.5] leading-8">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Button from "./Button";
import { features } from "../constants";
export default function Business() {
  return (
    <section className="text-white xl:px-48 sm:px-16 px-6 py-48 flex justify-between items-center">
      <div className="basis-[600px]">
        <h2 className="text-[44px] font-semibold leading-[76px] mb-6">
          You do the business, we’ll handle the money.
        </h2>
        <p className="text-white/[0.7] leading-[170%] mb-12">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="basis-[600px] flex flex-col gap-5">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`${
              index === 1 ? "bg-black-gradient" : ""
            } flex items-center gap-5 p-6 rounded-lg feature-card`}
          >
            <div className="flex-[0_0_64px] bg-[#09977C1A] w-16 h-16 rounded-full flex justify-center items-center">
              <img
                className="h-8 w-8 object-contain"
                src={feature.icon}
                alt="Star"
              />
            </div>
            <div>
              <h4 className="text-[18px] font-semibold mb-2">
                {feature.title}
              </h4>
              <p className="text-white/[.7]">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

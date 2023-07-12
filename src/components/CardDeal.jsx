import Button from "./Button";
import { card } from "../assets";
export default function CardDeal() {
  return (
    <section className="text-white py-48 xl:px-48 sm:px-16 px-6 flex justify-between items-center">
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
      <div className="basis-[600px]">
        <img src={card} alt="Card" className="h-[100%] w-[100%]" />
      </div>
    </section>
  );
}

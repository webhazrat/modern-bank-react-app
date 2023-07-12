import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
export default function Hero() {
  return (
    <section className="xl:pl-48 sm:pl-16 pl-6 py-8 flex md:flex-row flex-col gap-7 items-center justify-between">
      <div className="sm:basis-[700px] basis-0 relative z-0 sm:pr-0 pr-6">
        <div className="inline-flex items-center gap-2 bg-discount-gradient py-1 px-4 rounded-xl mb-4">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className="uppercase text-[#97979A] text-[14px]">
            <span className="text-white">20%</span> Discount for 1{" "}
            <span className="text-white">month</span> account
          </p>
        </div>
        <div className={`flex items-center`}>
          <h1 className="sm:text-[72px] text-[50px] sm:leading-[100px] leading-[70px] font-semibold text-white">
            The Next <span className="text-gradient">Generation</span>
          </h1>
          <div className={`md:flex hidden`}>
            <GetStarted />
          </div>
        </div>
        <h1 className="sm:text-[72px] text-[50px] sm:leading-[100px] leading-[70px] font-semibold text-white">
          Payment Method.
        </h1>
        <p className="text-white/[.70] leading-[170%] mt-6 max-w-[500px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <div className="absolute bg-white blur-[255px] w-[40%] h-[100%] top-0 left-[-50%] rounded-full z-[-1]"></div>
      </div>

      <div className="sm:basis-[750px] basis-0 relative z-10">
        <img src={robot} alt="Robot" className="w-[100%] h-auto" />
        <div className="absolute pink__gradient w-[40%] h-[30%] top-[-100px] right-0 z-10" />
        <div className="absolute blue__gradient w-[60%] h-[70%] top-[-100px] left-[120px] z-2" />
        <div className="absolute white__gradient w-[50%] h-[60%] top-[40px] right-[40px] z-2 rounded-full" />
      </div>
    </section>
  );
}

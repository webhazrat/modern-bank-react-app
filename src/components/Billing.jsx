import { bill, apple, google } from "../assets";
export default function Billing() {
  return (
    <section className="text-white flex justify-between items-center  xl:px-48 sm:px-16 px-6">
      <div className="basis-[600px] relative z-0">
        <div className="absolute bg-white blur-[255px] w-[40%] h-[100%] top-0 left-[-50%] rounded-full z-[-1]"></div>
        <img src={bill} alt="Billing" />
      </div>
      <div className="basis-[600px]">
        <h2 className="text-[44px] font-semibold leading-[76px] mb-6">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-white/[0.7] leading-[170%] mb-12">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-8 items-center">
          <a href="#" className="bg-black p-2 rounded-lg">
            <img className="w-40 h-16" src={apple} alt="App Store" />
          </a>
          <a href="#" className="bg-black p-2 rounded-lg">
            <img className="w-40 h-16" src={google} alt="Play Store" />
          </a>
        </div>
      </div>
    </section>
  );
}

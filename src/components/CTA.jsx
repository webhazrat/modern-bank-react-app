import Button from "./Button";
export default function CTA() {
  return (
    <section className={`text-white xl:px-48 sm:px-16 px-6`}>
      <div
        className={`flex justify-between items-center bg-black-gradient py-16 px-24 rounded-xl`}
      >
        <div>
          <h2 className="text-[44px] font-semibold leading-[76px] mb-3">
            Let’s try our service now!
          </h2>
          <p className="text-white/[0.7] leading-[170%] max-w-lg">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </section>
  );
}

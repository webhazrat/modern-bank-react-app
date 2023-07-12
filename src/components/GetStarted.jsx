import { arrowUp } from "../assets";
export default function GetStarted() {
  return (
    <div className="flex items-center w-[130px] h-[130px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flex justify-center items-center bg-primary w-[100%] h-[100%] rounded-full ">
        <div className="flex flex-col">
          <p className="flex gap-2 font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
            <img
              className="w-[23px] h-[23px] object-contain"
              src={arrowUp}
              alt="arrow"
            />
          </p>

          <p className="font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
}

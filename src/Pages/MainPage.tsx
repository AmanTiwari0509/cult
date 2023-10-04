
import video1 from "../assets/Video/video1.mp4";

const MainPage = () => {
  return (
    <div className="w-full ">
      <div className="md:flex flex-row gap-2 md:my-28 my:0 md:mx-[200px] mx-0 md:pt-0 pt-4">
        <div className="flex flex-col gap-8 md:w-[400px] w-[320px]">
          <div className="flex flex-col gap-4">
            <div className="md:text-6xl text-4xl font-roboto font-medium">
              For the <span className="text-[#38bdf8]">fun</span>{" "}
            </div>
            <div className="md:text-6xl text-4xl font-roboto font-medium">of Fit.</div>
          </div>
          <div className="text-[#6E6D6D] md:text-xl text-lg text-thin font-roboto tracking-wider">
            At cult.fit, we strive to keep you fit & healthy through a range of
            holistic offerings that include fitness and yoga, healthy meals,
            mental wellbeing and primary care. Now anyone can now stay healthy
            from the safety of their homes with just a single app that helps you
            to #BeBetterEveryDay
          </div>
        </div>
        <div className=" md:w-[750px] md:h-[450px] w-[320px] h-[250px] md:pt-0 pt-4">
          <video controls className="rounded-md">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
    </div>
  );
};

export default MainPage;

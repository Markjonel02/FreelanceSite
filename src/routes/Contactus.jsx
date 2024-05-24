import Purple from "../assets/images/PurpleBg.svg";
import Phone from "../assets/images/phone.svg";
import BubbleAnimation from "../components/Contact/BubbleAnimation";
const Contactus = () => {
  return (
    <>
      {" "}
      <div className="relative ">
        <div className="background relative z-10 w-full h-screen">
          <img src={Purple} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="right-elem absolute flex  justify-center items-center top-20 right-0 z-20">
          <img src={Phone} alt="" className="w-full h-full" />
        </div>
      </div>
      <BubbleAnimation></BubbleAnimation>
    </>
  );
};

export default Contactus;

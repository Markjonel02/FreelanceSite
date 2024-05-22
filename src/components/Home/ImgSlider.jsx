import { Swiper, SwiperSlide } from "swiper/react";
import jspng from "../../assets/images/js.png";
import bootstrap from "../../assets/images/bootstrap.png";
import mysql from "../../assets/images/mysql.png";
import postgre from "../../assets/images/postgre.png";
import physics from "../../assets/images/physics.png";
import php from "../../assets/images/php.png";
import PropTypes from "prop-types";
import csharp from "../../assets/images/c-sharp.png";
import python from "../../assets/images/python.png";
import Django from "../../assets/images/django_line_logo_icon_146560.svg";
import Asp from "../../assets/images/file_type_asp_icon_130741.svg";
import Css from "../../assets/images/file_type_css_icon_130661.svg";
import Html from "../../assets/images/file_type_html_icon_130541.svg";
import jquery from "../../assets/images/jquery_original_wordmark_logo_icon_146447.svg";
import Tailwind from "../../assets/images/tailwindcss_logo_icon_167923.svg";
import Vuejs from "../../assets/images/vuejs_original_wordmark_logo_icon_146305.svg";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Img = [
  { src: jspng, text: "JavaScript", desc: "" },
  { src: bootstrap, text: "Bootstrap", desc: "" },
  { src: mysql, text: "MySQL", desc: "" },
  { src: postgre, text: "Postgre", desc: "" },
  { src: physics, text: "React Js", desc: "" },
  { src: php, text: "PHP", desc: "" },
  { src: csharp, text: "C#", desc: "" },
  { src: python, text: "Python", desc: "" },
  { src: Django, text: "Django", desc: "" },
  { src: Asp, text: "Asp", desc: "" },
  { src: Css, text: "Css", desc: "" },
  { src: Html, text: "Html", desc: "" },
  { src: jquery, text: "JQuery", desc: "" },
  { src: Tailwind, text: "Tailwind", desc: "" },
  { src: Vuejs, text: "Vuejs", desc: "" },
];

Img.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
};

const ImgSlider = () => {
  const swiperRef = useRef(null);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 3.8,
      spaceBetween: 15,
    },
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card-hover");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        swiperRef.current.swiper.autoplay.stop();
        gsap.to(card.querySelector(".card-header"), {
          backgroundColor: "#ded3f5ff",
        });
      });

      card.addEventListener("mouseleave", () => {
        swiperRef.current.swiper.autoplay.start();
        gsap.to(card.querySelector(".card-header"), {
          backgroundColor: "#d3e8f2ff",
        });
      });
    });
  }, []);

  return (
    <>
      <h1 className="text-5xl flex justify-center font-Lato-Black">Stacks</h1>
      <Swiper
        ref={swiperRef}
        breakpoints={breakpoints}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        grabCursor={true}
        className="flex justify-center items-center mb-10 p-5 w-full h-auto py-12"
      >
        {Img.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="mt-6 w-80 mx-auto card-hover">
              <CardHeader className="bg-Lighter-Blue relative h-56 flex justify-center items-center card-header">
                <img
                  src={item.src}
                  alt="card-image"
                  className="w-32 h-32 object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.text}
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImgSlider;

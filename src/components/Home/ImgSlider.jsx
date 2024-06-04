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
import { Autoplay, Navigation } from "swiper/modules";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Img = [
  {
    src: jspng,
    text: "JavaScript",
    desc: "JavaScript is a versatile language for creating interactive web pages, supporting both client and server-side.",
  },
  {
    src: bootstrap,
    text: "Bootstrap",
    desc: "Bootstrap is a popular framework for building responsive, mobile-first websites with pre-designed components and utilities.",
  },
  {
    src: mysql,
    text: "MySQL",
    desc: "MySQL is a widely-used relational database management system known for its reliability, scalability, and SQL support.",
  },
  {
    src: postgre,
    text: "Postgre",
    desc: "PostgreSQL is a powerful, open-source relational database system known for its extensibility, reliability, and SQL compliance.",
  },
  {
    src: physics,
    text: "React Js",
    desc: "React.js is a JavaScript library for building user interfaces, emphasizing component-based development and declarative programming.",
  },
  {
    src: php,
    text: "PHP",
    desc: "PHP is a popular server-side scripting language for web development, known for its ease of use and versatility.",
  },
  {
    src: csharp,
    text: "C#",
    desc: "C# is a versatile programming language primarily used for developing Windows applications, web services, and games.",
  },
  {
    src: python,
    text: "Python",
    desc: "Python is a versatile programming language known for its readability, simplicity, and extensive standard libraries.",
  },
  {
    src: Django,
    text: "Django",
    desc: "Python in Django is a framework that enables rapid web development with a robust ORM, URL routing, and templating system.",
  },
  {
    src: Asp,
    text: "Asp",
    desc: "ASP (Active Server Pages) is a server-side scripting framework for building dynamic web applications using VBScript or JavaScript.",
  },
  {
    src: Css,
    text: "Css",
    desc: "CSS (Cascading Style Sheets) is a language for styling web pages, controlling layout, typography, and visual aspects.",
  },
  {
    src: Html,
    text: "Html",
    desc: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
  },
  {
    src: jquery,
    text: "JQuery",
    desc: "jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversing and manipulation.",
  },
  {
    src: Tailwind,
    text: "Tailwind",
    desc: "Tailwind CSS is a utility-first CSS framework that helps create custom designs with minimal, intuitive CSS code.",
  },
  {
    src: Vuejs,
    text: "Vuejs",
    desc: "Vue.js is a progressive JavaScript framework for building user interfaces, known for its simplicity and flexibility.",
  },
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
        modules={[Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
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
                <Typography>{item.desc}</Typography>
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

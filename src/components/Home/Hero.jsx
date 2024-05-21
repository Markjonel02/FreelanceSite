import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const cardsRef = useRef([]);
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Adding hover effect
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        paused: true,
        ease: "power2.inOut",
        on: {
          mouseenter: () => {
            gsap.to(card, {
              scale: 1.08,
              backgroundColor: "#c3dafe",
              duration: 0.3,
            });
          },
          mouseleave: () => {
            gsap.to(card, {
              scale: 1.05,
              backgroundColor: "#ffffff",
              duration: 0.3,
            });
          },
        },
      });
    });
  }, []);

  return (
    <>
      <div className="flex flex-col p-4">
        <h2 className="text-2xl xl:text-5xl md:text-4xl  font-Lato-Bold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Web Development", "Design", "SEO", "Consulting"].map(
            (service, index) => (
              <div
                key={service}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "0.75rem",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  transition:
                    "transform 0.3s ease-out, box-shadow 0.3s ease-out, background-color 0.3s ease-out",
                }}
                className="transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-lg text-gray-700">
                  {service === "Web Development" &&
                    "Crafting websites that adapt and evolve alongside your business, ensuring they meet your every need. Experience the power of responsive design tailored for your success."}
                  {service === "Design" &&
                    "Embark on a journey of digital enchantment with our expert team crafting captivating designs for web and mobile applications. Experience the magic of seamless user experiences and visually stunning interfaces."}
                  {service === "SEO" &&
                    "Elevate your online presence and attract a flood of visitors by optimizing your website for top search engine rankings. Let us unleash the power of SEO to drive your business forward!"}
                  {service === "Consulting" &&
                    "Unlock your business's potential with expert advice tailored for growth. We provide insights and strategies to navigate challenges, innovate, and expand, helping you transform your vision into reality.."}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;

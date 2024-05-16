import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Banner.css"; // Import CSS for styling

const Banner = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    // Initialize GSAP timeline
    const tl = gsap.timeline({ repeat: -1 });

    // Define animations for each card
    cards.forEach((card, index) => {
      tl.fromTo(
        card,
        { xPercent: 100 },
        { xPercent: -100, duration: 5, ease: "power1.inOut" },
        "+=2" // Delay between animations
      );
    });

    // Animate the timeline
    tl.play();

    // Clean up function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 banner-container"
      >
        {/* Card 1 */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="card bg-white shadow-md rounded-lg p-4"
        >
          <h2 className="text-lg font-semibold mb-2">Card 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        {/* Card 2 */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="card bg-white shadow-md rounded-lg p-4"
        >
          <h2 className="text-lg font-semibold mb-2">Card 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        {/* Card 3 */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="card bg-white shadow-md rounded-lg p-4"
        >
          <h2 className="text-lg font-semibold mb-2">Card 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        {/* Card 4 */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="card bg-white shadow-md rounded-lg p-4"
        >
          <h2 className="text-lg font-semibold mb-2">Card 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const Loader = () => {
  const skeletonRef = useRef();

  useEffect(() => {
    gsap.to(skeletonRef.current, {
      duration: 1.5,
      opacity: 0.6,
      backgroundPosition: "200% 0",
      repeat: -1,
      background:
        "linear-gradient(90deg, rgba(200,200,200,0.2) 25%, rgba(230,230,230,0.4) 50%, rgba(200,200,200,0.2) 75%)",
      backgroundSize: "200% 100%",
    });
  }, []);

  return (
    <div className="p-4 space-y-4">
      <div
        className=" h-64 w-full bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>
      <div
        className="h-16 w-4/5 bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>
      <div
        className="h-14 w-3/5 bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>
      <div
        className="h-16 w-full bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>{" "}
      <div
        className="h-14 w-3/6 bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>
      <div
        className="h-16 w-4/5 bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>
      <div
        className="h-16 w-4/5 bg-gray-300 rounded animate-pulse"
        ref={skeletonRef}
      ></div>
    </div>
  );
};

export default Loader;

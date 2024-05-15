const Banner = () => {
  return (
    <div
      className="parallax-item absolute inset-0 flex items-center justify-center bg-blue-500 rounded-lg"
      style={{ height: "100vh", top: "0" }}
    >
      <div className="parallax-content">
        <h1 className="text-white text-4xl mb-4">First Layer</h1>
        <p className="text-white text-lg">
          This is some content on the first layer.
        </p>
      </div>
    </div>
  );
};

export default Banner;

import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative hero min-h-[80vh] container mx-auto px-4 sm:px-12 bg-purple-700 text-center pt-12 pb-48 rounded-b-lg">
      <div className="hero-content flex flex-col items-center mb-40 lg:mb-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-4 sm:py-6 text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn btn-primary bg-white text-purple-600 hover:bg-purple-100">
            Shop Now
          </button>
        </div>
        <div className="relative w-full max-w-4xl  lg:mt-0 lg:absolute lg:-bottom-56 transition-colors outline outline-offset-8 outline-white rounded-3xl h-[300px] lg:h-[450px]">
          <img
            src={bannerImg}
            className="rounded-3xl w-full h-full object-cover"
            alt="VR Headset"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

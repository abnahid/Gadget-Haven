import Gadgets from "../Main/Gadgets";
import { useTitle } from "../Main/Utils/Utils";
import Banner from "./Banner";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div className="min-h-[calc(100vh-232px)] mt-72 container mx-auto px-12">
        <Gadgets></Gadgets>
      </div>
    </div>
  );
};

export default Home;

import { Toaster } from "react-hot-toast";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import NavBar from "./Components/NavBar.jsx";

function App() {
  const navigation = useNavigation();
  return (
    <div className="font-Sora">
      <NavBar></NavBar>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center min-h-[80vh]">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-white to-gray-50">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;

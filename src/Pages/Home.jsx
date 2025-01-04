import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner ";
import Product from "../Components/Product";
import Lottie from "lottie-react";
import olympicLogo from '../assets/animations/Animation - 1733331192623.json'
import { Bounce, Fade } from "react-awesome-reveal";
import FeaturedPlayerInsights from "../Components/FeaturedPlayerInsights";
import ComboOffers from "../Components/ComboOffers";
import Categories from "../Components/Categories";

const Home = () => {
    const loaderData = useLoaderData();

    return (
        <div>
        
           <Banner/>
           
           <div>
           <div className="w-64 h-52 mx-auto bg-transparent">
           <Lottie animationData={olympicLogo} loop={true}  className="w-full h-full "/>
           </div>
             
           <Bounce><h1 className="text-5xl text-center font-bold font-rancho mb-4">Gear Up Your Game</h1></Bounce>
             
             
            <p className="text-center mb-6 text-gray-500">Perfect for a sports store, emphasizing the idea of getting high-quality equipment.</p>
           </div>

        

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto mb-10">
            {
                loaderData.map(product=> <Product key={product._id} product={product}></Product>)
            }
           </div>

           
           <div>
            <Categories/>
           </div>

           <ComboOffers/>
           <FeaturedPlayerInsights/>
        </div>
    );
};

export default Home;
import Collection from "./collections";
import CategoryGrid from "./match";
import TrendingNow from "./trainding";
import RJWorld from "./rjworld";
import TestimonialSlider from "./review";
import Footer from "./footer";
import HeroSwiper from "./heroSwiper";
import Header from "./header";

const Home = () => {

    return (
        <div>
            <Header/>
            <HeroSwiper/>
            <Collection/>
            <CategoryGrid/>
            <TrendingNow/>
            <RJWorld/>
            <TestimonialSlider/>
            <Footer/>
        </div>
    );
    }

export default Home;

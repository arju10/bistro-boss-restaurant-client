import { Helmet } from 'react-helmet-async';
import AboutBanner from '../AboutBanner/AboutBanner';
import Banner from '../Banner/Banner';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/popularMenu';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO | HOME</title>
            </Helmet>
            <Banner />
            <Category />
            <AboutBanner />
            <PopularMenu />
            <CallUs />
            <ChefRecommend />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;
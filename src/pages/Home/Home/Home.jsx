import Banner from '../Banner/Banner';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/popularMenu';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <PopularMenu/>
           <CallUs/>
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;
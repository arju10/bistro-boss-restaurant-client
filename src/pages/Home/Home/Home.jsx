import Banner from '../Banner/Banner';
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
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;
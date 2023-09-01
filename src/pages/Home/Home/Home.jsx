import Featured from '../../Featured/Featured';
import PopularMenu from '../../popularMenu/popularMenu';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';


const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <PopularMenu/>
           <Featured/>
        </div>
    );
};

export default Home;
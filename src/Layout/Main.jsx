
import NavBar from '../pages/shared/NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
        { noHeaderFooter || <NavBar></NavBar>}
        <Outlet></Outlet>
        { noHeaderFooter || <Footer></Footer>}
    </div>
    );
};

export default Main;
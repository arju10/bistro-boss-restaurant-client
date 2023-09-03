
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import FoodCard from './../../../components/SectionTitle/FoodCard/FoodCard';

// const OrderTab = ({ items }) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//     };

//     return (
//         <div>
//             <Slider {...settings}>
//                 <div className='grid md:grid-cols-3 gap-10'>
//                     {items.map(item => (
//                         <FoodCard key={item._id} item={item} />
//                     ))}
//                 </div>
//             </Slider>
//         </div>
//     );
// };

// export default OrderTab;


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FoodCard from './../../../components/SectionTitle/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,  // tablets and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,  // large mobile device and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {items.map(item => (
                    <div key={item._id} className='p-2'>
                        <FoodCard item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OrderTab;

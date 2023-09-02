import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import food1 from "../../../../assets/home/food1.jpg";
import food2 from "../../../../assets/home/food2.jpg";
import food3 from "../../../../assets/home/food3.jpg";

const ChefRecommend = () => {
    return (
        <section>
            <SectionTitle subHeading="Should Try" heading={"CHEF RECOMMENDS"}></SectionTitle>
            <div className="flex flex-center pt-5">
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure className="px-10 pt-10">
                        <img src={food1} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Alo Biriyani</h2>
                        <p>lorem joj asdfglsjg jkoljojsgs joljv0oqwr</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-1 text-yellow-600 border-b-4 mt-4 uppercase ">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure className="px-10 pt-10">
                        <img src={food2} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BBC FOOD</h2>
                        <p>lojojkho proweinlp poipoirwec oujoijhkgndg npoiopwfr</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-1 text-yellow-600 border-b-4 mt-4 uppercase hover:text-yellow-800">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure className="px-10 pt-10">
                        <img src={food3} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fried Pork</h2>
                        <p>Iokjhokjh oujon oipowew joiujf pipisfl</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-1 text-yellow-600 border-b-4 mt-4 uppercase hover:text-yellow-800">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommend;

/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import BrandsCard from '../Home/BrandsCard';


const Brands = () => {
    const brands = useLoaderData();
    const navigate = useNavigate();

    const handleCardClick = (brand) => {
        navigate('/productsData');
    };

    return (
        <div>
            
            <div className="w-11/12 mx-auto">
                <div>
                    <h1 className="text-center mt-10 font-bold text-2xl">All Brands</h1>
                    <p className="text-center mt-4 font-semibold">
                        Explore a wide range of technology-related brands including <br /> 
                        <span className="font-bold">Apple, Google, Samsung, Sony, Intel, and Microsoft,</span><br /> 
                        as they continue to shape the future of innovation and digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 gap-4">
                    {brands.map((brand) => (
                        <div key={brand.id} onClick={() => handleCardClick(brand)}>
                            <BrandsCard brand={brand}></BrandsCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
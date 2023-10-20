/* eslint-disable react/prop-types */


const BrandsCard = ({brand}) => {
    const { brandName, image} = brand;
    return (
      <div className="mt-10 hover:cursor-pointer">
        <div className=" border-1 h-[350px] gap-4 bg-slate-200 rounded-md">
          <div>
            <img className="w-full h-[280px] rounded-md" src={image} alt="" />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-xl my-3  text-blue-600">{brandName}</h1>
          </div>
        </div>
      </div>
    );
  };

export default BrandsCard;
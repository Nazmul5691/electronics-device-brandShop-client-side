import { useParams } from "react-router-dom";


const ViewDetails = () => {
  const { id } = useParams();
  

  return (
    <div className="card card-side bg-base-300 h-[400px] my-10 shadow-xl hover:cursor-pointer">
      <div>
        <h2>{id}</h2>
      </div>
    </div>
  );
};

export default ViewDetails;

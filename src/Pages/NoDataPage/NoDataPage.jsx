

const NoDataPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div>
                <img className="h-[500px] w-[500px]" src="https://i.ibb.co/B4JKrW1/nodata.jpg" />
            </div>
            <div className="mb-20">
                <p className="text-4xl">No Data Available...!</p>
            </div>
        </div>
    );
};

export default NoDataPage;
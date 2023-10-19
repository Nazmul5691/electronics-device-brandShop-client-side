const Banner = () => {
    return (
      <div>
        <div
          className="hero h-[90vh]"
          style={{ backgroundImage: "url(https://i.ibb.co/VD3d17F/banner.png)"}}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-[600px">
              <h2 className="mb-5 text-2xl font-bold text-white">
              Your Gateway to the Digital Realm
              </h2>
              <p>
              Empowering You to Explore the Boundless Horizons of -
                <br />
                <span className="font-semibold text-white">
                Technology and Innovation.
                </span>
              </p>
              <div className="inline-flex mt-4">
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="Search here...."
                    className=" rounded-l py-2 px-4 outline-none"
                  />
                  <button className="bg-blue-600 text-white rounded-r py-2 px-4 hover:bg-blue-600">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
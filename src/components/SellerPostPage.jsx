//

const SellerPostPage = () => {
  return (
    <div className=" w-full  flex flex-col justify-center items-center">
      <div className="bg-white shadow-xl p-5 w-4/5 h-3/5 rounded-xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-teal-500 mb-5">
          Upload your first product here
        </h1>
        <div className="flex ">
          <form >
            <div className="flex flex-col ">
              <div className=" p-2 border">
                <label htmlFor="image1" className="flex flex-col">
                  <span className="text-slate-800 font-bold text-xl">
                    This will be the main image shown{" "}
                  </span>
                  <div className="flex items-center space-x-4">
                    <img src="/add.png" alt="image-1" className="w-10 h-10 cursor-pointer" />
                    <span className="label">Image 1</span>
                  </div>
                </label>
                <input type="file" id="image1" style={{ display: "none" }} />
              </div>
              {/*  */}
              <div className="flex items-center justify-between">
                <span className="upload">
                  <label htmlFor="image2">
                    <img src="/add.png" alt="image-1" className="w-10 h-10 cursor-pointer" />
                    <span className="label">Image 2</span>
                  </label>
                  <input type="file" id="image2" style={{ display: "none" }} />
                </span>
                <span className="upload">
                  <label htmlFor="image3">
                    <img src="/add.png" alt="image-1" className="w-10 h-10 cursor-pointer" />
                    <span className="label">Image 3</span>
                  </label>
                  <input type="file" id="image3" style={{ display: "none" }} />
                </span>
              </div>
              {/*  */}
            </div>
          </form>
          {/* ________________ */}
          <div className="flex flex-col px-3">
            <form action="" className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <label htmlFor="title" className="title">
                    Product title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    className="border-b-2 focus:border-teal-500 w"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="title" className="title">
                    Product price:
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Price"
                    className="border-b-2 focus:border-teal-500 w"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="title" className="title">
                    Product category:
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Category"
                    className="border-b-2 focus:border-teal-500 w"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="description">
                  Enter your product description
                </label>
                <textarea
                  id="description"
                  cols="20"
                  rows="4"
                  placeholder="description"
                  className="border focus:border-teal-500 px-5 py-2 "
                />
              </div>
            </form>
          </div>
        </div>
        <button className="bg-teal-500 text-white px-5 py-2 rounded-md w-fit mt-2 ml-auto mr-5 hover:bg-teal-400">
          Post
        </button>
      </div>
    </div>
  );
};

export default SellerPostPage;

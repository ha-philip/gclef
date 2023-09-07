export default function Notice() {
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] py-14 pb-52">
        <h1 className="lg:text-6xl text-4xl lg:text-left text-center text-[#fea116] tracking-wider font-thin">
          Notice
        </h1>
        <div className="flex flex-col justify-center items-center space-y-10 mt-10">
          <div className="bg-white shadow-2xl flex flex-col w-full">
            {[...Array(7)].map((data, number) => (
              <div
                className="hover:bg-slate-100 hover:text-[#fea116] transition flex justify-between lg:px-12 px-5 py-5 cursor-pointer"
                key={number}
              >
                <span className="tracking-tight lg:text-sm text-xs">
                  &apos;New Notice&apos;
                </span>
                <span className="tracking-tight lg:text-sm text-xs">
                  2022.06.01
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import bg1 from "../../../assets/bg1.png";

const BannerLeft = ({ count }) => {
  return (
    <div className="flex-1">
      <div
        className="rounded-2xl bg-cover bg-center flex flex-col items-center justify-center h-[150px] md:h-[250px] w-full"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <p className="text-white text-lg font-medium">In-Progress</p>
        <h1 className="text-white text-6xl font-bold mt-2">{count}</h1>
      </div>
    </div>
  );
};

export default BannerLeft;

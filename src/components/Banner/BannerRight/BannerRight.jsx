import bg2 from "../../../assets/bg2.png";

const BannerRight = () => {
  return (
    <div className="flex-1">
      <div
        className="rounded-2xl bg-cover bg-center flex flex-col items-center justify-center h-[150px] md:h-[250px] w-full"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <p className="text-white text-lg font-medium">Resolved</p>
        <h1 className="text-white text-6xl font-bold mt-2">0</h1>
      </div>
    </div>
  );
};

export default BannerRight;

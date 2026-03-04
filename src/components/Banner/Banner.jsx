import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

const Banner = () => {
  return (
    <div className="flex flex-row gap-3 md:gap-6">
      <BannerLeft></BannerLeft>
      <BannerRight></BannerRight>
    </div>
  );
};

export default Banner;

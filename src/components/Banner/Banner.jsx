import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="flex flex-row gap-3 md:gap-6">
      <BannerLeft count={inProgressCount}></BannerLeft>
      <BannerRight count={resolvedCount}></BannerRight>
    </div>
  );
};

export default Banner;

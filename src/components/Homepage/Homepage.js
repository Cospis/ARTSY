import FeaturedProjects from "../FeaturedProducts/FeaturedProduct";
import DefaultPhotography from "../photography/photography";
import "./Homepage.css";
import Upcomingauction from "./../Upcoming/Upcoming";

const DefaultHomepage = () => {
  return (
    <div className="defaulthomepage">
      <DefaultPhotography />
      <FeaturedProjects />
      <Upcomingauction />
    </div>
  );
};

export default DefaultHomepage;

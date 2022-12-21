import FeaturedProjects from "../FeaturedProducts/FeaturedProduct";
import DefaultPhotography from "../photography/photography";
import "./Homepage.css";
const DefaultHomepage = () => {
  return (
    <div className="defaulthomepage">
      <DefaultPhotography />
      <FeaturedProjects />
    </div>
  );
};

export default DefaultHomepage;

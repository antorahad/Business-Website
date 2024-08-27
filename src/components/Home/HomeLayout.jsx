import Banner from "./Banner";
import HomeAbout from "./HomeAbout";
import HomeMember from "./HomeMember";
import HomeService from "./HomeService";
import HomeTestimonial from "./HomeTestimonial";

const HomeLayout = () => {
    return (
        <>
            <Banner/>
            <HomeAbout/>
            <HomeMember/>
            <HomeService/>
            <HomeTestimonial/>
        </>
    );
};

export default HomeLayout;
import Banner from "./Banner";
import HomeAbout from "./HomeAbout";
import HomeMember from "./HomeMember";
import HomeService from "./HomeService";

const HomeLayout = () => {
    return (
        <>
            <Banner/>
            <HomeAbout/>
            <HomeMember/>
            <HomeService/>
        </>
    );
};

export default HomeLayout;
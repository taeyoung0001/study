import CardContainer from "../components/CardContainer";
import NaviBar from "../components/nav";

const MainBg = () => {
  return (
    <div className="main-bg">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="main-bg" />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <NaviBar />
      <MainBg />
      <CardContainer />
    </div>
  );
};

export default Home;

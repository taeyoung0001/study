import CardContainer from "../components/CardContainer";

//컨텍스트를 하나 만들어줌
//컨텍스트는 스테이트 보관함임임

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
      <MainBg />

      <CardContainer />
    </div>
  );
};

export default Home;

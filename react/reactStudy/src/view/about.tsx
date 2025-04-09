import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About 페이지 입니다.
      <Outlet></Outlet>
    </div>
  );
};

export default About;

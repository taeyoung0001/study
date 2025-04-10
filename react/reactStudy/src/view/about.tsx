import useCounter from "../hooks/useLike";

const About = () => {
  const { count, increase } = useCounter({ initial: 10, step: 4 });
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={increase}>❤</button>
    </div>
  );
};

export default About;

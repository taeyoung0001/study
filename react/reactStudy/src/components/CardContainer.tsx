import productDataArray from "../data";
const CardContainer = () => {
  return (
    <div className="container">
      {productDataArray.map((list) => (
        <div key={list.id} className="products">
          <img
            src={`https://codingapple1.github.io/shop/shoes${list.id + 1}.jpg`}
            alt={list.title}
          />
          <h4>{list.title}</h4>
          <p>{list.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;

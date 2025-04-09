import productDataArray from "../data";
import Detail from "../view/detail";

const DetailPage = () => {
  const shoes = productDataArray;
  return <Detail data={shoes} />;
};

export default DetailPage;

import { Fragment, useState } from "react";
import productDataArray from "../data";
import { getData } from "../utils/getData";
import Card from "./Card";
import DetailContents from "./DetailContents";

const CardContainer = () => {
  const arrarr = productDataArray;
  const [clicked, setClicked] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalList, setTotalList] = useState(arrarr);

  const URL0 = "https://codingapple1.github.io/shop/data2.json";
  const URL1 = "https://codingapple1.github.io/shop/data3.json";

  const handleGetData = async (URL: string) => {
    setLoading(true);
    const result = await getData(URL);
    setTimeout(() => {
      console.log(result);
      setTotalList((prev) => [...prev, ...result]);
      setLoading(false);
    }, 300);
  };

  const pulsCount = async () => {
    setClicked((prev) => {
      const next = prev + 1;
      if (next === 1) {
        handleGetData(URL0);
      }
      if (next === 2) {
        handleGetData(URL1);
      }
      if (next >= 3) {
        alert("상품이 없습니다.");
      }
      return next;
    });
  };

  return (
    <Fragment>
      <div className="container">
        {loading ? <p>로딩중.........</p> : <Card dataList={totalList} />}
        <button disabled={clicked == 3} onClick={pulsCount}>
          더보기
        </button>
      </div>
      <div>
        <DetailContents />
      </div>
    </Fragment>
  );
};

export default CardContainer;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import Detail from "../components/detail_tabs/Detail";
import ImageList from "../components/ImageList";

export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [imgList, setImgList] = useState([]);
  const [size, setSize] = useState("XS");
  const [tabName, setTabName] = useState("detail")
  const tabLabels = ['DETAIL', 'REVIEW', 'Q&A', 'RETURN & DELIVERY'];


  useEffect(() => {
    axios
      .get("/data/products.json") // http://localhost:3000/data/products.json
      .then((res) => {
        res.data.filter((product) => {
          if (product.pid === pid) {
            setProduct(product);
            setImgList(product.imgList);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);



  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
      pid: product.pid,
      size: size,
      qty: 1,
      price: product.price,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  };


  // 탭 변경 이벤트
  // 조건이 있을 경우에 별도의 함수를 만들어서 사용하면 좋음 
  // 그게 아닐 경우 출력하는 부분에서 바로 set함수 사용
  // const handleChangeTabs = (text) => {
  //   setTabName(text);
  // }


  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image} />
          <ImageList className="product-detail-image-top-list"
                  imgList = {imgList}/>   {/* json 데이터의 imgList */}

        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
          <li className="flex">
            <label className="product-detail-label">사이즈 </label>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className="flex">
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
            <button
              type="button"
              className="product-detail-button cart"
              onClick={addCartItem}
            >
              쇼핑백 담기
            </button>
            <div type="button" className="gift">
              <PiGiftThin />
              <div className="gift-span">선물하기</div>
            </div>
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div>
      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">
        <ul className="tabs">
          <li className={tabName === "detail" ? "active" : ''}>
            <button type="button" onClick={() => setTabName("detail")}>DETAIL</button>
          </li>
          <li className={tabName === "review" ? "active" : ''}>
            <button type="button" onClick={() => setTabName("review")}>REVIEW</button>
          </li>
          <li className={tabName === "qna" ? "active" : ''}>
            <button type="button" onClick={() => setTabName("qna")}>Q&A</button>
          </li>
          <li className={tabName === "return" ? "active" : ''}>
            <button type="button" onClick={() => setTabName("return")}>RETURN & DELIVERY</button>
          </li>
        </ul>
        <div className="tabs_contents">
          { tabName === "detail" && <Detail imgList={imgList} />}
          { tabName === "review" && <Review />}
        </div>
      </div>
    </div>
  );
}
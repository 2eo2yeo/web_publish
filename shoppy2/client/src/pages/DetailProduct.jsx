import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import ReturnDelivery from "../components/product/delivery/ReturnDelivery.jsx";
import Review from "../components/product/review/Detail.jsx";
import DetailProductList from "../components/product/productDetail/DetailProductList.jsx";
import Qna from "../components/product/qna/Qna.jsx";

export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("XS");
  
  const [activeTab, setActiveTab] = useState("detail"); // detail page 상태관리
  
  useEffect(() => {
    axios
      .get("/data/products.json") // http://localhost:3000/data/products.json
      .then((res) => {
        res.data.filter((product) => {
          if (product.pid === pid) setProduct(product);
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




  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image} />
          <ul className="product-detail-image-top-list">
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
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
        <div className="tab_nav">
          <ul>
            <li className={activeTab === "detail" ? "on" : ""}
                onClick={()=>{setActiveTab("detail")}}>DETAIL</li>
            <li className={activeTab === "review" ? "on" : ""}
                onClick={()=>{setActiveTab("review")}}>REVIEW</li>
            <li className={activeTab === "qna" ? "on" : ""}
                onClick={()=>{setActiveTab("qna")}}>Q&A</li>
            <li className={activeTab === "delivery" ? "on" : ""}
                onClick={()=>{setActiveTab("delivery")}}>Return & Delivery</li>  {/* 보여지는 이름으로 값을 받아서 진행하지 않는 이유: 길어서 */}
                {/* 별도의 함수를 안만들고 set함수를 쓴 이유 -> 조건이 없기때문에 처리할 로직이 없기 때문에 값만넣어도 되어서 생략함  */}
          </ul>
        </div>
        {/* start cont */}
        <div className="tab_content_area">
          {activeTab === "detail" && (
          <div className="box detail"
          >
            <DetailProductList />



          </div>
          )}
          {activeTab === "review" && (
          <div className="box review"
          >
            <Review />
          </div>

          )}
          {activeTab === "qna" && (
          <div className="box qna"
          >
            <Qna />
          </div>
          )}
          {activeTab === "delivery" && (
          <div className="box delivery"
          >
            <ReturnDelivery />
          </div>
            
          )}
        </div>
        {/* end cont */}
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import "../../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import ReactHtmlParser from "react-html-parser";
import ReactPlayer from "react-player";

export default function Products() {
  const params = useParams();
  const [element, setElement] = useState();
  const [deskripsi, setDeskripsi] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/getDetail/${params.id_element}/${params.id_area}/${params.id_type}`
      )
      .then((res) => {
        console.log("des", res.data);
        setDeskripsi(res.data);
        setElement(res.data.data[0].element.name_element);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      <div className="products"></div>
      <div className="cards">
        {deskripsi.data &&
          deskripsi.data.map((des) => {
            return (
              <div key={des.id}>
                <h1>{des.type.name_type}</h1>
                <h5>{des.area.name_area}</h5>
                <h5>by : {des.source}</h5>
                <div>{ReactHtmlParser(des.description)}</div>
                <div className="d-flex justify-content-center my-5 ">
                <img src={des.image}/>
                </div>
                <div className="d-flex justify-content-center my-5">
                <ReactPlayer url={des.video}/>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
}

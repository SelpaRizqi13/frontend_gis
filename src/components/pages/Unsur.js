import React, { useEffect, useState } from "react";
import "../../App.css";
import "../Cards.css";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardItem from "../CardItem";

// Get ID from URL

export default function Unsur() {
  const params = useParams();
  const [element, setElement] = useState();
  const [types, setTypes] = useState([]);

  // useEffect(() => {
  //   const axiosPosts = async () => {
  //     const response = await axios(`http://127.0.0.1:8000/api/getJenisById/${params.id_element}/${params.id_area}`);

  // console.log(response)
  //     setTypes(response.data);
  //   };
  //   axiosPosts();
  // }, []
  // );
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/getJenisById/${params.id_element}/${params.id_area}`
      )
      .then((res) => {
        console.log(res.data);
        setTypes(res.data);
        setElement(res.data.data[0].element.name_element);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
  // const useaxiosPosts = types.data.map ((posts)=>{
  //   return <div> a</div>
  // })

  return (
    <>
      <div className="services"></div>
      <div className="cards">
        <h1>{element} </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {types.data &&
                types.data.map((jenis) => {
                  return (
                    <div key={jenis.id}>
                      <CardItem
                        src={jenis.image}
                        text={jenis.name_type}
                        label={jenis.element.name_element}
                        alt={jenis.name_type}
                      path={`/products/${params.id_element}/${params.id_area}/${jenis.id}`}

                      />
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

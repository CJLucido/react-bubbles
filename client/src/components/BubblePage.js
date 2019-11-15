import React, { useState, useEffect } from "react";
import axios from "axios";


///////ORGANISMS/MODULES//////////
import axiosWithAuth from '../axios/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  // const authAxios = axiosWithAuth(); for some reason this isn't working here, must investigate later


useEffect(()=>{
  const token = localStorage.getItem('token');
    axios.create({
      headers: {
          'Authorization': token,
      }
  })
  axios
      .get('http://localhost:5000/api/colors', {
          headers: {
              Authorization: localStorage.getItem("token"),
          }
      })
      .then(res => {
          console.log("this is fetch res", res);
        
      })
      .catch(err => {
          console.log("this is fetching error", err)
      })
 

}, [])
//   const fetchColors = () => {
//     const authAxios = axiosWithAuth();
//     authAxios
//         .get('http://localhost:5000/api/colors', {
//             headers: {
//                 Authorization: localStorage.getItem("token"),
//             }
//         })
//         .then(res => {
//             console.log("this is fetch res", res);
          
//         })
//         .catch(err => {
//             console.log("this is fetching error", err)
//         })
   
// } 




  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

import './App.css';
import React, { useState } from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
function App() {
  
  const imgs=[
    {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
    {id:1,value:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"},
    {id:2,value:"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175__340.jpg"},
    {id:3,value:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"},
  ];
  const [wordData,setWordData]=useState(imgs[0])
  const [length ,setLength] = useState(0)
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  
  const nextSlide=()=>{
     if (length === imgs.length - 1){
      setLength(0)
      setWordData( imgs[length]);
     }
     else {
      setLength(length+1)
      setWordData( imgs[length]);
     }
    
    };
    const prevSlide=()=>{
      if (length === 0){
       setLength(imgs.length-1)
       setWordData( imgs[length]);
      }
      else {
       setLength(length-1)
       setWordData( imgs[length]);
      }
     
     };
    console.log(wordData)
  
  return (

    <div className="App">
 <img src={wordData.value} height="300" width="500" /> 
 <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
 <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <div className='flex_row'>
        {imgs.map((data,i)=>
       
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
       
        )}
      </div>
    </div>
  );
}

export default App;
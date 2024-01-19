import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { authContext } from "../../context/MyContext";


export const 
Productcategory = () => {
const [categoryVisible, setCategoryVisible] = useState(false);
  return (
    <div>
      <ul className="md:flex justify-around text-[12px] px-[2em] pt-[2em]  
      w-full gap-[1em] bg-white md:w-full md:mx-auto relative left-0  top- rounded-[8px]  " id="product_category_list 
      " >
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }

        }} >
          Women
          </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Male
          </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Mother-Child
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Home & Furniture
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Supermarket
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Cosmetics
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
        Show & Bag
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Electronic
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
        Sport & Outdoor
        </li>
        <li onClick={()=>{
          if(categoryVisible === false )
          setCategoryVisible(true)
        else{
          setCategoryVisible(false)
        }
        }} >
          Best seller
        </li>
      </ul>
      {categoryVisible?<ProductCategoryDropdown/>:null}
    </div>
  );
};


export const ProductCategoryDropdown = ()=>{

const {data , setData} = useContext(authContext);
const url= "https://fakestoreapi.com/products";

const fetchApi = ()=>{
  fetch(url)
  .then((res)=> res.json())
  .then((db)=> setData(db))
  .catch((error)=>{
     console.log("api call fail",error);
  })
  }


return(
<div className="w-full md:flex gap-[2em] bg-white md:w-[80%] md:mx-auto absolute left-0 md:left-[2em] md:top-[12.5em]   rounded-[8px] border " >
<div className=" flex justify-around md:gap-[2em] p-[1em]" >
  <div>
    <ul>
      <li className="font-bold my-[.7em]">Shoe & Bag</li>
      <li>Casual Shoes</li>
      <li>Boots</li>
      <li>Sandals</li>
      <li>Slippers</li>
    </ul>
    <ul>
      <li className="font-bold my-[.7em]" >Luxury & designer</li>
      <li>Towels</li>
      <li>Bathroom Scales</li>
      <li>Bath Mats</li>
      <li>Shower Caps</li>
    </ul>
   
  </div>
  <div className="" >
  <ul >
      <li className="font-bold my-[.7em]" >Home Textile</li>
      <li>Bedding</li>
      <li>Pillows</li>
      <li>Handkerchief Towels</li>
      <li>Curtain</li>
    </ul>

    <ul>
      <li className="font-bold my-[.7em]" >Cosmetics</li>
      <li>Shampoo and Conditioner</li>
      <li>Styling Products</li>
      <li>Hair Accessories</li>
      <li>Men's Grooming</li>
    </ul>
  </div>
</div>
<div className="flex p-[1em]  justify-around md:gap-[3em]">
<div className="flex flex-col gap-[1em]" >
  <ul>
    <li className="font-bold my-[.7em]" >Party Supplies</li>
    <li>Event & Party</li>
    <li>Christmas</li>
    <li>Artificial Decorations</li>
    <li>Wedding</li>
  </ul>


  <ul>
    <li className="font-bold my-[.7em]" >Sport & Outdoors</li>
    <li>Team Sports</li>
    <li>Water Sports</li>
    <li>Outdoor Recreation</li>
    <li>Fitness Equipment</li>
  </ul>
</div>
<div>
  <ul>
    <li className="font-bold my-[.7em] " >Clothes</li>
    <li>Bottoms</li>
    <li>Women's Clothing</li>
    <li>T-Shirts and Tops</li>
    <li>Dresses</li>
    <li>Outerwear</li>
    <li>Formal Wear</li>
    <li>Casual Wear</li>
    <li>Seasonal Collections</li>
    <li>Sports Bras</li>
    <li>Workout Tops</li>
    <li>Fall Wardrobe</li>
  </ul>
</div>
</div>
</div>
)}

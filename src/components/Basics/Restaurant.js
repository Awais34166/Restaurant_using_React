import React,{useState} from 'react'
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set (
  Menu.map((curElem) => {
    return curElem.category;
  })
),
 "All",
];

console.log(uniqueList);

const Restaurant = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const FilterItem = (category) => {
      if(category === "All") {
      setMenuData(Menu);
      return;
}

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  
  return (
    <div>
      <Navbar FilterItem= {FilterItem} menuList ={menuList} />
      <MenuCard MenuData={MenuData} />
    </div>
  )
}

export default Restaurant;

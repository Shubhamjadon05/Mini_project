// import React from 'react'
// import "./style.css"
// import Menu from "./Basics/MenuApi"
// import Menucard from './Basics/Menucard';
// import Futter from './Basics/Futter';



// const Resturant=() => {
  
//   const [MenuData, setMenuData] =React.useState(Menu);
//   // console.log(MenuData)
//   const filteritem = (category)=>{
//     const updatedlist =Menu.filter((curElem)=>{
//       return curElem.category===category;
//     })
//     setMenuData(updatedlist);
//   };
  
  
//   return (
//     <>
//     <nav className='navbar'>
//       <div className='btn-group'>
//         <button className='btn-group__item'  onClick={()=>filteritem("breakfast")}> 
//           Breakfast
//         </button>
//         <button className='btn-group__item' onClick={()=> filteritem("lunch")}>
//           lunch</button>
//         <button className='btn-group__item' onClick={()=>filteritem("evening")}>
//           evening</button>
//         <button className='btn-group__item' onClick={()=>filteritem("dinner")}>
//           dinner</button>
//         <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>
//           all</button>

//       </div>

//     </nav>
//     <Menucard MenuData={MenuData}/>
//     <Futter/>
//     </>
//   )
// }

// export default Resturant;
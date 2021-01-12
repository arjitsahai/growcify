import React, { useEffect, useState }from "react";
import './App.css';

import Category from "./components/category";

const CATEGORY_API = "https://api.growcify.com/dev/category/list"



function App() {
  const [ categories, setCategories ] = useState([]);

  useEffect(()=> {
    fetch(CATEGORY_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCategories(data.results);
      });
  }, []);

  

  return (
  <div>
     {categories.length > 0 &&
     categories.map((category) => <Category key = {category.id} {...category} />)}
  </div>
  );
}

export default App;

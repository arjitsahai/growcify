import React from "react";

const Category = ({photos, isActive, name, parent}) => {
    <div className="category">
        <img src ={photos} alt= {name} />
    </div>
}

export default Category;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../redux/actions/categories";
import "./Categories.scss";
import {REQUEST_STATUS} from "../../helpers/Constants";

function Categories() {
  const dispatchCategories = useDispatch();
  useEffect(() => {
    dispatchCategories(getCategories());
  }, []);
  const categories = useSelector((state) => state.categories);
  return (
    <>
      {categories.status===REQUEST_STATUS.SUCCESS && (
        <div className="categories">
      <div tabIndex="1" className="categories-item">
        Hepsi
      </div>
      {categories.data.map((item) => (
        <div tabIndex="1" className="categories-item" key={item.id}>
          {item.title}
        </div>
      ))}
      <div tabIndex="1" className="categories-item">
        Diğer
      </div>
    </div>
      )}
     </> 
  );
}

export default Categories;

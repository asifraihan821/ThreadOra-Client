import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import HeroSection from "./HeroSection";
import SecondHeroSection from "./SecondHeroSection";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient.get("/categories/").then((res) => {
      setCategories(res.data.results);
    });
  }, []);

  return (
    <div>
      <HeroSection categories={categories} />
    </div>
  );
};

export default Categories;

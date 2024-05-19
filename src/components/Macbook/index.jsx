import React, { useState } from "react";
import PriceCard from "../PriceCard";
import "./index.css";
const dataArray = [
  { id: 1, name: "256GB SSD storage", price: 80000 },
  { id: 2, name: "512GB SSD storage", price: 100000 },
  { id: 3, name: "1TB SSD storage", price: 120000 },
  { id: 4, name: "2TB SSD storage", price: 160000 },
];
function Macbook() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedPriceCard = (id) => {
    setSelectedId(id);
  };
  console.log(selectedId);
  return (
    <div className="main-container">
      <h1 className="macbook-heading">Macbooks</h1>
      {dataArray.map((each, index) => {
        const isSelected = each.id === selectedId;
        const { name, price, id } = each;
        return (
          <PriceCard
            selectedPriceCard={selectedPriceCard}
            isSelected={isSelected}
            key={each.id}
            carddetails={each}
          />
        );
      })}

      <p className="price-text-color">
        {" "}
        Price:{" "}
        {dataArray
          .filter((each) => each.id === selectedId)
          .map((filteredData) => filteredData.price)}{" "}
        rs
      </p>
    </div>
  );
}

export default Macbook;

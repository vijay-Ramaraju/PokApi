import "./index.css";
import image1 from "../../images/MacBookAir 15inch_5.webp";
const PriceCard = (props) => {
  const { carddetails, isSelected, selectedPriceCard } = props;
  const { name, id, price } = carddetails;
  return (
    <div
      onClick={() => selectedPriceCard(id)}
      className={isSelected ? "selected-card" : "notselected-card"}
    >
      <img className="macbook-styles" src={image1} alt="macbook" />
      <p>{name} </p>
      <p>{price}</p>
    </div>
  );
};

export default PriceCard;

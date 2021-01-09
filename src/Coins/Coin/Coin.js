import s from "./Coin.module.css";
const Coin = ({
  name,
  symbol,
  current_price,
  market_cap,
  image,
  price_change_percentage_24h,
}) => {
  return (
    <div className={s.coin}>
      <div className={s.logo}>
        <img src={image} alt='logo' />
      </div>
      <div className={s.name}>
        <h2>{name}</h2>
      </div>
      <div className={s.symbol}>
        <h2>{symbol.toUpperCase()}</h2>
      </div>
      <div className={s.price}>
        <h2>${current_price.toLocaleString()}</h2>
      </div>
      <div className={s.percent}>
        <h2>{Number(price_change_percentage_24h).toFixed(2)}%</h2>
      </div>
      <div className={s.volume}>
        <h2>${market_cap.toLocaleString()}</h2>
      </div>
    </div>
  );
};
export default Coin;

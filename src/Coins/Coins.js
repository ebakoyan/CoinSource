import s from "./Coins.module.css";
import axios from "axios";
import Coin from "./Coin/Coin";
import { useState, useEffect } from "react";
import Search from "./search/Search";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const setData = (page) => {
    if (page < 1 || page > 34) setPage(1);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      });
  };
  useEffect(() => {
    setData(page);
  }, [page]);
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const List = filteredCoins.map((coin) => <Coin {...coin} key={coin.id} />);
  const handleChange = (e) => setSearch(e.target.value);
  return (
    <div>
      <div className={s.s}>
        <Search change={handleChange} />
      </div>
      <div className={s.btn}>
        <i
          className='fas fa-caret-square-left fa-2x'
          onClick={() => setPage(page - 1)}></i>
        <h2>Page - {page}</h2>

        <i
          className='fas fa-caret-square-right fa-2x'
          onClick={() => setPage(page + 1)}></i>
      </div>
      {List}
    </div>
  );
};
export default Coins;

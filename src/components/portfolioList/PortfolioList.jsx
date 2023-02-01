import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected,to }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

import "./Stock.scss";
import stocks from "../../data/stocks.json";

export default function Stock() {
  return (
    <>
      {stocks.map((s, i) => (
        <div key={i} className="main__stock">
          <div className="main__stock-card">
            <div className="main__stock-left">
              <div className="main__stock-circle">
                <h4 className="main__stock-etf">{s.etf}</h4>
              </div>
              <div className="main__stock-mid">
                <h4 className="main__stock-header">{s.etf}</h4>
                <h5 className="main__stock-name">{s.etfName}</h5>
              </div>
            </div>
            <div className="main__stock-right">
              <h4 className="main__stock-header">{s.etfTotal}</h4>
              <h5 className="main__stock-gainz">{s.gainz}</h5>
            </div>
          </div>
          <hr className="main__stock-hr" />
        </div>
      ))}
    </>
  );
}

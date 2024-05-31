import "./Portfolio.scss";
import { PieChart } from "react-minimal-pie-chart";
import eye from "../../assets/imgs/hide.png";
import add from "../../assets/imgs/add-contacts.png";
import Stock from "../Stock/Stock";

export default function Portfolio() {
  return (
    <>
      <main className="main">
        <div className="main__header">
          <div className="main__header-leftt">
            <div className="main__header-top">
              <h2 className="main__header-money">$85.00</h2>
              <div className="main__header-icons">
                <img className="main__header-icons-left" src={eye}></img>
                <img className="main__header-icons-right" src={add}></img>
              </div>
            </div>
            <div className="main__header-bottom">
              <h2 className="main__header-allTime">$0 (0%) all time</h2>
            </div>
          </div>
          <div className="main__header-rightt">
            <div className="main__header-rightt-right">
              <div className="main__header-followers">
                <h2 className="main__header-followers-h">2 Followers</h2>
              </div>
              <div className="main__header-following">
                <h2 className="main__header-following-h">7 Following</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="main__piechart">
          <PieChart
            data={[
              { title: "One", value: 61, color: "#91AE6F " },
              { title: "Two", value: 15, color: "rgba(50, 32, 47, 0.76)" },
              { title: "Three", value: 13, color: "#E8DFDC" },
              {
                title: "Fourth",
                value: 12,
                color: "rgba(145, 174, 111, 0.80)",
              },
            ]}
          />
          <div className="main__piechart-circle">
            <h2 className="main__piechart-circle-header">0%</h2>
          </div>
          <div className="main__piechart-FHQ">
            <div className="main__piechart-header">
              <h4 className="main__piechart-h">FHQ</h4>
            </div>
            <h5 className="main__piechart-n">61%</h5>
          </div>
          <div className="main__piechart-HBLK">
            <div className="main__piechart-header">
              <h4 className="main__piechart-h">HBLK</h4>
            </div>
            <h5 className="main__piechart-n">15%</h5>
          </div>
          <div className="main__piechart-VEA">
            <div className="main__piechart-header">
              <h4 className="main__piechart-h">VEA</h4>
            </div>
            <h5 className="main__piechart-n">13%</h5>
          </div>
          <div className="main__piechart-VUG">
            <div className="main__piechart-header">
              <h4 className="main__piechart-h">VUG</h4>
            </div>
            <h5 className="main__piechart-n">12%</h5>
          </div>
        </section>
        <section className="main__stocks">
          <h3 className="main__stocks-header">Stocks</h3>
          <div className="main__stocks-container">
            <Stock />
          </div>
        </section>
      </main>
    </>
  );
}

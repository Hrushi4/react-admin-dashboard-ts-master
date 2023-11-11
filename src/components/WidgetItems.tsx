import React from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

interface WidgetItemProps {
  data: {
    heading: string;
    percent: number;
    value: number;
    color: string;
  }[];
}

const WidgetItem: React.FC<WidgetItemProps> = ({ data }) => (
  <section className="widget-container">
    {data.map((item, index) => (
      <article className="widget" key={index}>
        <div className="widget-info">
          <p>{item.heading}</p>
          <h4>{item.value}</h4>
          {item.percent > 0 ? (
            <span className="green">
              <HiTrendingUp /> +{item.percent}%{" "}
            </span>
          ) : (
            <span className="red">
              <HiTrendingDown /> {item.percent}%{" "}
            </span>
          )}
        </div>

        <div
          className="widget-circle"
          style={{
            background: `conic-gradient(
            ${item.color} ${(Math.abs(item.percent) / 100) * 360}deg,
            rgb(255, 255, 255) 0
          )`,
          }}
        >
          <span style={{ color: item.color }}>{item.percent}%</span>
        </div>
      </article>
    ))}
  </section>
);

export default WidgetItem;

import "./TimelineItem.scss";
import React from "react";
import Tag from "react-bulma-components/lib/components/tag";

const TimelineItem = ({ item }) => {
  return (
    <div className="item">
      <div className="timetitle">{item.title}</div>
      <div className="timeline">
        <div className="timepointContainer">
          <span className="timepoint"></span>
          <span className="date">{item.startDate}</span>
        </div>

        <span className="line"></span>
        <div className="timepointContainer">
          <span className="timepoint"></span>
          <span className="date">{item.endDate}</span>
        </div>
      </div>
      {item.tags && (
        <div className="tagContainer">
          {item.tags.map(t => {
            return <Tag key={t}>{t}</Tag>;
          })}
        </div>
      )}
    </div>
  );
};

export default TimelineItem;

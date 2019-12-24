import "./TimelineItem.scss";
import React, { Component } from "react";
import Tag from "react-bulma-components/lib/components/tag";
import { Level } from "react-bulma-components";

const TimelineItem = ({ item }) => {
  return (
    <div className="item">
      <div className="timetitle">{item.title}</div>
      <div className="timeline">
        <div className="timepointContainer">
          <span className="timepoint"></span>
          <span className="date">{item.startdate}</span>
        </div>

        <span className="line"></span>
        <div className="timepointContainer">
          <span className="timepoint"></span>
          <span className="date">{item.enddate}</span>
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
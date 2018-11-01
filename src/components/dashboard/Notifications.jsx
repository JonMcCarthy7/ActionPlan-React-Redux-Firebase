import React from "react";
import { link } from "fs";
import moment from "moment";

const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(el => {
                return (
                  <li key={el.id}>
                    <div>
                      <span className="blue-text">{el.user} </span>
                      {el.content}
                    </div>

                    <div className="grey-text note-date">
                      {moment(el.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

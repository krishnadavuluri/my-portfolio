import React from "react";

import mongodb from "../../assests/mongodb.png";

export default function Education() {
  return (
    <div className="bg-[color:var(--black)]  sm:pt-[8rem] pt-[9rem] [&>div]:text-[color:var(--textWhite)] border border-white h-screen w-screen">
      <div className="timeLine">
        <div className="timeLineContainer leftContainer">
          <div className="timeLineTextBox">
            <img src={mongodb} />
            <h3>Backflipt</h3>
            <small>2018-2022</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ratione error voluptate ea eaque, consectetur sequi
              exercitationem recusandae vel officia rerum mollitia suscipit sint
              nemo possimus, ab sapiente esse qui?
            </p>
          </div>
        </div>
        <div className="timeLineContainer rigthContainer">
          <div className="timeLineTextBox">
          <img src={mongodb} />
            <h3>Backflipt</h3>
            <small>2018-2022</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ratione error voluptate ea eaque, consectetur sequi
              exercitationem recusandae vel officia rerum mollitia suscipit sint
              nemo possimus, ab sapiente esse qui?
            </p>
          </div>
        </div>
        <div className="timeLineContainer leftContainer">
          <div className="timeLineTextBox">
          <img src={mongodb} />
            <h3>Backflipt</h3>
            <small>2018-2022</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ratione error voluptate ea eaque, consectetur sequi
              exercitationem recusandae vel officia rerum mollitia suscipit sint
              nemo possimus, ab sapiente esse qui?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

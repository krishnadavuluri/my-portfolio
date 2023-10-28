import React from "react";

export default function EducationV2() {
  return (
    <div id="education" className="h-screen w-screen bg-[color:var(--black)] pt-[5rem] [&>div]:text-[color:var(--textWhite)]">
      <h1 class="timeLineHeading">Education</h1>
      <div className="timeLine">
        <div className="timeLineContainer">
          <h2>High School</h2>
          <h3>Boon School International</h3>
          <p>10th</p>
          <p>CGPA: 9.2</p>
          <small>2015</small>
        </div>
        <div className="timeLineContainer">
          <h2>Higher Secondary</h2>
          <h3>Sri Chaitanya</h3>
          <p>Science</p>
          <p>Percentage: 96.1%</p>
          <small>2015-2017</small>
        </div>
        <div className="timeLineContainer">
          <h2>Bachelor's Degree</h2>
          <h3>Puducherry Technological University</h3>
          <p>Computer Science</p>
          <p>CGPA: 8.63</p>
          <small>2017-2021</small>
        </div>
      </div>
    </div>
  );
}

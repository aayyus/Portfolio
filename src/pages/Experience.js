import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#dc143c">
        <VerticalTimelineElement
          className="vertical-timeline-element--education color"
          date="2019-2021"
          iconStyle={{ background: "#dc143c", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Trinity International College
          </h3>
          <p> +2 Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - present "
          iconStyle={{ background: "#dc143c", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
The British College          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
       

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 Sep - 2023 Jan"
          iconStyle={{ background: "#dc143c", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
Front End Associate         </h3>
          <h4 className="vertical-timeline-element-subtitle">
DG HUB, Nepal payment Solution          </h4>
          <p>
            Learned frontend HTML,CSS and JS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 Mar - May"
        iconStyle={{ background: "#dc143c", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
Front End Internship          </h3>
        <h4 className="vertical-timeline-element-subtitle">
F1 Soft International       </h4>
        <p>
          Learned Advance Js and Realtime Web
        </p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
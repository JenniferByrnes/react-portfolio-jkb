import project1 from "../assets/projects/project-choice.png";
import project2 from "../assets/projects/whats-cooking.png";
import project3 from "../assets/projects/weather-playlist.png";
import project4 from "../assets/projects/wix-mask.png";
import project5 from "../assets/projects/work-day-scheduler.png";
import project6 from "../assets/projects/horiseon.png";

export default function Projects() {
  return (
    <><h1>Projects</h1>
      <div>Container for Cards
        <div>
          <img src={project1} style={{ minWidth: "350px", height: "350px" }} alt="project choice" />
          <div>Title</div>
        </div>
        <div>
          <img src={project2} style={{ minWidth: "350px", height: "350px" }} alt="project choice" />
          <div>Title</div>
        </div>
        <div>
          <img src={project3} style={{ minWidth: "350px", height: "350px" }} alt="project choice" />
          <div>Title</div>
        </div>
        <div>
          <img src={project4} style={{ minWidth: "350px", height: "350px" }} alt="project choice" />
          <div>Title</div>
        </div>
        <div>
          <img src={project5} style={{ minWidth: "350px", height: "350px" }} alt="project choice" />
          <div>Title</div>
        </div>
        <div>
          <img src={project6} style={{ minWidth: "350px", height: "350px" }} alt="project choice" />
          <div>Title</div>
        </div>

      </div>
    </>
  )
}
import byrnesImage from "../assets/images/JByrnesPhoto.jpeg";
export default function About() {
  return (
    <>
      <h1>ABOUT ME</h1><div>
        <div> Card with photo
          <div>
          <img src={byrnesImage}  style={{ minWidth: "350px", height: "350px" }} alt="Jennifer Byrnes"/>
          </div>
          <div>
            skill icons
          </div>
        </div>
        <div>
          card with bio
          <h2>Hi!</h2>
          <p>elevator pitch</p>
        </div>
      </div>
    </>
  )
}
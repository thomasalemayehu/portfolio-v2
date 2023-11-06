import homeStyles from "../assets/styles/Home.module.css";

function Home() {
  return (
    <section className={homeStyles.container} id="LandingSection">
      <div className={homeStyles.left__container}>
        <p>Howdy-doody!🙃 I'm</p>
        <h1>
          <span>&lt;</span>Thomas Mechessa <span>/&gt;</span>
        </h1>
        <h2>Full Stack developer(Java & JavaScript)</h2>
        <p>
          As a highly passionate, creative, and detail-oriented full stack
          developer, I possess the expertise to craft robust, scalable, and
          high-performance backend solutions. I excel in creating exceptional,
          responsive, and imaginative digital experiences that captivate users,
          even under the pressure of tight deadlines. My dedication to
          delivering excellence and my ability to seamlessly bridge the gap
          between backend and frontend development make me an invaluable asset
          to any project or team.
        </p>
        <a href="#ContactSection">Hire Me</a>
      </div>

      <div className={homeStyles.right__container}></div>
    </section>
  );
}

export default Home;

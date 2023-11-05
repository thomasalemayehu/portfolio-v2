import { useEffect } from "react";
import aboutStyles from "../assets/styles/About.module.css";

function About() {
  function loadTimeLine() {
    console.log("Loading timeline...");
    function qs(selector, all = false) {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    }

    const sections = qs(".section", true);
    const timeline = qs(".timeline");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler() {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }

  useEffect(() => {
    loadTimeLine();
  });

  return (
    <section
      className={aboutStyles.about__page__container}
      id="AboutSection"
      onLoad={loadTimeLine}
    >
      <div className={aboutStyles.about__page__inner__container}>
        {/* Left Content */}
        <div className={aboutStyles.about__page__left}></div>
        {/* Right Content */}
        <div className={aboutStyles.about__page__right}>
          <h3> About Me </h3>
          <p>
            I am a highly motivated, detail-oriented, tech-savvy, and organized
            engineer, I thrive in fast-paced environments and excel at meeting
            tight deadlines. My commitment to producing high-quality work is
            reflected in my meticulous approach to coding and problem-solving. I
            am not just a solitary developer; I am also a passionate team
            player. My strong communication skills enable me to collaborate
            effectively with cross-functional teams. I am dedicated to
            contributing to a company's success. With a solid educational
            foundation, experience and a strong work ethic, I am excited to
            embark on new challenges and make meaningful contributions as a
            full-stack developer.
          </p>
          <a href="assets/docs/Thomas Alemayehu's CV.pdf" download>
            Download my CV
          </a>
        </div>
      </div>

      {/* Timeline */}
      <div className={`${aboutStyles.timeline} timeline`}>
        <div className={`${aboutStyles.line} line`}></div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Born Day🎂
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              February 14th , 2000
            </p>
            <p
              className={`${aboutStyles.timeline__content} timeline__content`}
            ></p>
          </div>
        </div>

        <div className={`${aboutStyles.section}  section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Doing Stuff👶
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              2000 - 2004
            </p>
            <p
              className={`${aboutStyles.timeline__content} timeline__content`}
            ></p>
          </div>
        </div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Hill Side School
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              2004 - 2018
            </p>
            <p className={`${aboutStyles.timeline__content} timeline__content`}>
              Started from pre-school onto middle school and high school at the
              same institution. I consider that place my home. That is where I
              learned most of my soft skills such as communication, dedication,
              hard work and discipline. I also have some of my best memories and
              friends there.
            </p>
          </div>
        </div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Meseret Humanitarian Organization
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              Jul 2017 - Sep 2017
            </p>
            <p className={`${aboutStyles.timeline__content} timeline__content`}>
              Part of a group that sold tickets as donation and collected in
              kind donations for the “One Pack for One Child” Project, preparing
              school essential packs for children of economically weak families.
            </p>
          </div>
        </div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Nehemiah Autism Centre
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              Jul 2018 - Sep 2018
            </p>
            <p className={`${aboutStyles.timeline__content} timeline__content`}>
              Spend some time with autistic children. Teach them to adapt to new
              people, improve communication with people and learn to focus and
              read.
            </p>
          </div>
        </div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Jersuma Trading P.L.C
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              2018 - Present
            </p>
            <p className={`${aboutStyles.timeline__content} timeline__content`}>
              At Jersuma, I prepared payment receipts for when Jersuma Trading
              gets paid from other organizations. Collected, Organized and filed
              receipts, time sheets and withholdings associated with Jersuma
              Trading. I also worked in close contact with the accounting group
              of Jersuma Trading in order to collect and file documents for each
              fiscal year.
            </p>
          </div>
        </div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Addis Ababa Institute of Technology
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              2019 - 2022
            </p>
            <p className={`${aboutStyles.timeline__content} timeline__content`}>
              Technology, I developed most of my current qualities. First and
              foremost I learned to code. I also further developed my
              communication and dedication skills. I also learned things like
              creative problem solving and teamwork throughout the projects
              given with every course.
            </p>
          </div>
        </div>

        <div className={`${aboutStyles.section} section`}>
          <div className={`${aboutStyles.bead} bead`}></div>
          <div className={`${aboutStyles.content} content`}>
            <h1 className={`${aboutStyles.timeline__title} timeline__title`}>
              Gebeya Talent
            </h1>
            <p
              className={`${aboutStyles.timeline__time__span} timeline__time__span`}
            >
              2021 - Present
            </p>
            <p className={`${aboutStyles.timeline__content} timeline__content`}>
              I have been in the Gebeya Talent pool since 2021. Gebeya was my
              first journey of application and interview. It is a great
              experience to have in my locker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import Banner from "@/Components/course-page/Banner";
import CourseContent from "@/Components/course-page/CourseContent";
import Projects from "@/Components/course-page/Projects";
import { Fragment } from "react";

const layout = () => {
  const courseModules = [
    {
      serial: "01",
      moduleName: `HTML`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "02",
      moduleName: `CSS`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "03",
      moduleName: `Bootstrap`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "04",
      moduleName: `Javascript`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "05",
      moduleName: `DOM`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "06",
      moduleName: `Angular JS`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "07",
      moduleName: `Environment`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "08",
      moduleName: `MVC Architecture`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "09",
      moduleName: `Directives`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "10",
      moduleName: `Modules`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
    {
      serial: "11",
      moduleName: `Dependency Injection`,
      moduleContent: `Introduction >> Layers In Web >> Application >> Tags & Attribute >> Programming >> Audio >>  Video >> Graphics`,
    },
  ];
  const courseObjectives = [
    {
      id: 1,
      text: `Utilizing AngularJS formats adequately`,
    },
    {
      id: 2,
      text: `Questioning and adjusting information in various databases and getting to be plainly gifted with the API`,
    },
    {
      id: 3,
      text: `Quickly making perplexing structures`,
    },
    {
      id: 4,
      text: `Understanding two-way (proportional) information authoritative`,
    },
    {
      id: 5,
      text: `Presenting route usefulness in web applications`,
    },
    {
      id: 6,
      text: `Overseeing conditions with Injection frameworks`,
    },
    {
      id: 7,
      text: `Securing web applications from dangers and pernicious clients`,
    },
    {
      id: 8,
      text: `Building different AngularJS orders`,
    },
    {
      id: 9,
      text: `Organizing the web application utilizing the vigorous index structure`,
    },
    {
      id: 10,
      text: `Organizing, composing, and ultimately sending the application`,
    },
  ];
  return (
    <Fragment>
      <Banner />
      <CourseContent courseContentObjectives={courseObjectives} courseModules={courseModules} />
      <Projects />
    </Fragment>
  );
};

export default layout;

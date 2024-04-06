import { FC } from "react";
import { ActionFunction, LoaderFunction } from "react-router-dom";

export const projectsLoader: LoaderFunction = () => {
  console.log("projectsLoader");

  return null;
};

export const projectsAction: ActionFunction<string> = () => {
  console.log("projectsAction");

  return null;
};

const Projects: FC = () => {
  return (
    <div
      className="
        flex
        flex-col
        h-full
      "
    >
      <div>projects</div>
    </div>
  );
};

export default Projects;

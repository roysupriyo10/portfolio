import { Projects, projectsAction, projectsLoader } from "@/pages";
import Root from "@/pages/root";
import { RouteObject } from "react-router-dom";

export const applicationRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/projects",
        element: <Projects />,
        loader: projectsLoader,
        action: projectsAction,
      },
    ],
  },
];

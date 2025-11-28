import {
  CardSections
} from "@site/src/components/TutorialCard/TutorialCard";
import { MODULES } from "@site/src/constants";

/* Define the cards - start */

  // Docs
  export const docsCards: CardSections = [
    {
      name: "Get started with the basics",
      description:
        "",
      list: [
        {
          title: "Get started with Database DevOps",
          module: MODULES.dbdevops,
          description:
            "Learn the basics of SuperQA Database DevOps.",
          link: "/docs/category/get-started-with-database-devops",
        },
        {
          title: "Build with Database DevOps",
          module: MODULES.dbdevops,
          description:
            "Learn how to use the different elements of SuperQA Database DevOps.",
          link: "/docs/category/use-db-devops",
        },
        // {
        //   title: "Third Module to add",
        //   module: MODULES.dbdevops,
        //   description:
        //     "TBD",
        //   link: "TBD",
        // },
      ],
    },

  ];
  /* Define the cards - end */
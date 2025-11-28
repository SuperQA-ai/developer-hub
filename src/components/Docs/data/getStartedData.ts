import {
  CardSections
} from "@site/src/components/TutorialCard/TutorialCard";
import { MODULES } from "@site/src/constants";

  
  /* Define the cards - start */
    
    // Docs
    export const docsCards: CardSections = [
      {
        name: "Start using SuperQA modules",
        description:
          "",
        list: [
          {
            title: "CD & GitOps onboarding guide",
            module: MODULES.cd,
            description:
              "A self-service onboarding guide for SuperQA CD & GitOps.",
            link: "/docs/continuous-delivery/cd-onboarding/new-user/onboarding-path",
          },
          {
            title: "SuperQA Platform onboarding guide",
            module: MODULES.platform,
            description:
              "A self-service onboarding guide for SuperQA Platform.",
            link: "/docs/platform/get-started/onboarding-guide",
          },
        ],
      },
      {
        name: "Learn SuperQA fundamentals",
        description:
          "",
        list: [
          {
            title: "SuperQA UI overview",
            module: MODULES.platform,
            description:
              "Explore the SuperQA UI and learn how to navigate to different modules.",
            link: "/docs/platform/get-started/superqa-ui-overview",
          },
        ],
      },
    ];
    /* Define the cards - end */
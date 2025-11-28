import {
  CardSections
} from "@site/src/components/TutorialCard/TutorialCard";
import { MODULES } from "@site/src/constants";

/* Define the cards - start */

  // Feature highlights
  export const docsCards: CardSections = [
    {
      name: "Get started",
      description:
        "",
      list: [
        {
          title: "Build resilient applications with chaos engineering",
          module: MODULES.ce,
          description:
            "Learn the basics of SuperQA Chaos Engineering.",
          link: "/docs/chaos-engineering/concepts/chaos101",
        },
        {
          title: "Onboard with HCE",
          module: MODULES.ce,
          description:
            "Onboarding with SuperQA Chaos Engineering.",
          link: "/docs/chaos-engineering/getting-started/onboarding/",
        },
  ],
},
//];
// Feature highlights
  //export const featureHighlights: CardSections = [
{
    name: "Chaos faults",
      description:
        "",
        list: [
        {
          title: "AWS faults",
          module: MODULES.ce,
          description:
            "Execute AWS chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/aws/",
        },
        {
          title: "Kubernetes faults",
          module: MODULES.ce,
          description:
            "Execute Kubernetes chaos faults. ",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/kubernetes/",
        },
        {
          title: "Azure faults",
          module: MODULES.ce,
          description:
            "Execute Azure chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/azure/",
        },
        {
          title: "GCP faults",
          module: MODULES.ce,
          description:
            "Execute GCP chaos faults",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/gcp/",
        },
        {
          title: "VMware faults",
          module: MODULES.ce,
          description:
            "Execute VMware chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/vmware/",
        },
        {
          title: "Windows faults",
          module: MODULES.ce,
          description:
            "Execute Windows chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/windows/",
        },
        {
          title: "Load faults",
          module: MODULES.ce,
          description:
            "Execute load chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/load/",
        },
        {
          title: "Kube-resilience faults",
          module: MODULES.ce,
          description:
            "Execute kube-resilience chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/kube-resilience/",
        },
        {
          title: "Bring Your Own Chaos (BYOC) faults",
          module: MODULES.ce,
          description:
            "Bring your own chaos faults and execute them.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/byoc/",
        },
        {
          title: "Cloud Foundry chaos faults",
          module: MODULES.ce,
          description:
            "Execute kube-resilience chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/cloud-foundry/",
        },
        {
          title: "SSH faults",
          module: MODULES.ce,
          description:
            "Execute SSH chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/ssh/",
        },
        {
          title: "Linux chaos faults",
          module: MODULES.ce,
          description:
            "Execute Linux chaos faults.",
          link: "/docs/chaos-engineering/use-superqa-ce/chaos-faults/linux/",
        },
    ],
  },
//];

{
  name: "Key features",
    description:
      "",
      list: [
      {
        title: "GameDay",
        module: MODULES.ce,
        description:
          "Execute chaos experiments in the application during a specific period..",
        link: "/docs/chaos-engineering/use-superqa-ce/GameDay",
      },
      {
        title: "ChaosGuard",
        module: MODULES.ce,
        description:
          "Additional layer of security to minimize blast radius and mitigate potential security threats. ",
        link: "/docs/chaos-engineering/use-superqa-ce/governance/governance-in-execution/",
      },
      {
        title: "Chaos dashboard",
        module: MODULES.ce,
        description:
          "Visualize important metrics and data associated with your experiment runs.",
        link: "/docs/chaos-engineering/use-superqa-ce/dashboards/",
      },
    {
      title: "Resilience Probes",
      module: MODULES.ce,
      description:
        "Monitor your application's health before, during, and after executing a chaos experiment.",
      link: "/docs/chaos-engineering/use-superqa-ce/probes/",
    },
    {
      title: "Service Discovery",
      module: MODULES.ce,
      description:
        "Determine connections made to and from your Kubernetes cluster. ",
      link: "/docs/chaos-engineering/use-superqa-ce/service-discovery",
    },
    {
      title: "Application Maps",
      module: MODULES.ce,
      description:
        "Bind multiple interacting discovered services into a single object.",
      link: "/docs/chaos-engineering/use-superqa-ce/application-map",
    },
  ],
},

  //export const helpandFAQs: CardSections = [
    {
      name: "Help and FAQs",
      description:
        "",
      list: [
        {
      title: "Troubleshoot HCE",
      module: MODULES.ce,
      description:
        "Troubleshoot HCE.",
      link: "/docs/chaos-engineering/troubleshooting/",
    },
    {
      title: "HCE FAQs",
      module: MODULES.ce,
      description:
        "HCE FAQs.",
      link: "/kb/chaos-engineering/chaos-engineering-faq",
    },
   ],
 },
];

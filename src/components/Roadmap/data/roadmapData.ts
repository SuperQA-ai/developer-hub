import { MODULES } from "../../../constants";
import { platformData } from "./platformData";
import { jenkinsData } from "./jenkinsData";
import { githubData } from "./githubData";


export interface ModuleData {
  title: string;
  description: string;
  module: string;
  horizon: Horizon;
}

export type tag = {
  color?: string;
  textColor?: string;
  value: string;
};

export type Feature = {
  tag?: tag[];
  title: string;
  description: string;
  link?: string;
  backgroundColor?: string;
};
export interface Horizon {
  [key: string]: {
    description: string;
    feature: Feature[];
  };
}

const ModuleData: ModuleData[] = [
  {
    title: "SuperQA App",
    description:
      "SaaS release status: GA, SMP release status: GA",
    module: MODULES.platform,
    horizon: platformData,
  },
  {
    title: "Jenkins Plugin",
    description: "Integrate SuperQA with Jenkins CI/CD pipelines",
    module: MODULES.jenkins,
    horizon: jenkinsData,
  },
  {
    title: "GitHub Action",
    description: "Run SuperQA tests in GitHub Actions workflows",
    module: MODULES.github,
    horizon: githubData,
  },
];

export default ModuleData;

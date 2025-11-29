// import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import DocVideo from "@site/src/components/DocVideo";
import CTABanner from "@site/src/components/CTABanner";
import DocImage from "@site/src/components/DocImage";
import DocsButton from "../components/DocsButton";
import DocsTag from "../components/DocsTag";
import Telemetry from "../components/Telemetry";
import Tooltip from "../components/ToolTip/Tooltip";
import DocTable from "../components/DocTable/DocTable";
import UniversityAdmonition from "../components/Admonition/UniversityAdmonition";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  DocVideo: DocVideo,
  CTABanner: CTABanner,
  DocImage: DocImage,
  DocsButton: DocsButton,
  DocsTag: DocsTag,
  Telemetry: Telemetry,
  Tooltip: Tooltip,
  DocTable: DocTable,
  UniversityAdmonition: UniversityAdmonition,
};

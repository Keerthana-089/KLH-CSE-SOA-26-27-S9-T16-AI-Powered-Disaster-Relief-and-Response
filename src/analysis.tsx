import { createFileRoute } from "@tanstack/react-router";
import { AnalysisPage, makeHead } from "../components/pages";

export const Route = createFileRoute("/analysis")({
  head: makeHead(
    "AI Analysis & Recommendations",
    "Review simulated emergency assessments, risk indicators, and response recommendations.",
  ),
  component: AnalysisPage,
});

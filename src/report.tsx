import { createFileRoute } from "@tanstack/react-router";
import { makeHead, ReportPage } from "../components/pages";

export const Route = createFileRoute("/report")({
  head: makeHead(
    "Incoming Reports",
    "Review, triage, and verify incoming emergency reports in SkyAid.",
  ),
  component: ReportPage,
});

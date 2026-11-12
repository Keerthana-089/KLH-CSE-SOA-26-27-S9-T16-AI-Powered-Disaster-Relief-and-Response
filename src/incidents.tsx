import { createFileRoute } from "@tanstack/react-router";
import { IncidentsPage, makeHead } from "../components/pages";

export const Route = createFileRoute("/incidents")({
  head: makeHead(
    "Incidents & Response Plan",
    "Monitor active emergency incidents, coordinate operational tasks, and track response plans.",
  ),
  component: IncidentsPage,
});

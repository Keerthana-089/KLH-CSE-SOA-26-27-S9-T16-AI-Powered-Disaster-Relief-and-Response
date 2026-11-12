import { createFileRoute } from "@tanstack/react-router";
import { AlertsPage, makeHead } from "../components/pages";
export const Route = createFileRoute("/alerts")({ head: makeHead("Alerts", "Review emergency warnings and operational updates."), component: AlertsPage });

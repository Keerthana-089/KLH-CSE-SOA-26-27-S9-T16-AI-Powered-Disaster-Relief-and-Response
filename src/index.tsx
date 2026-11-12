import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage, makeHead } from "../components/pages";
export const Route = createFileRoute("/")({ head: makeHead("Emergency Dashboard", "Monitor incidents and emergency resources with SkyAid."), component: DashboardPage });

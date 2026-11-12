import { createFileRoute } from "@tanstack/react-router";
import { makeHead, ResourcesPage } from "../components/pages";
export const Route = createFileRoute("/resources")({ head: makeHead("Resources", "Review emergency resource availability and deployment."), component: ResourcesPage });

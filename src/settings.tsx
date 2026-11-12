import { createFileRoute } from "@tanstack/react-router";
import { makeHead, SettingsPage } from "../components/pages";
export const Route = createFileRoute("/settings")({ head: makeHead("Settings", "Configure SkyAid dashboard preferences."), component: SettingsPage });

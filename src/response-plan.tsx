import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/response-plan")({
  beforeLoad: () => {
    throw redirect({ to: "/incidents" });
  },
});

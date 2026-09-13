import { createFileRoute, redirect } from "@tanstack/react-router";
// Keep the legacy address working without a second, outdated portfolio page.
export const Route = createFileRoute("/companies")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio", replace: true });
  },
});

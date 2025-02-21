import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/pages/Login";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

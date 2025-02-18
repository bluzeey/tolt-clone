import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../components/Login/Form";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

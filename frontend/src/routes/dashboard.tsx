import { createFileRoute } from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}

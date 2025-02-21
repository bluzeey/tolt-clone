import { createFileRoute } from "@tanstack/react-router";
import Sidebar from "../components/shared/Sidebar";
import DashboardContent from "@/components/Dashboard/Content";
import DashboardPage from "@/pages/Dashboard";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardPage />;
}

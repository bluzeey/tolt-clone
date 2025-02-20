import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Home/Hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="m-auto">
      <Hero />
    </div>
  );
}

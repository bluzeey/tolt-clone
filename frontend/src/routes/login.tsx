import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

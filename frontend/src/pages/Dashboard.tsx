import Sidebar from "@/components/shared/Sidebar";
import DashboardContent from "@/components/Dashboard/Content";
export default function DashboardPage() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-1 ml-60 p-8">
        <DashboardContent />
      </main>
    </div>
  );
}

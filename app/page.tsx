import DashboardPage from "@/components/pages/DashboardPage";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    </>
  );
}

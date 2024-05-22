import DashboardWrapper from "@/components/Dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <section className="flex h-full w-full">{children}</section>
    </DashboardWrapper>
  );
}

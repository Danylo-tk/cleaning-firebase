import MainListItems from "./listItems";

type DashboardProps = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: DashboardProps) => {
  return (
    <div className="flex h-full justify-center">
      <div className="box-border w-full max-w-screen-xl">
        <div className="flex h-full">
          <main className="order-2 w-full">{children}</main>
          <div className="order-1 h-full border-r border-r-slate-200">
            <section className="sticky top-16 min-w-72 pt-4">
              <MainListItems />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;

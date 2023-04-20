import Main from "@/components/Learn/Layout/Main";
import Navigation from "@/components/Learn/Layout/Navigation";
import NavigationMobile from "@/components/Learn/Layout/NavigationMobile";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <div className="layout-learn">
        <Navigation></Navigation>
        <NavigationMobile></NavigationMobile>

        <Main>{children}</Main>
      </div>
    </>
  );
}

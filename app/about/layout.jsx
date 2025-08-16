import Footer from "@/components/Footer";

export const metadata = {
  title: "Mihalhayail | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

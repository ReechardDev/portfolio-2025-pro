// app/(site)/layout.jsx
import Header from "../../components/Header";
// If you want a footer on every page, uncomment the next line:
// import Footer from "../../components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

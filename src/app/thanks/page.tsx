import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import ThankElement from "@/components/ThankElement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poďakovanie",
  description: "Poďakovanie za správu",
  openGraph: {
    title: "Poďakovanie",
    description: "Poďakovanie za správu",
  },
};
const Page = () => {
  return (
    <>
      <div className="padding_content gdpr intro_padding">
        <NavbarSecond black={true} />
        <div className="thanks_center">
          <ThankElement />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

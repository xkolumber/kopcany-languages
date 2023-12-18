import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import React from "react";

const page = () => {
  return (
    <>
      <div className="padding_content gdpr intro_padding">
        <NavbarSecond black={true} />
        <h2 className="gdpr_title">Kontakt</h2>

        <p>
          {" "}
          Všeobecné nariadenie o ochrane osobných údajov (General Data
          Protection Regulation čiže GDPR), účinné od 25. 5. 2018 má za cieľ
          chrániť práva (predovšetkým) občanov Európskej únie proti
          neoprávnenému nakladaniu s ich osobnými údajmi.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="footer">
      <div className="padding_content">
        <h4>{t("info_centre")}</h4>
        <div className="footer_content">
          <div className="footer_column">
            <h5>Email</h5>
            <p>{t("service_guide")}: muzeum.kopcany@gmail.com</p>
            <p>{t("service_others")}: turista@kopcany.sk </p>
          </div>
          <div className="footer_column">
            <h5>{t("phone")}</h5>
            <p>+421(0)911086847</p>
            <p>+421(0)915969172</p>
          </div>
          <div className="footer_column">
            <h5>{t("socials")}</h5>
            <Link href="https://www.facebook.com/profile.php?id=100068776245374">
              <div className="footer_both">
                <Image
                  src="/fb_icon.svg"
                  alt="Dark section"
                  width={20}
                  height={20}
                />

                <p>Múzeum Kopčany</p>
              </div>
            </Link>

            <Link href=" https://www.facebook.com/zrebcinkopcany">
              <div className="footer_both">
                <Image
                  src="/fb_icon.svg"
                  alt="Dark section"
                  width={20}
                  height={20}
                />

                <p>Žrebčín Kopčany</p>
              </div>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100064336766140">
              <div className="footer_both">
                <Image
                  src="/fb_icon.svg"
                  alt="Dark section"
                  width={20}
                  height={20}
                />
                <p>Kostol sv. Margity Antiochijskej</p>
              </div>
            </Link>
          </div>
        </div>
        <p className="footer_last_text margin_top10">GDPR</p>
        <p className="footer_last_text">{t("rules")}</p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";

const Footer = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="padding_content">
        <Link href="/">
          <h4>{t.footer.info_centre}</h4>
        </Link>
        <div className="footer_content">
          <div className="footer_column">
            <h5>Email</h5>
            <p>{t.footer.service_guide}: muzeum.kopcany@gmail.com</p>
            <p>{t.footer.service_others}: turista@kopcany.sk </p>
          </div>
          <div className="footer_column">
            <h5>{t.footer.phone}</h5>

            <a href="tel:+421911086847">
              <p>+421(0)911086847</p>
            </a>

            <a href="tel:+421915969172">
              <p>+421(0)915969172</p>
            </a>
          </div>
          <div className="footer_column">
            <h5>{t.footer.socials}</h5>
            <Link href="https://www.facebook.com/profile.php?id=100068776245374">
              <div className="footer_both">
                <Image
                  src="/fb_icon.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <p>Múzeum Kopčany</p>
              </div>
            </Link>
            <Link href="https://www.facebook.com/zrebcinkopcany">
              <div className="footer_both">
                <Image
                  src="/fb_icon.svg"
                  alt="Facebook"
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
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <p>Kostol sv. Margity Antiochijskej</p>
              </div>
            </Link>
          </div>
        </div>
        <Link href={`/gdpr`}>
          <p className="footer_last_text margin_top10">GDPR</p>
        </Link>
        <p className="footer_last_text">{t.footer.rules}</p>
      </div>
    </footer>
  );
};

export default Footer;

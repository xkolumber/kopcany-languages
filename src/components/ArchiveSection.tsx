"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";
import Link from "next/link";

const ArchiveSection = () => {
  const { language } = useLanguageStore();

  const t = translations[language];
  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black">{t.home_page.archive}</h2>
        <p className="text-black">{t.home_page.archive_text}</p>

        <Link href={`/all_events`}>
          <div className="btn btn--primary">{t.home_page.archive_button}</div>
        </Link>
        <div className="three_themes"></div>
      </div>
    </div>
  );
};

export default ArchiveSection;

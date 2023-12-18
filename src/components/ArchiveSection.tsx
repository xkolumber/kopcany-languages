import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const ArchiveSection = () => {
  const t = useTranslations("home_page");

  const locale = useLocale();
  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black">{t("archive")}</h2>
        <p className="text-black">{t("archive_text")}</p>

        <Link href={`/${locale}/all_events`}>
          <div className="btn btn--primary">{t("archive_button")}</div>
        </Link>
        <div className="three_themes"></div>
      </div>
    </div>
  );
};

export default ArchiveSection;

import { useTranslations } from "next-intl";

const Themes = () => {
  const t = useTranslations("home_page");
  return (
    <>
      <h2 className="text-black">{t("themes")}</h2>
      <p className="text-black max-600px p-margin-bottom">
        {t("themes_description")}
      </p>
    </>
  );
};

export default Themes;

import { client } from "@/lib/sanity";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const Themes = async() => {
  const t = await getTranslations("home_page");
  const locale = useLocale();

    
  const query4 =`*[_type == "homepage"][0].text_ku_temam`;
  const preklad = (await client.fetch(query4)) as { [key: string]: string };

  return (
    <>
      <h2 className="text-black">{t("themes")}</h2>
      <p className="text-black max-600px p-margin-bottom">
        {preklad[locale]}
      </p>
    </>
  );
};

export default Themes;

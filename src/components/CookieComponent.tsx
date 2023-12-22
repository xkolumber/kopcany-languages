"use client";
import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
const CookieComponent = () => {
  const [showCookieComponent, setShowCookieComponent] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const hasLocalConsent = hasCookie("localConsent");
    setShowCookieComponent(!hasLocalConsent);
  }, []);

  const handleSetCookie = () => {
    setCookie("localConsent", "true", {});
    setShowCookieComponent(false);
  };
  const handleCustomize = () => {
    setShowCookieComponent(false);
    setShowCookieSettings(true);
  };
  const cancelCustomize = () => {
    setShowCookieComponent(true);
    setShowCookieSettings(false);
  };
  const acceptCustomize = () => {
    setCookie("localConsent", "true", {});
    setShowCookieComponent(false);
    setShowCookieSettings(false);
  };

  /* Cookie prisposobit */

  const [showNecessaryText, setNecessaryText] = useState(true);
  const [showFunctionalText, setFunctionalText] = useState(false);
  const [showAnalyticalText, setAnalyticalText] = useState(false);
  const [showPerformanceText, setPerformanceText] = useState(false);
  const [showAdvertisementText, setAdvertisementText] = useState(false);

  const toggleNecessaryText = () => {
    setNecessaryText(!showNecessaryText);
  };

  const toggleFunctionalText = () => {
    setFunctionalText(!showFunctionalText);
  };
  const toggleAnalyticalText = () => {
    setAnalyticalText(!showAnalyticalText);
  };
  const togglePerformanceText = () => {
    setPerformanceText(!showPerformanceText);
  };
  const toggleAdvertisementText = () => {
    setAdvertisementText(!showAdvertisementText);
  };

  return (
    <>
      {showCookieComponent && (
        <div className="cookies_container">
          <p>
            Súbory cookie používame na zlepšenie Vášho zážitku z prehliadania,
            poskytovanie prispôsobených reklám alebo obsahu a analýzu našej
            návštevnosti. Kliknutím na „Prijať všetko“ súhlasíte s naším
            používaním súborov cookie.
          </p>
          <div className="cookies_button_container">
            <button className="btn btn--primary" onClick={handleCustomize}>
              Prispôsobiť
            </button>
            <button className="btn btn--primary" onClick={handleSetCookie}>
              Prijať
            </button>
          </div>
        </div>
      )}
      {showCookieSettings && (
        <div className="cookie_settings_all">
          <div className="cookie_settings_modal">
            <div>
              <h2> Prispôsobte cookies</h2>
              <p className="cookie_setting_text">
                Používame aj cookies tretích strán, ktoré nám pomáhajú
                analyzovať, ako používate túto webovú stránku, ukladať vaše
                preferencie a poskytovať obsah a reklamy, ktoré sú pre vás
                relevantné. Tieto cookies budú uložené vo vašom prehliadači iba
                s vaším predchádzajúcim súhlasom. Môžete sa rozhodnúť povoliť
                alebo zakázať niektoré alebo všetky tieto súbory cookie, ale
                zakázanie niektorých z nich môže ovplyvniť váš zážitok z
                prehliadania.
              </p>
              <div style={{ marginTop: "2rem" }}></div>
              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleNecessaryText}
                  >
                    Nevyhnutné
                  </label>
                  {showNecessaryText && (
                    <div className="description_cookies_text">
                      Nevyhnutné súbory cookie sú potrebné na umožnenie základných funkcií tejto webovej lokality, ako je napríklad zabezpečenie bezpečného prihlásenia alebo nastavenie vašich preferencií súhlasu. Tieto súbory cookie neukladajú žiadne osobné údaje.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showNecessaryText ? "" : "white_bg"
                  }`}
                  value={showNecessaryText ? 1 : 0}
                  onChange={toggleNecessaryText}
                  disabled={true}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleFunctionalText}
                  >
                    Funkčné
                  </label>
                  {showFunctionalText && (
                    <div className="description_cookies_text">
                     Funkčné súbory cookie zlepšujú použiteľnosť a výkon tejto webovej stránky tým, že umožňujú pokročilé funkcie a personalizáciu. Môžu si zapamätať vaše preferencie, ako napr. výber jazyka, veľkosť písma alebo región, a poskytujú prispôsobenejšie a pohodlnejšie prehliadanie. Tieto stránky cookies nezhromažďujú žiadne osobné údaje informácie.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showFunctionalText ? "" : "white_bg"
                  }`}
                  value={showFunctionalText ? 1 : 0}
                  onChange={toggleFunctionalText}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleAnalyticalText}
                  >
                    Analytické
                  </label>
                  {showAnalyticalText && (
                    <div className="description_cookies_text">
                      Analytické súbory cookie nám pomáhajú pochopiť, ako návštevníci interagujú s našou webovou stránkou, a to zhromažďovaním a vykazovaním anonymných informácií. Tieto súbory cookie poskytujú cenné informácie o návštevnosti webových stránok, správaní používateľov a demografických údajoch, čo nám umožňuje zlepšovať výkon a obsah našich webových stránok. Zozbierané informácie sú súhrnné a neumožňujú osobnú identifikáciu jednotlivých návštevníkov.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showAnalyticalText ? "" : "white_bg"
                  }`}
                  value={showAnalyticalText ? 1 : 0}
                  onChange={toggleAnalyticalText}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={togglePerformanceText}
                  >
                    Výkonostné
                  </label>
                  {showPerformanceText && (
                    <div className="description_cookies_text">
                     Na zvýšenie rýchlosti sa používajú výkonné súbory cookie, výkon a celkový používateľský zážitok z našich webových stránok. Tieto súbory cookie zhromažďujú anonymné informácie o tom, ako návštevníci používajú a pohybujú sa na stránke, ako napríklad načítanie stránky časy načítania, časy odozvy servera a chybové hlásenia. Podľa analýzy týchto údajov môžeme identifikovať a riešiť výkonnostné prekážky, optimalizovať naše webové stránky a zabezpečiť plynulé a efektívne prehliadanie.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showPerformanceText ? "" : "white_bg"
                  }`}
                  value={showPerformanceText ? 1 : 0}
                  onChange={togglePerformanceText}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleAdvertisementText}
                  >
                    Reklamné
                  </label>
                  {showAdvertisementText && (
                    <div className="description_cookies_text">
                      Advertisement cookies are used to deliver targeted and
                      personalized ads to enhance your browsing experience.
                      These cookies collect information about your interests,
                      preferences, and browsing behavior to display relevant
                      advertisements on our website and across other websites
                      you visit. By tailoring the ads to your interests, we aim
                      to provide you with more engaging and meaningful content.
                      Please note that these cookies do not store personally
                      identifiable information.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showAdvertisementText ? "" : "white_bg"
                  }`}
                  value={showAdvertisementText ? 1 : 0}
                  onChange={toggleAdvertisementText}
                />
              </div>
            </div>

            <div className="cookies_button_container">
              <button className="btn btn--primary" onClick={cancelCustomize}>
                Zrušiť
              </button>
              <button className="btn btn--primary" onClick={acceptCustomize}>
                Prijať
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieComponent;
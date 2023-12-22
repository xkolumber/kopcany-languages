import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        id="my-script1"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1WJV6RE92F"
      />
      <Script id="my-script2">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1WJV6RE92F');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
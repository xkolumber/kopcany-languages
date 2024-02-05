import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["sk", "cz", "en"],

  defaultLocale: "sk",
});

export const config = {
  matcher: ["/", "/(sk|cz|en)/:path*"],
};

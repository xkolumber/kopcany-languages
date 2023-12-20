import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['sk', 'cz','en'],
 
  // Used when no locale matches
  defaultLocale: 'sk'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sk|cz|en)/:path*']
};
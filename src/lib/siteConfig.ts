export const APP_NAME = "Home Cents Family Budgeting";
export const APP_SHORT_NAME = "Home Cents";
export const SUPPORT_EMAIL = "support@homecentsbudget.app";
export const SITE_URL = "https://support.homecentsbudget.app";

/** Set NEXT_PUBLIC_APP_STORE_URL in Vercel once the App Store listing is live. */
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || "";

export const APP_STORE_SEARCH_URL =
  "https://apps.apple.com/us/search?term=Home+Cents+Family+Budgeting";

export function getAppStoreHref(): string {
  return APP_STORE_URL || APP_STORE_SEARCH_URL;
}

export function hasDirectAppStoreListing(): boolean {
  return APP_STORE_URL.length > 0;
}

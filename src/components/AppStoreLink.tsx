import {
  getAppStoreHref,
  hasDirectAppStoreListing,
  APP_SHORT_NAME,
} from "@/lib/siteConfig";

type AppStoreLinkProps = {
  label?: string;
  className?: string;
  showPendingNote?: boolean;
};

export default function AppStoreLink({
  label,
  className = "inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition",
  showPendingNote = false,
}: AppStoreLinkProps) {
  const isDirectListing = hasDirectAppStoreListing();
  const buttonLabel =
    label || (isDirectListing ? "Download on the App Store" : "Find on the App Store");

  return (
    <div className="text-center">
      <a
        href={getAppStoreHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {buttonLabel}
      </a>
      {showPendingNote && !isDirectListing ? (
        <p className="text-sm text-gray-500 mt-4 max-w-md mx-auto">
          {APP_SHORT_NAME} is on the App Store. Search for{" "}
          <strong>Home Cents Family Budgeting</strong> if the button does not open
          the listing yet.
        </p>
      ) : null}
    </div>
  );
}

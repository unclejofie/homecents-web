import Link from "next/link";
import AppStoreLink from "@/components/AppStoreLink";

const plans = [
  {
    name: "Free",
    price: "$0",
    detail: "Local budgeting on one device, 5 receipt scans (lifetime)",
  },
  {
    name: "Basic",
    price: "$1.99/mo",
    detail: "Cloud sync, multi-device access, 5 receipt scans per month",
  },
  {
    name: "Premium",
    price: "$5.99/mo",
    detail: "Family sharing, unlimited receipt scans, invite household members",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-amber-800 mb-4">Home Cents</h1>
        <p className="text-xl text-amber-700 mb-2">Family Budgeting Made Simple</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your spending, set budgets for every category, and share your finances
          with your household. Available on iPhone and iPad.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Track Income</h3>
          <p className="text-gray-600 text-sm">
            Log your income sources and see exactly how much you have to budget each month.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Budget Categories</h3>
          <p className="text-gray-600 text-sm">
            Create custom categories and subcategories. Set budgets and track spending in real-time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Family Sharing</h3>
          <p className="text-gray-600 text-sm">
            Premium members can invite family to a shared household budget that stays in sync.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl border border-amber-100 p-5 text-center"
            >
              <h3 className="text-lg font-semibold text-amber-800">{plan.name}</h3>
              <p className="text-2xl font-bold text-amber-700 my-2">{plan.price}</p>
              <p className="text-gray-600 text-sm">{plan.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Annual plans available in the app. Subscriptions are managed through your Apple ID.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm text-center mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Get the App</h2>
        <p className="text-gray-600 mb-6">
          Download Home Cents on the App Store and start budgeting smarter today.
        </p>
        <AppStoreLink showPendingNote />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold text-amber-800 mb-4">Need Help?</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="/reset-password"
            className="text-amber-600 hover:text-amber-800 underline"
          >
            Reset Your Password
          </Link>
          <Link
            href="/support"
            className="text-amber-600 hover:text-amber-800 underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-amber-800 mb-4">
          Home Cents
        </h1>
        <p className="text-xl text-amber-700 mb-2">
          Family Budgeting Made Simple
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your spending, set budgets for every category, and share your finances
          with your household. Available on iOS.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Track Income</h3>
          <p className="text-gray-600 text-sm">
            Log your income sources and see exactly how much you have to budget each month.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Budget Categories</h3>
          <p className="text-gray-600 text-sm">
            Create custom categories and subcategories. Set budgets and track spending in real-time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Family Sharing</h3>
          <p className="text-gray-600 text-sm">
            Invite family members to your household. Everyone stays on the same page with shared budgets.
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Get the App</h2>
        <p className="text-gray-600 mb-6">
          Download Home Cents on the App Store and start budgeting smarter today.
        </p>
        <a
          href="https://apps.apple.com/app/home-cents"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
        >
          Download on App Store
        </a>
      </div>

      {/* Quick Links */}
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

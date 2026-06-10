import AppStoreLink from "@/components/AppStoreLink";

export default function Welcome() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">
          Welcome to Home Cents!
        </h1>
        <p className="text-gray-600">
          Your email has been verified. You&apos;re all set to start budgeting!
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-amber-800 mb-6">Getting Started</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">1. Add Your Income</h3>
            <p className="text-gray-600 text-sm">
              Tap the income area at the top of the home screen to add your monthly income
              sources. This helps you see how much you have available to budget.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">2. Set Up Your Categories</h3>
            <p className="text-gray-600 text-sm">
              We&apos;ve created some default categories for you, but feel free to customize
              them. Tap the + button to add new categories, or long-press to edit existing ones.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">3. Set Your Budgets</h3>
            <p className="text-gray-600 text-sm">
              Tap on any subcategory to set a budget amount. Try to allocate all your income
              across your categories — that&apos;s zero-based budgeting.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">4. Log Your Expenses</h3>
            <p className="text-gray-600 text-sm">
              Use the Log Expense button to record spending as it happens. You can also scan
              receipts to quickly add multiple items.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">5. Invite Your Family</h3>
            <p className="text-gray-600 text-sm">
              Premium members can go to Settings → Invite Someone to add family members.
              Everyone can view and update the shared budget in real-time.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-100 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-semibold text-amber-800 mb-4">Pro Tips</h2>
        <ul className="space-y-3 text-amber-900">
          <li>Check your budget daily — it only takes 30 seconds.</li>
          <li>Log expenses right when they happen so you don&apos;t forget.</li>
          <li>Use the month selector to view past months and track progress.</li>
          <li>Collapse categories you don&apos;t need to see by tapping on them.</li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Ready to start? Download Home Cents and sign in with the email you just verified.
        </p>
        <AppStoreLink label="Get Home Cents" showPendingNote />
      </div>
    </div>
  );
}

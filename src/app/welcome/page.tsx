export default function Welcome() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Welcome Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-amber-800 mb-4">
          Welcome to Home Cents!
        </h1>
        <p className="text-gray-600">
          Your email has been verified. You're all set to start budgeting!
        </p>
      </div>

      {/* Getting Started Tips */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-amber-800 mb-6">Getting Started</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="text-2xl">1️⃣</div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Add Your Income</h3>
              <p className="text-gray-600 text-sm">
                Tap the income area at the top of the home screen to add your monthly income sources. This helps you see how much you have available to budget.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl">2️⃣</div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Set Up Your Categories</h3>
              <p className="text-gray-600 text-sm">
                We've created some default categories for you, but feel free to customize them! Tap the + button to add new categories, or long-press to edit existing ones.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl">3️⃣</div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Set Your Budgets</h3>
              <p className="text-gray-600 text-sm">
                Tap on any subcategory to set a budget amount. Try to allocate all your income across your categories - that's zero-based budgeting!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl">4️⃣</div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Log Your Expenses</h3>
              <p className="text-gray-600 text-sm">
                Use the "Log Expense" button to record spending as it happens. You can also scan receipts to quickly add multiple items!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl">5️⃣</div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Invite Your Family</h3>
              <p className="text-gray-600 text-sm">
                Go to Settings → Invite Someone to add family members to your household. Everyone can view and update the shared budget in real-time!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-amber-100 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-semibold text-amber-800 mb-4">💡 Pro Tips</h2>
        <ul className="space-y-3 text-amber-900">
          <li className="flex gap-2">
            <span>•</span>
            <span>Check your budget daily - it only takes 30 seconds!</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Log expenses right when they happen so you don't forget</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Use the month selector to view past months and track progress</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Collapse categories you don't need to see by tapping on them</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Ready to start? Open the Home Cents app and sign in!
        </p>
        <a
          href="https://apps.apple.com/app/home-cents"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
        >
          Open Home Cents
        </a>
      </div>
    </div>
  );
}

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-amber-800 mb-8">Privacy Policy</h1>

        <div className="prose prose-amber max-w-none text-gray-600">
          <p className="mb-4">
            <strong>Last updated:</strong> January 2026
          </p>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            Home Cents collects the following information to provide our budgeting service:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Email address (for account creation and authentication)</li>
            <li>Budget data you enter (income, expenses, categories)</li>
            <li>Household membership information</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide and maintain the Home Cents service</li>
            <li>Sync your data across devices</li>
            <li>Enable household sharing features</li>
            <li>Send password reset emails when requested</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            Your data is encrypted in transit and at rest. We use Supabase, a secure cloud platform, to store your information. We implement appropriate security measures to protect against unauthorized access.
          </p>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Data Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties. Your financial data is never shared with advertisers or data brokers.
          </p>
          <p className="mb-4">
            Within your household, members you invite will be able to see shared budget data. You control who has access to your household.
          </p>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Data Retention</h2>
          <p className="mb-4">
            We retain your data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days.
          </p>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of your data</li>
            <li>Request deletion of your account</li>
            <li>Export your data</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            <a href="mailto:support@homecentsbudget.app" className="text-amber-600 underline">
              support@homecentsbudget.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

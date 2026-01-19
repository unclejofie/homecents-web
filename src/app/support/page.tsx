import Link from "next/link";

export default function Support() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">
          Support
        </h1>
        <p className="text-gray-600">
          We're here to help! Find answers to common questions or get in touch.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-amber-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have a question, found a bug, or want to request a feature? Send us an email and we'll get back to you as soon as possible.
        </p>
        <a
          href="mailto:support@homecentsbudget.app"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
        >
          Email Support
        </a>
        <p className="text-sm text-gray-500 mt-4">
          support@homecentsbudget.app
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-amber-800 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">How do I reset my password?</h3>
            <p className="text-gray-600 text-sm">
              Visit our{" "}
              <Link href="/reset-password" className="text-amber-600 underline">
                password reset page
              </Link>{" "}
              and enter your email address. We'll send you a link to create a new password.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">How do I invite family members to my household?</h3>
            <p className="text-gray-600 text-sm">
              In the app, go to Settings and tap "Invite Someone". Enter their email address and they'll receive an invitation to join your household.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Is my financial data secure?</h3>
            <p className="text-gray-600 text-sm">
              Yes! Your data is encrypted and stored securely. We never share your financial information with third parties.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Can I use Home Cents on multiple devices?</h3>
            <p className="text-gray-600 text-sm">
              Yes! Your data syncs across all your devices automatically. Just sign in with the same account.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">How do I delete my account?</h3>
            <p className="text-gray-600 text-sm">
              Please email us at support@homecentsbudget.app and we'll help you delete your account and all associated data.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-amber-800 mb-4">Quick Links</h2>
        <div className="flex flex-col gap-3">
          <Link href="/reset-password" className="text-amber-600 hover:text-amber-800 underline">
            Reset Password
          </Link>
          <Link href="/privacy" className="text-amber-600 hover:text-amber-800 underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-amber-600 hover:text-amber-800 underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}

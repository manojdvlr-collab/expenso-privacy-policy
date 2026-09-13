import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <span className="logo-icon">💰</span>
          <h1 className="logo-text">Expenso</h1>
        </div>
        <p className="header-sub">Privacy Policy</p>
      </header>

      {/* Main Content */}
      <main className="content">
        <p className="effective-date">Effective Date: September 13, 2026</p>

        {/* 1. Introduction */}
        <section className="section">
          <h2 className="section-title">1. Introduction</h2>
          <p>
            Expenso is a personal expense tracker app designed to help you manage your
            finances — tracking expenses and income, monitoring budgets, splitting trip
            costs, and managing upcoming bills.
          </p>
          <p>
            This Privacy Policy explains what information we collect when you use
            Expenso, how we use it, and your rights regarding that information. By using
            Expenso, you agree to the practices described in this policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="section">
          <h2 className="section-title">2. Information We Collect</h2>

          <h3 className="subsection-title">Information You Enter</h3>
          <p>All financial and personal data you enter directly into the app, including:</p>
          <ul>
            <li>Expense and income transactions (amount, category, date, note, payment method)</li>
            <li>Custom categories you create</li>
            <li>Credit card names and last 4 digits (we never collect or store full card numbers)</li>
            <li>Upcoming bills and reminders</li>
            <li>Trip-splitting data (trip name, destination, member names, shared expenses)</li>
            <li>App preferences such as your selected theme and billing cycle day</li>
          </ul>

          <h3 className="subsection-title">Google Account Information (via Google Sign-In)</h3>
          <p>
            When you sign in with Google, we receive your name, email address, and Google
            profile photo. This information is used solely to identify and authenticate your
            account — we do not use it for any other purpose.
          </p>

          <h3 className="subsection-title">Ad-Related Data (via Google AdMob)</h3>
          <p>
            Expenso displays interstitial advertisements through Google AdMob. AdMob may
            collect device identifiers and usage data to serve personalized or
            non-personalized ads. We do not directly collect, store, or process any
            advertising data ourselves.
          </p>

          <h3 className="subsection-title">On-Device Usage Data</h3>
          <p>
            We store two counters locally on your device via AsyncStorage: the number of
            times you have opened the app and an ad frequency counter. These values are
            used only to control how often ads are shown and are <strong>never</strong> transmitted
            to our servers.
          </p>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="section">
          <h2 className="section-title">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Power all core app features — tracking expenses and income, managing
              budgets, splitting trip costs, and managing upcoming bills
            </li>
            <li>
              Sync your data across devices via Google Cloud Firestore, stored securely
              under your unique user ID
            </li>
            <li>
              Display interstitial advertisements through Google AdMob (shown at most
              once per day, and not on the very first launch)
            </li>
          </ul>
          <p className="highlight-box">
            We do <strong>not</strong> sell, rent, or trade your personal data to any third parties.
          </p>
        </section>

        {/* 4. Third-Party Services */}
        <section className="section">
          <h2 className="section-title">4. Third-Party Services</h2>
          <p>
            Expenso integrates the following third-party services. Each service operates
            under its own privacy policy:
          </p>

          <div className="service-card">
            <h3 className="service-name">Google Sign-In</h3>
            <p>
              Used for account authentication. We receive only your name, email, and
              profile photo at sign-in.
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="policy-link"
            >
              Google Privacy Policy →
            </a>
          </div>

          <div className="service-card">
            <h3 className="service-name">Firebase Authentication &amp; Cloud Firestore (Google)</h3>
            <p>
              Used to authenticate users and sync app data (expenses, budgets, trips,
              bills) to the cloud. Your data is stored under your unique Firebase user ID
              and protected by Firestore security rules.
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="policy-link"
            >
              Google Privacy Policy →
            </a>
          </div>

          <div className="service-card">
            <h3 className="service-name">Google AdMob</h3>
            <p>
              Used to display interstitial ads. AdMob may use device identifiers to serve
              personalized or non-personalized advertisements based on your device
              settings.
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="policy-link"
            >
              Google Privacy Policy →
            </a>
          </div>

          <p className="note">
            We do not integrate any other analytics, crash reporting, or third-party
            tracking services.
          </p>
        </section>

        {/* 5. Data Storage & Security */}
        <section className="section">
          <h2 className="section-title">5. Data Storage &amp; Security</h2>
          <ul>
            <li>
              Your financial data is stored locally on your device using AsyncStorage and
              synced to Google Cloud Firestore under your unique user ID.
            </li>
            <li>
              We use Firebase's server-side security rules to ensure only you can read
              or write your own data — no other user or external party can access it.
            </li>
            <li>
              We do not own or operate any independent servers. All cloud storage is
              handled entirely by Google's Firebase infrastructure.
            </li>
          </ul>
        </section>

        {/* 6. Account Deletion */}
        <section className="section" id="account-deletion">
          <h2 className="section-title">6. Account Deletion</h2>
          <p>
            You can permanently delete your Expenso account and all associated data
            directly from within the app.
          </p>

          <h3 className="subsection-title">How to Delete Your Account (In-App)</h3>
          <div className="deletion-steps-box">
            <p className="deletion-path">
              <strong>Settings → Danger Zone → Delete Account</strong>
            </p>
            <p>Tapping <strong>"Delete Account"</strong> will:</p>
            <ol className="deletion-steps-list">
              <li>Show a confirmation dialog explaining the action is permanent</li>
              <li>Ask you to re-verify your identity via Google Sign-In</li>
              <li>Permanently delete all cloud data stored in Firebase Firestore</li>
              <li>Clear all locally stored data on the device</li>
              <li>Delete the Firebase Authentication account</li>
            </ol>
          </div>

          <h3 className="subsection-title">What Data Is Deleted</h3>
          <p>All of the following is permanently removed upon account deletion:</p>
          <ul>
            <li>All expense and income transactions</li>
            <li>All custom categories</li>
            <li>All credit card records (name, last 4 digits, limit)</li>
            <li>All upcoming bills</li>
            <li>All trip-splitting data (trips, members, expenses, settlements)</li>
            <li>App preferences and settings</li>
            <li>The Firebase Authentication account linked to your Google account</li>
            <li>All cloud-synced data stored in Firebase Firestore</li>
          </ul>

          <h3 className="subsection-title">Data Retention</h3>
          <p className="highlight-box">
            We do <strong>not</strong> retain any personal data after account deletion.
            All data is permanently and immediately removed from Firebase Firestore and
            your device. This action is <strong>irreversible</strong>.
          </p>

          <h3 className="subsection-title">Can't Access the App?</h3>
          <p>
            If you are unable to access the app to delete your account, you can request
            deletion by emailing us at{' '}
            <a href="mailto:manojdvlr@gmail.com" className="policy-link">
              manojdvlr@gmail.com
            </a>
            . Include the email address associated with your Google account. We will
            process your request within <strong>7 days</strong>.
          </p>
        </section>

        {/* 7. Data Deletion */}
        <section className="section">
          <h2 className="section-title">7. Data Deletion</h2>
          <p>
            You have full control over your data:
          </p>
          <ul>
            <li>
              <strong>Clear local data:</strong> Go to <span className="inline-path">Settings → Clear All Data</span> inside
              the app to remove all locally stored data from your device. Note that this
              action clears only on-device data and does not automatically delete your
              data from Firestore or your Google account.
            </li>
            <li>
              <strong>Delete cloud data:</strong> To request complete deletion of your
              account data from our Firestore database, please contact us at the email
              address listed in the Contact section below. We will process your request
              promptly.
            </li>
          </ul>
        </section>

        {/* 8. Children's Privacy */}
        <section className="section">
          <h2 className="section-title">8. Children's Privacy</h2>
          <p>
            Expenso is not directed to children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you believe a child
            has provided us with personal information without parental consent, please
            contact us immediately so we can delete it.
          </p>
        </section>

        {/* 9. Changes to This Policy */}
        <section className="section">
          <h2 className="section-title">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time as the app evolves. When
            we do, we will post the revised policy on this page with an updated effective
            date. Continued use of Expenso after any changes constitutes your acceptance
            of the updated policy. We encourage you to review this page periodically.
          </p>
        </section>

        {/* 10. Contact Us */}
        <section className="section">
          <h2 className="section-title">10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy
            Policy or your data, please contact us:
          </p>
          <div className="contact-box">
            <p><strong>App:</strong> Expenso — Expense Tracker</p>
            <p><strong>Package:</strong> com.expenso.expensetracker</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:manojdvlr@gmail.com" className="policy-link">
                manojdvlr@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Expenso. All rights reserved.</p>
        <p className="footer-sub">Last updated: September 13, 2026</p>
        <p className="footer-sub">
          <a href="#account-deletion" className="footer-link">Account Deletion</a>
        </p>
      </footer>
    </div>
  );
};

export default App;

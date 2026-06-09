export default function Privacy() {
  return (
    <div className="bg-white text-[#111111] font-[family-name:var(--font-plex)] selection:bg-[#FFB703] selection:text-[#111111]">
      <section className="bg-white border-b border-gray-200 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-[#111111]">
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <p><strong>Last Updated: June 2026</strong></p>
            <p>
              At Giriraaj Textiles, we take your privacy and the security of your corporate data seriously. This Privacy Policy describes how we collect, use, and handle your information when you use our website or contact us for business inquiries.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you request a sample spool, fill out a contact form, or communicate with our sales team. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Corporate identifiers (Company name, role)</li>
              <li>Contact details (Email address, phone number, shipping address)</li>
              <li>Technical requirements (Machine types, production volume)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information exclusively for B2B fulfillment and communication. Specifically, to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process and ship your sample spool requests.</li>
              <li>Provide technical support regarding machine compatibility.</li>
              <li>Send critical updates regarding supply chain or product specifications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Sharing</h2>
            <p>
              We do not sell your data. We only share information with trusted third-party logistics (3PL) partners strictly for the purpose of shipping products to your facility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our administrative office at privacy@giriraajtextiles.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

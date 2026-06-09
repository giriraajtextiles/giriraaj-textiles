"use client";

export default function Contact() {
  return (
    <div className="bg-white text-[#111111] font-[family-name:var(--font-plex)] selection:bg-[#FFB703] selection:text-[#111111]">
      <section className="bg-white border-b border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111]">
            Contact Giriraaj Textiles
          </h1>
          <p className="text-lg font-medium max-w-2xl text-gray-600 mb-12">
            Reach out to our industrial sales team for bulk ordering, custom denier specifications, or technical machine compatibility questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="border-l-4 border-[#FFB703] pl-6">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Corporate Headquarters & Plant</h3>
                 <p className="font-medium text-lg leading-relaxed text-gray-900">
                    Giriraaj Textiles Pvt. Ltd.<br/>
                    Plot No. 45, Industrial Area<br/>
                    Sector 3, Pithampur<br/>
                    Madhya Pradesh, India - 454774
                 </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Direct Sales Inquiry</h3>
                 <p className="font-medium text-lg text-gray-900">
                    +91 98765 43210
                 </p>
                 <p className="font-medium text-lg text-[#FFB703] hover:underline cursor-pointer">
                    sales@giriraajtextiles.com
                 </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F8F8F8] border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" className="w-full border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:border-[#FFB703] transition-all" />
                  </div>
                  <div>
                    <label className="block font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" className="w-full border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:border-[#FFB703] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Company Email</label>
                  <input type="email" className="w-full border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:border-[#FFB703] transition-all" />
                </div>
                <div>
                  <label className="block font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea rows={4} className="w-full border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:border-[#FFB703] transition-all" placeholder="How can we help your production line?"></textarea>
                </div>
                <button 
                  className="w-full font-bold text-base uppercase tracking-wide py-4 mt-2 bg-[#111111] text-white hover:bg-[#FFB703] hover:text-[#111111] transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

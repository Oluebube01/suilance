export function TrustedBy() {
    return (
      <div className="py-8 border-t border-b border-white/10">
        <div className="container">
          <p className="text-center text-sm text-gray-400 mb-4">Trusted by</p>
          <div className="flex justify-center items-center gap-8 opacity-50 grayscale">
            {["Meta", "Google", "Netflix", "P&G", "PayPal"].map((company) => (
              <div key={company} className="text-xl font-bold text-white">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  
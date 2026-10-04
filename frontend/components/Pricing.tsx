import React, { useState, useEffect } from 'react';
import { pricingData } from '../data';

export const Pricing: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [btcPrice, setBtcPrice] = useState<number>(65000);
  const [selectedPkg, setSelectedPkg] = useState<typeof pricingData[0] | null>(null);

  const lnurl = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhqmm5v93xcetnd9nkuctvxgcsm55zyn";

  // Fetch current BTC price to calculate exact Sats
  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        if (data?.bpi?.USD?.rate_float) {
          setBtcPrice(data.bpi.USD.rate_float);
        }
      })
      .catch(err => console.warn('CoinDesk API fallback rate active', err));
  }, []);

  const getSatsAmount = (usdPriceStr: string) => {
    const usd = parseFloat(usdPriceStr.replace('$', '').replace(',', ''));
    return Math.round((usd / btcPrice) * 100000000);
  };

  const handleCopyLnurl = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(lnurl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = lnurl;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Copy fallback', err);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] border-t border-[#E4E4E7] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-2">Sound Money & Card Rails</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09090B]">
            Scale your content, not your headcount.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            Hire precision AI automation for a fraction of agency cost. Instant Bitcoin Lightning settlement available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col justify-between rounded-2xl p-8 bg-white border ${
                pkg.isPopular 
                  ? 'border-2 border-[#4A6FC3] shadow-lg scale-105 z-10' 
                  : 'border-[#E4E4E7] shadow-sm'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-0 right-0 mx-auto w-36 rounded-full bg-[#4A6FC3] px-3 py-0.5 text-center text-[10px] font-extrabold uppercase tracking-wider text-white">
                  MOST POPULAR
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-bold text-[#09090B]">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-[#52525B] h-10">
                  {pkg.description}
                </p>
                <div className="mt-4 mb-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-extrabold text-[#09090B]">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-semibold text-[#71717A]">
                    {pkg.interval}
                  </span>
                </div>

                <ul className="space-y-3 text-xs font-medium text-[#52525B] mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#059669] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedPkg(pkg)}
                className={`w-full py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  pkg.isPopular
                    ? 'bg-[#E55252] text-white hover:bg-[#FF6E6E] shadow-sm'
                    : 'bg-white text-[#09090B] border border-[#E4E4E7] hover:bg-[#F4F4F5]'
                }`}
              >
                PAY WITH LIGHTNING
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#09090B]/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-[#E4E4E7]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7]">
              <h3 className="text-sm font-bold text-[#09090B] uppercase tracking-wider">
                Bitcoin Lightning Payment
              </h3>
              <button 
                onClick={() => setSelectedPkg(null)}
                className="text-xs font-bold uppercase text-[#71717A] hover:text-[#09090B] px-2 py-1"
              >
                CLOSE
              </button>
            </div>
            
            <div className="p-6 text-center">
              <p className="text-xs text-[#52525B] mb-5">
                Scan this QR code with your Lightning wallet to subscribe to the <strong className="text-[#09090B]">{selectedPkg.name}</strong> plan.
              </p>

              <div className="bg-[#F4F4F5] p-4 rounded-xl border border-[#E4E4E7] inline-block mb-5">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=lightning:${lnurl}`} 
                  alt="Lightning Invoice QR Code" 
                  className="w-44 h-44 mx-auto rounded-lg"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-left">
                <div className="text-xs font-semibold text-[#D97706] mb-1">Amount to send:</div>
                <div className="text-2xl font-extrabold text-[#09090B]">
                  {getSatsAmount(selectedPkg.price)?.toLocaleString()} <span className="text-sm font-bold text-[#D97706]">Sats</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1">
                  ≈ {selectedPkg.price} USD (Live Rate: ${Math.round(btcPrice).toLocaleString()} / BTC)
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleCopyLnurl}
                  className="w-full py-3 px-4 rounded-lg bg-[#E55252] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF6E6E] transition-all"
                >
                  {copied ? "LNURL COPIED!" : "COPY LNURL INVOICE"}
                </button>
                <button
                  onClick={() => setSelectedPkg(null)}
                  className="w-full py-2.5 px-4 rounded-lg bg-white border border-[#E4E4E7] text-xs font-bold uppercase tracking-wider text-[#09090B] hover:bg-[#F4F4F5]"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

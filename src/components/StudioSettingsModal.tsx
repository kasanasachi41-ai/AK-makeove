import React, { useState, useEffect } from 'react';
import { X, Settings, Phone, MapPin, Instagram, Clock, Check, Trash2, Calendar, User } from 'lucide-react';
import { StudioConfig } from '../data/makeoverData';

interface StudioSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: StudioConfig;
  onSaveConfig: (updated: StudioConfig) => void;
}

export const StudioSettingsModal: React.FC<StudioSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig
}) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'bookings' | 'download'>('contact');
  const [phone, setPhone] = useState(config.phone);
  const [whatsapp, setWhatsapp] = useState(config.whatsappNumber);
  const [address, setAddress] = useState(config.address);
  const [cityArea, setCityArea] = useState(config.cityArea);
  const [instagram, setInstagram] = useState(config.instagramHandle);
  const [hours, setHours] = useState(config.businessHours);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setPhone(config.phone);
      setWhatsapp(config.whatsappNumber);
      setAddress(config.address);
      setCityArea(config.cityArea);
      setInstagram(config.instagramHandle);
      setHours(config.businessHours);
    }
  }, [isOpen, config]);

  // Load bookings from localStorage
  const getBookings = () => {
    try {
      return JSON.parse(localStorage.getItem('ak_makeover_bookings') || '[]');
    } catch {
      return [];
    }
  };

  const [bookings, setBookings] = useState(getBookings);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: StudioConfig = {
      ...config,
      phone: phone.trim(),
      whatsappNumber: whatsapp.trim(),
      address: address.trim(),
      cityArea: cityArea.trim(),
      instagramHandle: instagram.trim(),
      businessHours: hours.trim()
    };
    onSaveConfig(updated);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const clearBookings = () => {
    if (window.confirm('Clear all logged appointment requests?')) {
      localStorage.removeItem('ak_makeover_bookings');
      setBookings([]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#161113] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-[#DFC3C7] dark:border-[#3E272C] shadow-2xl text-[#1E1919] dark:text-[#FDF1F3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#FAF2F4] dark:bg-[#1F1619] border-b border-[#ECCECE] dark:border-[#382327] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#B76E79]" />
            <h3 className="font-serif text-lg font-bold text-[#2A181B] dark:text-[#FDEEF0]">
              The AK Makeover Studio Manager
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#7A5A5F] dark:text-[#A99396] hover:text-[#2A181B] dark:hover:text-white p-1.5 rounded-lg hover:bg-white dark:hover:bg-[#281A1F]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#ECCECE] dark:border-[#382327] bg-[#FAF7F5] dark:bg-[#181114] px-6 pt-2">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'border-[#B76E79] text-[#B76E79]'
                : 'border-transparent text-[#7A5A5F] dark:text-[#A99396] hover:text-[#2A181B] dark:hover:text-white'
            }`}
          >
            Contact & Studio Details
          </button>
          <button
            onClick={() => {
              setBookings(getBookings());
              setActiveTab('bookings');
            }}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'bookings'
                ? 'border-[#B76E79] text-[#B76E79]'
                : 'border-transparent text-[#7A5A5F] dark:text-[#A99396] hover:text-[#2A181B] dark:hover:text-white'
            }`}
          >
            <span>Bookings Received</span>
            <span className="bg-[#B76E79] text-white text-[10px] px-1.5 py-0.2 rounded-full">
              {bookings.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('download')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'download'
                ? 'border-[#B76E79] text-[#B76E79]'
                : 'border-transparent text-[#7A5A5F] dark:text-[#A99396] hover:text-[#2A181B] dark:hover:text-white'
            }`}
          >
            <span>💻 Download VS Code ZIP</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'contact' ? (
            <form onSubmit={handleSave} className="space-y-4">
              <p className="text-xs text-[#7A5A5F] dark:text-[#BA9E9E]">
                Update your studio contact information anytime. All changes reflect live across the website, footer, and WhatsApp booking triggers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#E8D4D6] mb-1">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1C1417] text-[#2A181B] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#E8D4D6] mb-1">
                    Calling Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1C1417] text-[#2A181B] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#E8D4D6] mb-1">
                  Salon Address (Street & Plaza)
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1C1417] text-[#2A181B] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#E8D4D6] mb-1">
                  City / Locality
                </label>
                <input
                  type="text"
                  value={cityArea}
                  onChange={(e) => setCityArea(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1C1417] text-[#2A181B] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#E8D4D6] mb-1">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1C1417] text-[#2A181B] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#E8D4D6] mb-1">
                    Salon Hours
                  </label>
                  <input
                    type="text"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1C1417] text-[#2A181B] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#ECCECE] dark:border-[#382327]">
                {saveSuccess ? (
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Updated successfully!
                  </span>
                ) : <span />}

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#B76E79] hover:bg-[#9C4D58] rounded-xl transition-colors cursor-pointer shadow-md shadow-[#B76E79]/20"
                >
                  Save Studio Details
                </button>
              </div>
            </form>
          ) : activeTab === 'bookings' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#7A5A5F] dark:text-[#BA9E9E]">
                  Inquiries submitted through the website appointment form:
                </p>
                {bookings.length > 0 && (
                  <button
                    onClick={clearBookings}
                    className="text-xs text-rose-600 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                )}
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#7A5A5F] dark:text-[#A99396] bg-[#FAF5F6] dark:bg-[#181114] rounded-2xl border border-dashed border-[#ECCECE] dark:border-[#382327]">
                  No appointments logged yet. Try submitting the booking form!
                </div>
              ) : (
                <div className="space-y-3">
                  {bookings.map((b: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FAF0F2] dark:bg-[#1C1417] border border-[#ECCECE] dark:border-[#382327] space-y-1.5 text-xs text-[#4E3539] dark:text-[#E8D4D6]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#2A181B] dark:text-white flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#B76E79]" /> {b.customerName}
                        </span>
                        <span className="font-mono text-[10px] text-[#7A5A5F] dark:text-[#A99396]">
                          {b.refCode}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#8C4650] dark:text-[#EAA8B4] font-medium">
                        Service: {b.selectedService} · Phone: +91 {b.contactNumber}
                      </div>
                      <div className="text-[11px] text-[#63484C] dark:text-[#BA9E9E] flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#B76E79]" /> {b.appointmentDate} at {b.appointmentTime}
                      </div>
                      {b.additionalMessage && (
                        <p className="text-[11px] text-[#6E4E54] dark:text-[#D1B6B9] italic pt-1 border-t border-[#ECCECE]/60 dark:border-[#382327]/60">
                          "{b.additionalMessage}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF0F2] via-[#F7E5E8] to-[#F1D6DB] dark:from-[#24171B] dark:via-[#291A20] dark:to-[#311C24] border border-[#E8C2C7] dark:border-[#4A2D34] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2A181B] dark:text-white">
                      Download Full Project (.ZIP)
                    </h4>
                    <p className="text-xs text-[#7A5A5F] dark:text-[#C5ADB0] mt-1">
                      Contains the complete website source code, all bridal & hairstyling images, custom fonts, and Vite/React setup.
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 text-xs font-semibold bg-[#B76E79]/20 text-[#8F3C47] dark:text-[#F3CDD2] rounded-full border border-[#B76E79]/30">
                    5.4 MB ZIP
                  </span>
                </div>

                <a
                  href="/the-ak-makeover-source.zip"
                  download="the-ak-makeover-source.zip"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#B76E79] via-[#C5838B] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] rounded-xl shadow-md transition-all cursor-pointer text-center"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Click Here to Download the-ak-makeover.zip
                </a>
              </div>

              {/* Running in VS Code */}
              <div className="space-y-3">
                <h5 className="font-bold text-[#2A181B] dark:text-white text-xs uppercase tracking-wider">
                  How to run directly in VS Code:
                </h5>

                <div className="space-y-2.5 text-xs text-[#4E3539] dark:text-[#D1B6B9]">
                  <div className="p-3 rounded-xl bg-[#FAF5F6] dark:bg-[#181114] border border-[#ECCECE] dark:border-[#382327]">
                    <strong className="text-[#B76E79]">Step 1:</strong> Extract the downloaded <code className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono">the-ak-makeover-source.zip</code> archive.
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5F6] dark:bg-[#181114] border border-[#ECCECE] dark:border-[#382327]">
                    <strong className="text-[#B76E79]">Step 2:</strong> Open VS Code, select <strong>File &gt; Open Folder</strong> and choose the extracted folder.
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5F6] dark:bg-[#181114] border border-[#ECCECE] dark:border-[#382327] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span><strong className="text-[#B76E79]">Step 3:</strong> Open terminal (<code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono">Ctrl+`</code>) and install:</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('npm install');
                          setCopiedCmd('install');
                          setTimeout(() => setCopiedCmd(null), 2000);
                        }}
                        className="text-[11px] text-[#B76E79] hover:underline font-bold cursor-pointer"
                      >
                        {copiedCmd === 'install' ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="p-2.5 rounded-lg bg-[#2A181B] text-[#F3CDD2] font-mono text-[11px] overflow-x-auto">npm install</pre>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5F6] dark:bg-[#181114] border border-[#ECCECE] dark:border-[#382327] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span><strong className="text-[#B76E79]">Step 4:</strong> Launch local server:</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('npm run dev');
                          setCopiedCmd('dev');
                          setTimeout(() => setCopiedCmd(null), 2000);
                        }}
                        className="text-[11px] text-[#B76E79] hover:underline font-bold cursor-pointer"
                      >
                        {copiedCmd === 'dev' ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="p-2.5 rounded-lg bg-[#2A181B] text-[#F3CDD2] font-mono text-[11px] overflow-x-auto">npm run dev</pre>
                    <p className="text-[11px] text-[#7A5A5F] dark:text-[#A99396] pt-1">
                      Your website will run at <strong className="text-[#B76E79]">http://localhost:3000</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

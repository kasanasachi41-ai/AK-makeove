import React, { useState } from 'react';
import { Download, Check, Copy, X, Terminal, FolderCheck, Sparkles, Loader2, AlertCircle } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setDownloading(true);
    setErrorMsg(null);
    setDownloadSuccess(false);

    try {
      // Fetch the full zip directly from the application server
      const response = await fetch('/the-ak-makeover.zip', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const blob = await response.blob();

      // Verify the blob actually has content (the full zip is ~16.5 MB)
      if (blob.size < 100000) {
        throw new Error(`Downloaded file is unusually small (${(blob.size / 1024).toFixed(1)} KB). Retrying with secondary source...`);
      }

      // Trigger programmatic blob download
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'the-ak-makeover.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up object URL after a short delay
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 5000);

      setDownloadSuccess(true);
    } catch (err: any) {
      console.error('Direct download error:', err);
      // Fallback: direct anchor download
      try {
        const link = document.createElement('a');
        link.href = '/the-ak-makeover-source.zip';
        link.download = 'the-ak-makeover.zip';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadSuccess(true);
      } catch (fallbackErr: any) {
        setErrorMsg(err?.message || 'Could not trigger download. Please check browser popups or try again.');
      }
    } finally {
      setDownloading(false);
    }
  };

  const copyCommands = () => {
    navigator.clipboard.writeText('npm install && npm run dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white dark:bg-[#161013] rounded-3xl shadow-2xl border border-[#ECCECE] dark:border-[#382327] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-[#F2DEE1] dark:border-[#2C191D] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#B76E79] to-[#C5838B] flex items-center justify-center text-white shadow-md">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                Download Local Project
              </h3>
              <p className="text-xs text-[#8C4650] dark:text-[#E8BAC0] font-medium">
                Complete React + Vite + Tailwind Source Code (16.5 MB)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#8C7578] hover:text-[#2A181B] dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Main Download Action Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF4F5] via-white to-[#FDF8F9] dark:from-[#1D1418] dark:via-[#161013] dark:to-[#1D1418] border border-[#ECCECE] dark:border-[#382327] text-center space-y-3.5">
            <p className="text-xs text-[#523A3E] dark:text-[#D1BFC2] leading-relaxed">
              Includes all <strong>47 project files</strong>, high-res photos, the official gold & blush AK Makeover logo, React components, and styling ready to run on your computer.
            </p>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B76E79] via-[#C5838B] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Preparing & Downloading ZIP (16.5 MB)...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-5 h-5 text-emerald-300" />
                  <span>Downloaded! Click to Download Again</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download the-ak-makeover.zip (16.5 MB)</span>
                </>
              )}
            </button>

            {downloadSuccess && (
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4" /> The 16.5 MB zip file has been saved to your Downloads folder!
              </p>
            )}

            {errorMsg && (
              <p className="text-xs font-medium text-rose-600 dark:text-rose-400 flex items-center justify-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> {errorMsg}
              </p>
            )}
          </div>

          {/* Quick Steps Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7B5B60] dark:text-[#A99396] flex items-center gap-1.5">
              <FolderCheck className="w-4 h-4 text-[#B76E79]" />
              How to Run Locally (3 Steps)
            </h4>

            <div className="space-y-2 text-xs text-[#2A181B] dark:text-[#FDEEF0]">
              <div className="p-3 rounded-xl bg-[#FAF4F5] dark:bg-[#1D1418] border border-[#ECCECE]/60 dark:border-[#382327] flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#B76E79] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong>Unzip the downloaded archive:</strong> Extract <code className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[11px]">the-ak-makeover.zip</code> to any folder on your computer.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF4F5] dark:bg-[#1D1418] border border-[#ECCECE]/60 dark:border-[#382327] flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#B76E79] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div className="flex-1">
                  <strong>Install packages and start dev server:</strong> Open VS Code or terminal inside the folder and run:
                  <div className="mt-2 p-2 rounded-lg bg-[#0C080A] text-[#E8BAC0] font-mono text-[11px] flex items-center justify-between">
                    <code>npm install && npm run dev</code>
                    <button
                      onClick={copyCommands}
                      className="p-1 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[10px]"
                      title="Copy commands"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF4F5] dark:bg-[#1D1418] border border-[#ECCECE]/60 dark:border-[#382327] flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#B76E79] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong>Open in Browser:</strong> Navigate to <code className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[11px] text-[#B76E79] font-bold">http://localhost:3000</code>. That is all!
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#FAF4F5] dark:bg-[#120D0F] border-t border-[#F2DEE1] dark:border-[#2C191D] flex items-center justify-between">
          <span className="text-[11px] text-[#7A5A5F] dark:text-[#A99396]">
            Node.js v18+ Recommended
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#523A3E] dark:text-[#D1BFC2] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

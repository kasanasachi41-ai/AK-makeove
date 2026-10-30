import React, { useState } from 'react';
import { Star, Plus, Quote, X } from 'lucide-react';
import { INITIAL_TESTIMONIALS, Testimonial } from '../data/makeoverData';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('ak_makeover_reviews');
      return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
    } catch {
      return INITIAL_TESTIMONIALS;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newService, setNewService] = useState('Bridal Makeup');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      clientName: newName.trim(),
      serviceUsed: newService,
      eventDate: 'Verified Client',
      rating: newRating,
      comment: newComment.trim(),
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    localStorage.setItem('ak_makeover_reviews', JSON.stringify(updated));

    setNewName('');
    setNewComment('');
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F5] dark:bg-[#0D090B] relative border-b border-[#EED7DA]/40 dark:border-[#332024] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
              Customer Reviews
            </h2>

            <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4]">
              Honest testimonials and feedback from brides and clients who trusted The AK Makeover for their memorable moments.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#572B31] dark:text-[#E8BAC0] bg-white dark:bg-[#1A1215] hover:bg-[#FCEBED] dark:hover:bg-[#25171C] border border-[#DFC3C7] dark:border-[#3E272C] rounded-xl shadow-xs transition-colors cursor-pointer self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4 text-[#B76E79]" />
            <span>Add Client Review</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-[#161113] p-7 rounded-3xl border border-[#ECCECE] dark:border-[#382327] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'text-[#D4A373] fill-[#D4A373]'
                            : 'text-slate-200 dark:text-zinc-700'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#EAC4C8] dark:text-[#4A2D34]" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#4E3539] dark:text-[#D1BFC2] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 mt-6 border-t border-[#F5E6E8] dark:border-[#2C191D] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                    {rev.clientName}
                  </h4>
                  <p className="text-[11px] text-[#8C4650] dark:text-[#E8BAC0] font-medium">
                    {rev.serviceUsed}
                  </p>
                </div>
                <div className="text-[10px] text-[#7A5A5F] dark:text-[#B3999D] bg-[#FAF0F2] dark:bg-[#201519] px-2 py-0.5 rounded border border-[#ECCECE] dark:border-[#382327]">
                  {rev.eventDate}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on transparency */}
        <div className="mt-8 text-center text-xs text-[#7A5A5F] dark:text-[#A99396]">
          <span>✨ Studio Policy: Reviews can be edited or augmented by the studio owner to reflect verified Google and client testimonials.</span>
        </div>

      </div>

      {/* Add Review Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#161113] rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 border border-[#DFC3C7] dark:border-[#3E272C] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#F0D5D8] dark:border-[#362226] pb-3">
              <h3 className="font-serif text-xl font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                Add Client Testimonial
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#7A5A5F] dark:text-[#A99396] hover:text-[#2A181B] dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#C5B0B4] mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Ananya Mehra"
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#C5B0B4] mb-1">
                  Service Experienced
                </label>
                <select
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                >
                  <option value="Bridal HD Makeup">Bridal HD Makeup</option>
                  <option value="Party & Engagement Makeup">Party & Engagement Makeup</option>
                  <option value="Facial & Skin Care">Facial & Skin Care</option>
                  <option value="Pre-Bridal Package">Pre-Bridal Package</option>
                  <option value="Hairstyling & Saree Draping">Hairstyling & Saree Draping</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#C5B0B4] mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="cursor-pointer"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= newRating
                            ? 'text-[#D4A373] fill-[#D4A373]'
                            : 'text-slate-200 dark:text-zinc-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4E3539] dark:text-[#C5B0B4] mb-1">
                  Client Review
                </label>
                <textarea
                  required
                  rows={3}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write client experience details..."
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs text-[#7A5A5F] dark:text-[#A99396] hover:text-[#2A181B] dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#B76E79] hover:bg-[#9C4D58] rounded-xl shadow-xs transition-colors"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { TwitterIcon, LinkedinIcon, InstagramIcon, FacebookIcon, DevToIcon, BitcoinIcon } from './BrandIcons';
import { Post } from '../types';

export const Studio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compose' | 'drafts' | 'scheduled' | 'analytics'>('compose');
  const [inputText, setInputText] = useState(
    'Just launched high-throughput Bitcoin Lightning payment rails with instant settlement and zero chargebacks. Sovereign finance is here.'
  );
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    'linkedin',
    'twitter',
    'facebook',
    'instagram',
    'devto',
    'bitcoin',
  ]);
  const [selectedTone, setSelectedTone] = useState<'executive' | 'viral' | 'technical' | 'bitcoin'>('executive');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('altradits_posts');
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse posts', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('altradits_posts', JSON.stringify(posts));
  }, [posts]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.length > 1
          ? prev.filter((p) => p !== platform)
          : prev
        : [...prev, platform]
    );
  };

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeAttachedImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSavePost = (status: 'draft' | 'scheduled') => {
    if (!inputText.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      text: inputText,
      platforms: selectedPlatforms,
      status,
      createdAt: Date.now(),
      imageUrl: uploadedImage || undefined,
    };

    setPosts((prev) => [newPost, ...prev]);
    setActiveTab(status === 'draft' ? 'drafts' : 'scheduled');
  };

  const handleDeletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleLoadDraft = (post: Post) => {
    setInputText(post.text);
    setSelectedPlatforms(post.platforms);
    if (post.imageUrl) setUploadedImage(post.imageUrl);
    setActiveTab('compose');
  };

  const drafts = posts.filter((p) => p.status === 'draft');
  const scheduled = posts.filter((p) => p.status === 'scheduled');

  const optimizeCopy = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let optimized = inputText;
      if (selectedTone === 'executive') {
        optimized = `Strategic Infrastructure Milestone:\n\n${inputText}\n\nKey takeaways:\n• Zero counterparty risk with instant settlement\n• Scalable multi-rail distribution\n• Enterprise-grade operational uptime\n\n#Fintech #Leadership #Infrastructure`;
      } else if (selectedTone === 'viral') {
        optimized = `Stop relying on broken payment rails. ⚡\n\n${inputText}\n\nInstant. Trustless. Built to scale.\n\nRetweet if you believe in financial freedom.`;
      } else if (selectedTone === 'technical') {
        optimized = `Architecture Deep-Dive:\n\n${inputText}\n\nStack details:\n\`\`\`go\n// High-throughput settlement engine\nfunc ProcessSettlement(tx *Payment) error {\n    return lndClient.RouteInvoice(tx)\n}\n\`\`\`\nFull repo & telemetry in bio.`;
      } else if (selectedTone === 'bitcoin') {
        optimized = `Fix the money, fix the rails. ₿\n\n${inputText}\n\nStack sats, verify don't trust, and settle on Lightning.\n\n#Bitcoin #LightningNetwork #SoundMoney`;
      }
      setInputText(optimized);
      setIsGenerating(false);
    }, 600);
  };

  // Preview text helpers
  const getDisplayTitle = (text: string) => {
    if (!text.trim()) return 'Your Technical Article Title';
    const firstLine = text.split('\n')[0];
    return firstLine.length > 50 ? firstLine.substring(0, 50) + '...' : firstLine;
  };

  return (
    <section id="studio" className="py-20 px-4 sm:px-8 lg:px-12 w-full border-t border-[#E4E4E7] bg-white relative">
      <div id="dashboard" className="absolute -top-24 left-0"></div>
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-1">
              Interactive SaaS Engine
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09090B] tracking-tight">
              Altradits Studio Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-1.5 bg-[#F4F4F5] p-1.5 rounded-xl border border-[#E4E4E7] overflow-x-auto">
            <button
              onClick={() => setActiveTab('compose')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'compose'
                  ? 'bg-white text-[#09090B] shadow-sm border border-[#E4E4E7]'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              COMPOSE
            </button>
            <button
              onClick={() => setActiveTab('drafts')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'drafts'
                  ? 'bg-white text-[#09090B] shadow-sm border border-[#E4E4E7]'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              <span>DRAFTS</span>
              <span className="px-1.5 py-0.5 text-[11px] bg-zinc-200 text-zinc-800 rounded-full">
                {drafts.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('scheduled')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'scheduled'
                  ? 'bg-white text-[#09090B] shadow-sm border border-[#E4E4E7]'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              <span>SCHEDULED</span>
              <span className="px-1.5 py-0.5 text-[11px] bg-[#4A6FC3] text-white rounded-full">
                {scheduled.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'analytics'
                  ? 'bg-white text-[#09090B] shadow-sm border border-[#E4E4E7]'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              ANALYTICS
            </button>
          </div>
        </div>

        {/* TAB 1: COMPOSE */}
        {activeTab === 'compose' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Composer Controls */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {/* Channel Selector Pills */}
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-3">
                  Target Distribution Rails
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => togglePlatform('linkedin')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedPlatforms.includes('linkedin')
                        ? 'bg-[#09090B] text-white'
                        : 'bg-white text-[#52525B] border border-[#E4E4E7]'
                    }`}
                  >
                    LINKEDIN
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePlatform('twitter')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedPlatforms.includes('twitter')
                        ? 'bg-[#09090B] text-white'
                        : 'bg-white text-[#52525B] border border-[#E4E4E7]'
                    }`}
                  >
                    X / TWITTER
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePlatform('facebook')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedPlatforms.includes('facebook')
                        ? 'bg-[#09090B] text-white'
                        : 'bg-white text-[#52525B] border border-[#E4E4E7]'
                    }`}
                  >
                    FACEBOOK
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePlatform('instagram')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedPlatforms.includes('instagram')
                        ? 'bg-[#09090B] text-white'
                        : 'bg-white text-[#52525B] border border-[#E4E4E7]'
                    }`}
                  >
                    INSTAGRAM
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePlatform('devto')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedPlatforms.includes('devto')
                        ? 'bg-[#09090B] text-white'
                        : 'bg-white text-[#52525B] border border-[#E4E4E7]'
                    }`}
                  >
                    DEV.TO
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePlatform('bitcoin')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedPlatforms.includes('bitcoin')
                        ? 'bg-[#09090B] text-white'
                        : 'bg-white text-[#52525B] border border-[#E4E4E7]'
                    }`}
                  >
                    BITCOIN BLOGS
                  </button>
                </div>
              </div>

              {/* AI Precision Tone Switcher */}
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                    AI Precision Tone
                  </div>
                  <span className="text-xs font-semibold text-[#4A6FC3]">Active Optimization</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTone('executive')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedTone === 'executive'
                        ? 'bg-[#4A6FC3] text-white shadow-sm'
                        : 'bg-[#F4F4F5] text-[#52525B] hover:bg-[#E4E4E7]'
                    }`}
                  >
                    Executive Authority
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTone('viral')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedTone === 'viral'
                        ? 'bg-[#4A6FC3] text-white shadow-sm'
                        : 'bg-[#F4F4F5] text-[#52525B] hover:bg-[#E4E4E7]'
                    }`}
                  >
                    Punchy Viral
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTone('technical')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedTone === 'technical'
                        ? 'bg-[#4A6FC3] text-white shadow-sm'
                        : 'bg-[#F4F4F5] text-[#52525B] hover:bg-[#E4E4E7]'
                    }`}
                  >
                    Deep Technical
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTone('bitcoin')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedTone === 'bitcoin'
                        ? 'bg-[#4A6FC3] text-white shadow-sm'
                        : 'bg-[#F4F4F5] text-[#52525B] hover:bg-[#E4E4E7]'
                    }`}
                  >
                    Sound Money
                  </button>
                </div>
              </div>

              {/* Main Composer Input */}
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm flex flex-col relative focus-within:border-[#4A6FC3] transition-colors">
                {uploadedImage && (
                  <div className="mb-4 relative rounded-lg overflow-hidden border border-[#E4E4E7] bg-[#F4F4F5]">
                    <img src={uploadedImage} alt="Attached media" className="w-full h-48 object-cover" />
                    <button
                      type="button"
                      onClick={removeAttachedImage}
                      className="absolute top-2 right-2 px-2.5 py-1 bg-black/70 hover:bg-black text-white text-xs font-bold uppercase rounded-md transition-colors"
                    >
                      REMOVE
                    </button>
                  </div>
                )}

                {isGenerating && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-8 h-8 border-2 border-[#4A6FC3] border-t-transparent rounded-full animate-spin mb-3"></div>
                    <div className="text-sm font-bold text-[#09090B]">Precision AI Engine Working</div>
                    <p className="text-xs text-[#52525B] mt-1">Analyzing content, structure, and channel algorithms...</p>
                  </div>
                )}

                <textarea
                  rows={6}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="What do you want to share with the world today? Share your breakthroughs, code, or business milestones..."
                  className="w-full bg-transparent text-[#09090B] placeholder-[#71717A] text-sm sm:text-base resize-none focus:outline-none leading-relaxed"
                />

                <div className="mt-4 pt-3 border-t border-[#E4E4E7] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleImageSelection}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg border border-[#E4E4E7] text-[#09090B] hover:bg-[#F4F4F5] transition-colors"
                    >
                      ATTACH PHOTO
                    </button>
                    <button
                      type="button"
                      onClick={optimizeCopy}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#F4F4F5] text-[#09090B] hover:bg-[#E4E4E7] transition-colors"
                    >
                      OPTIMIZE COPY
                    </button>
                  </div>

                  <div className="text-xs font-semibold text-[#71717A]">
                    {inputText.length} characters
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSavePost('draft')}
                  className="flex-1 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#E4E4E7] text-[#09090B] hover:bg-[#F4F4F5] transition-all text-center"
                >
                  SAVE DRAFT
                </button>
                <button
                  type="button"
                  onClick={() => handleSavePost('scheduled')}
                  className="flex-1 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#E55252] text-white hover:bg-[#FF6E6E] transition-all text-center shadow-sm"
                >
                  SCHEDULE POST
                </button>
              </div>
            </div>

            {/* Right Column: Live Tailored Previews */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                  Live Channel Previews
                </div>
                <div className="text-xs text-[#52525B]">Real-time algorithm rendering</div>
              </div>

              <div className="space-y-4 max-h-[720px] overflow-y-auto pr-1">
                {/* LinkedIn Preview */}
                {selectedPlatforms.includes('linkedin') && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#4A6FC3] text-white flex items-center justify-center font-bold text-sm">
                          A
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#09090B]">Stanley Chege Thuita</div>
                          <div className="text-[11px] text-[#71717A]">Founder at Altradits • Just now</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-[#4A6FC3] rounded">
                        LINKEDIN
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#09090B] whitespace-pre-line leading-relaxed">
                      {inputText || 'Your post copy will render here in real time...'}
                    </div>
                    {uploadedImage && (
                      <div className="mt-3 rounded-lg overflow-hidden border border-[#E4E4E7]">
                        <img src={uploadedImage} alt="Media preview" className="w-full h-auto object-cover max-h-64" />
                      </div>
                    )}
                    <div className="mt-4 pt-2 border-t border-[#E4E4E7] flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
                      <span>LIKE</span>
                      <span>COMMENT</span>
                      <span>REPOST</span>
                      <span>SEND</span>
                    </div>
                  </div>
                )}

                {/* X / Twitter Preview */}
                {selectedPlatforms.includes('twitter') && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#09090B] text-white flex items-center justify-center font-bold text-xs">
                          A
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#09090B]">
                            Altradits <span className="text-[11px] text-[#71717A] font-normal">@altradits</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-zinc-100 text-[#09090B] rounded">
                        X / TWITTER
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#09090B] whitespace-pre-line leading-relaxed">
                      {inputText || 'Your tweet will render here in real time...'}
                    </div>
                    {uploadedImage && (
                      <div className="mt-3 rounded-xl overflow-hidden border border-[#E4E4E7]">
                        <img src={uploadedImage} alt="Media preview" className="w-full h-auto object-cover max-h-64" />
                      </div>
                    )}
                    <div className="mt-3 pt-2 border-t border-[#E4E4E7] flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
                      <span>REPLY</span>
                      <span>REPOST</span>
                      <span>LIKE</span>
                      <span>SHARE</span>
                    </div>
                  </div>
                )}

                {/* Instagram Preview */}
                {selectedPlatforms.includes('instagram') && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D97706] to-[#E55252] text-white flex items-center justify-center font-bold text-xs">
                          A
                        </div>
                        <div className="text-xs font-bold text-[#09090B]">altradits</div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-pink-50 text-[#E55252] rounded">
                        INSTAGRAM
                      </span>
                    </div>
                    <div className="w-full aspect-video bg-[#F4F4F5] rounded-lg mb-3 flex items-center justify-center text-xs text-[#71717A] border border-[#E4E4E7] overflow-hidden">
                      {uploadedImage ? (
                        <img src={uploadedImage} alt="Instagram visual" className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center">
                          <span className="font-semibold text-xs text-zinc-600">Visual Feed Framing</span>
                          <span className="text-[11px] text-zinc-400">1:1 / 4:5 Optimized Canvas</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-[#09090B] leading-relaxed">
                      <span className="font-bold mr-1">altradits</span>
                      {inputText || 'Your caption will render here...'}
                    </div>
                  </div>
                )}

                {/* Dev.to Preview */}
                {selectedPlatforms.includes('devto') && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-mono font-bold text-zinc-500">DEV COMMUNITY</div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-zinc-100 text-[#09090B] rounded">
                        DEV.TO
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#09090B] mb-2 leading-tight">
                      {getDisplayTitle(inputText)}
                    </h4>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono text-[#4A6FC3]">#bitcoin</span>
                      <span className="text-[10px] font-mono text-[#4A6FC3]">#lightning</span>
                      <span className="text-[10px] font-mono text-[#4A6FC3]">#automation</span>
                    </div>
                    <div className="text-xs text-[#52525B] line-clamp-3 leading-relaxed">
                      {inputText}
                    </div>
                  </div>
                )}

                {/* Bitcoin Blogs Preview */}
                {selectedPlatforms.includes('bitcoin') && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BitcoinIcon className="w-4 h-4 text-[#F7931A]" />
                        <span className="text-xs font-bold text-[#F7931A]">Lightning Sovereign Publisher</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-50 text-[#D97706] rounded">
                        BITCOIN
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#09090B] leading-relaxed mb-3">
                      {inputText || 'Sound money article distribution...'}
                    </div>
                    <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/50 flex items-center justify-between">
                      <div className="text-[11px] font-semibold text-amber-900">
                        Micro-Tipping Active
                      </div>
                      <span className="text-xs font-bold text-[#F7931A]">⚡ 2,500 Sats / Read</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DRAFTS */}
        {activeTab === 'drafts' && (
          <div className="bg-white rounded-2xl border border-[#E4E4E7] p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#09090B] mb-4">Saved Drafts ({drafts.length})</h3>
            {drafts.length === 0 ? (
              <div className="text-center py-12 text-[#71717A]">
                <p className="text-sm">No drafts saved yet.</p>
                <button
                  onClick={() => setActiveTab('compose')}
                  className="mt-3 text-xs font-bold text-[#4A6FC3] uppercase tracking-wider hover:underline"
                >
                  Write Your First Post
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {drafts.map((draft) => (
                  <div
                    key={draft.id}
                    className="p-4 rounded-xl border border-[#E4E4E7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#CBD5E1] transition-all"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-[#09090B] line-clamp-2 leading-relaxed">{draft.text}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] text-[#71717A]">
                          {new Date(draft.createdAt).toLocaleDateString()}
                        </span>
                        <div className="flex gap-1">
                          {draft.platforms.map((p) => (
                            <span key={p} className="text-[9px] font-bold uppercase px-1.5 py-0.5 bg-[#F4F4F5] rounded text-zinc-700">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleLoadDraft(draft)}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#09090B] transition-colors"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDeletePost(draft.id)}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg text-[#E55252] hover:bg-red-50 transition-colors"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SCHEDULED */}
        {activeTab === 'scheduled' && (
          <div className="bg-white rounded-2xl border border-[#E4E4E7] p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#09090B] mb-4">Scheduled Posts ({scheduled.length})</h3>
            {scheduled.length === 0 ? (
              <div className="text-center py-12 text-[#71717A]">
                <p className="text-sm">No posts scheduled yet.</p>
                <button
                  onClick={() => setActiveTab('compose')}
                  className="mt-3 text-xs font-bold text-[#4A6FC3] uppercase tracking-wider hover:underline"
                >
                  Schedule A Post
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {scheduled.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-xl border border-[#E4E4E7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-[#09090B] line-clamp-2 leading-relaxed">{post.text}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#4A6FC3] bg-blue-50 px-2 py-0.5 rounded">
                          QUEUED
                        </span>
                        <div className="flex gap-1">
                          {post.platforms.map((p) => (
                            <span key={p} className="text-[9px] font-bold uppercase px-1.5 py-0.5 bg-[#F4F4F5] rounded text-zinc-700">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg text-[#E55252] hover:bg-red-50 transition-colors"
                    >
                      CANCEL
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#71717A]">Total Impressions</div>
                <div className="text-3xl font-extrabold text-[#09090B] mt-2">428.4K</div>
                <span className="text-xs text-[#059669] font-bold mt-1 inline-block">+24.6% vs last week</span>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#71717A]">Syndicate Reach</div>
                <div className="text-3xl font-extrabold text-[#4A6FC3] mt-2">6 Rails</div>
                <span className="text-xs text-[#52525B] mt-1 inline-block">100% distribution active</span>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#71717A]">Precision Sync Rate</div>
                <div className="text-3xl font-extrabold text-[#09090B] mt-2">99.8%</div>
                <span className="text-xs text-[#059669] font-bold mt-1 inline-block">Zero delivery drops</span>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E7] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#71717A]">Sats Tipped</div>
                <div className="text-3xl font-extrabold text-[#F7931A] mt-2">142,500 ⚡</div>
                <span className="text-xs text-[#52525B] mt-1 inline-block">Instant Lightning settlement</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E4E4E7] shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#09090B] mb-4">
                Recent Network Telemetry
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-[#E4E4E7] text-xs">
                  <span className="font-semibold text-[#09090B]">LinkedIn Post: "Strategic Infrastructure Milestone"</span>
                  <span className="text-[#059669] font-bold">2.4k views • 98 engagements</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E4E4E7] text-xs">
                  <span className="font-semibold text-[#09090B]">X / Twitter Thread: "Stop relying on broken payment rails"</span>
                  <span className="text-[#059669] font-bold">14.2k impressions • 340 retweets</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E4E4E7] text-xs">
                  <span className="font-semibold text-[#09090B]">Bitcoin Blog: "Zero-dependency settlement architecture"</span>
                  <span className="text-[#F7931A] font-bold">2,500 sats tipped</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

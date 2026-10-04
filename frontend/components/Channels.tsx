import React from 'react';
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon, DevToIcon, BitcoinIcon } from './BrandIcons';

interface ChannelItem {
  id: string;
  name: string;
  badge: string;
  badgeClass: string;
  description: string;
  icon: React.ReactNode;
}

const channelsData: ChannelItem[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    badge: 'B2B & Executive',
    badgeClass: 'bg-blue-50 text-[#4A6FC3] border-blue-200/50',
    description: 'Automatic hook formatting, paragraph line-breaks, executive tone tuning, and optimal hashtag clusters.',
    icon: <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />,
  },
  {
    id: 'twitter',
    name: 'X / Twitter',
    badge: '280 Chars & Threads',
    badgeClass: 'bg-zinc-100 text-[#09090B] border-zinc-200',
    description: 'Intelligent character limit truncation, viral punchlines, and automatic multi-tweet thread splitting.',
    icon: <TwitterIcon className="w-5 h-5 text-[#09090B]" />,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    badge: 'Visual & Reels',
    badgeClass: 'bg-pink-50 text-[#E55252] border-pink-200/50',
    description: 'AI image caption generator, smart hashtag recommendations, and square preview framing.',
    icon: <InstagramIcon className="w-5 h-5 text-[#E55252]" />,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    badge: 'Pages & Groups',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/50',
    description: 'Community engagement questions, rich media embedding, and page schedule synchronization.',
    icon: <FacebookIcon className="w-5 h-5 text-[#1877F2]" />,
  },
  {
    id: 'devto',
    name: 'Dev.to',
    badge: 'Markdown Articles',
    badgeClass: 'bg-zinc-100 text-[#09090B] border-zinc-200',
    description: 'Automatic code syntax formatting, technical headers, tag taxonomy, and long-form developer articles.',
    icon: <DevToIcon className="w-5 h-5 text-[#09090B]" />,
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin Blog Network',
    badge: 'Lightning Sound Money',
    badgeClass: 'bg-amber-50 text-[#D97706] border-amber-200/50',
    description: 'Sovereign sound money publishing with instant Bitcoin Lightning micro-tipping settlement.',
    icon: <BitcoinIcon className="w-5 h-5 text-[#F7931A]" />,
  },
];

export const Channels: React.FC = () => {
  return (
    <section id="channels" className="py-24 px-4 sm:px-8 lg:px-12 w-full border-t border-[#E4E4E7] bg-white">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-2">
            Multi-Channel Syndicate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
            Supported Distribution Channels
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            One command center targeting every major network and sovereign developer hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channelsData.map((channel) => (
            <div
              key={channel.id}
              className="bg-white rounded-2xl p-6 border border-[#E4E4E7] shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center">
                      {channel.icon}
                    </div>
                    <div className="text-base font-bold text-[#09090B]">{channel.name}</div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${channel.badgeClass}`}>
                    {channel.badge}
                  </span>
                </div>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {channel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

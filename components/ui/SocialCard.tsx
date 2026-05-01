import type { Social } from '@/lib/socials';
import { FaFacebook, FaTelegramPlane, FaTiktok } from 'react-icons/fa';

type SocialCardProps = {
  social: Social;
};

const iconMap = {
  Facebook: FaFacebook,
  Telegram: FaTelegramPlane,
  TikTok: FaTiktok,
};

export function SocialCard({ social }: SocialCardProps) {
  const Icon = iconMap[social.platform as keyof typeof iconMap];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:rounded-[1.5rem] md:p-6">
      <div className="flex items-center gap-3 md:gap-4">

        {/* LEFT SIDE */}
        <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-4">
          
          {/* LOGO */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-50 md:h-12 md:w-12 md:rounded-xl">
            {Icon && (
              <Icon
                className={`
                  text-base md:text-xl
                  ${social.platform === 'Facebook' ? 'text-[#1877F2]' : ''}
                  ${social.platform === 'Telegram' ? 'text-[#229ED9]' : ''}
                  ${social.platform === 'TikTok' ? 'text-black' : ''}
                `}
              />
            )}
          </div>

          {/* TEXT */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-neutral-900 md:text-lg">
              {social.platform}
            </h3>

            {social.username && (
              <p className="break-words text-xs text-neutral-500 md:text-sm">
                {social.username}
              </p>
            )}

            <p className="text-xs text-neutral-600 md:text-sm">
              {social.followers}
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-800 transition-all duration-300 hover:bg-neutral-100 md:px-4 md:py-1.5 md:text-sm"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
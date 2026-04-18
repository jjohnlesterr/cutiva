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
    <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
      <div className="flex flex-wrap items-center gap-4">
        {/* LEFT SIDE */}
        <div className="flex min-w-0 flex-1 items-center gap-4">
          {/* LOGO */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50">
            {Icon && (
              <Icon
                className={`
                  text-xl
                  ${social.platform === 'Facebook' ? 'text-[#1877F2]' : ''}
                  ${social.platform === 'Telegram' ? 'text-[#229ED9]' : ''}
                  ${social.platform === 'TikTok' ? 'text-black' : ''}
                `}
              />
            )}
          </div>

          {/* TEXT */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-neutral-900">
              {social.platform}
            </h3>

            {social.username && (
              <p className="break-words text-sm text-neutral-500">
                {social.username}
              </p>
            )}

            <p className="text-sm text-neutral-600">
              {social.followers}
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm font-medium text-neutral-800 transition-all duration-300 hover:bg-neutral-100"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
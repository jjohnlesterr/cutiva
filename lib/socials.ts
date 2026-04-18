export interface Social {
  id: string;
  platform: string;
  followers: string;
  url: string;
  username?: string;
}

export const socials: Social[] = [
  {
    id: '1',
    platform: 'Facebook',
    followers: '10K Followers',
    url: 'https://www.facebook.com/profile.php?id=61585690502630',
  },
  {
    id: '2',
    platform: 'Telegram',
    followers: '20k+ Community',
    url: 'https://t.me/cutivaprems',
  },
  {
    id: '3',
    platform: 'TikTok',
    followers: '5K Followers',
    url: 'https://www.tiktok.com/@cavellefinds?is_from_webapp=1&sender_device=pc',
  },
];
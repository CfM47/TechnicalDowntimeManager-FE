import { getInitials } from '@/lib/utils';

interface InitialsAvatarProps {
  name: string;
  size?: number;
}

export const InitialsAvatar = ({ name, size = 40 }: InitialsAvatarProps) => {
  const initials = getInitials(name);

  return (
    <div
      className="flex items-center justify-center rounded-full bg-secondary text-gray-500"
      style={{ width: size, height: size }}
    >
      <span className="text-sm font-semibold">{initials}</span>
    </div>
  );
};

import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";

export type SocialPlatform = 'github' | 'linkedin' | 'twitter';

interface SocialProps {
    username: string;
    platform: SocialPlatform;
}

const platformDetails: Record<SocialPlatform, { url: (username: string) => string; icon: JSX.Element; label: string }> = {
    github: {
        url: (username) => `https://github.com/${username}`,
        icon: <GrGithub title='Github' />,
        label: 'Github',
    },
    twitter: {
        url: (username) => `https://x.com/${username}`,
        icon: <GrTwitter title='Twitter' />,
        label: 'Twitter',
    },
    linkedin: {
        url: (username) => `https://linkedin.com/in/${username}`,
        icon: <GrLinkedin title='Linkedin' />,
        label: 'Linkedin',
    },
};

export const SocialLink = ({ username, platform }: SocialProps) => {
    const platformDetail = platformDetails[platform];

    if (!platformDetail) {
        throw new Error(`The Social Platform ${platform} is not supported.`);
    }

    const { url, icon, label } = platformDetail;
    return (
        <a 
          href={url(username)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${username} on ${label}`}
        >
            <span className="flex flex-row items-center gap-1">
                {icon}{label}
            </span>
        </a>
    );
};

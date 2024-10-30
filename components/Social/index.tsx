import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";

interface SocialProps {
    username: string;
    platform: 'github' | 'linkedin' | 'twitter';
}

const platformDetails = {
    github: {
        url: (username: string) => `https://github.com/${username}`,
        icon: <GrGithub title='Github' />,
        label: 'Github'
    },
    twitter: {
        url: (username: string) => `https://x.com/${username}`,
        icon: <GrTwitter title='Twitter' />,
        label: 'Twitter'
    },
    linkedin: {
        url: (username: string) => `https://linkedin.com/in/${username}`,
        icon: <GrLinkedin title='Linkedin' />,
        label: 'Linkedin'
    }
};

export const SocialLink = ({ username, platform }: SocialProps) => {
    const { url, icon, label } = platformDetails[platform];
    return (
        <a href={url(username)}>
            <span className="flex flex-row items-center gap-1">
                {icon}{label}
            </span>
        </a>
    );
};

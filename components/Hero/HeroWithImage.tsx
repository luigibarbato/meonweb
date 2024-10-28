import { GradientText } from "../../lib/Gradient";
import ResponsiveImage from "../ResponsiveImage";

interface Props {
    isMobile: boolean,
    primaryColor: string,
    secondaryColor: string,
    image: string,
    content: string,
    children?: React.ReactNode,
}

export const HeroWithImage = ({ ...props }: Props) => {
    return (
        <div className="flex flex-col sm:flex-col lg:flex-row justify-center">
            <div className="m-10 self-center">
                <ResponsiveImage image={props.image} isMobile={props.isMobile}/>
            </div>
            <div className="lg:container lg:basis-1/2 lg:self-center m-3 lg:m-16">
                <GradientText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} direction="right">
                    <p className={`text-center md:text-center lg:text-start text-4xl md:text-5xl font-extrabold`}>
                        {props.content}
                    </p>
                </GradientText>
                <br />
                {props.children}
            </div>
        </div>
    );
}

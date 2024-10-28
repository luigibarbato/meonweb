import { GradientText } from "../../lib/Gradient";

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
            <div className="m-10 avatar self-center">
                {/* TODO: replace with Next/image */}
                <img width={props.isMobile ? "150px" : "300px"} height={props.isMobile ? "150px" : "300px"} className={props.isMobile ? "rounded-lg overflow-hidden object-cover h-36 w-36" : "rounded-lg overflow-hidden object-cover h-[300] w-[350]"} src={props.image} alt="" />
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

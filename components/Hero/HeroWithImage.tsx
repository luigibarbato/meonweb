import GradientText from "../../lib/GradientText";

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
        <div className="flex flex-col tablet:flex-col md:flex-row justify-center">
            <div className="m-10 avatar self-center">
                <img width={props.isMobile ? "150px" : "300px"} height={props.isMobile ? "150px" : "300px"} className={props.isMobile ? "rounded-lg overflow-hidden object-cover h-36 w-36" : "rounded-lg overflow-hidden object-cover h-[300] w-[350]"} src={props.image} alt="" />
            </div>
            <div className="md:container md:basis-1/2 md:self-center m-3 md:m-16">
                <GradientText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor}>
                    <p className={`text-center tablet:text-center md:text-start text-4xl md:text-5xl font-extrabold`}>
                        {props.content}
                    </p>
                </GradientText>
                <br />
                {props.children}
            </div>
        </div>
    );
}
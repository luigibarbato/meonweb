import Items from "../Loving/types"
import Grid from "../Grid"
import GradientText from "../../lib/GradientText"

interface Props {
    isMobile?: boolean,
    isLoading?: boolean,
    primaryColor: string,
    secondaryColor: string,
    content: string,
    items: Items | undefined,
    children: React.ReactNode,
}

export const HeroWithGrid = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="order-last md:order-first m-10 md:basis-1/2 md:self-center">
                <Grid isLoading={props.isLoading} isMobile={props.isMobile} items={props.items}></Grid>
            </div>
            <div className="flex flex-col md:self-center shrink">
                <GradientText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor}>
                    <p className={`text-center text-4xl md:text-5xl font-extrabold`}>
                        {props.content}
                    </p>
                </GradientText>
            </div>
        </div>
    )
}
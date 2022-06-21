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
// TODO: It's not responsive.
export const HeroWithGrid = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row overflow-hidden justify-center">
            <div className="order-last md:order-first basis-1/2 md:basis-1/3 md:self-center">
                <Grid isLoading={props.isLoading} isMobile={props.isMobile} items={props.items}></Grid>
            </div>
            <div className="flex flex-col md:self-center md:basis-1/2">
                <GradientText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor}>
                    <p className="text-center text-4xl md:text-5xl m-5 font-extrabold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                    </p>
                </GradientText>
                {props.children}
            </div>
        </div>
    )
}
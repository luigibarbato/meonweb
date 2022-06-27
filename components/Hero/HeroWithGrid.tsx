import Grid from "../Grid"
import { GradientText } from "../../lib/Gradient"
import { Items } from "../../lib/fetcher/types"

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
        <div className="flex flex-col sm:flex-col lg:flex-row justify-center overflow-y-scroll">
            <div className="order-last sm:order-last lg:order-first basis-1/3 self-center sm:mt-10">
                <Grid isLoading={props.isLoading} isMobile={props.isMobile} items={props.items}></Grid>
            </div>
            <div className="flex flex-col self-center basis-1/2">
                <GradientText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} direction="right">
                    <p className="text-center text-4xl md:text-5xl m-5 font-extrabold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                    </p>
                </GradientText>
                {props.children}
            </div>
        </div>
    )
}
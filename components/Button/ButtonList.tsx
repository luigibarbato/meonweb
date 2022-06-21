import Button from "./Button"

export type ButtonSpec = {
    colors: string | Array<string>,
    text: string,
    withBackground?: boolean
    isCurrent?: boolean,
    onClick?: () => void,
}

interface Props {
    buttons: Array<ButtonSpec>
}

const ButtonList = (props: Props) => {
    return (
        <ul className='flex flex-row text-3xl m-10 self-center'>
            {props.buttons.map((button, i) => (
                <li key={i}>
                    <Button {...button} />
                </li>
            ))}
        </ul>
    )

}

export default ButtonList;
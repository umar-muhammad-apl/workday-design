import { TertiaryButton, TertiaryButtonProps, colors } from "@workday/canvas-kit-react"
import { ReactNode } from "react"

interface IconButtonProps extends TertiaryButtonProps {
    children?: ReactNode,
}

const getIconColor = () => {
    return {
      default: {
        icon: colors.blueberry300,
      },
      hover: {
        icon: colors.blueberry300,
        background: colors.blueberry100
      },
      active: {
        icon: colors.blueberry300, 
        background: colors.blueberry100
     },
      focus: {
        
      },
      disabled: {},
    };
};

const IconButton = ({ children, ...Props }: IconButtonProps) => {
    return (
        <TertiaryButton
        {...Props}
        colors={getIconColor()}
        >
           
        </TertiaryButton>
    )
}

export default IconButton
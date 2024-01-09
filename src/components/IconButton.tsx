import { TertiaryButton } from "@workday/canvas-kit-react"
import { ReactNode } from "react"

interface IconButtonProps {
    children: ReactNode
}

const IconButton = ({ children }: IconButtonProps) => {
    return (
        <TertiaryButton>
            {children}
        </TertiaryButton>
    )
}

export default IconButton
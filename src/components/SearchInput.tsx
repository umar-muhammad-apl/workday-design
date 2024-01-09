import { InputGroup, SystemIcon, TertiaryButton } from "@workday/canvas-kit-react";
import {
    justifyIcon,
    searchIcon
} from '@workday/canvas-system-icons-web';

const InputGroupFormFieldForwarder = (props: {}) => {
    return (
        <InputGroup cs={{ border: "none", outline: "none"}} width={280}>
            <InputGroup.Input backgroundColor="#D9D9D9" {...props} />
            <InputGroup.InnerEnd >
                <TertiaryButton as="button" colors={{ hover: { background: 'transparent' } }} tabIndex={-1} icon={searchIcon} accentHover="transparent" />
            </InputGroup.InnerEnd>
        </InputGroup>
    );
};


export default InputGroupFormFieldForwarder
import React from 'react';
import { Box, SystemIcon, colors, Flex, Text, FormField, TextInput, Checkbox, PrimaryButton } from "@workday/canvas-kit-react"
import {
    justifyIcon,
    notificationsIcon,
    plusCircleIcon,
    userIcon,
    gearIcon,
    lockIcon,
    xIcon
} from '@workday/canvas-system-icons-web';

import {Link} from "react-router-dom"

const SignupWorkday = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <Flex 
            justifyContent='center' 
            //s={{border: '1px solid red'}}
        >
            <Box
                cs={{
                    marginTop: 64,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    //border: '1px solid yellow'
                    justifyContent: 'center',
                    width: '400px'
                }}
            >
                <Flex padding={10} backgroundColor="red" borderRadius={100}>
                    <SystemIcon
                        fill="#000"
                        fillHover={colors.blueberry300}
                        icon={lockIcon}
                        size={20}

                    />
                </Flex>
                <Text typeLevel="heading.small">Sign in</Text>
                <Flex.Item width='100%'>
                <FormField label="Email" required={true} grow={true}>
                    <TextInput onChange={handleChange} placeholder="user@email.com" value={value} />
                </FormField>
                </Flex.Item>
                <Flex.Item width='100%'>
                <FormField label="Password" required={true} grow={true}>
                    <TextInput placeholder="user@email.com" />
                </FormField>
                </Flex.Item>

                <Flex.Item cs={{alignSelf: 'flex-start'}}>
                    <Checkbox label="Remember Me" />
                </Flex.Item>

                <Flex.Item width='100%'>
                    <PrimaryButton
                        marginY={20}
                        grow={true}
                        cs={{width: '100%'}}
                    >
                        Sign in
                    </PrimaryButton>
                </Flex.Item>

                <Flex width='100%' flexDirection='row' justifyContent='space-between'>
                    <Link to="#" style={{fontSize: 14, display: 'block'}}>
                        Forgot password?
                    </Link>
                    <Link to="#" style={{fontSize: 14, display: 'block'}}>
                        Don't have an account? Sign Up
                    </Link>
                </Flex>


            </Box>
        </Flex>
    )
}

export default SignupWorkday
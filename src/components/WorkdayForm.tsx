import React from 'react';
import { FormField } from '@workday/canvas-kit-react/form-field';
import { TextInput, Flex, Select } from '@workday/canvas-kit-react';

import { mailIcon } from '@workday/canvas-system-icons-web';
import { InputGroup } from '@workday/canvas-kit-react/text-input';
import { SystemIcon } from '@workday/canvas-kit-react/icon';
import InputBase from '@mui/material/InputBase';
import {Paper, TextField, InputLabel, Typography}  from '@mui/material'



const options = [
    'E-mail',
    'Phone',
    'Fax',
    'Mail',
    'Mobile Phone',
    'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

const WorkdayForm = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const [selectValue, setSelectValue] = React.useState('');

    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(event.target.value);
    };


    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 0.5}}>
                <FormField label="Email" required={true}>
                    <TextInput onChange={handleChange} placeholder="user@email.com" value={value} />
                </FormField>
                <FormField label="Email" required={true}>
                    <InputGroup width={280}>
                        <InputGroup.InnerStart pointerEvents="none">
                            <SystemIcon icon={mailIcon} size="small" />
                        </InputGroup.InnerStart>
                        <InputGroup.Input />
                        <InputGroup.InnerEnd>
                            <InputGroup.ClearButton />
                        </InputGroup.InnerEnd>
                    </InputGroup>
                </FormField>
                <FormField
                    error={0}
                    hintId="hint-error"
                    hintText="Please enter a valid email."
                    label="Email"
                    required={false}
                >
                    <TextInput onChange={handleChange} value={value} />
                </FormField>

                <Flex flexDirection="column">
                    <Select items={options}>
                        <FormField
                            required={true}
                            error={FormField.ErrorType.Error}
                            hintText="Fax is disabled. Please choose a different option."
                            label="Contact"
                        >
                            <Select.Input onChange={e => handleChangeSelect(e)} />
                            <Select.Popper>
                                <Select.Card>
                                    <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
                                </Select.Card>
                            </Select.Popper>
                        </FormField>
                    </Select>
                    Selected Value: {selectValue}
                </Flex>
                </div>

                <div style={{flex: 0.5}}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: 2 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Paper>
                    
                    <TextField fullWidth label="fullWidth" id="fullWidth" style={{ marginTop: 10, marginBottom: 10 }} />
                    
                    <InputLabel
                        shrink={false}
                        htmlFor="fullWidth"
                    >
                        <Typography>Username</Typography>
                    </InputLabel>
                    <TextField fullWidth id="fullWidth" />
                </div>






            </div>


        </>
    )
}

export default WorkdayForm
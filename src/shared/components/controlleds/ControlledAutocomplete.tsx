import {
    Autocomplete,
    AutocompleteProps,
    TextField,
    TextFieldProps,
} from '@mui/material';
import { Control, Controller, UseControllerProps } from 'react-hook-form';

interface Props {
    autocomplete: Omit<
        AutocompleteProps<any, false, false, false>,
        'renderInput'
    >;
    controller: Omit<UseControllerProps, 'control'> & {
        control: Control<any, any>;
    };
    textField: TextFieldProps;
}

export default function ControlledAutocomplete({
    autocomplete,
    controller,
    textField,
}: Props) {
    return (
        <Controller
            {...controller}
            render={({
                field: { ref, onChange, ...field },
                fieldState: { error },
            }) => {
                return (
                    <Autocomplete
                        onChange={(_, data) => onChange(data?.value)}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(option, selected) =>
                            option.value == selected.value
                        }
                        {...autocomplete}
                        renderInput={(params) => (
                            <TextField
                                {...textField}
                                {...params}
                                {...field}
                                inputRef={ref}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                );
            }}
        />
    );
}

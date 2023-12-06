import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface Props extends ButtonProps {
    text: string;
    loading?: boolean;
    loadingText?: string;
    loadingColor?: string;
}

export default function LoadingButton({
    text,
    loading,
    loadingText,
    loadingColor = 'offWhite',
    ...props
}: Props) {
    const textLoading: string = loadingText ?? text;

    return (
        <Button fullWidth disableElevation sx={{ display: 'flex' }} {...props}>
            {loading && (
                <CircularProgress
                    // @ts-ignore
                    color={loadingColor}
                    size={18}
                    sx={{ marginRight: '8px' }}
                />
            )}
            {loading ? textLoading : text}
        </Button>
    );
}

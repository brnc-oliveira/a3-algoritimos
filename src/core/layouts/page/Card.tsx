import { ReactNode } from 'react';
import { Paper, SxProps, Theme } from '@mui/material';
import CustomSX from '../../../shared/styles/CustomSX';

interface Props {
    children: ReactNode;
    sx?: SxProps<Theme>;
}

export default function PageCard({ children, sx }: Props) {
    return (
        <Paper
            sx={{
                boxShadow: CustomSX.boxShadow,
                borderRadius: 2,
                padding: 3,
                gap: 2,
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                flexDirection: 'column',
                ...sx,
            }}
        >
            {children}
        </Paper>
    );
}

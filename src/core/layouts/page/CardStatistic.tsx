import { ReactNode } from 'react';
import { Skeleton, Stack, SxProps, Typography } from '@mui/material';
import PageCard from './Card';

interface Props {
    icon: ReactNode;
    label: string;
    value?: number | string;
    quantity?: number;
    quantityDisabled?: boolean;
    adicionalLabel?: string;
    loading?: boolean;
    sx?: SxProps;
}

export default function PageCardStatistic({
    icon,
    label,
    value,
    quantity,
    quantityDisabled = false,
    adicionalLabel,
    loading,
    sx,
}: Props) {
    return (
        <PageCard sx={{ flexGrow: 1, ...sx }}>
            <Stack
                width="100%"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap={3}
            >
                {icon}

                {!quantityDisabled && (
                    <Stack textAlign="right">
                        <Typography fontWeight="light" fontSize="large">
                            Quantidade
                        </Typography>

                        {loading ? (
                            <Skeleton variant="text" sx={{ fontSize: '18px' }} />
                        ) : (
                            <Typography fontWeight="bold" fontSize="large" textAlign="center">
                                {quantity || quantity === 0 ? quantity : "-"} {adicionalLabel}
                            </Typography>
                        )}
                    </Stack>
                )}

                <Stack textAlign="right">
                    <Typography fontWeight="light" fontSize="large">
                        {label}
                    </Typography>

                    {loading ? (
                        <Skeleton variant="text" sx={{ fontSize: '18px' }} />
                    ) : (
                        <Typography fontWeight="bold" fontSize="large" textAlign="center">
                            {value}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </PageCard>
    );
}

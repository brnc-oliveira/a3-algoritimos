import { Typography } from '@mui/material';

interface Props {
    title: string;
}

export default function PageTitle({ title }: Props) {
    return (
        <Typography component="h2" variant="h5" fontWeight="bold">
            {title}
        </Typography>
    );
}

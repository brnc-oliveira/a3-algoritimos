import { Box, CircularProgress, Grid } from '@mui/material';

interface Props {
    fileName: string;
    loading: boolean;
}

export default function PreviewCard({ fileName, loading }: Props) {
    return (
        <Grid container>
            <Box
                sx={{
                    position: 'relative',
                    width: { xs: '350px', md: '720px' },
                    height: { xs: '260px', md: '530px' },
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url("/${fileName}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: 4,
                        filter: loading ? 'brightness(40%)' : 'none',
                    }}
                ></div>
                {loading && (
                    <Grid
                        container
                        justifyContent="center"
                        alignContent="center"
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                    >
                        <CircularProgress size={80} sx={{ marginRight: '8px' }} />
                    </Grid>
                )}
            </Box>
        </Grid>
    );
}

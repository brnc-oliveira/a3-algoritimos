import { Grid } from "@mui/material";
import PageCardStatistic from "../../core/layouts/page/CardStatistic";

import PlaceIcon from '@mui/icons-material/Place';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Route from "../entities/route.entity";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { ECityTranslate } from "../enums/ECity.enum";
import { useEffect, useState } from "react";

interface Props {
    loading: boolean;
    data?: Route;
}

export default function InfoStatistics({ loading, data }: Props) {
    const [startPoint, setStartPoint] = useState('');
    const [destiny, setDestiny] = useState('');
    const [route, setRoute] = useState('');

    async function loadData() {
        if (data) {
            const startPointCity =
                ECityTranslate[data.startPoint as keyof typeof ECityTranslate];

            const destinyCity = ECityTranslate[data.destiny as keyof typeof ECityTranslate];

            const cityValues = data.route.map(
                (city: string) => ECityTranslate[city as keyof typeof ECityTranslate]
            );

            const routes = cityValues.join(' -> ');

            setStartPoint(startPointCity);
            setDestiny(destinyCity);
            setRoute(routes);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <Grid
                container
                gap={2}
                justifyContent={{ sm: "center", md: "start" }}
            >
                <Grid item xs={1.5}>
                    <PageCardStatistic
                        label="Veículo"
                        icon={<DirectionsCarIcon color="primary" fontSize="large" />}
                        value={data?.vehicleType}
                        quantityDisabled={true}
                        loading={loading}
                    />
                </Grid>

                <Grid item xs={2}>
                    <PageCardStatistic
                        label="Ponto de Partida"
                        icon={<PlaceIcon color="primary" fontSize="large" />}
                        value={startPoint}
                        quantityDisabled={true}
                        loading={loading}
                    />
                </Grid>

                <Grid item xs={2}>
                    <PageCardStatistic
                        label="Destino"
                        icon={<PlaceIcon color="primary" fontSize="large" />}
                        value={destiny}
                        quantityDisabled={true}
                        loading={loading}
                    />
                </Grid>

                <Grid item xs={6}>
                    <PageCardStatistic
                        label="Rota"
                        icon={<MyLocationIcon color="primary" fontSize="large" />}
                        value={route}
                        quantityDisabled={true}
                        loading={loading}
                    />
                </Grid>
            </Grid>
        </>
    );
}
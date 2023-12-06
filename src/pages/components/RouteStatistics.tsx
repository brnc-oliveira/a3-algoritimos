import { Grid } from "@mui/material";
import PageCardStatistic from "../../core/layouts/page/CardStatistic";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AddRoadIcon from '@mui/icons-material/AddRoad';

import Route from "../entities/route.entity";


interface Props {
    loading: boolean;
    data?: Route;
}

export default function RouteStatistics({ loading, data }: Props) {
    return (
        <>
            <Grid
                container
                gap={2}
                justifyContent={{ sm: "center", md: "start" }}
            >
                <Grid container>
                    <PageCardStatistic
                        label="Custo Total"
                        icon={<MonetizationOnIcon color="primary" fontSize="large" />}
                        value={`R$ ${data?.totalCost},00`}
                        loading={loading}
                    />
                </Grid>

                <Grid container>
                    <PageCardStatistic
                        label="Distância"
                        icon={<AddRoadIcon color="primary" fontSize="large" />}
                        value={`${data?.distance} KM`}
                        loading={loading}
                    />
                </Grid>

                <Grid container>
                    <PageCardStatistic
                        label="Tempo"
                        icon={<AccessAlarmsIcon color="primary" fontSize="large" />}
                        value={`${data?.totalTime} Minutos`}
                        loading={loading}
                    />
                </Grid>

                <Grid container>
                    <PageCardStatistic
                        label="Pedágios"
                        icon={<PointOfSaleIcon color="primary" fontSize="large" />}
                        value={`R$ ${data?.tollsCost},00`}
                        quantity={data?.tolls}
                        loading={loading}
                    />
                </Grid>

                <Grid container>
                    <PageCardStatistic
                        label="Consumo"
                        icon={<LocalGasStationIcon color="primary" fontSize="large" />}
                        value={`R$ ${data?.consumptionCost},00`}
                        quantity={data?.consumption}
                        adicionalLabel={'Litros'}
                        loading={loading}
                    />
                </Grid>

                <Grid container>
                    <PageCardStatistic
                        label="Alimentação"
                        icon={<RestaurantIcon color="primary" fontSize="large" />}
                        value={`R$ ${data?.foodCost},00`}
                        quantity={data?.food}
                        adicionalLabel={"Paradas"}
                        loading={loading}
                    />
                </Grid>

                <Grid container>
                    <PageCardStatistic
                        label="Hospedagem"
                        icon={<HotelIcon color="primary" fontSize="large" />}
                        value={`R$ 0,00`}
                        quantity={0}
                        adicionalLabel={"Paradas"}
                        loading={loading}
                    />
                </Grid>
            </Grid>
        </>
    );
}
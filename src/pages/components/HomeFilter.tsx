import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import ECity, { ECityTranslate } from "../enums/ECity.enum";

import IOption from "../../shared/interfaces/Option";
import LoadingButton from "../../shared/components/buttons/LoadingButton";
import ControlledAutocomplete from "../../shared/components/controlleds/ControlledAutocomplete";

import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ListRouteDTO from "../dtos/ListRouteDTO.dto";
import EVehicles, { EVehiclesTranslate } from "../enums/EVehicles.enum";
import RouteRepository from "../repositories/RouteRepository";
import { listRouteSchema } from "../schema/list-route.schema";
import Route from "../entities/route.entity";

interface Props {
    loading: boolean;
    setLoading: any;
    setData: any;
    data?: Route;
}

export default function HomeFilter({ loading, setLoading, setData, data }: Props) {
    const routeRepository = new RouteRepository();


    const { control, handleSubmit, reset } = useForm<ListRouteDTO>({
        defaultValues: {
            vehicle: undefined,
            startPoint: undefined,
            destiny: undefined,
        },
        resolver: zodResolver(listRouteSchema)
    });

    const vehiclesOptions: Array<IOption<EVehicles>> = [
        {
            label: EVehiclesTranslate.caminhao,
            value: EVehicles.TRUCK,
        },
        {
            label: EVehiclesTranslate.onibus,
            value: EVehicles.BUS,
        },
        {
            label: EVehiclesTranslate.carro,
            value: EVehicles.CAR,
        },
        {
            label: EVehiclesTranslate.microonibus,
            value: EVehicles.MICROBUS,
        },
        {
            label: EVehiclesTranslate.moto,
            value: EVehicles.BIKE,
        },
    ]

    const cityOptions: Array<IOption<ECity>> = [
        {
            label: ECityTranslate.Armazem,
            value: ECity.ARMAZEM,
        },
        {
            label: ECityTranslate.BracodoNorte,
            value: ECity.BRACO_DO_NORTE,
        },
        {
            label: ECityTranslate.CapivarideBaixo,
            value: ECity.CAPIVARI_DE_BAIXO,
        },
        {
            label: ECityTranslate.Garopaba,
            value: ECity.GAROPABA,
        },
        {
            label: ECityTranslate.GraoPara,
            value: ECity.GRAO_PARA,
        },
        {
            label: ECityTranslate.Gravatal,
            value: ECity.GRAVATAL,
        },
        {
            label: ECityTranslate.Imarui,
            value: ECity.IMARUI,
        },
        {
            label: ECityTranslate.Imbituba,
            value: ECity.IMBITUBA,
        },
        {
            label: ECityTranslate.Jaguaruna,
            value: ECity.JAGUARUNA,
        },
        {
            label: ECityTranslate.Laguna,
            value: ECity.LAGUNA,
        },
        {
            label: ECityTranslate.Orleans,
            value: ECity.ORLEANS,
        },
        {
            label: ECityTranslate.PedrasGrandes,
            value: ECity.PEDRAS_GRANDES,
        },
        {
            label: ECityTranslate.PescariaBrava,
            value: ECity.PESCARIA_BRAVA,
        },
        {
            label: ECityTranslate.RioFortuna,
            value: ECity.RIO_FORTUNA,
        },
        {
            label: ECityTranslate.Sangao,
            value: ECity.SANGAO,
        },
        {
            label: ECityTranslate.SantaRosadeLima,
            value: ECity.SANTA_ROSA_DE_LIMA,
        },
        {
            label: ECityTranslate.SaoLudgero,
            value: ECity.SAO_LUDGERO,
        },
        {
            label: ECityTranslate.SaoMartinho,
            value: ECity.SAO_MARTINHO,
        },
        {
            label: ECityTranslate.TrezedeMaio,
            value: ECity.TREZE_DE_MAIO,
        },
        {
            label: ECityTranslate.Tubarao,
            value: ECity.TUBARAO,
        },
    ];

    async function submit(params: ListRouteDTO) {
        setLoading(true);

        setTimeout(async () => {

            const route = await routeRepository.getRoute(params);

            setData(route);
            setLoading(false);
        }, 3000);
    }

    async function clearData() {
        setData(undefined);
    }

    return (
        <Grid
            container
            spacing={3}
            component="form"
            onSubmit={handleSubmit(submit)}
        >
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <ControlledAutocomplete
                    controller={{
                        control: control,
                        name: 'vehicle',
                    }}
                    autocomplete={{
                        size: 'small',
                        fullWidth: true,
                        disablePortal: true,
                        options: vehiclesOptions,
                    }}
                    textField={{
                        label: 'Veículo',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <ControlledAutocomplete
                    controller={{
                        control: control,
                        name: 'startPoint',
                    }}
                    autocomplete={{
                        size: 'small',
                        fullWidth: true,
                        disablePortal: true,
                        options: cityOptions,
                    }}
                    textField={{
                        label: 'Ponto de Partida',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <ControlledAutocomplete
                    controller={{
                        control: control,
                        name: 'destiny',
                    }}
                    autocomplete={{
                        size: 'small',
                        fullWidth: true,
                        disablePortal: true,
                        options: cityOptions,
                    }}
                    textField={{
                        label: 'Destino',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3}>
                {data ? (
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ height: '100%' }}
                        startIcon={<AddLocationAltIcon />}
                        onClick={clearData}
                    >
                        Nova Busca
                    </Button>
                    // <LoadingButton
                    //     text="Nova Busca"
                    //     loadingText="Aguarde..."
                    //     loading={loading}
                    //     startIcon={!loading && <AddLocationAltIcon />}
                    //     variant="contained"
                    //     size="large"
                    //     onClick={() => setData()}
                    // />
                ) : (
                    <LoadingButton
                        text="Buscar"
                        loadingText="Aguarde..."
                        loading={loading}
                        startIcon={!loading && <QueryStatsIcon />}
                        variant="contained"
                        size="large"
                        type="submit"
                    />)}

            </Grid>
        </Grid>
    );
}
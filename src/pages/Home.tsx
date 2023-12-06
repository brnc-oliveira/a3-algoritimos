import { useEffect, useState } from "react";
import { Divider, Grid } from "@mui/material";

import PreviewCard from "../shared/components/previewCard";

import PageCard from "../core/layouts/page/Card";
import PageContainer from "../core/layouts/page/Container";
import PageHeader from "../core/layouts/page/Header";
import PageTitle from "../core/layouts/page/Title";

import HomeFilter from "./components/HomeFilter";
import RouteStatistics from "./components/RouteStatistics";
import Route from "./entities/route.entity";
import InfoStatistics from "./components/InfoStatistics";

export default function Home() {
    const [data, setData] = useState<Route>();
    const [destinyImage, setDestinyImage] = useState('');
    const [loading, setLoading] = useState(false);


    const imageHome = 'sul-catarinense.png'

    useEffect(() => {
        if (data?.destiny) {
            const destinyImage = `${data?.destiny}.jpg`
            setDestinyImage(destinyImage)
        }
    }, [data])

    return (
        <PageContainer>
            <PageHeader>
                <PageTitle title="CÁLCULO DE CUSTOS" />
            </PageHeader>

            <PageCard sx={{ width: 'inherit', marginTop: '15px', alignItems: 'center' }}>
                <HomeFilter loading={loading} setLoading={setLoading} setData={setData} data={data} />

                <Divider />

                {data ? (
                    <Grid container spacing={2}>
                        <Grid item gap={2} xs={12} marginBottom={3}>
                            <InfoStatistics loading={loading} data={data} />
                        </Grid>
                        <Grid item gap={2} xs={6}>
                            <RouteStatistics loading={loading} data={data} />
                        </Grid>
                        <Grid item xs={6}>
                            <PreviewCard loading={loading} fileName={destinyImage} />
                        </Grid>
                    </Grid>
                ) : (
                    <Grid>
                        <PreviewCard loading={loading} fileName={imageHome} />
                    </Grid>
                )}
            </PageCard>
        </PageContainer >
    );
}
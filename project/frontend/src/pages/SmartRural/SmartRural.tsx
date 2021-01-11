import {
    IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, 
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, 
    IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonItemOption, 
    IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, 
    IonMenuButton, IonPage, IonText, IonTitle, IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SmartRural.css';
import {
    addCircle, arrowBackCircle, key, add, addCircleOutline,
    timeOutline, folderOpen, calendarOutline, cardOutline
} from 'ionicons/icons';
import { Line, Bar, Pie , Doughnut} from 'react-chartjs-2';

import axios from 'axios';

const SmartRural: React.FC = (props) => {

    const { name } = useParams<{ name: string; }>();
    
    let barChart : any;
    let doughnutChart : any;

    let barChartData = {
        labels: new Array<number>(),
        datasets: [
            {
                label: 'Relación entre sensor y valores',
                backgroundColor: 'rgba(46, 49, 49, 1)',
                borderColor: 'rgba(46, 49, 49, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(236, 236, 236, 1)',
                hoverBorderColor: 'rgba(236, 236, 236, 1)',
                data: new Array<number>()
            }
        ]
    };
    
    let doughnutChartData = {
        labels: ['OpenCeilingGreenHouse', 'Irrigate', 'CanFertilizer', 'CanOpenWallGreenhouse'],
        datasets: [
            {
                label: 'Comparación de eventos disparados',
                backgroundColor: ['red', 'blue', 'green', 'magenta'],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(103, 128, 159, 1)',
                hoverBorderColor: 'rgba(103, 128, 159, 1)',
                data: new Array<number>()
            }
        ]
    };

    async function getDataAxios(url : string)
    {
        const { data } : any = await axios.get(url);

        return data;
    }

    async function getSensors()
    {
        const data : any = await getDataAxios('http://localhost:3000/api/v1/smartrural');
        const { count } = data.data;

        let sensors : Array<number> = [];
        let values : Array<number> = [];

        for(const sr of count)
        {
            sensors.push(sr.sensorId);
            values.push(sr.count);
        }

        return {
            sensors: sensors,
            values: values
        };
    }

    async function getEventsCount()
    {
        const urls : Array<string> = [
            'http://localhost:3000/api/v1/smartrural/OpenCeilingGreenHouse',
            'http://localhost:3000/api/v1/smartrural/Irrigate',
            'http://localhost:3000/api/v1/smartrural/CanFertilizer',
            'http://localhost:3000/api/v1/smartrural/CanOpenWallGreenhouse'
        ];

        let eventsCount : Array<number> = [];

        for(const url of urls)
        {
            const data : any = await getDataAxios(url);
            eventsCount.push(data.data.length);
        }

        return eventsCount;
    }

    useEffect(() =>  {
        (async () => {
            const { sensors, values } = await getSensors();
            barChartData.labels = sensors;
            barChartData.datasets[0].data = values;

            if(barChart != null)
                barChart.chartInstance.update();

            const eventsCount = await getEventsCount();
            doughnutChartData.datasets[0].data = eventsCount;

            if(doughnutChart != null)
                doughnutChart.chartInstance.update();
        })();
    });

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonList>
                <IonItem>
                    <Bar
                        ref={(reference) => barChart = reference}
                        data={barChartData} 
                        options={{ maintainAspectRatio: true}}
                        redraw />
                </IonItem>
                <IonItem>
                    <Doughnut
                        ref={(reference) => doughnutChart = reference}
                        data={doughnutChartData}
                        options={{ maintainAspectRatio: true}}
                        redraw />
                </IonItem>
            </IonList>
        </IonContent>
        </IonPage>
    );
};

export default SmartRural;

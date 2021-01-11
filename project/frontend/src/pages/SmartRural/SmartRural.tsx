import {
    IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, 
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, 
    IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonItemOption, 
    IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, 
    IonMenuButton, IonPage, IonText, IonTitle, IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './SmartRural.css';
import { Chart } from 'chart.js';
import {
    addCircle, arrowBackCircle, key, add, addCircleOutline,
    timeOutline, folderOpen, calendarOutline, cardOutline
} from 'ionicons/icons';
import { Line, Bar, Pie , Doughnut} from 'react-chartjs-2';

const SmartRural: React.FC = (props) => {

    const { name } = useParams<{ name: string; }>();

    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Relación entre sensor y valores',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };
    
    const doughnutChartData = {
        labels: ['Billable', 'Non Billable'],
        datasets: [
            {
                label: 'Billable Vs. Non Billable',
                backgroundColor: ['#36a2eb', 'rgba(255,99,132,0.2)'],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59]
            }
        ]
    };

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
            <ExploreContainer name={name} />

            <IonList>
                <IonItem>
                    <Bar data={barChartData}
                        options={{ maintainAspectRatio: true}}   />
                </IonItem>
                <IonItem>
                    <Doughnut data={doughnutChartData}
                        options={{ maintainAspectRatio: true}}   />
                </IonItem>
            </IonList>
        </IonContent>
        </IonPage>
    );
};

export default SmartRural;

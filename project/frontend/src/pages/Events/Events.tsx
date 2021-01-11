import {
  IonButtons, IonContent, IonHeader, IonItem, IonList, 
  IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import WbSunnyIcon from '@material-ui/icons/WbSunny';

import axios from 'axios';

import './Events.css';

const useStyles = makeStyles((theme : any) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Events: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const classes = useStyles();

  const [events, setState] = useState(new Array<any>());
  
  async function getDataAxios(url : string)
  {
      const { data } : any = await axios.get(url);

      return data;
  }

  async function getEvent(name : string)
  {
    const url : string = 'http://localhost:3000/api/v1/smartrural/' + name;
    return await getDataAxios(url);
  }

  useEffect(() =>  {
    (async () => {

        const { data } = await getEvent(name);

        setState(data);
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
            <Timeline align="alternate">
              {events.map((event, index) => {
                return (
                  <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          {event.date}
                        </Typography>
                      </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary">
                        {/* Icon event */}
                          <WbSunnyIcon />
                        {/* Icon event */}
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                          {name}
                        </Typography>
                        <Typography>{event.message}</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </IonItem>
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Events;
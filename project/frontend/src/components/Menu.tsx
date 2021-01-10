import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  earthOutline, earthSharp,
  homeOutline, homeSharp,
  waterOutline, waterSharp,
  eyedropOutline, eyedropSharp,
  rainyOutline, rainySharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'SmartRural',
    url: '/smartrural/SmartRural',
    iosIcon: earthOutline,
    mdIcon: earthSharp
  },
  {
    title: 'OpenCeilingGreenHouse',
    url: '/events/OpenCeilingGreenHouse',
    iosIcon: rainyOutline,
    mdIcon: rainySharp
  },
  {
    title: 'Irrigate',
    url: '/events/Irrigate',
    iosIcon: waterOutline,
    mdIcon: waterSharp
  },
  {
    title: 'CanFertilizer',
    url: '/events/CanFertilizer',
    iosIcon: eyedropOutline,
    mdIcon: eyedropSharp
  },
  {
    title: 'CanOpenWallGreenhouse',
    url: '/events/CanOpenWallGreenhouse',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>SmartRural ISI Project</IonListHeader>
          <IonNote>https://github.com/guilogar/isi</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem 
                    className={location.pathname === appPage.url ? 'selected' : ''}
                    routerLink={appPage.url} routerDirection="none" lines="none"
                    detail={false}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

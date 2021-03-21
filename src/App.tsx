import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonImg
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import HomePage from './pages/HomePage/HomePage'
import EnterPrisePage from './pages/EnterPrisePage/EnterPrisePage'
import { faHome, faUsers, faList, faShareAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsappIcon from './assets/icons/whatsapp.svg'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css'


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/HomePage">
            <HomePage />
          </Route>
          <Route exact path="/tab2">
            <EnterPrisePage />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>

          <Route path="/tab5">
            <Tab5 />
          </Route>
          <Route exact path="/">
            <Redirect to="/HomePage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className="ion-text-center" slot="bottom">
          <IonTabButton tab="HomePage" href="/HomePage">
            <FontAwesomeIcon icon={faHome} size="lg" />

          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <FontAwesomeIcon icon={faUsers} size="lg" />

          </IonTabButton>
          <IonTabButton href='https://api.whatsapp.com/send?phone=5521981331302&text=Boa%20tarde%2C%20Gostaria%20de%20fazer%20um%20Or%C3%A7amento%20de%20um%20de%20seus%20servi%C3%A7os.' className="whatsappTabButton">
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />

          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <FontAwesomeIcon icon={faList} size="lg" />

          </IonTabButton>

          <IonTabButton tab="tab5" href="/tab5">
            <FontAwesomeIcon icon={faShareAlt} size="lg" />



          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

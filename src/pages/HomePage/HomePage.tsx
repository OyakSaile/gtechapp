import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonLabel } from '@ionic/react';
import './HomePage.css';
import logo from '../../assets/logoLaranja.png'
import banner from '../../assets/banners/banner-principal.png'
import gtechflix from '../../assets/illustrations/gtechflix.svg'
import './HomePage.css'
import { faLaptopCode, faImages, faWrench, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HomePage: React.FC = () => {
    return (
        <IonPage className="bg-white">
            <IonContent className="bg-white" fullscreen>

                <IonGrid>
                    <IonRow>
                        <IonCol size="12 ">
                            <IonHeader className="ion-no-border ion-margin-vertical">

                                <IonImg src={logo} className="img-logo" />



                            </IonHeader>
                        </IonCol>

                    </IonRow>

                </IonGrid>

                <IonGrid>
                    <IonRow>
                        <IonCol className="banner-main">
                            <IonRow>
                                <IonImg className="main-img-banner ion-margin-horizontal" src={banner} />


                            </IonRow>

                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow className="ion-padding">
                        <h1 className="font-500 services-entry">Categorias de <br /> Serviços</h1>
                    </IonRow>
                    <IonRow className="ion-padding services-link">
                        <IonCol size="3" >
                            <div className="iconServices">
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </div>

                            <h2>Sites</h2>
                        </IonCol>

                        <IonCol size="3" >
                            <div className="iconServices">
                                <FontAwesomeIcon icon={faImages} />
                            </div>

                            <h2>Mídias</h2>
                        </IonCol>

                        <IonCol size="3" >
                            <div className="iconServices">
                                <FontAwesomeIcon icon={faWrench} />
                            </div>

                            <h2>Suporte</h2>
                        </IonCol>

                        <IonCol size="3" >

                            <div className="iconServices">
                                <FontAwesomeIcon icon={faHamburger} />
                                <div className="new">
                                    <p>Novo</p>
                                </div>
                            </div>

                            <h2>ZAPFOOD</h2>
                        </IonCol>

                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow className="ion-padding illustration-main">



                        <h2>Sem preocupações.</h2>
                        <p>Nós cuidamos de tudo, pra sobrar aquele tempinho para você ver o filme que tanto queria =)</p>


                    </IonRow>

                    <IonRow className="ion-margin-vertical">
                        <IonCol>
                            <IonImg src={gtechflix} />
                        </IonCol>
                    </IonRow>
                </IonGrid>


            </IonContent>
        </IonPage >
    );
};

export default HomePage;

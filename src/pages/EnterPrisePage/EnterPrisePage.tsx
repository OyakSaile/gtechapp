import { IonContent, IonHeader, IonPage, IonTitle, IonThumbnail, IonGrid, IonRow, IonCol, IonImg, IonLabel, IonButton, IonItem, IonList } from '@ionic/react';
import logo from '../../assets/logoLaranja.png'
import banner from '../../assets/banners/banner-principal.png'
import gtechabout from '../../assets/illustrations/gtechabout.svg'
import tabletgtech from '../../assets/illustrations/tabletgtech.svg'
import bruno from '../../assets/enterprise/bruno.png'
import talita from '../../assets/enterprise/talita.png'
import graci from '../../assets/enterprise/graci.png'
import guilherme from '../../assets/enterprise/guilherme.png'

import './EnterPrisePage.css'
import { faArrowRight, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EnterPrisePage: React.FC = () => {
    return (
        <IonPage className="bg-white">
            <IonContent className="bg-white" fullscreen>

                <IonGrid className="primary-color-bg">
                    <IonRow className="ion-padding">
                        <IonCol size="12" className="about-gtech-text">
                            <h1>Conheça a  GTECH VIRTUAL</h1>
                            <p>Com amor e paixão, crescemos, evoluímos e hoje estamos ajudando cada vez mais pessoas = )</p>

                            <a href="#">
                                <IonButton className="ion-margin-vertical " fill="clear" color="orange" >
                                    <p>
                                        Entrar em Contato
                                    </p>


                                    <FontAwesomeIcon icon=
                                        {faArrowRight} />


                                </IonButton>
                            </a>


                        </IonCol>


                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonImg src={gtechabout} />
                        </IonCol>
                    </IonRow>

                </IonGrid>

                <IonGrid className="ion-padding">
                    <h3>Nosso Propósito</h3>
                    <IonRow className="ion-margin-vertical">
                        <IonCol >
                            <h4 className="bold">Nós desenvolvemos as melhores soluções para aumentar a visibilidade do seu projeto! </h4>
                            <p>Pensamos em cada passo, para você mesmo que nunca teve nem contato com a web, possa começar uma empresa do zero.</p>


                        </IonCol>


                    </IonRow>

                    <IonRow className="ion-margin-vertical grid-servicos" >
                        <IonCol size="12">
                            <IonLabel >
                                1.
                            </IonLabel>
                            <h3 className="bold">Qualidade</h3>
                            <h4>Buscamos sempre entregar uma qualidade de serviço impecável.</h4>
                        </IonCol>

                        <IonCol size="12">
                            <IonLabel>
                                2.
                            </IonLabel>
                            <h3 className="bold">Velocidade</h3>
                            <h4>Temos um prazo para entregar super rápido, pois ninguém aguenta ficar esperando né?</h4>
                        </IonCol>

                        <IonCol size="12">
                            <IonLabel>
                                3.
                            </IonLabel>
                            <h3 className="bold">Suporte</h3>
                            <h4>Oferecemos um suporte extremamente rápido para qualquer problema que ocorra eu sem projeto</h4>
                        </IonCol>
                    </IonRow>
                </IonGrid>


                <IonList className="ion-padding">
                    <h2>Pessoas que fazem parte dessa história:</h2>




                    <IonItem className="ion-margin-vertical">
                        <IonItem className="card  ion-margin">




                            <IonThumbnail slot="start" >
                                <IonImg src={bruno}></IonImg>
                            </IonThumbnail>
                            <IonLabel className="ion-padding texto">
                                <h2>Bruno </h2>

                                <p className="primary">CEO</p>
                            </IonLabel>



                        </IonItem>



                    </IonItem>

                    <IonItem className="ion-margin-vertical">
                        <IonItem className="card  ion-margin">




                            <IonThumbnail slot="start" >
                                <IonImg src={talita}></IonImg>
                            </IonThumbnail>
                            <IonLabel className="ion-padding texto">
                                <h2>Talita </h2>

                                <p className="primary">CEO</p>
                            </IonLabel>



                        </IonItem>



                    </IonItem>

                    <IonItem className="ion-margin-vertical">
                        <IonItem className="card  ion-margin">




                            <IonThumbnail slot="start" >
                                <IonImg src={guilherme}></IonImg>
                            </IonThumbnail>
                            <IonLabel className="ion-padding texto">
                                <h2>Guilherme </h2>

                                <p className="primary">Desenvolvedor</p>
                            </IonLabel>



                        </IonItem>



                    </IonItem>

                    <IonItem className="ion-margin-vertical">
                        <IonItem className="card  ion-margin">




                            <IonThumbnail slot="start" >
                                <IonImg src={graci}></IonImg>
                            </IonThumbnail>
                            <IonLabel className="ion-padding texto">
                                <h2>Graciela </h2>

                                <p className="primary">Suporte Web</p>
                            </IonLabel>



                        </IonItem>



                    </IonItem>
                </IonList>
                {/* 
                <IonGrid className="ion-padding ion-text-center">
                    <h2 className="bold">Nossas Redes Sociais</h2>
                    <IonRow>
                        <IonCol size="4">
                            Facebook
                        </IonCol>
                        <IonCol size="4">
                            Instagram
                        </IonCol>
                        <IonCol size="4">
                            Whatsapp
                        </IonCol>
                    </IonRow>
                </IonGrid> */}

            </IonContent >
        </IonPage >
    );
};

export default EnterPrisePage;

import Translation from "./Translation";
import T from "./Translation";
import {UIElement} from "../UIElement";
import {FixedUiElement} from "../Base/FixedUiElement";


export default class Translations {

    constructor() {
        throw "Translations is static. If you want to intitialize a new translation, use the singular form"
    }


    static t = {
        cyclofix: {
            title: new T({
                en: 'Cyclofix - an open map for cyclists',
                nl: 'Cyclofix - een open kaart voor fietsers',
                fr: 'Cyclofix - Une carte ouverte pour les cyclistes'
            }),
            description: new T({
                en: "On this map we want to collect data about the whereabouts of bicycle pumps and public racks in Brussels and everywhere else." +
                    "As a result, cyclists will be able to quickly find the nearest infrastructure for their needs.",
                nl: "Op deze kaart willen we gegevens verzamelen over de locatie van fietspompen en openbare stelplaatsen in Brussel en overal ter wereld." +
                    "Hierdoor kunnen fietsers snel de dichtstbijzijnde infrastructuur vinden die voldoet aan hun behoeften.",
                fr: "Sur cette carte, nous voulons collecter des données sur la localisation des pompes à vélo et des supports publics à Bruxelles." +
                    "Les cyclistes pourront ainsi trouver rapidement l'infrastructure la plus proche pour leurs besoins."
            }),
            freeFormPlaceholder: new T({en: 'specify', nl: 'specifieer', fr: 'TODO: fr'}),
            parking: {
                name: new T({en: 'bike parking', nl: 'fietsparking', fr: 'parking à vélo'}),
                title: new T({en: 'Bike parking', nl: 'Fietsparking', fr: 'Parking à vélo'}),
                type: {
                    render: new T({
                        en: 'This is a bicycle parking of the type: {bicycle_parking}',
                        nl: 'Dit is een fietsenparking van het type: {bicycle_parking}',
                        fr: 'Ceci est un parking à vélo de type {bicycle_parking}'
                    }),
                    template: new T({en: 'Some other type: $$$', nl: 'Een ander type: $$$', fr: "D'autres types: $$$"}),
                    question: new T({
                        en: 'What is the type of this bicycle parking?',
                        nl: 'Van welk type is deze fietsenparking?',
                        fr: 'Quelle type de parking s\'agit il? '
                    }),
                    eg: new T({en: ", for example", nl: ", bijvoorbeeld", fr: ",par example"}),
                    stands: new T({en: 'Staple racks', nl: 'Nietjes', fr: 'Arceaux'}),
                    wall_loops: new T({en: 'Wheel rack/loops', nl: 'Wielrek/lussen', fr: 'Pinces-roues'}),
                    handlebar_holder: new T({en: 'Handlebar holder', nl: 'Stuurhouder', fr: 'Support guidon'}),
                    shed: new T({en: 'Shed', nl: 'Schuur', fr: 'Abri'}),
                    rack: new T({en: 'Rack', nl: 'Rek', fr: 'Râtelier'}),
                    "two-tier": new T({en: 'Two-tiered', nl: 'Dubbel (twee verdiepingen)', fr: 'Superposé'}),
                },

                operator: {
                    render: new T({
                        en: 'This bike parking is operated by {operator}',
                        nl: 'Deze fietsenparking wordt beheerd door {operator}',
                        fr: 'Ce parking est opéré par {operator}'
                    }),
                    template: new T({en: 'A different operator: $$$', nl: 'Een andere beheerder: $$$', fr: 'TODO: fr'}),
                    question: new T({
                        en: 'Who operates this bike station (name of university, shop, city...)?',
                        nl: 'Wie beheert deze fietsenparking (naam universiteit, winkel, stad...)?',
                        fr: 'Qui opére cette station vélo (nom de l\'université, magasin, vile...)'
                    }),
                    private: new T({
                        en: 'Operated by a private person',
                        nl: 'Wordt beheerd door een privépersoon',
                        fr: 'Opéré par un tier privé'
                    }),
                }
            },
            station: {
                name: new T({
                    en: 'bike station (repair, pump or both)',
                    nl: 'fietsstation (herstel, pomp of allebei)',
                    fr: 'station velo (réparation, pompe à vélo)'
                }),
                title: new T({en: 'Bike station', nl: 'Fietsstation', fr: 'Station vélo'}),
                manometer: {
                    question: new T({
                        en: 'Does the pump have a pressure indicator or manometer?',
                        nl: 'Heeft deze pomp een luchtdrukmeter?',
                        fr: 'Est-ce que la pompe à un manomètre integré?'
                    }),
                    yes: new T({en: 'There is a manometer', nl: 'Er is een luchtdrukmeter', fr: 'Il y a un manomètre'}),
                    no: new T({en: 'There is no manometer', nl: 'Er is geen luchtdrukmeter', fr: 'Il n\'y a pas de manomètre'}),
                    broken: new T({
                        en: 'There is manometer but it is broken',
                        nl: 'Er is een luchtdrukmeter maar die is momenteel defect',
                        fr: 'Il y a un manomètre mais il est cassé'
                    })
                },
                electric: {
                    question: new T({
                        en: 'Is this an electric bike pump?',
                        nl: 'Is dit een electrische fietspomp?',
                        fr: 'Est-ce que cette pompe est électrique?'
                    }),
                    manual: new T({en: 'Manual pump', nl: 'Manuele pomp', fr: 'Pompe manuelle'}),
                    electric: new T({en: 'Electrical pump', nl: 'Electrische pomp', fr: 'Pompe électrique'})
                },
                operational: {
                    question: new T({
                        en: 'Is the bike pump still operational?',
                        nl: 'Werkt de fietspomp nog?',
                        fr: 'Est-ce que cette pompe marche t\'elle toujours?'
                    }),
                    operational: new T({
                        en: 'The bike pump is operational',
                        nl: 'De fietspomp werkt nog',
                        fr: 'La pompe est opérationnelle'
                    }),
                    broken: new T({en: 'The bike pump is broken', nl: 'De fietspomp is kapot', fr: 'La pompe est cassé'})
                },
                valves: {
                    question: new T({
                        en: 'What valves are supported?',
                        nl: 'Welke ventielen werken er met de pomp?',
                        fr: 'Quelles valves sont compatibles?'
                    }),
                    default: new T({
                        en: 'There is a default head, so Dunlop, Sclaverand and auto',
                        nl: 'Er is een standaard aansluiting, die dus voor Dunlop, Sclaverand en auto\'s werkt',
                        fr: 'Il y a une valve par défaut, fonctionnant sur les valves Dunlop, Sclaverand et les valves de voitures'
                    }),
                    dunlop: new T({en: 'Only Dunlop', nl: 'Enkel Dunlop', fr: 'TODO: fr'}),
                    sclaverand: new T({
                        en: 'Only Sclaverand (also known as Presta)',
                        nl: 'Enkel Sclaverand (ook gekend als Presta)',
                        fr: 'Seulement Sclaverand (aussi appelé Presta)'
                    }),
                    auto: new T({en: 'Only for cars', nl: 'Enkel voor auto\'s', fr: 'TODO: fr'}),
                    render: new T({
                        en: 'This pump supports the following valves: {valves}',
                        nl: 'Deze pomp werkt met de volgende ventielen: {valves}',
                        fr: 'Cette pompe est compatible avec les valves suivantes: {valves}'
                    }),
                    template: new T({
                        en: 'Some other valve(s): $$$',
                        nl: 'Een ander type ventiel(en): $$$',
                        fr: 'Autre(s) type(s) de valve(s): $$$'
                    })
                },
                chain: {
                    question: new T({
                        en: 'Does this bike station have a special tool to repair your bike chain?',
                        nl: 'Heeft dit fietsstation een speciale reparatieset voor je ketting?',
                        fr: 'Est-ce que cette station vélo a un outils specifique pour réparer la chaîne du velo?'
                    }),
                    yes: new T({
                        en: 'There is a chain tool',
                        nl: 'Er is een reparatieset voor je ketting',
                        fr: 'Il y a un outil pour réparer la chaine'
                    }),
                    no: new T({
                        en: 'There is no chain tool',
                        nl: 'Er is geen reparatieset voor je ketting',
                        fr: 'Il n\'y a pas d\'outil pour réparer la chaine'
                    }),
                },
                operator: {
                    render: new T({
                        en: 'This bike station is operated by {operator}',
                        nl: 'Dit fietsstation wordt beheerd door {operator}',
                        fr: 'Cette station vélo est opéré par {operator}'
                    }),
                    template: new T({en: 'A different operator: $$$', nl: 'Een andere beheerder: $$$', fr: 'TODO: fr'}),
                    question: new T({
                        en: 'Who operates this bike station (name of university, shop, city...)?',
                        nl: 'Wie beheert dit fietsstation (naam universiteit, winkel, stad...)?',
                        fr: 'Qui opére cette station vélo (nom de l\'université, magasin, ville...)?'
                    }),
                    private: new T({
                        en: 'Operated by a private person',
                        nl: 'Wordt beheerd door een privépersoon',
                        fr: 'Operé par un tier privé'
                    }),
                },
                services: {
                    question: new T({
                        en: 'Which services are available at this bike station?',
                        nl: 'Welke functies biedt dit fietsstation?',
                        fr: 'Quels services sont valables à cette station vélo?'
                    }),
                    pump: new T({
                        // Note: this previously read: a pump is available. It is not because the pump is present, that it is available (e.g. broken)
                        en: 'There is only a pump present',
                        nl: 'Er is enkel een pomp aanwezig',
                        fr: 'Il y a seulement une pompe'
                    }),
                    tools: new T({
                        en: 'There are only tools (screwdrivers, pliers...) aanwezig',
                        nl: 'Er is enkel gereedschap aanwezig (schroevendraaier, tang...)',
                        fr: 'Il y a seulement des outils (tournevis, pinces...'
                    }),
                    both: new T({
                        en: 'There are both tools and a pump present',
                        nl: 'Er is zowel een pomp als gereedschap aanwezig',
                        fr: 'IL y a des outils et une pompe'
                    }),
                },
                stand: {
                    question: new T({
                        en: 'Does this bike station have a hook to suspend your bike with or a stand to elevate it?',
                        nl: 'Heeft dit fietsstation een haak of standaard om je fiets op te hangen/zetten?',
                        fr: 'Est-ce que cette station vélo à un crochet pour suspendre son velo ou une accroche pour l\'élevé?'
                    }),
                    yes: new T({en: 'There is a hook or stand', nl: 'Er is een haak of standaard', fr: 'Oui il y a un crochet ou une accroche'}),
                    no: new T({en: 'There is no hook or stand', nl: 'Er is geen haak of standaard', fr: 'Non il n\'y pas de crochet ou d\'accroche'}),
                }
            },
            shop: {
                name: new T({en: 'bike shop', nl: 'fietswinkel', fr: 'magasin de vélo'}),
                
                title: new T({en: 'Bike shop', nl: 'Fietszaak', fr: 'Magasin de vélo'}),
                titleRepair: new T({en: 'Bike repair', nl: 'Fietsenmaker', fr: 'Réparateur de vélo'}),
                titleShop: new T({en: 'Bike repair/shop', nl: 'Fietswinkel', fr: 'Magasin et réparateur de vélo'}),
                
                titleNamed: new T({en: 'Bike repair/shop', nl: 'Fietszaak {name}', fr: 'Magasin de vélo'}),
                titleRepairNamed: new T({en: 'Bike shop', nl: 'Fietsenmaker {name}', fr: 'Réparateur de vélo'}),
                titleShopNamed: new T({en: 'Bike repair/shop', nl: 'Fietswinkel {name}', fr: 'Magasin et réparateur de vélo'}),



                retail: {
                    question: new T({
                        en: 'Does this shop sell bikes?',
                        nl: 'Verkoopt deze winkel fietsen?',
                        fr: 'Est-ce que ce magasin vend des vélos?'
                    }),
                    yes: new T({en: 'This shop sells bikes', nl: 'Deze winkel verkoopt fietsen', fr: 'Ce magasin vend des vélos'}),
                    no: new T({
                        en: 'This shop doesn\'t sell bikes',
                        nl: 'Deze winkel verkoopt geen fietsen',
                        fr: 'Ce magasin ne vend pas de vélo'
                    }),
                },
                repair: {
                    question: new T({
                        en: 'Does this shop repair bikes?',
                        nl: 'Verkoopt deze winkel fietsen?',
                        fr: 'Est-ce que ce magasin répare des vélos?'
                    }),
                    yes: new T({en: 'This shop repairs bikes', nl: 'Deze winkel herstelt fietsen', fr: 'Ce magasin répare des vélos'}),
                    no: new T({
                        en: 'This shop doesn\'t repair bikes',
                        nl: 'Deze winkel herstelt geen fietsen',
                        fr: 'Ce magasin ne répare pas les vélos'
                    }),
                    sold: new T({en: 'This shop only repairs bikes bought here', nl: 'Deze winkel herstelt enkel fietsen die hier werden gekocht', fr: 'Ce magasin ne répare seulement les vélos achetés là-bas'}),
                    brand: new T({en: 'This shop only repairs bikes of a certain brand', nl: 'Deze winkel herstelt enkel fietsen van een bepaald merk', fr: 'Ce magasin ne répare seulement des marques spécifiques'}),
                },
                rental: {
                    question: new T({
                        en: 'Does this shop rent out bikes?',
                        nl: 'Verhuurt deze winkel fietsen?',
                        fr: 'Est-ce ce magasin loue des vélos?'
                    }),
                    yes: new T({en: 'This shop rents out bikes', nl: 'Deze winkel verhuurt fietsen', fr: 'Ce magasin loue des vélos'}),
                    no: new T({
                        en: 'This shop doesn\'t rent out bikes',
                        nl: 'Deze winkel verhuurt geen fietsen',
                        fr: 'Ce magasin ne loue pas de vélos'
                    }),
                },
                pump: {
                    question: new T({
                        en: 'Does this shop offer a bike pump for use by anyone?',
                        nl: 'Biedt deze winkel een fietspomp aan voor iedereen?',
                        fr: 'Est-ce que ce magasin offre une pompe en accès libre?'
                    }),
                    yes: new T({
                        en: 'This shop offers a bike pump for anyone',
                        nl: 'Deze winkel biedt geen fietspomp aan voor eender wie',
                        fr: 'Ce magasin offre une pompe en acces libre'
                    }),
                    no: new T({
                        en: 'This shop doesn\'t offer a bike pump for anyone',
                        nl: 'Deze winkel biedt een fietspomp aan voor iedereen',
                        fr: 'Ce magasin n\offre pas de pompe en libre accès'
                    })
                },
                qName: {
                    question: new T({en: 'What is the name of this bicycle shop?', nl: 'Wat is de naam van deze fietszaak?', fr: 'Quel est le nom du magasin de vélo?'}),
                    render: new T({en: 'This bicycle shop is called {name}', nl: 'Deze fietszaak heet <b>{name}</b>', fr: 'Ce magasin s\appelle <b>{name}</b>'}),
                    template: new T({en: 'This bicycle shop is called: $$$', nl: 'Deze fietszaak heet: <b>$$$</b>', fr: 'Ce magasin s\appelle <b>{$$$</b>'})
                },
                secondHand: {
                    question: new T({en: 'Does this shop sell second-hand bikes?', nl: 'Verkoopt deze winkel tweedehands fietsen?', fr: 'Est-ce ce magasin vend des vélos d\'occasion'}),
                    yes: new T({en: 'This shop sells second-hand bikes', nl: 'Deze winkel verkoopt tweedehands fietsen', fr: 'Ce magasin vend des vélos d\'occasion'}),
                    no: new T({en: 'This shop doesn\'t sell second-hand bikes', nl: 'Deze winkel verkoopt geen tweedehands fietsen', fr: 'Ce magasin ne vend pas de vélos d\'occasion'}),
                    only: new T({en: 'This shop only sells second-hand bikes', nl: 'Deze winkel verkoopt enkel tweedehands fietsen', fr: 'Ce magasin vend seulement des vélos d\'occasion'}),
                },
                diy: {
                    question: new T({
                        en: 'Are there tools here to repair your own bike?',
                        nl: 'Biedt deze winkel gereedschap aan om je fiets zelf te herstellen?',
                        fr: 'Est-ce qu\'il y a des outils pour réparer son vélo dans ce magasin?',
                    }),
                    yes: new T({
                        en: 'This shop offers tools for DIY repair',
                        nl: 'Deze winkel biedt gereedschap aan om je fiets zelf te herstellen',
                        fr: 'Ce magasin offre des outils pour réparer son vélo soi-même'
                    }),
                    no: new T({
                        en: 'This shop doesn\'t offer tools for DIY repair',
                        nl: 'Deze winkel biedt geen gereedschap aan om je fiets zelf te herstellen',
                        fr: 'Ce magasin n\'offre pas des outils pour réparer son vélo soi-même'
                    }),
                }
            },
            drinking_water: {
                title: new T({
                    en: 'Drinking water',
                    nl: "Drinkbaar water",
                    fr: "Eau potable"
                })
            }
        },
        bookcases: {
            title: new T({en: "Open Bookcase Map", nl: "Open Boekenkastjes kaart"}, ),
            description: new T({
                    en: "Search a bookcase near you and add information about them in the biggest shared map of the world.",
                    nl: "Help mee met het creëeren van een volledige kaart met alle boekenruilkastjes!" +
                        "Een boekenruilkastje is een vaste plaats in publieke ruimte waar iedereen een boek in kan zetten of uit kan meenemen." +
                        "Meestal een klein kastje of doosje dat op straat staat, maar ook een oude telefooncellen of een schap in een station valt hieronder."
                }
            ),
            bookcase: new T({
                nl: "Boekenruilkastje",
                en: "Public bookcase"
            }),
            questions: {
                hasName: new T(
                    {
                        nl: "Heeft dit boekenruilkastje een naam?",
                        en: "Does this bookcase have a name?"
                    }),
                noname: new T({
                        nl: "Neen, er is geen naam aangeduid op het boekenruilkastje",
                        en: "No, there is no clearly visible name on the public bookcase"
                    },
                ),
                capacity: new T({
                    nl: "Hoeveel boeken passen in dit boekenruilkastje?",
                    en: "How much books fit into this public bookcase?"
                }),
                capacityRender: new T({
                    nl: "Er passen {capacity} boeken in dit boekenruilkastje",
                    en: "{capacity} books fit in this bookcase"
                }),
                capacityInput: new T({
                    nl: "Er passen $nat$ boeken in dit boekenruilkastje",
                    en: "$nat$ books fit into this public bookcase"
                }),
                bookkinds: new T({
                    nl: "Wat voor soort boeken heeft dit boekenruilkastje?",
                    en: "What kind of books can be found in this public bookcase"
                })
            }


        },

        image: {
            addPicture: new T({en: 'Add picture', nl: 'Voeg foto toe', fr: 'TODO: fr'}),
            uploadingPicture: new T({
                en: 'Uploading your picture...',
                nl: 'Bezig met een foto te uploaden...',
                fr: 'Mettre votre photo en ligne'
            }),
            pleaseLogin: new T({
                en: 'Please login to add a picure or to answer questions',
                nl: 'Gelieve je aan te melden om een foto toe te voegen of vragen te beantwoorden',
                fr: 'Merci de vous connecter pour mettre une photo en ligne ou répondre aux questions'
            }),
            willBePublished: new T({
                en: 'Your picture will be published: ',
                nl: 'Jouw foto wordt gepubliceerd: ',
                fr: 'Votre photo va être publié'
            }),
            cco: new T({en: 'in the public domain', nl: 'in het publiek domein', fr: 'sur le domaine publique'}),
            ccbs: new T({en: 'under the CC-BY-SA-license', nl: 'onder de CC-BY-SA-licentie', fr: 'sous la license CC-BY-SA'}),
            ccb: new T({en: 'under the CC-BY-license', nl: 'onder de CC-BY-licentie', fr: 'sous la license CC-BY'}),
            respectPrivacy: new T({
                en: "Please respect privacy. Do not photograph people nor license plates",
                nl: "Respecteer privacy. Fotografeer geen mensen of nummerplaten",
                fr: "TODO: fr"
            })
        },
        centerMessage: {
            loadingData: new T({en: 'Loading data...', nl: 'Data wordt geladen...', fr: 'chargement des données'}),
            zoomIn: new T({
                en: 'Zoom in to view or edit the data',
                nl: 'Zoom in om de data te zien en te bewerken',
                fr: 'TODO Fr',
            }),
            ready: new T({en: 'Done!', nl: 'Klaar!', fr: 'Finis!'}),
        },
        general: {
            loginWithOpenStreetMap: new T({en: "Login with OpenStreetMap", nl: "Aanmelden met OpenStreetMap", fr:'Se connecter avec OpenStreeMap'}),
            getStarted: new T({
                en: "<span class='activate-osm-authentication'>Login with OpenStreetMap</span> or <a href='https://www.openstreetmap.org/user/new' target='_blank'>make a free account to get started</a>",
                nl: "<span class='activate-osm-authentication'>Meld je aan met je OpenStreetMap-account</span> of <a href='https://www.openstreetmap.org/user/new' target='_blank'>maak snel en gratis een account om te beginnen</a>",
                fr: "<span class='activate-osm-authentication'>Se connecter avec OpenStreetMap</span> ou <a href='https://www.openstreetmap.org/user/new' target='_blank'>créer un compte gratuitement pour commencer</a>",
            
            }),
            welcomeBack: new T({
                en: "You are logged in, welcome back!",
                nl: "Je bent aangemeld. Welkom terug!",
                fr: "Vous êtes connecté, bienvenue"
            }),
            search: {
                search: new Translation({
                    en: "Search a location",
                    nl: "Zoek naar een locatie",
                    fr: "Chercher une location"
                }),
                searching: new Translation({
                    en: "Searching...",
                    nl: "Aan het zoeken...",
                    fr: "Chargement"
                    
                }),
                nothing: new Translation({
                    en: "Nothing found...",
                    nl: "Niet gevonden...",
                    fr: "Rien n'a été trouvé "
                }),
                error: new Translation({
                    en: "Something went wrong...",
                    nl: "Niet gelukt...",
                    fr: "Quelque chose n\'a pas marché..."
             
                })

            },
            returnToTheMap: new T({
                en: "Return to the map",
                nl: "Naar de kaart",
                fr: "Retourner sur la carte"
             
            }),
            save: new T({
                en: "Save",
                nl: "Opslaan",
                fr: "Sauvegarder"
            }),
            cancel: new T({
                en: "Cancel",
                nl: "Annuleren",
                fr: "Annuler"
            }),
            skip: new T({
                en: "Skip this question",
                nl: "Vraag overslaan",
                fr: "Passer la question"
              
            }),
            oneSkippedQuestion: new T({
                en: "One question is skipped",
                nl: "Een vraag is overgeslaan",
                fr: "Une question a été passé"
            }),
            skippedQuestions: new T({
                en: "Some questions are skipped",
                nl: "Sommige vragen zijn overgeslaan",
                fr: "Questions passées"
            }),
            number: new T({
                en: "number",
                nl: "getal",
                fr: "Nombre"
            }),

            osmLinkTooltip: new T({
               en: "See this object on OpenStreetMap for history and more editing options",
                nl: "Bekijk dit object op OpenStreetMap waar geschiedenis en meer aanpasopties zijn"
            }),
            
            add: {

                addNew: new T({
                    en: "Add a new {category} here",
                    nl: "Voeg hier een {category} toe"
                }),
                header: new T({
                    en: "<h2>No data</h2>You clicked somewhere where no data is known yet.<br/>",
                    nl: "<h2>Geen selectie</h2>Je klikte ergens waar er nog geen data is.<br/>"
                }),
                pleaseLogin: new T({
                    en: "<a class='activate-osm-authentication'>Please log in to add a new point</a>",
                    nl: "<a class='activate-osm-authentication'>Gelieve je aan te melden om een punt to te voegen</a>"
                }),
                zoomInFurther: new T({
                    en: "Zoom in further to add a point.",
                    nl: "Gelieve verder in te zoomen om een punt toe te voegen"
                }),
                stillLoading: new T({
                    en: "The data is still loading. Please wait a bit before you add a new point",
                    nl: "De data wordt nog geladen. Nog even geduld en dan kan je een punt toevoegen."
                })
            },
            pickLanguage: new T({
                en: "Choose a language",
                nl: "Kies je taal"
            }),
            about: new T({
                en: "Easily edit and add OpenStreetMap for a certain theme",
                nl: "Easily edit and add OpenStreetMap for a certain theme"

            }),
            nameInlineQuestion: new T({
              nl:  "De naam van dit {category} is $$$"
            }),
            noNameCategory: new T({
                nl: "{category} zonder naam"
            }),
            questions: {
                phoneNumberOf: new T({
                    en: "What is the phone number of {category}?",
                    nl: "Wat is het telefoonnummer van {category}?"

                }),
                phoneNumberIs: new T({
                    en: "The phone number of this {category} is <a href='tel:{phone}' target='_blank'>{phone}</a>",
                    nl: "Het telefoonnummer van {category} is <a href='tel:{phone}' target='_blank'>{phone}</a>"
                })

            }
        }
    }

    public static W(s: string | UIElement): UIElement {
        if (s instanceof UIElement) {
            return s;
        }
        return new FixedUiElement(s);
    }

    public static CountTranslations() {
        const queue: any = [Translations.t];
        const tr: Translation[] = [];
        while (queue.length > 0) {
            const item = queue.pop();
            if (item instanceof Translation || item.translations !== undefined) {
                tr.push(item);
            } else {
                for (const t in item) {
                    const x = item[t];
                    queue.push(x)
                }
            }
        }

        const langaugeCounts = {};
        for (const translation of tr) {
            for (const language in translation.translations) {
                if (langaugeCounts[language] === undefined) {
                    langaugeCounts[language] = 1
                } else {
                    langaugeCounts[language]++;
                }
            }
        }
        for (const language in langaugeCounts) {
            console.log("Total translations in ", language, langaugeCounts[language], "/", tr.length)
        }

    }

}

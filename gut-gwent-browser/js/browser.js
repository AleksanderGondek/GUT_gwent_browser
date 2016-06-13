'use strict';
var app = angular.module('gutGwentBrowser', ['winjs']);

app.service('cards', function () {
    var service = {};

    service.getCards = function() {
        var allCards = [
            {
                name: 'Geralt of Rivia',
                strength: 15,
                abilities: '',
                faction: 'Neutral',
                isHero: true,
                image: 'images/cardImages/geralt-of-rivia-preview.jpg',
                imageBig: 'images/cardImages/geralt-of-rivia-big.jpg'
            },
            {
                name: 'Cirilla Fiona Elen Rianno',
                strength: 15,
                abilities: '',
                faction: 'Neutral',
                isHero: true,
                image: 'images/cardImages/cirilla-fiona-elen-riannon-preview.jpg',
                imageBig: 'images/cardImages/cirilla-fiona-elen-riannon-big.jpg'
            },
            {
                name: 'Vesemir',
                strength: 6,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/vesemir-preview.jpg',
                imageBig: 'images/cardImages/vesemir-big.jpg'
            },
            {
                name: 'Yennefer of Vengerberg',
                strength: 7,
                abilities: 'Medic',
                faction: 'Neutral',
                isHero: true,
                image: 'images/cardImages/yennefer-of-vengerberg-preview.jpg',
                imageBig: 'images/cardImages/yennefer-of-vengerberg-big.jpg'
            },
            {
                name: 'Triss Merigold',
                strength: 7,
                abilities: '',
                faction: 'Neutral',
                isHero: true,
                image: 'images/cardImages/triss-merigold-preview.jpg',
                imageBig: 'images/cardImages/triss-merigold-big.jpg'
            },
            {
                name: 'Dandelion',
                strength: 2,
                abilities: 'Morale',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/dandelion-preview.jpg',
                imageBig: 'images/cardImages/dandelion-big.jpg'
            },
            {
                name: 'Zoltan Chivay',
                strength: 5,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/zoltan-chivay-preview.jpg',
                imageBig: 'images/cardImages/zoltan-chivay-big.jpg'
            },
            {
                name: 'Emiel Regis Rohellec Terzieff',
                strength: 5,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/emiel-regis-rohellec-terzieff-preview.jpg',
                imageBig: 'images/cardImages/emiel-regis-rohellec-terzieff-big.jpg'
            },
            {
                name: 'Villentretenmerth',
                strength: 7,
                abilities: 'Scorch',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/villentrerenmerth-preview.jpg',
                imageBig: 'images/cardImages/villentrerenmerth-big.jpg'
            },
            {
                name: "Avallac’h",
                strength: 0,
                abilities: 'Spy',
                faction: 'Neutral',
                isHero: true,
                image: 'images/cardImages/avallach-preview.jpg',
                imageBig: 'images/cardImages/avallach-big.jpg'
            },
            {
                name: 'Decoy',
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/decoy-preview.jpg',
                imageBig: 'images/cardImages/decoy-big.jpg'
            },
            {
                name: "Commander’s Horn",
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/commanders-horn-preview.jpg',
                imageBig: 'images/cardImages/commanders-horn-big.jpg'
            },
            {
                name: 'Scorch',
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/scorch-preview.jpg',
                imageBig: 'images/cardImages/scorch-big.jpg'
            },
            {
                name: 'Biting Frost',
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/biting-frost-preview.jpg',
                imageBig: 'images/cardImages/biting-frost-big.jpg'
            },
            {
                name: 'Impenetrable Fog',
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/impenetrable-fog-preview.jpg',
                imageBig: 'images/cardImages/impenetrable-fog-big.jpg'
            },
            {
                name: 'Torrential Rain',
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/torrential-rain-preview.jpg',
                imageBig: 'images/cardImages/torrential-rain-big.jpg'
            },
            {
                name: 'Clear Weather',
                strength: 0,
                abilities: '',
                faction: 'Neutral',
                isHero: false,
                image: 'images/cardImages/clear-weather-preview.jpg',
                imageBig: 'images/cardImages/clear-weather-big.jpg'
            },
            {
                name: 'Vernon Roche',
                strength: 10,
                abilities: '',
                faction: 'Northern Realms',
                isHero: true,
                image: 'images/cardImages/vernon-roche-preview.jpg',
                imageBig: 'images/cardImages/vernon-roche-big.jpg'
            },
            {
                name: 'John Natalis',
                strength: 10,
                abilities: '',
                faction: 'Northern Realms',
                isHero: true,
                image: 'images/cardImages/john-natalis-preview.jpg',
                imageBig: 'images/cardImages/john-natalis-big.jpg'
            },
            {
                name: 'Esterad Thyssen',
                strength: 10,
                abilities: '',
                faction: 'Northern Realms',
                isHero: true,
                image: 'images/cardImages/esterad-thyssen-preview.jpg',
                imageBig: 'images/cardImages/esterad-thyssen-big.jpg'
            },
            {
                name: 'Philippa Eilhart',
                strength: 10,
                abilities: '',
                faction: 'Northern Realms',
                isHero: true,
                image: 'images/cardImages/philippa-eilhart-preview.jpg',
                imageBig: 'images/cardImages/philippa-eilhart-big.jpg'
            },
            {
                name: 'Thaler',
                strength: 1,
                abilities: 'Spy',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/thaler-preview.jpg',
                imageBig: 'images/cardImages/thaler-big.jpg'
            },
            {
                name: 'Ves',
                strength: 5,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/ves-preview.jpg',
                imageBig: 'images/cardImages/ves-big.jpg'
            },
            {
                name: 'Siegfried of Denesle',
                strength: 5,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/siegfried-of-denesle-preview.jpg',
                imageBig: 'images/cardImages/siegfried-of-denesle-big.jpg'
            },
            {
                name: 'Yarpen Zigrin',
                strength: 2,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/yarpen-zigrin-preview.jpg',
                imageBig: 'images/cardImages/yarpen-zigrin-big.jpg'
            },
            {
                name: 'Sigismund Dijkstra',
                strength: 4,
                abilities: 'Spy',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/sigismund-dijkstra-preview.jpg',
                imageBig: 'images/cardImages/sigismund-dijkstra-big.jpg'
            },
            {
                name: 'Keira Metz',
                strength: 5,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/keira-metz-preview.jpg',
                imageBig: 'images/cardImages/keira-metz-big.jpg'
            },
            {
                name: 'Síle de Tansarville',
                strength: 5,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/sile-de-tansarville-preview.jpg',
                imageBig: 'images/cardImages/sile-de-tansarville-big.jpg'
            },
            {
                name: 'Sabrina Glevissig',
                strength: 4,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/sabrina-glevissig-preview.jpg',
                imageBig: 'images/cardImages/sabrina-glevissig-big.jpg'
            },
            {
                name: 'Sheldon Skaggs',
                strength: 4,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/sheldon-skaggs-preview.jpg',
                imageBig: 'images/cardImages/sheldon-skaggs-big.jpg'
            },
            {
                name: 'Dethmold',
                strength: 6,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/dethmold-preview.jpg',
                imageBig: 'images/cardImages/dethmold-big.jpg'
            },
            {
                name: 'Prince Stennis',
                strength: 5,
                abilities: 'Spy',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/prince-stennis-preview.jpg',
                imageBig: 'images/cardImages/prince-stennis-big.jpg'
            },
            {
                name: 'Trebuchet',
                strength: 6,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/trebuchet-preview.jpg',
                imageBig: 'images/cardImages/trebuchet-big.jpg'
            },
            {
                name: 'Poor Fucking Infantry',
                strength: 1,
                abilities: 'Bond',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/poor-fucking-infantry-preview.jpg',
                imageBig: 'images/cardImages/poor-fucking-infantry-big.jpg'
            },
            {
                name: 'Crinfrid Reavers Dragon Hunter',
                strength: 5,
                abilities: 'Bond',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/crinfrid-reavers-dragon-hunter-preview.jpg',
                imageBig: 'images/cardImages/crinfrid-reavers-dragon-hunter-big.jpg'
            },
            {
                name: 'Redanian Foot Soldier',
                strength: 1,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/redanian-foot-soldier-preview.jpg',
                imageBig: 'images/cardImages/redanian-foot-soldier-big.jpg'
            },
            {
                name: 'Catapult',
                strength: 8,
                abilities: 'Bond',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/catapult-preview.jpg',
                imageBig: 'images/cardImages/catapult-big.jpg'
            },
            {
                name: 'Ballista',
                strength: 6,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/ballista-preview.jpg',
                imageBig: 'images/cardImages/ballista-big.jpg'
            },
            {
                name: 'Kaedweni Siege Expert',
                strength: 1,
                abilities: 'Morale',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/keadweni-siege-expert-preview.jpg',
                imageBig: 'images/cardImages/keadweni-siege-expert-big.jpg'
            },
            {
                name: 'Blue Stripes Commando',
                strength: 4,
                abilities: 'Bond',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/blue-stripes-commando-preview.jpg',
                imageBig: 'images/cardImages/blue-stripes-commando-big.jpg'
            },
            {
                name: 'Siege Tower',
                strength: 6,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/siege-tower-preview.jpg',
                imageBig: 'images/cardImages/siege-tower-big.jpg'
            },
            {
                name: 'Dun Banner Medic',
                strength: 5,
                abilities: 'Medic',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/dun-banner-medic-preview.jpg',
                imageBig: 'images/cardImages/dun-banner-medic-big.jpg'
            },
            {
                name: 'Letho of Gulet',
                strength: 10,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: true,
                image: 'images/cardImages/letho-of-gulet-preview.jpg',
                imageBig: 'images/cardImages/letho-of-gulet-big.jpg'
            },
            {
                name: 'Menno Coehoorn',
                strength: 10,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: true,
                image: 'images/cardImages/menno-coehoorn-preview.jpg',
                imageBig: 'images/cardImages/menno-coehoorn-big.jpg'
            },
            {
                name: 'Morvran Voorhis',
                strength: 10,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: true,
                image: 'images/cardImages/morvran-voorhis-preview.jpg',
                imageBig: 'images/cardImages/morvran-voorhis-big.jpg'
            },
            {
                name: 'Tibor Eggebracht',
                strength: 10,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: true,
                image: 'images/cardImages/tibor-eggebracht-preview.jpg',
                imageBig: 'images/cardImages/tibor-eggebracht-big.jpg'
            },
            {
                name: 'Albrich',
                strength: 2,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/albrich-preview.jpg',
                imageBig: 'images/cardImages/albrich-big.jpg'
            },
            {
                name: 'Assire var Anahid',
                strength: 6,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/assire-var-anahid-preview.jpg',
                imageBig: 'images/cardImages/assire-var-anahid-big.jpg'
            },
            {
                name: 'Cynthia',
                strength: 4,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/cynthia-preview.jpg',
                imageBig: 'images/cardImages/cynthia-big.jpg'
            },
            {
                name: 'Fringilla Vigo',
                strength: 6,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/fringilla-vigo-preview.jpg',
                imageBig: 'images/cardImages/fringilla-vigo-big.jpg'
            },
            {
                name: 'Morteisen',
                strength: 3,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/morteisen-preview.jpg',
                imageBig: 'images/cardImages/morteisen-big.jpg'
            },
            {
                name: 'Rainfarn',
                strength: 4,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/rainfarn-preview.jpg',
                imageBig: 'images/cardImages/rainfarn-big.jpg'
            },
            {
                name: 'Renuald aep Matsen',
                strength: 5,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/renuald-aep-matsen-preview.jpg',
                imageBig: 'images/cardImages/renuald-aep-matsen-big.jpg'
            },
            {
                name: 'Rotten Mangonel',
                strength: 3,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/rotten-mangonel-preview.jpg',
                imageBig: 'images/cardImages/rotten-mangonel-big.jpg'
            },
            {
                name: 'Shilard Fitz-Oesterlen',
                strength: 7,
                abilities: 'Spy',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/shilard-fitz-oesterlen-preview.jpg',
                imageBig: 'images/cardImages/shilard-fitz-oesterlen-big.jpg'
            },
            {
                name: 'Stefan Skellen',
                strength: 9,
                abilities: 'Spy',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/stefan-skellen-preview.jpg',
                imageBig: 'images/cardImages/stefan-skellen-big.jpg'
            },
            {
                name: 'Sweers',
                strength: 2,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/sweers-preview.jpg',
                imageBig: 'images/cardImages/sweers-big.jpg'
            },
            {
                name: 'Vanhemar',
                strength: 4,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/vanhemar-preview.jpg',
                imageBig: 'images/cardImages/vanhemar-big.jpg'
            },
            {
                name: 'Vattier de Rideaux',
                strength: 4,
                abilities: 'Spy',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/vattier-de-rideaux-preview.jpg',
                imageBig: 'images/cardImages/vattier-de-rideaux-big.jpg'
            },
            {
                name: 'Vreemde',
                strength: 2,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/vreemde-preview.jpg',
                imageBig: 'images/cardImages/vreemde-big.jpg'
            },
            {
                name: 'Cahir Mawr Dyffryn aep Ceallach',
                strength: 6,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/cahir-mawr-dyffryn-aep-ceallach-preview.jpg',
                imageBig: 'images/cardImages/cahir-mawr-dyffryn-aep-ceallach-big.jpg'
            },
            {
                name: 'Puttkammer',
                strength: 3,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/puttkammer-preview.jpg',
                imageBig: 'images/cardImages/puttkammer-big.jpg'
            },
            {
                name: 'Etolian Auxiliary Archers',
                strength: 1,
                abilities: 'Medic',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/etolian-auxiliary-archers-preview.jpg',
                imageBig: 'images/cardImages/etolian-auxiliary-archers-big.jpg'
            },
            {
                name: 'Black Infantry Archer',
                strength: 10,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/black-infantry-archer-preview.jpg',
                imageBig: 'images/cardImages/black-infantry-archer-big.jpg'
            },
            {
                name: 'Siege Technician',
                strength: 0,
                abilities: 'Medic',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/siege-technician-preview.jpg',
                imageBig: 'images/cardImages/siege-technician-big.jpg'
            },
            {
                name: 'Heavy Zerrikanian Fire Scorpion',
                strength: 10,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/heavy-zerrikanian-fire-scorpion-preview.jpg',
                imageBig: 'images/cardImages/heavy-zerrikanian-fire-scorpion-big.jpg'
            },
            {
                name: 'Impera Brigade',
                strength: 3,
                abilities: 'Bond',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/impera-brigade-preview.jpg',
                imageBig: 'images/cardImages/impera-brigade-big.jpg'
            },
            {
                name: 'Nausicaa Cavalry Brigade',


                strength: 2,
                abilities: 'Bond',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/nausicaa-cavalry-brigade-preview.jpg',
                imageBig: 'images/cardImages/nausicaa-cavalry-brigade-big.jpg'
            },
            {
                name: 'Siege Engineer',
                strength: 6,
                abilities: '',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/siege-engineer-preview.jpg',
                imageBig: 'images/cardImages/siege-engineer-big.jpg'
            },
            {
                name: 'Young Emissary',
                strength: 5,
                abilities: 'Bond',
                faction: 'Nilfgaard',
                isHero: false,
                image: 'images/cardImages/young-emissary-preview.jpg',
                imageBig: 'images/cardImages/young-emissary-big.jpg'
            },
            {
                name: 'Eithne',
                strength: 10,
                abilities: '',
                faction: "Scoia’tael",
                isHero: true,
                image: 'images/cardImages/eithne-preview.jpg',
                imageBig: 'images/cardImages/eithne-big.jpg'
            },
            {
                name: 'Saesenthessis',
                strength: 10,
                abilities: '',
                faction: "Scoia’tael",
                isHero: true,
                image: 'images/cardImages/saesenthessis-preview.jpg',
                imageBig: 'images/cardImages/saesenthessis-big.jpg'
            },
            {
                name: 'Isengrim faolitarna',
                strength: 10,
                abilities: '',
                faction: "Scoia’tael",
                isHero: true,
                image: 'images/cardImages/isengrim-faolitarna-preview.jpg',
                imageBig: 'images/cardImages/isengrim-faolitarna-big.jpg'
            },
            {
                name: 'Iorveth',
                strength: 10,
                abilities: '',
                faction: "Scoia’tael",
                isHero: true,
                image: 'images/cardImages/iorveth-preview.jpg',
                imageBig: 'images/cardImages/iorveth-big.jpg'
            },
            {
                name: 'Dennis Cranmer',
                strength: 6,
                abilities: '',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/dennis-cranmer-preview.jpg',
                imageBig: 'images/cardImages/dennis-cranmer-big.jpg'
            },
            {
                name: 'Milva',
                strength: 10,
                abilities: 'Morale',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/milva-preview.jpg',
                imageBig: 'images/cardImages/milva-big.jpg'
            },
            {
                name: 'Ida Emean Aep Sivney',
                strength: 6,
                abilities: '',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/ida-emean-aep-sivney-preview.jpg',
                imageBig: 'images/cardImages/ida-emean-aep-sivney-big.jpg'
            },
            {
                name: 'Filavandrel Aen Fidhail',
                strength: 6,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/filavandrel-aen-fidhail-preview.jpg',
                imageBig: 'images/cardImages/filavandrel-aen-fidhail-big.jpg'
            },
            {
                name: 'Yaevinn',
                strength: 6,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/yaevinn-preview.jpg',
                imageBig: 'images/cardImages/yaevinn-big.jpg'
            },
            {
                name: 'Toruviel',
                strength: 2,
                abilities: '',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/toruviel-preview.jpg',
                imageBig: 'images/cardImages/toruviel-big.jpg'
            },
            {
                name: 'Riordain',
                strength: 1,
                abilities: '',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/riordain-preview.jpg',
                imageBig: 'images/cardImages/riordain-big.jpg'
            },
            {
                name: 'Ciaran Aep Easnillien',
                strength: 3,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/ciaran-aep-easnillien-preview.jpg',
                imageBig: 'images/cardImages/ciaran-aep-easnillien-big.jpg'
            },
            {
                name: 'Barclay Els',
                strength: 6,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/barclay-els-preview.jpg',
                imageBig: 'images/cardImages/barclay-els-big.jpg'
            },
            {
                name: 'Havekar Healer',
                strength: 0,
                abilities: 'Medic',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/havekar-healer-preview.jpg',
                imageBig: 'images/cardImages/havekar-healer-big.jpg'
            },
            {
                name: 'Vrihedd Brigade Veteran',
                strength: 5,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/vrihedd-brigade-veteran-preview.jpg',
                imageBig: 'images/cardImages/vrihedd-brigade-veteran-big.jpg'
            },
            {
                name: 'Dol Blathanna Archer',
                strength: 6,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/dol-blathanna-archer-preview.jpg',
                imageBig: 'images/cardImages/dol-blathanna-archer-big.jpg'
            },
            {
                name: 'Dol Blathanna Scout',
                strength: 6,
                abilities: 'Agile',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/dol-blathanna-scout-preview.jpg',
                imageBig: 'images/cardImages/dol-blathanna-scout-big.jpg'
            },
            {
                name: 'Dwarven Skirmisher',
                strength: 3,
                abilities: 'Muster',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/dwarven-skirmisher-preview.jpg',
                imageBig: 'images/cardImages/dwarven-skirmisher-big.jpg'
            },
            {
                name: 'Mahakaman Defender',
                strength: 5,
                abilities: '',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/mahakaman-defender-preview.jpg',
                imageBig: 'images/cardImages/mahakaman-defender-big.jpg'
            },
            {
                name: 'Elven Skirmisher',
                strength: 2,
                abilities: 'Muster',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/elven-skirmisher-preview.jpg',
                imageBig: 'images/cardImages/elven-skirmisher-big.jpg'
            },
            {
                name: 'Vrihedd Brigade Recruit',
                strength: 4,
                abilities: '',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/vrihedd-brigade-recruit-preview.jpg',
                imageBig: 'images/cardImages/vrihedd-brigade-recruit-big.jpg'
            },
            {
                name: 'Havekar Smuggler',
                strength: 5,
                abilities: 'Muster',
                faction: "Scoia’tael",
                isHero: false,
                image: 'images/cardImages/havekar-smuggler-preview.jpg',
                imageBig: 'images/cardImages/havekar-smuggler-big.jpg'
            },
            {
                name: 'Draug',
                strength: 10,
                abilities: '',
                faction: 'Monsters',
                isHero: true,
                image: 'images/cardImages/draug-preview.jpg',
                imageBig: 'images/cardImages/draug-big.jpg'
            },
            {
                name: 'Kayran',
                strength: 10,
                abilities: 'Morale',
                faction: 'Monsters',
                isHero: true,
                image: 'images/cardImages/kayran-preview.jpg',
                imageBig: 'images/cardImages/kayran-big.jpg'
            },
            {
                name: 'Imlerith',
                strength: 10,
                abilities: '',
                faction: 'Monsters',
                isHero: true,
                image: 'images/cardImages/imlerith-preview.jpg',
                imageBig: 'images/cardImages/imlerith-big.jpg'
            },
            {
                name: 'Leshen',
                strength: 10,
                abilities: '',
                faction: 'Monsters',
                isHero: true,
                image: 'images/cardImages/leshen-preview.jpg',
                imageBig: 'images/cardImages/leshen-big.jpg'
            },
            {
                name: 'Forktail',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/forktail-preview.jpg',
                imageBig: 'images/cardImages/forktail-big.jpg'
            },
            {
                name: 'Earth Elemental',
                strength: 6,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/earth-elemental-preview.jpg',
                imageBig: 'images/cardImages/earth-elemental-big.jpg'
            },
            {
                name: 'Fiend',
                strength: 6,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/fiend-preview.jpg',
                imageBig: 'images/cardImages/fiend-big.jpg'
            },
            {
                name: 'Plague Maiden',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/plague-maiden-preview.jpg',
                imageBig: 'images/cardImages/plague-maiden-big.jpg'
            },
            {
                name: 'Griffin',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/griffin-preview.jpg',
                imageBig: 'images/cardImages/griffin-big.jpg'
            },
            {
                name: 'Werewolf',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/werewolf-preview.jpg',
                imageBig: 'images/cardImages/werewolf-big.jpg'
            },
            {
                name: 'Botchling',
                strength: 4,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/botchling-preview.jpg',
                imageBig: 'images/cardImages/botchling-big.jpg'
            },
            {
                name: 'Frightener',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/frightener-preview.jpg',
                imageBig: 'images/cardImages/frightener-big.jpg'
            },
            {
                name: 'Ice Giant',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/ice-giant-preview.jpg',
                imageBig: 'images/cardImages/ice-giant-big.jpg'
            },
            {
                name: 'Endrega',
                strength: 2,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/endrega-preview.jpg',
                imageBig: 'images/cardImages/endrega-big.jpg'
            },
            {
                name: 'Harpy',
                strength: 2,
                abilities: 'Agile',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/harpy-preview.jpg',
                imageBig: 'images/cardImages/harpy-big.jpg'
            },
            {
                name: 'Cockatrice',
                strength: 2,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/cockatrice-preview.jpg',
                imageBig: 'images/cardImages/cockatrice-big.jpg'
            },
            {
                name: 'Gargoyle',
                strength: 2,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/gargoyle-preview.jpg',
                imageBig: 'images/cardImages/gargoyle-big.jpg'
            },
            {
                name: 'Celaeno Harpy',
                strength: 2,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/celaeno-harpy-preview.jpg',
                imageBig: 'images/cardImages/celaeno-harpy-big.jpg'
            },
            {
                name: 'Grave Hag',
                strength: 5,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/grave-hag-preview.jpg',
                imageBig: 'images/cardImages/grave-hag-big.jpg'
            },
            {
                name: 'Fire Elemental',
                strength: 6,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/fire-elemental-preview.jpg',
                imageBig: 'images/cardImages/fire-elemental-big.jpg'
            },
            {
                name: 'Foglet',
                strength: 2,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/foglet-preview.jpg',
                imageBig: 'images/cardImages/foglet-big.jpg'
            },
            {
                name: 'Wyvern',
                strength: 2,
                abilities: '',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/wyvern-preview.jpg',
                imageBig: 'images/cardImages/wyvern-big.jpg'
            },
            {
                name: 'Arachas Behemoth',
                strength: 6,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/arachas-behemoth-preview.jpg',
                imageBig: 'images/cardImages/arachas-behemoth-big.jpg'
            },
            {
                name: 'Arachas',
                strength: 4,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/arachas-preview.jpg',
                imageBig: 'images/cardImages/arachas-big.jpg'
            },
            {
                name: 'Nekker',
                strength: 2,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/nekker-preview.jpg',
                imageBig: 'images/cardImages/nekker-big.jpg'
            },
            {
                name: 'Vampire Ekimmara',
                strength: 4,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/vampire-ekimmara-preview.jpg',
                imageBig: 'images/cardImages/vampire-ekimmara-big.jpg'
            },
            {
                name: 'Vampire Fleder',
                strength: 4,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/vampire-fleder-preview.jpg',
                imageBig: 'images/cardImages/vampire-fleder-big.jpg'
            },
            {
                name: 'Vampire Garkain',
                strength: 4,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/vampire-garkain-preview.jpg',
                imageBig: 'images/cardImages/vampire-garkain-big.jpg'
            },
            {
                name: 'Vampire Bruxa',
                strength: 4,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/vampire-bruxa-preview.jpg',
                imageBig: 'images/cardImages/vampire-bruxa-big.jpg'
            },
            {
                name: 'Vampire Katakan',
                strength: 5,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/vampire-katakan-preview.jpg',
                imageBig: 'images/cardImages/vampire-katakan-big.jpg'
            },
            {
                name: 'Ghoul',
                strength: 1,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/ghoul-preview.jpg',
                imageBig: 'images/cardImages/ghoul-big.jpg'
            },
            {
                name: 'Crone Brewess',
                strength: 6,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/crone-brewess-preview.jpg',
                imageBig: 'images/cardImages/crone-brewess-big.jpg'
            },
            {
                name: 'Crone Weavess',
                strength: 6,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/crone-weavess-preview.jpg',
                imageBig: 'images/cardImages/crone-weavess-big.jpg'
            },
            {
                name: 'Crone Whispess',
                strength: 6,
                abilities: 'Muster',
                faction: 'Monsters',
                isHero: false,
                image: 'images/cardImages/crone-whispess-preview.jpg',
                imageBig: 'images/cardImages/crone-whispess-big.jpg'
            }
        ];

        return allCards;
    };

    return service;
});

app.controller('mainCtrl', function ($scope, cards) {
    $scope.applicationViews = ['Cards', 'Deck', 'About'];
    $scope.currentView = undefined;
    $scope.cards = [];
    $scope.cards2 = [];
    $scope.cardDetails = undefined;
    $scope.cardsSelected = [];
    $scope.cardsSelected2 = [];
    $scope.filter = '';

    $scope.changeCurrentView = function(viewName) {
        for (var i = 0; i < $scope.applicationViews.length; i++) {
            if ($scope.applicationViews[i] === viewName) {
                $scope.currentView = $scope.applicationViews[i];

                // If it is 'Deck'
                if ($scope.currentView === $scope.applicationViews[1]) {
                    $scope.onMenuDeckClick();
                }
                break;
            }
        }
    };

    $scope.getCardStyleFromFaction = function(factionName) {
        switch(factionName) {
            case 'Neutral':
                return 'neutral-border';
            case 'Northern Realms':
                return 'northern-realms-border';
            case 'Nilfgaard':
                return 'nilfgaard-border';
            case "Scoia’tael":
                return 'scoiatael-border';
            case 'Monsters':
                return 'monsters-border';
            default:
                return '';
        }
    }

    $scope.setCardPreview = function(fieldObjectPrefix, cardDetails) {
        var cardDetailsImage = document.getElementById(fieldObjectPrefix + "Image");
        cardDetailsImage.src = cardDetails.imageBig;
        var cardDetailsName = document.getElementById(fieldObjectPrefix + "Name");
        cardDetailsName.innerHTML = cardDetails.name;
        var cardDetailsFaction = document.getElementById(fieldObjectPrefix + "Faction");
        cardDetailsFaction.innerHTML = cardDetails.faction;
        var cardDetailsNameStrength = document.getElementById(fieldObjectPrefix + "Strength");
        cardDetailsNameStrength.innerHTML = cardDetails.strength;
        var cardDetailsAbilities = document.getElementById(fieldObjectPrefix + "Abilities");
        cardDetailsAbilities.innerHTML = cardDetails.abilities;
        var cardDetailsIsHero = document.getElementById(fieldObjectPrefix + "IsHero");
        cardDetailsIsHero.innerHTML = cardDetails.isHero;
    };

    $scope.onMenuDeckClick = function () {
        $scope.cards2 = [];
        for (var i = 0; i < $scope.cardsSelected.length; i++) {
            $scope.cards2.push(angular.fromJson(angular.toJson($scope.cards[$scope.cardsSelected[i]], false)));
        }
    };

    $scope.filterOut = function () {
        for (var i = 0; i < $scope.cards.length; i++) {
            if ($scope.filter === '') {
                $scope.cards[i].matchesFilter = true;
            }
            else if ($scope.cards[i].name.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
                 $scope.cards[i].matchesFilter = true;
            }
            else if ($scope.cards[i].faction.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
                 $scope.cards[i].matchesFilter = true;
            }
            else if ($scope.cards[i].abilities.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
                $scope.cards[i].matchesFilter = true;
            }
            else if ($scope.filter === 'hero' && $scope.cards[i].isHero) {
                $scope.cards[i].matchesFilter = true;
            } else {
                $scope.cards[i].matchesFilter = false;
            }
        }
    };

    $scope.init = function() {
        $scope.currentView = $scope.applicationViews[0];
        $scope.cards = cards.getCards();
        $scope.filterOut();

        // Previewing card details in listView
        document.getElementById("listView").addEventListener("iteminvoked", function (e) {
            var target = e.target;
            // ListView appears to be programmatically stealing focus on pointer up (or some other event), which causes a light dismissal of the Flyout
            // This is a WA
            setTimeout(function() {
                e.detail.itemPromise.then(function (invokedItem) {
                    var listFlyout = document.getElementById("listItemFlyout");
                    $scope.setCardPreview("cardDetails", invokedItem.data);
                    listFlyout.winControl.show(target);
                });
            }, 0);
        });

        // Previewing card details in listView2
        document.getElementById("listView2").addEventListener("iteminvoked", function (e) {
            var target = e.target;
            // ListView appears to be programmatically stealing focus on pointer up (or some other event), which causes a light dismissal of the Flyout
            // This is a WA
            setTimeout(function () {
                e.detail.itemPromise.then(function (invokedItem) {
                    var listFlyout = document.getElementById("listItemFlyout");
                    $scope.setCardPreview("cardDetails", invokedItem.data);
                    listFlyout.winControl.show(target);
                });
            }, 0);
        });
    }

    $scope.init();
});

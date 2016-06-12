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
                name: '',
                strength: 0,
                abilities: '',
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/-preview.jpg',
                imageBig: 'images/cardImages/-big.jpg'
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
            else if ($scope.cards[i].name.indexOf($scope.filter) > -1) {
                 $scope.cards[i].matchesFilter = true;
            }
            else if ($scope.cards[i].faction.indexOf($scope.filter) > -1) {
                 $scope.cards[i].matchesFilter = true;
            }
            else if ($scope.cards[i].abilities.indexOf($scope.filter) > -1) {
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

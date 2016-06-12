'use strict';
var app = angular.module('gutGwentBrowser', ['winjs']);

app.service('cards', function () {
    var service = {};

    service.getCards = function(quantity) {
        var allCards = [];
        for (var i = 0; i < quantity; i++) {
            allCards.push({
                name: 'awesomeCard' + i,
                strength: i,
                abilities: 'awesomeAbility' + i,
                faction: 'Northern Realms',
                isHero: false,
                image: 'images/cardImages/geralt-of-rivia-preview.jpg',
                imageBig: 'images/cardImages/geralt-of-rivia-big.jpg'
            });
        }

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

    $scope.init = function() {
        $scope.currentView = $scope.applicationViews[0];
        $scope.cards = cards.getCards(30);

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

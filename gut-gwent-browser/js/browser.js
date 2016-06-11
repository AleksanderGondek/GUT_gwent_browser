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
    $scope.cardDetails = undefined;
    $scope.cardsSelected = [];

    $scope.changeCurrentView = function(viewName) {
        for (var i = 0; i < $scope.applicationViews.length; i++) {
            if ($scope.applicationViews[i] === viewName) {
                $scope.currentView = $scope.applicationViews[i];
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

    $scope.test = function() {
        return angular.toJson($scope.cardsSelected, true);
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

                    var cardDetailsImage = document.getElementById("cardDetailsImage");
                    cardDetailsImage.src = invokedItem.data.imageBig;
                    var cardDetailsName = document.getElementById("cardDetailsName");
                    cardDetailsName.innerHTML = invokedItem.data.name;
                    var cardDetailsFaction = document.getElementById("cardDetailsFaction");
                    cardDetailsFaction.innerHTML = invokedItem.data.faction;
                    var cardDetailsNameStrength= document.getElementById("cardDetailsStrength");
                    cardDetailsNameStrength.innerHTML = invokedItem.data.strength;
                    var cardDetailsAbilities = document.getElementById("cardDetailsAbilities");
                    cardDetailsAbilities.innerHTML = invokedItem.data.abilities;
                    var cardDetailsIsHero = document.getElementById("cardDetailsIsHero");
                    cardDetailsIsHero.innerHTML = invokedItem.data.isHero;

                    listFlyout.winControl.show(target);
                });
            }, 0);
        });
    }

    $scope.init();
});

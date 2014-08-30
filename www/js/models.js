/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Action() {
    this.name;
    this.tooltip;
    this.counting;

    this.increateCounting = function() {
        this.counting++;
    };

    this.hasTooltip = function() {
        return this.tooltip !== "";
    };
}

function Rule(withPlayer) {
    this.name;
    this.tooltip;
    this.counting;
    this.user = "";
    this.withPlayer = withPlayer;
    this.active = false;
    this.visible = false;
    
    this.increateCounting = function() {
        this.counting++;
    };

    this.hasTooltip = function() {
        return this.tooltip !== "";
    };
}

function Game(users, actions70, actions20, actions10) {
    this.users = users;
    this.actions70 = actions70;
    this.actions20 = actions20;
    this.actions10 = actions10;
    this.activeRules;
    this.currentPlayer = -1;
    this.currentAction = null;

    this.next = function() {
        var random = Math.floor(Math.random() * 99);
        var next = 0;
        if (random < 10) {
            next = Math.floor(Math.random() * (this.actions10.length - 1));
            this.currentAction = this.actions10[next];
        }
        else if (random < 30) {
            next = Math.floor(Math.random() * (this.actions20.length - 1));
            this.currentAction = this.actions20[next];
        }
        else {
            next = Math.floor(Math.random() * (this.actions70.length - 1));
            this.currentAction = this.actions70[next];
        }

        this.currentPlayer = (++this.currentPlayer) % (this.users.length);

        if (typeof this.currentAction === Rule) {
            if (this.currentAction.withPlayer) {
                this.currentAction.user = this.users[this.currentPlayer];

            }
            else {
                //TODO alte regeln löschen
            }
        }
    };
}

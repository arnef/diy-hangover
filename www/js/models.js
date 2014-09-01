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
    var _self  = this;
    _self.users = users;
    _self.actions70 = actions70;
    _self.actions20 = actions20;
    _self.actions10 = actions10;
    _self.activeRules;
    _self.currentPlayer = -1;
    _self.currentAction = null;
    
    _self.next = function() {
        var random = Math.floor(Math.random() * 99);
        var next = 0;
        if (random < 10) {
            next = Math.floor(Math.random() * (_self.actions10.length - 1));
            _self.currentAction = _self.actions10[next];
        }
        else if (random < 30) {
            next = Math.floor(Math.random() * (_self.actions20.length - 1));
            _self.currentAction = _self.actions20[next];
        }
        else {
            next = Math.floor(Math.random() * (_self.actions70.length - 1));
            _self.currentAction = _self.actions70[next];
        }

        _self.currentPlayer = (++_self.currentPlayer) % (_self.users.length);

        if (typeof _self.currentAction === Rule) {
            if (_self.currentAction.withPlayer) {
                _self.currentAction.user = _self.users[_self.currentPlayer];

            }
            else {
                //TODO alte regeln löschen
            }
        }
        console.log('currentAction ' + _self.currentAction.name);
    };
    
    _self.getCurrentPlayer = function () {
        return _self.users[_self.currentPlayer];
    };
    
    _self.next();
}

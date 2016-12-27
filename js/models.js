/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Action() {
    this.type = 'Action';
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
    this.type = 'Rule';
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

function Game(users, actions70, actions20, actions10, activeRules) {
    var _self = this;
    _self.users = users;
    _self.actions70 = actions70;
    _self.actions20 = actions20;
    _self.actions10 = actions10;
    _self.activeRules = activeRules;
    _self.currentPlayer = -1;
    _self.currentAction = null;

    /**
     * will choose the next action randomly and set the next player
     * 
     * @returns {undefined}
     */
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
        if (_self.currentAction.type === 'Rule') {
            var index = _self.isRuleActive(_self.currentAction);
            if (index === -1) {
                _self.addRule(_self.currentAction);
            }
            else {
                _self.removeRule(_self.currentAction, index);
            }
        }
    };

    _self.isRuleActive = function (rule) {
        for (var i = 0; i < _self.activeRules.length; i++) {
            var comRule = _self.activeRules[i];
            if (comRule.name === rule.name) {
                return i;
            }
        }
        return -1;
    };

    /**
     * adds a rule to the actives, if the rule is for a particular player,
     * this player will be set.
     * 
     * @param {Rule} rule 
     * @returns {undefined}
     */
    _self.addRule = function (rule) {
        if (rule.withPlayer) {
            rule.user = _self.getCurrentPlayer();
        }
        _self.activeRules.push(rule);
    };
    
    /**
     * removes a rule from the actives, if the rule is for a particular player,
     * the new player will be set. otherwise the rule will be deleted. 
     * 
     * @param {Rule} rule
     * @param {Number} index of rule in array
     * @returns {undefined}
     */
    _self.removeRule = function (rule, index) {
        if (rule.withPlayer) {
            if (rule.user === _self.getCurrentPlayer()) {
                rule.user = "";
                _self.activeRules.splice(index, 1);
            }
            else {
                rule.user = _self.getCurrentPlayer();
            }
        }
        else {
            _self.activeRules.splice(index,1);
        }
    };

    /**
     * returns the current player
     * 
     * @returns {String}
     */
    _self.getCurrentPlayer = function() {
        return _self.users[_self.currentPlayer];
    };
    
    _self.next();
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Parser()
{
    var _self = this;
    _self.actions70 = [];
    _self.actions20 = [];
    _self.actions10 = [];

    _self.gen = function(xml, wahr, array) {

        $(xml).find(wahr).find("action").each(function(idx, a) {
                if ($(a).attr("rule")) {
                var rule = new Rule($(a).attr("rule") === "withPlayer");

                rule.name = $(a).find("name").text();
                rule.tooltip = $(a).find("tooltip").text();
                array.push(rule);
            }
            else
            {
                var action = new Action($(a).attr("customRule") === "true");
                action.name = $(a).find("name").text();
                action.tooltip = $(a).find("tooltip").text();
                array.push(action);
                
            }

        });
    };



    _self.init = function() {
        $.get("res/actions.xml", {}, function(xml) {
            _self.gen(xml, "actions70", _self.actions70);
            _self.gen(xml, "actions20", _self.actions20);
            _self.gen(xml, "actions10", _self.actions10);
            return true;
        });
        
    };
//    console.log(this.init());
    
    this.getAction = function (callback) {
        $.get("res/actions.xml", {}, function(xml) {
            _self.gen(xml, "actions70", _self.actions70);
            _self.gen(xml, "actions20", _self.actions20);
            _self.gen(xml, "actions10", _self.actions10);
            callback(_self.actions70, _self.actions20, _self.actions10);
        });
    };
//    _self.getActions = function (actions70, actions20, actions10) {
//         $.get("res/actions.xml", {}, function(xml) {
//            _self.gen(xml, "actions70", actions70);
//            _self.gen(xml, "actions20", actions20);
//            _self.gen(xml, "actions10", actions10);
//        });   
//    };
}


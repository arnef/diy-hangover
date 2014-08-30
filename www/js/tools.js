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
            }
            else
            {
                var action = new Action();
                action.name = $(a).find("name").text();
                action.tooltip = $(a).find("tooltip").text();
            }
            //TODO

            array[idx] = [];

        });
    };



    _self.init = function() {
        $.get("res/actions.xml", {}, function(xml) {

            _self.gen(xml, "actions70", _self.actions70);
            _self.gen(xml, "actions20", _self.actions20);
            _self.gen(xml, "actions10", _self.actions10);
        });
    };

    this.init();



}


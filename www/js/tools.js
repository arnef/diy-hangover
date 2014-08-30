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

    _self.gen = function(xml, wahr) {

        $(xml).find(wahr).find("action").each(function(idx, a) {

            console.log($(a).find("name").text());

            if ($(a).attr("rule")) {
                var rule = new Rule($(a).attr("rule") === "withPlayer");
                rule.name = $(a).find("name").text();
                rule.tooltip = $(a).find("tooltip").text();
                console.log("rule");
            }
            else
            {
                var action = new Action();
                action.name = $(a).find("name").text();
                action.tooltip = $(a).find("tooltip").text();

                console.log("no rule");
            }
            //TODO

            _self.actions20[idx] = [];

        });
    };



    _self.init = function() {
        console.log("start parser");
        $.get("res/actions.xml", {}, function(xml) {
            console.log("function get");


            _self.gen(xml, "actions70");
            _self.gen(xml, "actions20");
            _self.gen(xml, "actions10");
        });
    };

    this.init();



}


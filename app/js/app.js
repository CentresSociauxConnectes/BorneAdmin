var app = {
    temps : null,
    urls : {
        "polemploi":"https://authentification-candidat.pole-emploi.fr/connexion/XUI/#login/&realm=%2Findividu&goto=https%3A%2F%2Fauthentification-candidat.pole-emploi.fr%2Fconnexion%2Foauth2%2Fauthorize%3Fclient_id%3DUSG_PN-de-web_ACB4408808B2D6DC228D6DD2D9C0809590A26FA8B64AC1FBE821C1E0FCD32F66%26nonce%3D2a21f4e2338e244cf474a45742efa657cc9b5e29fd761de73fba800314b0a627%26realm%3D%252Findividu%26redirect_uri%3Dhttps%253A%252F%252Fcandidat.pole-emploi.fr%252Fcandidat%252Fauth%252Fconnect%26response_type%3Dcode%26scope%3Ddocument%2520documentW%2520prestations%2520openid%2520application_de-web%2520idRci%2520contexteAuthentification%2520suppressionEspace%26state%3D1126ca7cd3df7adff5d87ce07406a171252584cd0a44c55daba18899d338a586",
        "impots":"https://cfspart.impots.gouv.fr/LoginMDP?op=c&url=aHR0cHM6Ly9jZnNwYXJ0LmltcG90cy5nb3V2LmZyLw==",
        "ameli":"https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true",
        "caf":"https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/hY_NDoIwEISfxUOPsIskSrwRQ_AnBogmQi-mmFowSElbbHx7kbPo3mbzzWQGKORAW_asBTO1bFnz0XRxSRMv3uyPGCdp5OM2WmanaH3wgmw-AMUA4MSF-M9_BjoiPxJ2QEUjy7FNEbalHwigit-44srt1fCujOlWBAlaa12mtbzW4wCnU_LOjSuVINhrJrgi-C2lktpAPu2G7pGjQ8uXDWezN2k7-cc!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature",
        "site":"https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/hY_NDoIwEISfxUOPsIskSrwRQ_AnBogmQi-mmFowSElbbHx7kbPo3mbzzWQGKORAW_asBTO1bFnz0XRxSRMv3uyPGCdp5OM2WmanaH3wgmw-AMUA4MSF-M9_BjoiPxJ2QEUjy7FNEbalHwigit-44srt1fCujOlWBAlaa12mtbzW4wCnU_LOjSuVINhrJrgi-C2lktpAPu2G7pGjQ8uXDWezN2k7-cc!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature",
        "lille":"https://www.lille.fr/",
        "cv":"http://www.parchance.fr/modele-cv/",
        "retraite":"https://www.lassuranceretraite.fr/portail-services-ihm/index.html#/authentifier"
    },
    init:function(){
        this.temps = {
            "screensaver" : _.template($('#screensaver_template').html()),
            "dashboard" : _.template($('#dashboard_template').html()),
            "menu" : _.template($('#menu_template').html()),
            "webview" : _.template($('#webview_template').html())
        };
        this.navigate("screensaver", {});
    },
    navigate : function(page, datas){
        console.log(page);
        $('.app .screen').html('');
        $('.app .screen').append(this.temps[page](datas)); 
        if(typeof this[page] !== "undefined"){
            this[page]();
        }
        this.setListeners();
    },
    destroy:function(){
        
    },
    screensaver : function(){
        $('.screensaver').off('click').on('click', $.proxy(function(){
            this.navigate('dashboard', {});
        }, this));
    },
    dashboard : function(){
        $('.close_session').off('click').on('click', $.proxy(function(){
            this.navigate('screensaver', {});
        }, this));
    },
    webview : function(){
        $('.close_button').off('click').on('click', $.proxy(function(){
            this.navigate('dashboard', {});
        },this));
    },
    setListeners : function(){
        var self = this,
            datas = {};
        $('[data-navigate]').off('click').on('click', function(){
            switch($(this).attr('data-navigate'))
            {
                case "webview":
                    datas.url = $(this).attr('data-url');
                    break;
                default :
                    break;
            }
            self.navigate($(this).attr("data-navigate"), datas);
        });
    }
}

$(document).ready(function(){
    app.init();
});
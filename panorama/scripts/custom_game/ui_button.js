//扫描商人
GameEvents.Subscribe( "checkShopLUATOJS", checkShopLUATOJS)
GameEvents.Subscribe( "showPlayerStatusLUATOJS", showPlayerStatusLUATOJS)
function checkShopLUATOJS(data){
    var shopFlag = data.flag
    var playerGold = data.playerGold
    var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    var UIShopButton = shopUI.FindChildTraverse("UIShopButton")
    var shopButtonText = UIShopButton.FindChildTraverse("shopButtonText")
    //$.Msg(playerGold)
    if (shopFlag == "active" ){
        UIShopButton.RemoveClass("shopUnknow")
        UIShopButton.AddClass("shopActive")
        UIShopButton.SetPanelEvent("onactivate",function(){shopActive()})
    }else{
        if(UIShopButton.BHasClass("shopOpen")){
            UIShopButton.RemoveClass("shopOpen")
            shopClose()
        }
        UIShopButton.RemoveClass("shopActive")
        UIShopButton.AddClass("shopUnknow")
        UIShopButton.SetPanelEvent("onactivate",function(){shopUnknow()})
    }
    shopButtonText.text = playerGold
}

function shopActive(){
    var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    var UIShopButton = shopUI.FindChildTraverse("UIShopButton")
    var buttonStats = UIShopButton.BHasClass("shopOpen")
    if(buttonStats){
        UIShopButton.RemoveClass("shopOpen")
        shopClose()
    }else{
        UIShopButton.AddClass("shopOpen")
        shopOpen()
    }
}

function shopOpen(){
    $.Msg("==============shopOpen==========")
    GameEvents.SendCustomGameEventToServer( "openShopJSTOLUA", {})
}

function shopClose(){
    $.Msg("==============shopClose==========")
    GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
}

function shopUnknow(){
    $.Msg("==============shopUnknow==========")
}


function showPlayerStatus(){
    $.Msg("==============playerStatusOpen==========")
    GameEvents.SendCustomGameEventToServer( "openPlayerStatusJSTOLUA", {})

}

function showPlayerStatusLUATOJS(data){
    $.Msg("==============playerStatusGet==========")
    var heroNameList = data.playerStatusHero
    var playerAbilityIconList = data.playerStatusAbility
    var playerStatusItemList = data.playerStatusItem
    for(i=0;i<8;i++){
        var heroName = heroIconList[i]
        for(i=1;i<4;i++){
            
        }
    }
    //var icon = playerAbilityIconList[0][1]
   
   // $.Msg(icon)
}



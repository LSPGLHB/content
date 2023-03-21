//扫描商人
GameEvents.Subscribe( "checkShopLUATOJS", checkShop);

function checkShop(data){
    var shopFlag = data.flag
    var playerGold = data.playerGold
    var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    var UIShopButton = shopUI.FindChildTraverse("UIShopButton")
    var shopButton = UIShopButton.FindChildTraverse("shopButton")
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
    shopButton.text = playerGold
}


function shopActive(){
    var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
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


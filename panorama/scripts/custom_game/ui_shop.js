GameEvents.Subscribe( "getShopItemListLUATOJS", getShopItemListLUATOJS);
GameEvents.Subscribe( "checkGoldLUATOJS", checkGold);

function getShopItemListLUATOJS(data) {

    var nameList = data.randomItemNameList
    var showNameList = data.randomItemShowNameList
    var costList = data.randomItemCostList
    var iconList = data.randomItemIconList
    var describeList = data.randomItemDescribeList
    //$.Msg(data.num)
    $("#UIShopBox").AddClass("UIShopBox")
    var UIShopBg = $.CreatePanel('Panel', $("#UIShopBox"),"UIShopBg");
    UIShopBg.AddClass("UIShopBg")

    var shopPanelTop = $.CreatePanel('Panel', $("#UIShopBg"),"UIShop1");
    shopPanelTop.AddClass("UIShop")

    var shopPanelBottom = $.CreatePanel('Panel', $("#UIShopBg"),"UIShop2");
    shopPanelBottom.AddClass("UIShop")

    for( i = 1; i <= data.num; i++ ){
        if (i < 4){
            var shopItemPanel = $.CreatePanel('Panel', $("#UIShop1"),"shopItemPanel"+i);
            shopItemPanel.AddClass("shopItemPanel")
        }else{
            var shopItemPanel = $.CreatePanel('Panel', $("#UIShop2"),"shopItemPanel"+i);
            shopItemPanel.AddClass("shopItemPanel")
        }

        var itemTopBanner = $.CreatePanel('Panel', $("#shopItemPanel"+i),"itemTopBanner"+i);
        itemTopBanner.AddClass("itemTopBanner")

        var itemImage = $.CreatePanel('Image', $("#itemTopBanner"+i),"itemImg"+i);
        itemImage.AddClass("shop_item_img")
        itemImage.SetImage(iconList[i])
    
        var itemMsg = $.CreatePanel('Panel', $("#itemTopBanner"+i),"itemMsg"+i);
        itemMsg.AddClass("itemMsg")

        var itemName = $.CreatePanel('Label', $("#itemMsg"+i),"itemName"+i);
        itemName.AddClass("itemName")
        itemName.text=$.Localize(showNameList[i])

        var itemCostPanel = $.CreatePanel('Panel', $("#itemMsg"+i),"itemCostPanel"+i);
        itemCostPanel.AddClass("itemCostPanel")

        var goldIcon = $.CreatePanel('Panel', $("#itemCostPanel"+i),"goldIcon"+i);
        goldIcon.AddClass("goldIcon")

        var itemCost = $.CreatePanel('Label', $("#itemCostPanel"+i),"itemCost"+i);
        itemCost.AddClass("itemCost")
        var itemCostVal = costList[i]
        itemCost.text = itemCostVal

        var itemDescribe = $.CreatePanel('Label', $("#shopItemPanel"+i),"itemDescribe"+i);
        itemDescribe.AddClass("itemDescribe")
        itemDescribe.text = $.Localize(describeList[i])

        var buyItemButton = $.CreatePanel('Label', $("#shopItemPanel"+i),"buyItemButton"+i);
        buyItemButton.AddClass("buyItemButton")
        
        buyItemButton.text = $.Localize("#Buy")
        
        if(i==1){
            buyItemButton.SetPanelEvent("onactivate",function(){shopBuy(1)})
        }else if(i==2){
            buyItemButton.SetPanelEvent("onactivate",function(){shopBuy(2)})
        }
        else if(i==3){
            buyItemButton.SetPanelEvent("onactivate",function(){shopBuy(3)})
        }
        else if(i==4){
            buyItemButton.SetPanelEvent("onactivate",function(){shopBuy(4)})
        }
        else if(i==5){
            buyItemButton.SetPanelEvent("onactivate",function(){shopBuy(5)})
        }
        else if(i==6){
            buyItemButton.SetPanelEvent("onactivate",function(){shopBuy(6)})
        }
       
    }

    var shopButtonBg = $.CreatePanel('Panel', $("#UIShopBg"),"shopButtonBg");
    shopButtonBg.AddClass("shopButtonBg")

    var shopRefresh = $.CreatePanel('Label', $("#shopButtonBg"),"shopRefresh");
    shopRefresh.AddClass("shopRefresh")
    shopRefresh.AddClass("shopButton")
    shopRefresh.text = "刷新"
    shopRefresh.SetPanelEvent("onactivate",function(){shopRefreshButton()})

    var shopCancel = $.CreatePanel('Label', $("#shopButtonBg"),"shopCancel");
    shopCancel.AddClass("shopCancel")
    shopCancel.AddClass("shopButton")
    shopCancel.text = "关闭"
    shopCancel.SetPanelEvent("onactivate",function(){shopClose()})

}

function checkGold(data){
    var playerGold = data.playerGold
    var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    var UIShopButton = mainUI.FindChildTraverse("UIShopButton")
    var shopButtonText = UIShopButton.FindChildTraverse("shopButtonText")
    shopButtonText.text = playerGold
}

function shopClose(){
    $.Msg("==============shopClose==========")
    var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    var shopButton = shopUI.FindChildTraverse("UIShopButton")
    shopButton.RemoveClass("shopOpen")
    GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
}

function shopRefreshButton(){
    $.Msg("==============shopRefresh==========")
    GameEvents.SendCustomGameEventToServer( "refreshShopJSTOLUA", {})
}
function shopBuy(num){

    $.Msg("==============shopBuy==========",num)
    GameEvents.SendCustomGameEventToServer( "buyShopJSTOLUA", {num:num})
}


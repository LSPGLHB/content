
//获取天赋选择列表
GameEvents.Subscribe( "getRandomContractListLUATOJS", getRandomContractListLUATOJS);
function getRandomContractListLUATOJS(data){
    var listLength = data.listLength
    var contractNameList = data.contractNameList
    var contractShowNameList = data.contractShowNameList
    var contractIconList = data.contractIconList
    var contractDescribeList = data.contractDescribeList
    //$.Msg("=======getRandomContractListLUATOJS======")
    $("#UIContractListPanelBox").AddClass("UIContractListPanelBox")
    var UIContractListPanelBg = $.CreatePanel('Panel', $("#UIContractListPanelBox"),"UIContractListPanelBg");
    UIContractListPanelBg.AddClass("UIContractListPanelBg")



    for(i=1;i<=listLength;i++){
        if(i==1 || i==4){

            if(i==1){
                var UIContractListPanel = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"UIContractListPanel1");
                UIContractListPanel.AddClass("UIContractListPanel")
            }
            if(i==4){
                var UIContractListPanel = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"UIContractListPanel2");
                UIContractListPanel.AddClass("UIContractListPanel")
            }
        }
        var contractPanel
        if(i<4){
            contractPanel = $.CreatePanel('Panel', $("#UIContractListPanel1"),"contractPanel"+i);
            contractPanel.AddClass("contractPanel")
        }else{
            contractPanel = $.CreatePanel('Panel', $("#UIContractListPanel2"),"contractPanel"+i);
            contractPanel.AddClass("contractPanel")
        }

        var contractTopBanner = $.CreatePanel('Panel', $("#contractPanel"+i),"contractTopBanner"+i);
        contractTopBanner.AddClass("contractTopBanner")

        var contract_img = $.CreatePanel('Image', $("#contractTopBanner"+i),"contract_img"+i);
        contract_img.AddClass("contract_img")
        $.Msg(contractIconList[i])
        contract_img.SetImage(contractIconList[i])

        var contractMsg = $.CreatePanel('Panel', $("#contractTopBanner"+i),"contractMsg"+i);
        contractMsg.AddClass("contractMsg")

        var contractName = $.CreatePanel('Label', $("#contractMsg"+i),"contractName"+i);
        contractName.AddClass("contractName")
        contractName.text = contractShowNameList[i]

        var contractDescribe = $.CreatePanel('Label', $("#contractPanel"+i),"contractDescribe"+i);
        contractDescribe.AddClass("contractDescribe")
        contractDescribe.text = contractDescribeList[i]

        var learnContractButton = $.CreatePanel('Label', $("#contractPanel"+i),"learnContractButton"+i);
        learnContractButton.AddClass("learnContractButton")
        learnContractButton.text = "签订"
        var contractName = contractNameList[i]
        if(i==1){
            learnContractButton.SetPanelEvent("onactivate",function(){learnContractByNum(1)})
        }else if(i==2){
            learnContractButton.SetPanelEvent("onactivate",function(){learnContractByNum(2)})
        }else if(i==3){
            learnContractButton.SetPanelEvent("onactivate",function(){learnContractByNum(3)})
        }else if(i==4){
            learnContractButton.SetPanelEvent("onactivate",function(){learnContractByNum(4)})
        }else if(i==5){
            learnContractButton.SetPanelEvent("onactivate",function(){learnContractByNum(5)})
        }else if(i==6){
            learnContractButton.SetPanelEvent("onactivate",function(){learnContractByNum(6)})
        }
       



    }

    var contractButtonBg = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"contractButtonBg");
    contractButtonBg.AddClass("contractButtonBg")

    var shopRefresh = $.CreatePanel('Label', $("#contractButtonBg"),"contractRefresh");
    shopRefresh.AddClass("contractRefresh")
    shopRefresh.AddClass("contractButton")
    shopRefresh.text = "刷新"
    shopRefresh.SetPanelEvent("onactivate",function(){refreshContractList()})

    var shopCancel = $.CreatePanel('Label', $("#contractButtonBg"),"contractCancel");
    shopCancel.AddClass("contractCancel")
    shopCancel.AddClass("contractButton")
    shopCancel.text = "关闭"
    shopCancel.SetPanelEvent("onactivate",function(){closeContractList()})

}

function closeContractList(){
    GameEvents.SendCustomGameEventToServer( "closeContractListJSTOLUA", {})
}

function refreshContractList(){
    GameEvents.SendCustomGameEventToServer( "refreshContractListJSTOLUA", {})
}

function learnContractByNum(num){
    GameEvents.SendCustomGameEventToServer( "learnContractByNameJSTOLUA", {num:num})
}
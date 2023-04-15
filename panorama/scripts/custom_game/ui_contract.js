GameEvents.Subscribe( "setContractUILUATOJS", setContractUILUATOJS);


function setContractUILUATOJS(data){
    var contractShowName = data.contractShowName
    var contractIcon = data.contractIcon
    var contractDescribe = data.contractDescribe

    $("#UIContractPanelIcon").SetImage(contractIcon)
    $("#UIContractPanelName").text = contractShowName
    $("#UIContractPanelDescribe").text = contractDescribe

}
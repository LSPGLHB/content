GameEvents.Subscribe( "openPlayerStatusLUATOJS", openPlayerStatusLUATOJS)


function openPlayerStatusLUATOJS(data){
    $.Msg("==============playerStatusGet==========")
    //var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    //var scUI = mainUI.FindChildTraverse("scoreboard")

    //$.CreatePanel('Panel', scUI,"UIPlayerStatusPanelBG");
    

    $("#UIPlayerStatusPanelBG").AddClass("UIPlayerStatusPanelBG")

    var heroNameList = data.playerStatusHero
    var playerAbilityIconList = data.playerStatusAbility
    var playerStatusItemList = data.playerStatusItem

    for(i=0;i<10;i++){
        if(i==0 || i==5){
            var playerStatusTitleId
            var playerStatusTitleTeamId
            var playerStatusTitleTeamText
            var playerStatusTitleContractId
            var playerStatusTitleContractText
            var playerStatusTitleSkillId
            var playerStatusTitleSkillText
            var playerStatusTitleEquipId
            var playerStatusTitleEquipText
            var UIPlayerStatusPanelOffId
            var playerStatusTeamId
            if(i==0){
                playerStatusTitleId = "playerStatusTitle1"
                playerStatusTitleTeamId = "playerStatusTitleTeam1"
                playerStatusTitleTeamText = "天辉"
                playerStatusTitleContractId = "playerStatusTitleContract1"
                playerStatusTitleContractText = "契约"
                playerStatusTitleSkillId = "playerStatusTitleSkill1"
                playerStatusTitleSkillText = "技能"
                playerStatusTitleEquipId = "playerStatusTitleEquip1"
                playerStatusTitleEquipText = "装备"
                UIPlayerStatusPanelOffId = "UIPlayerStatusPanelOff1"
                playerStatusTeamId = "playerStatusTeam1"
            }
            if(i==5){
                playerStatusTitleId = "playerStatusTitle2"
                playerStatusTitleTeamId = "playerStatusTitleTeam2"
                playerStatusTitleTeamText = "夜魇"
                playerStatusTitleContractId = "playerStatusTitleContract2"
                playerStatusTitleContractText = "契约"
                playerStatusTitleSkillId = "playerStatusTitleSkill2"
                playerStatusTitleSkillText = "技能"
                playerStatusTitleEquipId = "playerStatusTitleEquip2"
                playerStatusTitleEquipText = "装备"
                UIPlayerStatusPanelOffId = "UIPlayerStatusPanelOff2"
                playerStatusTeamId = "playerStatusTeam2"
            }
            var playerStatusTitle = $.CreatePanel('Panel', $("#UIPlayerStatusPanelBG"),playerStatusTitleId);
            playerStatusTitle.AddClass("playerStatusTitle")
            var playerStatusTitleTeam = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleTeamId);
            playerStatusTitleTeam.AddClass("playerStatusTitleTeam")
            playerStatusTitleTeam.text = playerStatusTitleTeamText
            var playerStatusTitleContract = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleContractId);
            playerStatusTitleContract.AddClass("playerStatusTitleContract")
            playerStatusTitleContract.text = playerStatusTitleContractText
            var playerStatusTitleSkill = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleSkillId);
            playerStatusTitleSkill.AddClass("playerStatusTitleSkill")
            playerStatusTitleSkill.text = playerStatusTitleSkillText
            var playerStatusTitleEquip = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleEquipId);
            playerStatusTitleEquip.AddClass("playerStatusTitleEquip")
            playerStatusTitleEquip.text = playerStatusTitleEquipText
            if(i==0){
                var UIPlayerStatusPanelOff = $.CreatePanel('Image', playerStatusTitle, UIPlayerStatusPanelOffId);
                UIPlayerStatusPanelOff.AddClass("UIPlayerStatusPanelOff")
                UIPlayerStatusPanelOff.SetImage("s2r://panorama/images/icon_x_red_off_png.vtex")
                UIPlayerStatusPanelOff.SetPanelEvent("onactivate",function(){playerStatusClose()})
            }
            var playerStatusTeam = $.CreatePanel('Panel', $("#UIPlayerStatusPanelBG"),playerStatusTeamId);
            playerStatusTeam.AddClass("playerStatusTeam")
        }
        
        if(i<5){
            var playerStatusPlayerBox = $.CreatePanel('Panel', $("#playerStatusTeam1"),"playerStatusPlayerBox" + i);
        }else{
            var playerStatusPlayerBox = $.CreatePanel('Panel', $("#playerStatusTeam2"),"playerStatusPlayerBox" + i);
        }
        playerStatusPlayerBox.AddClass("playerStatusPlayerBox")

        var heroName = heroNameList[i]
        var heroIconId = "#playerStatusPlayerIcon"+i
        var heroIconSrc = "file://{images}/custom_game/heros_icon/"+heroName+".png"

        var playerStatusPlayerIcon = $.CreatePanel('Image', playerStatusPlayerBox, heroIconId);
        playerStatusPlayerIcon.AddClass("playerStatusPlayerIcon")
        playerStatusPlayerIcon.SetImage(heroIconSrc)

        var playerStatusSEPanel = $.CreatePanel('Panel', playerStatusPlayerBox, "playerStatusSEPanel"+i);
        playerStatusSEPanel.AddClass("playerStatusSEPanel")

        var playerStatusContract = $.CreatePanel('Image', playerStatusSEPanel, "playerStatusContract"+i);
        playerStatusContract.AddClass("playerStatusContract")
        playerStatusContract.SetImage("file://{images}/custom_game/ability_button/invoker_invoke.png")

        var playerStatusSkillPanel = $.CreatePanel('Panel', playerStatusSEPanel, "playerStatusSkillPanel"+i);
        playerStatusSkillPanel.AddClass("playerStatusSkillPanel")


        for(j=1;j<4;j++){
            var abilityIcon = playerAbilityIconList[i][j]
            var abilityIconId = "#playerStatusSkill"+i+j
            var playerStatusSkill = $.CreatePanel('Image', playerStatusSkillPanel, abilityIconId);
            playerStatusSkill.AddClass("playerStatusSkill")
            playerStatusSkill.SetImage(abilityIcon)
        }

        var playerStatusEquipPanel = $.CreatePanel('Panel', playerStatusSEPanel, "playerStatusEquipPanel"+i);
        playerStatusEquipPanel.AddClass("playerStatusEquipPanel")
        for(k=1;k<7;k++){
            var playerStatusItem = playerStatusItemList[i][k]
            var itemIconId = "#playerStatusEquip"+i+k
            var playerStatusEquip = $.CreatePanel('Image', playerStatusEquipPanel, itemIconId);
            playerStatusEquip.AddClass("playerStatusEquip")
            playerStatusEquip.SetImage(playerStatusItem)
        }
    }
}

function playerStatusClose(){
    var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    var UIShopButton = mainUI.FindChildTraverse("UIPlayerStatusButton")
    UIShopButton.RemoveClass("UIPlayerStatusButtonActive")
    GameEvents.SendCustomGameEventToServer( "closePlayerStatusJSTOLUA", {})
}

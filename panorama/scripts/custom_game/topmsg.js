function OpenMyUI() {
    // 发送数据到Lua请求打开UI
    // 即使没有数据第二个参数也要填
    GameEvents.SendCustomGameEventToServer( "myui_open", {} );
}



function JsToLua(name) {
    $.Msg("==============name:"+name)
    GameEvents.SendCustomGameEventToServer( "js_to_lua", {num:5, magicname:name} );
}





function LuaToJs() {
    GameEvents.SendCustomGameEventToServer( "lua_to_js", {} );
}


// 使用物品后调用
function OnLuaToJs(data) {
   // $.Msg(data.array)
   //GameEvents.SendCustomGameEventToServer( "myui_open", {} );

   // var TargetPanleId=data.name
       //需要清理原来的
    var mainPanel = $("#UIPanelBox")

    var buttonMainPanel = "#UIPanel"
 //   if ($("#UIPanelBox") != null){
   //     $("#UIPanelBox").DeleteAsync(0);
    //}
    var tempPanel = $.CreatePanel('Panel', $("#UIPanelBox"),"UIPanel");
    tempPanel.AddClass("TempPanel")

    var abilitylist = data.abilityName
    var iconlist = data.icon
    var showNameList = data.showName
    for(i=1;i<=data.num;i++){
        var UIButton = "UIButton"+i
        var UIButtonTemp = "#UIButton"+i
        var NewPanel = $.CreatePanel('Panel', $('#UIPanel'),UIButton);
        NewPanel.AddClass("UIButton")
        NewPanel.AddClass("UIButton"+i)

        var NewImage = $.CreatePanel('Image', $(UIButtonTemp),"ability"+i);
        NewImage.AddClass("ability_img")
        NewImage.SetImage(iconlist[i])

        var NewLabel = $.CreatePanel('Label', $(UIButtonTemp),"label"+i);
        NewLabel.AddClass("label")
        NewLabel.text=$.Localize(showNameList[i])

        var NewBtn = $.CreatePanel('Label', $(UIButtonTemp),"LB"+i);
        NewBtn.AddClass("LButton")
        NewBtn.text="Learn"
        var abilityName = abilitylist[i]
        NewBtn.SetPanelEvent("onactivate",function(){JsToLua(abilityName)})
        //$.GetContextPanel().FindChildTraverse("#UIPanelBox").removeClass("panel_hide")
        //$("#UIPanelBox").SetHasClass("panel_show", true)

       // var newUI = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("CustomUIRoot")
       // var panelBox = newUI.FindChildTraverse("CustomHudElements");
      //  panelBox.FindChildTraverse("UIPanelBox").style.visibility = "collapse";//隐藏

       
       //mainPanel.style.visibility = "collapse";
       //mainPanel.AddClass("panel_hide")//可隐藏 测试屏蔽



      // randomMagicPanel.addClass("panel_hide")
      /*测试传输过来的数据
      $.Msg("==============")
      $.Msg(abilitylist[i])
      $.Msg(iconlist[i])
      $.Msg(showNameList[i])
      */
    }
    

}

GameEvents.Subscribe( "on_lua_to_js", OnLuaToJs);




/*

function getMagic(m1){
    //var magicname = document.getElementById("").getAttribute("name")
    AddMagicByName(m1)
}


function AddMagicByName( magicname){

    
    GameEvents.SendCustomGameEventToServer( "js_to_lua", {magicname:magicname} );
}*/
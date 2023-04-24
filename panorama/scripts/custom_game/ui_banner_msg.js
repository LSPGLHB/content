GameEvents.Subscribe( "getTimeCountLUATOJS", getTimeCountLUATOJS);

function getTimeCountLUATOJS(data){
    //var round = data.round
    //var step=data.step
    //var stepTime=data.stepTime
    //var gameTime=data.gameTime

    //var stepText = "第"+round+"轮战斗"
    //var timeText = step + stepTime + "秒"

    var topTips = data.topTips
    var bottomTips = data.bottomTips
   
    $("#roundCountValue").text = topTips//stepText
    $("#timeCountValue").text = bottomTips//timeText

}


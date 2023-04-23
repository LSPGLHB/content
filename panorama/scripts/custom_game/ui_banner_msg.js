GameEvents.Subscribe( "getTimeCountLUATOJS", getTimeCountLUATOJS);

function getTimeCountLUATOJS(data){
    var round = data.round
    var step=data.step
    var stepTime=data.stepTime
    var gameTime=data.gameTime
    var stepText = "第"+round+"轮战斗"
    var timeText = step + stepTime + "秒"
    $("#stepCountValue").text = stepText
    $("#timeCountValue").text = timeText
    $.Msg("gameTime:"+gameTime)
    $.Msg("step:"+step+"stepTime:"+stepTime)
   // $("#timeCountValue")
}


// $("#next").click(function(){
    
//         $(".line1").css("background-color", "yellow")
    
// })

let activeSpan = 0
$("#back").hide()
$("#next").click(function(){
    activeSpan++;
    $("#back").show()
    $(".bu.activeSpan").next().addClass("activeSpan");
    if(activeSpan == 5){
        $("#next").text("Finish")
    }
})

$("#back").click(function(){
    activeSpan--;
    if(activeSpan !== 5){
        $("#next").text("Next")
    }
    $(".bu.activeSpan").removeClass("activeSpan").prev().addClass("activeSpan");
    console.log(activeSpan)
    if(activeSpan == 0){
        $("#back").css("display","none")
    } else {
        $("#back").css("display","block")
    }

    
})



// $("#next").click(function(){
//     if($(".bu.activeSpan").next().length == 1){
//         $(".bu.activeSpan").next().addClass("activeSpan");
//     } else if($(".bu.activeSpan").last()) {
//        $(".bu.activeSpan").removeClass("activeSpan")
//        $(".bu").eq(0).addClass("activeSpan")
//     }
// })


// $("#back").click(function(){
//     if($(".bu.activeSpan").prev().length == 1){
//         $(".bu.activeSpan").removeClass("activeSpan").prev().addClass("active")
//     } else {
//         $(".bu.activeSpan").removeClass("activeSpan")
//         $(".bu").last().addClass("active")
//     }
// })


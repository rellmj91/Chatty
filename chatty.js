var userName = ["#"];
var finalName = "";
var dBug = () => {
    alert("Check!")
}
var onlineUsers = [];
var idPicker = ()=> userName.push(Math.floor(Math.random() * 10));
var displayMessage = ()=> {
    var message = $('#messageIn').val()
    $('#chatdisplay').append(`${finalName}: ${message} </br>`)
    $('#messageIn').val(null)
}
var activedisplay = 0;
var targetdisplay;

//Auto Assign a Random ID
function autoName(){
    for(var i = 0; i < 8; i ++){
        idPicker();
    }
    finalName = userName.join("");
    onlineUsers.push(finalName);

    return $('#chatdisplay').append("Your ID has been randomly assigned to you! - Welcome</br>");
}

//ID Assignment 
$(function(){
    autoName();

});

//Chat Box
$(function(){
    if(finalName) $('#chatdisplay').append(`${finalName} has entered the chatroom!</br>`)
    $('#chatbox').hide().fadeIn(2000);

    $('#messageIn').keydown(function(e){
        if(e.keyCode === 13){
            displayMessage();
        }
    })
    $('#buttonSend').on('click', ()=>{
        displayMessage();
    });    
});

var updateVisitor = ()=>{
    $('#useronline').append(`<a>${finalName}</a> </br>`)
    $('#useronline').append(`<a>#48923923</a> </br>`)
    $('#useronline').append(`<a>#84756490</a> </br>`)
}

var updateUser = ()=>{
    $('#userdisplay').append(`ID: ${finalName}  </br>Name: </br>Location: </br> Status: </br>`)
    $('#userdisplay').append(`<input type="button" value="Edit" id="editProfile">`)
    $('#editMenu').append(`<input type="button" value="Exit" onclick="closeProfile()" id="rmEditMenu">`)

}

var updateProfile = (x)=>{
    $('#profiledisplay').css("visibility","visible").slideDown(1000).html("").append(`ID: ${$(x).html()} </br> Name: </br> Location: </br> Status: </br>`)
    $('#profiledisplay').append(`<input type="button" value="Exit" onclick="closeProfile()" id="rmProfile">`)
    $('a').css({"color":"black","border":"none","font-size":"100%"})
    $(x).css({"color":"red","border":"3px solid black","font-size":"120%"})
    targetdisplay = x
}

//Visitors
$(function(){
    $('#visitors').hide().fadeIn(2000);
    updateVisitor();

   })

   //User and Visitor Profile
$(function(){
    $('#profiledisplay').slideUp();
    $('#editMenu').slideUp()
    updateUser();
    $('a').click(function (){g
        updateProfile(this);
    })
    $('a').mouseover(function(){
        if(targetdisplay != this) $(this).css({"font-size":"120%", "color":"blue"});
    })
    $('a').mouseout(function(){
        if(targetdisplay != this) $(this).css({"font-size":"100%", "color":"black"})
    })
    $('#editProfile').click(function(){
        $('#editMenu').css("visibility","visible").slideToggle(1000)

    })
   })

var closeProfile = ()=>{
    $('#profiledisplay').slideUp(1000)
    $('a').css({"color":"black","border":"none","font-size":"100%"})
}
$(document).ready(function(){
    
     var counter = 140;

    
    // open menu on focus.
$(".tweet-compose").on("focus", function(){
    
    
    
    $(this).css("height","5em");
    $("#tweet-controls").css("display","block");    
    
});
    
    
    $(".tweet-compose").on("keyup",function(event){
     
       
        
    
        var length = $(this).val().length;
        
       
     
            counter = 140 - length;
        
        
         //changes color to
        
         if(counter <=10){
            $("#char-count").css("color","red");
        }else{
            $("#char-count").css("color","black");
        }
        
        if(counter < 0 || counter == 140){
            
            $("#tweet-submit").attr("disabled",true);
        }else{
             $("#tweet-submit").attr("disabled",false);
        }

        $("#char-count").text(counter);
          
      
        
    });
    
   
    
    function addTweet(){
        
            var name = $("#name").text();
                
            var tweetText = $("#compose").val();
            $("#compose").val("");
            $("#tweet-submit").attr("disabled",true);
            counter = 140;
            $("#char-count").text(counter);
            var tweetBox = $(".tweet:first-child").clone();
            
        
            tweetBox.find(".fullname").html(name);
            tweetBox.find("#tweet-text").text(tweetText);
            tweetBox.find(".username").html("@chiarato");
            tweetBox.find('.avatar').attr("src","img/alagoon.jpg");
            tweetBox.find('.tweet-compose').attr("placeholder","Reply to @chiarato");
            tweetBox.find(".users-interact").remove();
            tweetBox.find(".num-retweets").text("0");
            tweetBox.find(".num-favorites").text("0");

        
            $("#stream").prepend(tweetBox);
            
            }
    
     $("#tweet-submit").on("click",addTweet);
    
    $(".tweet-compose").on("keydown",function(event){
                if(counter < 140 && event.which == 13){
                    addTweet();
                }
    });
    

    






});
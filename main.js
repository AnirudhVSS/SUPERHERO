var canvas= new fabric.Canvas("myCanvas");
var player_x= 10;
var player_y= 10;
var block_image_width= 30;
var block_image_height= 30;
var player_object= "";
var block_image_object= "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }
    );
}
function new_image(get_image){
     fabric.Image.fromURL(get_image, function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
     canvas.add(block_image_object);
    }
    );
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var KeyPressed= e.keyCode;
    console.log(KeyPressed);
    if(KeyPressed=='38'){
        up();
        console.log("up");
    }
    if(KeyPressed=='37'){
        left();
        console.log("left");
    }
    if(KeyPressed=='39'){
        right();
        console.log("right");
    }
    if(KeyPressed=='40'){
        down();
        console.log("down");
    }
    if(KeyPressed== '80' && e.shiftKey == true){
       console.log("Shift and p pressed together");
       block_image_width= block_image_width+10;
       block_image_height= block_image_height+10;
       document.getElementById("current_width").innerHTML= block_image_width;
       document.getElementById("current_height").innerHTML= block_image_height;

    }
    if(KeyPressed== '77' && e.shiftKey == true){
        console.log("Shift and m pressed together");
        block_image_width= block_image_width-10;
        block_image_height= block_image_height-10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
 
     }
     if(KeyPressed== '70'){
         new_image('ironman_face.png');
         console.log("f");
     }
     if(KeyPressed== '66'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(KeyPressed== '76'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(KeyPressed== '82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(KeyPressed== '72'){
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    
    
}
function up(){
    if(player_y>=10){
        player_y= player_y- block_image_height;
        console.log("When UP is pressed " + player_x + " ," + player_y);
        canvas.remove(player_object);
        player_update()
        
    }
}
function down(){
    if(player_y<=500){
        player_y= player_y+block_image_height;
        console.log("When DOWN is pressed " + player_x + " ," + player_y);
        canvas.remove(player_object);
        player_update()
        
    }
}
function left(){
    if(player_x>=0){
        player_x= player_x-block_image_width;
        console.log("When LEFT is pressed " + player_x + " ," + player_y);
        canvas.remove(player_object);
        player_update()
        
    }
}
function right(){
    if(player_x<=700){
        player_x= player_x+block_image_width;
        console.log("When RIGHT is pressed " + player_x + " ," + player_y);
        canvas.remove(player_object);
        player_update()
        
    }
}
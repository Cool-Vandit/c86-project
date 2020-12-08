var canvas= new fabric.Canvas("myCanvas");

var player_x= 10;
var player_y= 10;

var block_width= 30;
var block_height= 30;

var block_img="";
var player_img="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    });
}
function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_img=Img;
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}
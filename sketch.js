var form;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    form=new Form();

   

}

function draw(){
    background("white");
    form.display();
    
}






class Form
{
    constructor(){
        this.title=createElement("h1");
        this.input=createInput("");
        this.button=createButton("play");
        this.greeting=createElement("h2");
    }

    display()
    {
        this.title.position(450,20);
        this.title.html("GARENA FREE FIRE");
        this.input.position(450,200);
        this.button.position(500,250);

         this.button.mousePressed(()=>
         {
             this.input.hide();
             this.button.hide();
             this.greeting.position(450,200);
             this.greeting.html("hi play FREE FIRE"+this.input.value());
         }

         )

    }
}
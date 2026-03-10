function Pencil(name,color,price,compnayName,feedback){
    this.name=name;
    this.color=color;
    this.price=price;
    this.compnayName=compnayName;
    
    this.quality=function (){
         console.log(feedback);
         
    }


}
let pencil1=new Pencil("natraj","red",10,"ITC","4")
console.log(pencil1.quality());
let pencil2=new Pencil("absara","yellow",20,"Doms",8)
console.log(pencil2.quality());


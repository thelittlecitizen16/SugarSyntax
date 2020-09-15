function ReplaceByKeysWithSplit(word, keyToReplace) {
    for (key in keyToReplace) {
        word= word.split(new RegExp("{" + key + "}", 'i')).join(keyToReplace[key]);
    }
    return word;
  }
  function ReplaceByKeysWithindexOf(word, keyToReplace) {
    let newWord;
    for (key in keyToReplace) {
        let index =word.indexOf("{" + key + "}");
        newWord =word.substring(0,index);
        newWord+= keyToReplace[key];
        newWord +=word.substring((index +2+key.length), word.length);
    }
    return newWord;
  }
  function ReplaceByKeysWithReplace(word, keyToReplace) {
    a = this;
    for (key in keyToReplace) {
         word = word.replace("{" + key + "}", keyToReplace[key])
    }
    return word;
  }


  console.log(ReplaceByKeysWithSplit("Mamas {number} Empire!",{number: 6} ));
  console.log(ReplaceByKeysWithindexOf("Mamas {number} Empire!",{number: 6} ));
  console.log(ReplaceByKeysWithReplace("Mamas {number} Empire!",{number: 6} ));



  class Shape  {
    constructor(color, area, x,y) {
      this.color = color;
      this.area = area;
      this.point = new Point(x,y);
    }
    Print() 
    {
        console.log("area:",this.area);
        console.log("color:",this.color);
        console.log("Location:",this.point.x,this.point.y);
    }
    ChangePoint(x,y)
    {
        this.point.x=x;
        this.point.y=y;
    }
  }

  class Point  {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  class Circle extends  Shape{
    constructor(color, area, x,y,radius ) {
        super(color, area, x,y); 
      this.radius = radius;
    }
    Print() 
    {
        console.log("shape: circle");
        super.Print(); 
        console.log("radius:",this.radius);
    } 
  }

  
  class Square extends  Shape{
    constructor(color, area, x,y ) {
        super(color, area,x,y); 
    }
    Print() 
    {
        console.log("shape: square");
        super.Print(); 
    }
  }


  class Rectangle extends  Shape{
    constructor(color, area, x,y) {
        super(color, area,x,y); 
    }
    Print() 
    {
        console.log("shape: rectangle");
        super.Print(); 
    }
  }

  let circle=new Circle("red",20,5,5, 7.5)
  circle.Print();
  circle.ChangePoint(10,10);
  circle.Print();








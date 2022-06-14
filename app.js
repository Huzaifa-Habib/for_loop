// Question 1=======================================================

document.write("<h2>Answer : 1</h2>")

// for (var i = 1; i <= 5; i++) 
// {
//    alert("Hello World")
// }


// Question 2========================================================

document.write("<h2>Answer : 2</h2>")
document.write("<h3>Counting till 10 using loop : </h3>")



for (var i = 1; i <=10; i++) {
    document.write(i + "</br>")
}

document.write("</br>");
document.write("</br>");


// Question 3===========================================================
document.write("<h2>Answer : 3</h2>")


var a= prompt("Enter the number for its multiplication table");
var b= prompt("Enter the length of number for its multiplication table");

for (var t = 1 ; t <= b; t++) {
    var result = t * a;
    document.write(a + " X " + t + " = " + result + "</br>")

}


document.write("</br>");
document.write("</br>");



// Quetion 4 ========================================================

var q= ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
document.write("<h2>Answer : 4</h2>")


for (var m=0; m < q.length; m++) {
    document.write(q [m] );
    document.write( "</br>")

}



document.write( "</br>")
document.write( "</br>")



// Question 5===================================================

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h2>Answer : 5</h2>")


for (var i=0; i < fruits.length; i++) {
    document.write(fruits [i] );
    document.write( "</br>")

}


document.write( "</br>")




for (var f = 0; f < fruits.length; f++) {
    document.write( "Element at index " + [f] + " is " + fruits[f] + "</br>"  );

}
document.write( "</br>")
document.write( "</br>")

// Question 6=====================================================

var n=[];

document.write("<h2>Answer : 6</h2>")


var a=prompt("Enter number of items");
n = a;
document.write("<h2>" + "Number of items : " +  n + "</h2> ");
document.write("<h2> Items: </h2>"  );

for (var u=0; u < n; u++) {
   var z = prompt("Enter value for index " + [u]);
   document.write("<h2>"  + z + "</h2>");
}
document.write( "</br>")
document.write( "</br>")



// Question 7========================================================

document.write("<h2>Answer : 7</h2>")

document.write("<b>Counting:<b/>" + "</br>");


for (var l=1; l <=15; l++) {
    document.write(l + ", " ); 
}
document.write( "</br>")
document.write( "</br>")




var num;
document.write("Reverse Counting" + "<br />");

for (num = 10; num >= 1; num--) {
  document.write( num + ", " );
}

document.write( "</br>")
document.write( "</br>")

document.write("Odd Numbers " + "<br />");

for(var o=1; o<20; o +=2) {
    document.write(o + ", ");
}

document.write( "</br>")
document.write( "</br>")

document.write("Even Numbers " + "<br />");
for(var e=0; e<=20; e +=2) {
    document.write(e + ", ");
}

document.write( "</br>")
document.write( "</br>")

document.write("Series Numbers " + "<br />");
for(var s=2; s<=20; s +=2) {
    if (s % 2===0) {
        document.write(s + "K, ");


    }
}

document.write( "</br>")
document.write( "</br>")

// Question8==============================================================

document.write("<h2>Answer : 8</h2>")


var bakery=["cake","apple pie","cookie","chips","patties"];
var ask = prompt("What do you want to order? ").toLowerCase();

// for (b=0; b <bakery.length ; b++) { 
//     if (bakery[b] === prompt) {
        
//         // document.write (ask + " is available at index " + [b] ); break;
        
//         alert(ask + " is available at index " + [b])
//         break;
        
//     }

//     else if (bakery[b] !== ask){
//         document.write("We are sorry "+ ask + " Not available at our bakery");
//     }

//     else{
//         "";
//     }

// }

document.write( "</br>")
document.write( "</br>")



// Question 9=====================================================

document.write("<h2>Answer : 9</h2>")


var n=[24,53,17,18,78];

var largest = 0;
for( var i = 0; i < n.length; i++) {
    if(largest < n[i]) {
      largest = n[i]; } 
    }
    document.write("<h3> Array items : " + n + "</h3>") ;

    document.write("<h3> The largest number is " + largest + "</h3>") ;
    

document.write( "</br>")
document.write( "</br>")



// Question 10=====================================================================

document.write("<h2>Answer : 10</h2>")


var numbers = [24,53,78,91,12]
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
     if (numbers[i] < smallest) {
        smallest = numbers[i];}

      }

      document.write("<h3> Array items : " + numbers + "</h3>") ;
       document.write("<h3> The smallest number is " + smallest + "</h3>") ;

      

document.write( "</br>")
document.write( "</br>")


// Question 11=============================================================

document.write("<h2>Answer : 11</h2>")


var numbers = [24,53,78,91,12]

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];}
  }
  document.write("<h3> Array items : " + numbers + "</h3>") ;
  document.write("<h3> The smallest number is " + smallest + "</h3>") ;

  document.write("<h3> The largest number is " + largest + "</h3>") ;

document.write( "</br>")
document.write( "</br>")



// Question 12=============================================================


document.write("<h2>Answer : 12</h2>")

document.write("<h3> Mulitiples of 5 ranging till 100:  </h3>")
for (var five=5; five<101; five+=5) {
    document.write(five + ", ");



}


document.write( "</br>")
document.write( "</br>")



// Question 13=============================================================

document.write("<h2>Answer : 13</h2>")


// var students =["ALi","Sami","Taha","Inam"];
// var scores=[58,73,89,90];
// // var table=[];

// // for(k=0; k < students.length; k++ ){
//     // for(j=0; j<scores.length; j++ ){ 
//         // table.push(students[k] + scores[j])
// // document.getElementById("data").innerText=table;
// // document.getElementById("head").innerText="Students";

// document.getElementById("data").innerText=students[0];
// document.getElementById("data1").innerText=students[1];
// document.getElementById("data2").innerText=students[2];
// document.getElementById("data3").innerText=students[3];

// document.getElementById("score").innerText=scores[0];
// document.getElementById("score1").innerText=scores[1];
// document.getElementById("score2").innerText=scores[2];
// document.getElementById("score3").innerText=scores[3];

// }




// Question 14==========================================================

document.write("<h2>Answer : 14</h2>")


// var scores1= [12,45,3,22,34,50];
// var input = prompt("Give the number at which you want to stop the program (12,45,3,22,34,50)");

// // for (f=0; f <scores1.length; f++) {
//     if (prompt === scores1.indexOf) {

//     }
//     document.write(scores1);

    
   
    
// // }


// Question 15====================================================

document.write("<h2>Answer : 15</h2>")


// var a = [ [1,2,3] , [4,5,6] , [7,8,9] ];

// console.log(a[1]);

// for (var i=0; i<a.length[0] ; i++) {
    

//     for (var k=0; k<a.length[1]; k++){
        
       
//     }

//     // for (var z=0; z<a[2]; z++){
        

//     // }
    

//     // document.write(a[i] + "</br>") ;
//     document.write(a[i])
//     document.write(a[k])
  
   

// }
// document.write(a[i]);
// document.write(a[k]);


// Question 16===============================================================

document.write("<h2>Answer : 16</h2>")



var userNum = Number(window.prompt("Enter number of your choice greater than1"));
for (var i = userNum; i>=0 ; i-=0.5) {
    document.write(i + ", ");
}


// Question 17==================================================================

document.write("<h2>Answer : 17</h2>")


for (i = 0; i <= 20; i++) {
    if (i%2===0) {
        document.write( i +" Is even" + "<br>");
      
    }

    else{
        document.write( i+" Is odd" + "<br>")
    }
    

}


document.write( "</br>")
document.write( "</br>")



// Question 18========================================================

document.write("<h2>Answer : 18</h2>")

var pro=1
for(var i=1; n=i<=7; i+=2)
    if(n%2==1)
    {
    pro=pro*i;
    document.write(i + "<br>");
    }
document.write("Product fo odd number from 1 to 7 is "+ pro);


document.write( "</br>")
document.write( "</br>")

// Question 19===================================================

document.write("<h2>Answer : 19</h2>")


var star = Number(prompt("Enter number to print pattern of stars"));
var string = "";

for (let i = 1; i <= star; i++) {
  for (let j = 0; j < star-i; j++) {
   string += "*";
  } 
  string += "</br>";
}
document.write(string);

document.write( "</br>")
document.write( "</br>")


// Question 20=================================================================

document.write("<h2>Answer : 20</h2>")

var string = "";
var string2 = "";
var string3 = "";

var star2=Number(prompt("Enter number of lines at which you want print patterns of stars"))


for(let i = 0; i < star2; i++) { 
  for(let j = 0; j < star2; j++) { 
    string += "*";
  }
  
  string += "<br>";
}

document.write(string);


document.write( "</br>")
document.write( "</br>")


for (let i = 1; i < star2; i++) {
   
    
    for (let k = 0; k < star2 - i; k++) {
      string2 += "*";
    }
    string2+= "<br>";
  }
  document.write(string2);

  
document.write( "</br>")
document.write( "</br>")


  for (let i = 1; i <= star2; i++) {
    for (let j = 0; j < i; j++) {
      string3 += "*";
    }
    string3 += "<br>";
  }
  document.write(string3);



//========== End =======================================================



































































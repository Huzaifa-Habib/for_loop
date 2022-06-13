// Question 1=======================================================

// for (var i = 1; i <= 5; i++) 
// {
//    alert("Hello World")
// }


// Question 2========================================================

for (var i = 1; i <=10; i++) {
    document.write(i + "</br>")
}

document.write("</br>");
document.write("</br>");


// Question 3===========================================================

// var a= prompt("Enter the number for its multiplication table");
// var b= prompt("Enter the length of number for its multiplication table");

// for (var t = 1 ; t <= b; t++) {
//     var result = t * a;
//     document.write(a + " X " + t + " = " + result + "</br>")

// }

// document.write("</br>");
// document.write("</br>");



// Quetion 4 ========================================================

var q= ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

for (var m=0; m < q.length; m++) {
    document.write(q [m] );
    document.write( "</br>")

}

document.write( "</br>")
document.write( "</br>")



// Question 5===================================================

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

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
for(var s=0; s<=20; s +=2) {
    document.write(s + "K, ");
}

document.write( "</br>")
document.write( "</br>")

// Question8==============================================================

// var bakery=["cake","apple pie","cookie","chips","patties"];
// var ask = prompt("What do you want to order? ").toLocaleLowerCase;

// for (b=0; b <bakery.length ; b++) { 
//     if (bakery[b] === prompt) {
        
//         // document.write (ask + " is available at index " + [b] ); break;
        
//         alert(ask + " is available at index " + [b])
        
//     }

//     else if (bakery[b] !== prompt){
//         document.write("We are sorry "+ ask + " Not available at our bakery");break;
//     }

//     else{
//         "";
//     }

// }

document.write( "</br>")
document.write( "</br>")



// Question 9=====================================================

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
document.write("<h3> Mulitiples of 5 ranging till 100:  </h3>")
for (var five=5; five<101; five+=5) {
    document.write(five + ", ");



}


document.write( "</br>")
document.write( "</br>")



// Question 13=============================================================

var students =["ALi","Sami","Taha","Inam"];
var scores=[58,73,89,90];
// var table=[];

// for(k=0; k < students.length; k++ ){
    // for(j=0; j<scores.length; j++ ){ 
        // table.push(students[k] + scores[j])
// document.getElementById("data").innerText=table;
// document.getElementById("head").innerText="Students";

document.getElementById("data").innerText=students[0];
document.getElementById("data1").innerText=students[1];
document.getElementById("data2").innerText=students[2];
document.getElementById("data3").innerText=students[3];

document.getElementById("score").innerText=scores[0];
document.getElementById("score1").innerText=scores[1];
document.getElementById("score2").innerText=scores[2];
document.getElementById("score3").innerText=scores[3];

// }




// Question 14==========================================================

// var scores1= [12,45,3,22,34,50];
// var input = prompt("Give the number at which you want to stop the program (12,45,3,22,34,50)");

// // for (f=0; f <scores1.length; f++) {
//     if (prompt === scores1.indexOf) {

//     }
//     document.write(scores1);

    
   
    
// // }


// Question 15====================================================

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


var userNum = Number(window.prompt("Enter number of your choice greater than1"));
for (var i = userNum; i>=0 ; i-=0.5) {
    document.write(i + ", ");
}


// Question 17==================================================================

for (i = 0; i <= 20; i++) {
    if (i%2===0) {
        document.write( i +" Is even" + "<br>");
      
    }

    else{
        document.write( i+" Is odd" + "<br>")
    }
    

}

// Question 18========================================================





















































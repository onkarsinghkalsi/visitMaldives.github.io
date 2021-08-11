
displayFeedback();
$('#tooltip').tooltip();
$("#first_name").focus();
  
// contact form coding--------

$("#email_form").submit(function(evt){
  var fname=$("#first_name").val().trim();
  var lname=$("#last_name").val().trim();
  var email=$("#email").val().trim();
  var phone=$("#phone").val().trim();
  var message=$("#message").val().trim();
  var emailPattern=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  var phonePattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var isValid=true;
    
  if($("#first_name").val()==""){
    $("#first_name").next().text("This field is required");
    isValid=false;
  }else{
    $("#first_name").next().text("*");         
  } 

  if($("#last_name").val()==""){
    $("#last_name").next().text("This field is required");
    isValid=false;
  }else{
    $("#last_name").next().text("*");         
  } 

  if(email==""){
    $("#email").next().text("This field is required.");
    isValid=false;
  }else if(!emailPattern.test(email)){ 
    $("#email").next().text("Enter a valid email.");
    isValid=false;
  }else{
    $("#email").next().text("*");  
  }

  if(phone==""){
    $("#phone").next().text("This field is required.");
    isValid=false;
  }else if(!phonePattern.test(phone)){
     $("#phone").next().text("Enter a valid Phone Number.");
    isValid=false;
  }else{
    $("#phone").next().text("*");  
  }
  
  if($("#message").val()==""){
    $("#message").next().text("This field is required");
   isValid=false;
  }else{
    $("#message").next().text("*");         
  } 
  
  if(isValid){
    $("#email_form").submit();
  }
  if(!isValid)
    evt.preventDefault();
});


// Feedback form coding---------
$("#mybutton").click(function(evt){

    var customer=$("#customer").val().trim();
    var email=$("#email_address").val().trim();
    var rating= $("input[name='r']:checked"). val();
    var feedback=$("#myfeedback").val().trim();
    var emailPattern=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var isValid=true;
    
    if(customer==""){
      $("#customer").next().text("This field is required");
      isValid=false;
    }else{
      $("#customer").next().text("*");         
    } 

    if(email==""){
      $("#email_address").next().text("This field is required.");
      isValid=false;
    }else if(!emailPattern.test(email)){ 
      $("#email_address").next().text("Enter a valid email.");
      isValid=false;
    }else{
      $("#email_address").next().text("*");  
    }

    if(feedback==""){
      $("#myfeedback").next().text("This field is required");
       isValid=false;
    }else{
      $("#myfeedback").next().text("*");         
    }

    if(rating == undefined){
      $('.rValid').text('This is required.');
      isValid=false;
    }else {
      $('.rValid').text('*');
    }

    if(isValid==false){
      evt.preventDefault();
      return;
    }
    
    // fetching local storage
		var a = localStorage.getItem("customer");
		if(a==null)
			localStorage.setItem("customer",customer);
		  else
			localStorage.setItem("customer",a+"\n"+customer);
			
    var b = localStorage.getItem("rating");
    if(b==null)
    localStorage.setItem("rating",rating);
    else
        localStorage.setItem("rating",b+"\n"+rating);
         
		var c = localStorage.getItem("feedback");
		if(c==null)
			localStorage.setItem("feedback",feedback);
		else
			localStorage.setItem("feedback",c+"\n"+feedback);


  if(isValid){ 
    displayFeedback();
    resetValues();
  }
});

// User defined funcitons----------

// displaying the feedback from local storage
function displayFeedback() {
  var check = localStorage.getItem("customer");
  if(check == null){
    return;
  }
  var a = localStorage.getItem("customer").split("\n");
  var b = localStorage.getItem("rating").split("\n");
  var c = localStorage.getItem("feedback").split("\n");
  var row="";
  
  for(let i=0;i<a.length;i++){
    // row+= "\n"+"User Name : "+a[i]+"\n"+"Rating : "+b[i]+"\n"+"'"+c[i]+"'"+"\n";
    row += '<table><tr>\
              <th>User Name:</th>\
              <td>'+a[i]+'</td>\
          </tr>\
          <tr>\
              <th>Rating:</th>\
              <td>'+b[i]+'</td>\
          </tr>\
          <tr>\
              <th>Feedback:</th>\
              <td>'+c[i]+'</td>\
          </tr></table>';
  }
  $("#feed").html(row);

}

// resetting input values
function resetValues() {
  $("#customer").val("");	
  $("#email_address").val("");
  $("#myfeedback").val("");
  $("input:radio[name='r']").each(function(i) {
    this.checked = false;
  });
}
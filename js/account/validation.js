define([],function(){return function(e){requirejs(["text!html/account/validation.html"],function(t){setContent(t),document.getElementById("submit").addEventListener("click",function(t){t.preventDefault(),null!=e&&post({email:document.getElementById("email").value,password:document.getElementById("password").value,validationToken:e[0]},"getToken",function(e){console.log(1)})})})}});
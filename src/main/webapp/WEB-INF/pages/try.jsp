<!DOCTYPE html>
<html>
<head>
    <title>Posts</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<body>

<h1>Posts</h1>

<!--button onclick="alli(this)">All</button-->
<button onclick="fac(this)">Facebook</button>
<button onclick="yout(this)">Youtube</button>
<button onclick="twit(this)">Twitter</button>


<div id = "demo"></div>


<script>

            $.ajax({
                 type: "POST",
                 url: "admin/poster",
                 contentType: 'application/json',
                 success: function(response) {
                 console.log('hi');
                 console.log(response.data);
                 var x = response.data;
                 var i=0;
                 var s = '<ul>';
                 var s1="";
                 for(i=0;i<x.length;i++)
                 {
                 s = s+'<li>'+x[i].post+'</li>';
                 }
                  document.getElementById('demo').innerHTML = s+'</ul>';
                 }

            });

function fac(button) {

            $.ajax({
                 type: "POST",
                 url: "admin/fac",
                 contentType: 'application/json',
                 success: function(response) {
                 console.log('hi');
                 console.log(response.data);
                 var x = response.data;
                 var i=0;
                 var s = '<ul>';
                 var s1="";
                 for(i=0;i<x.length;i++)
                 {
                 s = s+'<li>'+x[i].post+'</li>';
                 }
                  document.getElementById('demo').innerHTML = s+'</ul>';
                 }

            });

    }
    function yout(button) {

                $.ajax({
                     type: "POST",
                     url: "admin/yout",
                     contentType: 'application/json',
                     success: function(response) {
                     console.log('hi');
                     console.log(response.data);
                     var x = response.data;
                     var i=0;
                     var s = '<ul>';
                     var s1="";
                     for(i=0;i<x.length;i++)
                     {
                     s = s+'<li>'+x[i].post+'</li>';
                     }
                      document.getElementById('demo').innerHTML = s+'</ul>';
                     }

                });

        }
        function twit(button) {

                    $.ajax({
                         type: "POST",
                         url: "admin/twit",
                         contentType: 'application/json',
                         success: function(response) {
                         console.log('hi');
                         console.log(response.data);
                         var x = response.data;
                         var i=0;
                         var s = '<ul>';
                         var s1="";
                         for(i=0;i<x.length;i++)
                         {
                         s = s+'<li>'+x[i].post+'</li>';
                         }
                          document.getElementById('demo').innerHTML = s+'</ul>';
                         }
                    });

            }
</script>


</body>
</html>
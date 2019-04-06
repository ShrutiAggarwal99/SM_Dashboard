<!DOCTYPE html>
<html>
<head>
	<title>Add a Post</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>
<body>

<h2>HTML Forms</h2>

<form >
  Post:<br>
  <input type="text" id = "post">

<button onclick="postl(this)" class="btn"> Post </button>
</form>

<script>

function postl(button){
        var post;
        post=$("#post").val();

        var data={"post":post};
           $.ajax({
                 type: "POST",
                 url: "admin/linker",
                 data: JSON.stringify(data),
                 contentType: 'application/json',
           });
    };
</script>
</body>
</html>
<%--
  Created by IntelliJ IDEA.
  User: aman
  Date: 13/12/18
  Time: 12:08 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script>
        window.fbAsyncInit = function() {
            // FB JavaScript SDK configuration and setup
            FB.init({
                appId: '2015383252115992', // FB App ID
                cookie: true,  // enable cookies to allow the server to access the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.8' // use graph api version 2.8
            });
            FB.api('/me/posts?fields=likes.summary(true),shares,comments.summary(true)', {locale: 'en_US'},
                function (response) {
                    console.log(response);

                });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    </script>
</head>

<body>
<script>


</script>
</body>
</html>

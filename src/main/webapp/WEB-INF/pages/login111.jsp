<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>


<!DOCTYPE >
<html>
<head>
<title>Display Data</title>
<script src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>

 <meta name="author" content="ThemeLooks">
    <meta name="description" content="Multipurpose Social Network HTML5 Template">
    <meta name="keywords" content="social media, social network, forum, shop, bootstrap, html5, css3, template, responsive, retina ready">

    <!-- ==== Favicon ==== -->
    <link rel="icon" href="http://themelooks.us/demo/socifly/html/favicon.png" type="image/png">

    <!-- ==== Google Font ==== -->
    <link rel="stylesheet" href="/static/template/smdash/css">

    <!-- ==== Plugins Bundle ==== -->
    <link rel="stylesheet" href="/static/template/smdash/plugins.min.css">

    <!-- ==== Main Stylesheet ==== -->
    <link rel="stylesheet" href="/static/template/smdash/style.css">

    <!-- ==== Responsive Stylesheet ==== -->
    <link rel="stylesheet" href="/static/template/smdash/responsive-style.css">

    <!-- ==== Color Scheme Stylesheet ==== -->
    <link rel="stylesheet" href="/static/template/smdash/color-1.css" id="changeColorScheme">

    <!-- ==== Custom Stylesheet ==== -->
    <link rel="stylesheet" href="/static/template/smdash/custom.css">

<style id="ccSwitcher">#cColorSwitcher {position: fixed; top: 50%; left: -220px; z-index: 999;} .ccs--body {float: left; width: 220px; padding: 14px 15px 20px; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 2px;} .ccs--body:before {content: " "; position: absolute; top: 0; left: 0; right: 50px; bottom: 0; background-color: #fff; z-index: 0;} .ccs--body > h6 {position: relative; margin: 0; font-size: 16px; line-height: 24px; z-index: 1;} .ccs--body > ul {margin: 0 -5px; padding: 0; list-style: none; overflow: hidden;} .ccs--body > ul > li {position: relative; float: left; width: 30px; height: 30px; margin: 10px 5px 0; overflow: hidden; cursor: pointer;} .ccs--body > ul > li > span:nth-child(1) {position: absolute; width: 100%; height: 100%;} .ccs--body > ul > li > span:nth-child(2) {position: absolute; top: 0; right: -2px; width: 20px; height: 45px;} .ccs--toggle-btn {float: right; width: 50px; padding: 15px 0px; color: #fff; font-family: Arial, sans-serif; font-size: 14px; font-weight: 100; line-height: 22px; text-align: center; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 2px;}</style><style id="theia-sticky-sidebar-stylesheet-TSS">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>
<style type="text/css">
      a{background-color:transparent;}
  a:active,a:hover{outline:0;}
  @media print{
  *,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
  a,a:visited{text-decoration:underline;}
  a[href]:after{content:" (" attr(href) ")";}
  a[href^="javascript:"]:after{content:"";}
  }
  *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
  :after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
  a{color:#337ab7;text-decoration:none;}
  a:focus,a:hover{color:#23527c;text-decoration:underline;}
  a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
        .fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
          .fa-twitter:before{content:"\f099";}
          .fa-facebook:before{content:"\f09a";}
          .fa-pinterest:before{content:"\f0d2";}
  a{color:#11151c;-webkit-transition:0.2s color;transition:0.2s color;}
  a:hover,a:focus{color:#ee4266;text-decoration:none;outline:none;}
  ::-moz-selection{background-color:#ee4266;color:#FFF;}
  ::selection{background-color:#ee4266;color:#FFF;}
  .social-facebook{background:#225b99!important;}
  .social-twitter{background:#00adf2!important;}
  .social-pinterest{background:#21cc36!important;}
  .post-share a{display:inline-block;padding:5px 15px;border-radius:5px;color:#fff;background-color:#97989b;margin-right:4px;margin-bottom:6px;-webkit-transition:0.2s opacity;transition:0.2s opacity;}
  .post-share a:hover{opacity:0.9;}
  .post-share a i{width:20px;text-align:center;}
  .post-share a span{padding-left:10px;border-left:2px solid rgba(255, 255, 255, 0.1);text-transform:uppercase;font-size:12px;font-weight:700;margin-left:10px;}
   </style>

</head>
<body>
    <c:forEach items="${list}" var="temp">
        <c:set var="count" value="${count + 1}" scope="page"/>

        ${temp.post} <br>
    </c:forEach>

   <script src="/static/template/smdash/plugins.min.js"></script>

    <!-- ==== Color Switcher Plugin ==== -->
    <script src="/static/template/smdash/color-switcher.min.js"></script><div id="cColorSwitcher" class="clearfix" style="transform: translateY(-50%);"><div class="ccs--body"><h6>Main Colors:</h6><ul><li data-file-path="css/colors/color-1.css"><span style="background-color: #1da1f2;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-2.css"><span style="background-color: #82b440;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-3.css"><span style="background-color: #ff5252;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-4.css"><span style="background-color: #e91e63;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-5.css"><span style="background-color: #f69323;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-6.css"><span style="background-color: #ffcb1a;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-7.css"><span style="background-color: #00b249;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-8.css"><span style="background-color: #d48b91;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-9.css"><span style="background-color: #179ea8;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li><li data-file-path="css/colors/color-10.css"><span style="background-color: #8cbeb2;"></span><span style="transform: rotate(45deg); background-color: transparent;"></span></li></ul></div><div class="ccs--toggle-btn" style="background-color: rgb(29, 161, 242);"><i class="fa fa-paint-brush"></i></div></div>

    <!-- ==== Main Script ==== -->
    <script src="/static/template/smdash/main.js"></script>





<script>

    window.fbAsyncInit = function() {
               FB.init({
                   appId: '1470505273079948',
                   status: true,
                   cookie: true,
                   xfbml: true,
                   oauth: true
               });
               FB.Event.subscribe('edge.create', function(response) {
                   alert('You liked the URL: ' + response);
                 });
           };
        (function(d) {
               var js, id = 'facebook-jssdk';
               if (d.getElementById(id)) {
                   return;
               }
               js = d.createElement('script');
               js.id = id;
               js.async = true;
               js.src = "//connect.facebook.net/en_US/all.js";
               d.getElementsByTagName('head')[0].appendChild(js);
           }(document, 'script', 'facebook-jssdk'));


function postl(button){
        var post,link,i=0;
        link=$("#post").val();
        var expression1 = /facebook/gi;
           var expression2 = /youtube/gi;
           var expression3 = /twitter/gi;
           var regex1 = new RegExp(expression1);
           var regex2 = new RegExp(expression2);
           var regex3 = new RegExp(expression3);
           var b1 = '<div class="post-share"><a href="#" class="social-facebook" id = "shareBtn';
           var b3 = '"><i class="fa fa-facebook"  ></i><span>Share</span></a><a href="https://twitter.com/intent/tweet?text=';
           var b2 = ' "  data-size="large" target="_blank" class="social-twitter"><i class="fa fa-twitter"></i><span>Tweet</span></a><a href="#" class="social-pinterest"><i class="fa fa-share"></i><span>Share</span></a></div>';
           if(link.match(regex1)) {
               var a = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F';
               var b ='%2Fposts%2F';
               var c ='%3F__xts__%255B0%255D%3D68.ARD';
               var d ='%26__tn__%3DC-R&width=500&show_text=true&appId=430234117511265&height=784" width="100%" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';
               var res = [];
               res = link.split("/");
               var slice = res[5];
               slice = slice.slice(0,16);
               var restlink = res[5].slice(16);
               post = a+res[3]+b+slice+c+restlink+d+b1+i+b3+link+b2;
           } else
          if(link.match(regex2)){
           //iframe gen. for yt
               var a ='<iframe width="100%" height="400" src="https://www.youtube.com/embed/';
               var b ='" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
               var id = link.slice(32,43);
               post = a+id+b+b1+i+b3+link+b2;
           } else
           if (link.match(regex3)) {
           //iframe gen. for twt
               var a = ' <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://t.co/5LZXRU6CYf">pic.twitter.com/5LZXRU6CYf</a></p>&mdash;<a href=" ';
               var b = '?ref_src=twsrc%5Etfw"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8">';
               var c = ' </' ; var d = 'script>';
               post = a + link + b + c + d + b1+i+b3+link+b2;
           }
           i++;
           var s = "link ";
           document.getElementById('shareBtn'+'0').onclick = function() {
            FB.ui(
           {
            method: 'share',
            display: 'popup',
            href: s
           },
          function(response) {
            if (response && response.post_id) {
              alert('Post was published.');
            } else {
              alert('Post was not published');
            }
          }
           );
           }
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
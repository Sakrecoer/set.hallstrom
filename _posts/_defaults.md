<!DOCTYPE html>
<html>

<head>
  <title>{{ page.title }}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
  <meta name='robots' content='index' />
  <meta name="description" content="{{ page.description }}" />
  <meta name="keywords" content="{{ page.keywords }} " />
  <meta name="dc.date.modified" scheme="ISO8601" content="2018-03-13T00:17:15+01:00" />
  <meta name="date" content="2018-02-17" scheme="YYYY-MM-DD" />
  <meta property="og:image" content="{{ site.url }}{{ page.image }}" />
  <meta property="twitter:image" content="{{ site.url }}{{ page.image }}" />
  <meta property="og:title" content="{{ page.title }}" />
  <meta property="og:site_name" content="Set Hallstr&ouml;m" />
  <meta property="og:description" content="{{ page.description }}" />
  <meta property="og:url" content="https://set.hallstrom.ch" />
  <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />

  <script type="text/javascript" src="/assets/js/b4w.min.js"></script>
  <script type="text/javascript" src="/assets/js/camera_anim.js"></script>
    <script type="text/javascript" src="/assets/js/my_cv.js"></script>
</head>

<body>
<div id="main_canvas_container"></div>
<div id="contain">
  <div class="column">
    <h1 class="editable">{{ page.title }}</h1>
    <a href="https://enrenarevardag.se" target="_blank" class="editable">{{ page.description }}</a>
    <p>{{ page.content }}</p>
  </div>
</div>
{% include footer.html %}
</body>

</html>

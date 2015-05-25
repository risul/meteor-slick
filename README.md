# Slick for Meteor

Slick - the last carousel you'll ever need.
Demo: [http://kenwheeler.github.io/slick](http://kenwheeler.github.io/slick/)

## Installing

```bash
    meteor add risul:slick
```

## Usage

Template:

```html
<template name="hello">
  <div id="carousel">
    <div id="demo-box">1</div>
    <div id="demo-box">2</div>
    <div id="demo-box">3</div>
    <div id="demo-box">4</div>
    <div id="demo-box">5</div>
    <div id="demo-box">6</div>
    <div id="demo-box">7</div>
    <div id="demo-box">8</div>
    <div id="demo-box">9</div>
    <div id="demo-box">10</div>
    <div id="demo-box">11</div>
    <div id="demo-box">12</div>
  </div>
</template>
```

On template rendered:

```js
Template.hello.rendered = function() {
  $('#carousel').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  });
}
```

CSS for the "demo-box":

```css
#demo-box {
    background: #eeeeee;
    color: #3498db;
    font-size: 36px;
    line-height: 90px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
    width: 145px;
}
```

Create your own theme or include the default slickjs theme: https://raw.githubusercontent.com/kenwheeler/slick/1.5.5/slick/slick-theme.css


## Documentaion

See the getting started guide: http://kenwheeler.github.io/slick/#getting-started
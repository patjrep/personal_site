// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist??
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



function changeGifSize(id) {
  let typrGif = document.getElementById(id);
  let height = typrGif.height;
  let width = typrGif.width;
  originalSize = typrGif.naturalHeight;
  if (height > 100 || width > 100) {
    typrGif.style.height = '100px';
    typrGif.style.width = '100px';
  }


  if (height || width > 100 && screen.width < 1000) {
    typrGif.style.height = '100px';
    typrGif.style.width = '100px';

    if (height == 100) {
      // let outer = $("")
      // $("td:parent").fadeTo(1500, 0);
      console.log(typrGif.style.height);
      typrGif.style.height = '340px';
      typrGif.style.width = '573px';
    }

  }
  if (height == 100 && screen.width < 1000) {
    // let outer = $("")
    // $("td:parent").fadeTo(1500, 0)
    // let gifClass = document.getElementsByClassName("table-col-2");
    // console.log(gifClass)
    // console.log(document.getElementsByClassName("proj-title").style.color = "red");  //need to fix for mobile
    typrGif.style.height = '500px';
    typrGif.style.width = '843.17px';
  }

  // console.log(height, width)
}

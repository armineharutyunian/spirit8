//-----------------------------------------------------------------//
//----------------------------SORTING-------------------------------//

var sorting = () => {
  var list = document.getElementsByClassName("filter-list")[0];
  var listItems = Array.from(list.children);
  listItems.map((item) => {
    item.onclick = (e) => {
      var active = listItems.find((el) => {
        return el.className.includes("active");
      });
      active.className = active.className.replace(" active", "");
      e.target.className += " active";
      doFiltering(e.target);
    }
    return item;
  });
}

var doFiltering = (target) => {
  var projects = document.getElementsByClassName("works")[0];
  var projectItems = Array.from(projects.children);
  var name = target.className.toLowerCase().replace(" active","");

  projectItems.map((item) => {
    item.style.display = "block";
    return item;
  });

  projectItems.map((item) => {
    if (name === "all")
      item.style.display = "block";
    else if (!item.className.includes(name))
      item.style.display = "none";
    return item;
  });
}

sorting();

//-----------------------------------------------------------------//
//----------------------------SLIDES-------------------------------//

$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick-slider-no-dots').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick-single').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
  $('.slick-5').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });
});

//-----------------------------------------------------------------//
//---------------------------GALLERY-------------------------------//

var gallery = () => {
  var works = document.getElementsByClassName("works")[0];
  works = Array.from(works.children);
  works.map((item) => {
    item.onclick = () => {
      var img = item.firstElementChild.cloneNode();
      img.className = "gallery-item";
      var overlay = document.createElement("div");
      document.body.appendChild(overlay);
      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 0);
      overlay.className = "gallery";
      overlay.appendChild(img);
      document.body.style.overflow = "hidden";
      var btn = document.createElement("div");
      btn.className = "closing-btn";
      overlay.appendChild(btn);
      btn.onclick = () => {
        document.body.removeChild(overlay);
        document.body.style.overflow = "initial";
      }
    }
    return item;
  });
}

gallery();
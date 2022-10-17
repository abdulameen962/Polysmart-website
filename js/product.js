function slider1() {
    var splide1 = new Splide('.slider1', {
        pagination: false,
    });

    var thumbnails = document.querySelectorAll('.thumbnails1 .thumbnail');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            splide1.go(index);
        });
    }

    splide1.on('mounted move', function() {
        var thumbnail = thumbnails[splide1.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove('is-active');
            }

            thumbnail.classList.add('is-active');
            current = thumbnail;
        }
    });

    splide1.mount();
}
slider1();

function slider2() {
    var splide = new Splide('.slider2', {
        pagination: false,
    });

    var thumbnails = document.querySelectorAll('.thumbnails2 .thumbnail');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            splide.go(index);
        });
    }

    splide.on('mounted move', function() {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove('is-active');
            }

            thumbnail.classList.add('is-active');
            current = thumbnail;
        }
    });

    splide.mount();
}
slider2();

function slider3() {
    var splide = new Splide('.slider3', {
        pagination: false,
    });

    var thumbnails = document.querySelectorAll('.thumbnails3 .thumbnail');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            splide.go(index);
        });
    }

    splide.on('mounted move', function() {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove('is-active');
            }

            thumbnail.classList.add('is-active');
            current = thumbnail;
        }
    });

    splide.mount();
}
slider3();

function slider4() {
    var splide = new Splide('.slider4', {
        pagination: false,
    });

    var thumbnails = document.querySelectorAll('.thumbnails4 .thumbnail');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            splide.go(index);
        });
    }

    splide.on('mounted move', function() {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove('is-active');
            }

            thumbnail.classList.add('is-active');
            current = thumbnail;
        }
    });

    splide.mount();
}
slider4();

function slider5() {
    var splide = new Splide('.slider5', {
        pagination: false,
    });

    var thumbnails = document.querySelectorAll('.thumbnails5 .thumbnail');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            splide.go(index);
        });
    }

    splide.on('mounted move', function() {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove('is-active');
            }

            thumbnail.classList.add('is-active');
            current = thumbnail;
        }
    });

    splide.mount();
}
slider5();
document.querySelectorAll(".thumbnails .thumbnail").forEach(function(e) {
        var img = e.children[0];
        if (img.src == "") {
            img.remove();
        }
    })
    // var elms = document.getElementsByClassName('splide');

// for (var i = 0; i < elms.length; i++) {
//     var splide = new Splide(elms[i], {
//         pagination: false,
//     });
//     var parent = elms[i].parentElement.children[1];
//     var thumbnails = parent.children;
//     var current;

//     for (var i = 0; i < thumbnails.length; i++) {
//         initThumbnail(thumbnails[i], i);
//     }

//     function initThumbnail(thumbnail, index) {
//         thumbnail.addEventListener('click', function() {
//             splide.go(index);
//         });
//     }

//     splide.on('mounted move', function() {
//         var thumbnail = thumbnails[splide.index];

//         if (thumbnail) {
//             if (current) {
//                 current.classList.remove('is-active');
//             }

//             thumbnail.classList.add('is-active');
//             current = thumbnail;
//         }
//     });
//     splide.mount();
// }
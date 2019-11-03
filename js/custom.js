
//function for charts
(function($){


    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;
    
    // Set direction default to 'both'.
    direction = direction || 'both';
        
        var $t          = this.length > 1 ? this.eq(0) : this,
                        isContained = typeof container !== 'undefined' && container !== null,
                        $c				  = isContained ? $(container) : $w,
                        wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                                                rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                                                rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                                                rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                                                rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                                                rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                                                rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
                                                rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
                                                rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
        vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})


// create charts
(jQuery);

   var element = document.getElementById("scroll-animations");
    //var x = element.scrollIntoView();

    var x = $('#scroll-animations').visible();
    console.log(x);
    
    if (x === true){
        element.classList.add("container");
    }

    function degToRad(degrees) {
        return degrees * Math.PI / 180;
    };
    // java chart
    var canvas = document.querySelector('.javaChart');
    canvas.width = 300;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(145 , 50, 50, degToRad(110), degToRad(-90), true);
    ctx.lineTo(145, 50);
    ctx.fill();

    // spring Chart
    var canvas = document.querySelector('.springChart');
    canvas.width = 300;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(145 , 50, 50, degToRad(100), degToRad(-90), true);
    ctx.lineTo(145, 50);
    ctx.fill();

    // javascript Chart
    var canvas = document.querySelector('.javascriptChart');
    canvas.width = 300;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'orange';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(145 , 50, 50, degToRad(130), degToRad(-90), true);
    ctx.lineTo(145, 50);
    ctx.fill();

    // html Chart
    var canvas = document.querySelector('.htmlChart');
    canvas.width = 300;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(145 , 50, 50, degToRad(210), degToRad(-90), true);
    ctx.lineTo(145, 50);
    ctx.fill();

    // css Chart
    var canvas = document.querySelector('.cssChart');
    canvas.width = 300;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(145 , 50, 50, degToRad(190), degToRad(-90), true);
    ctx.lineTo(145, 50);
    ctx.fill();

    // ubuntu Chart
    var canvas = document.querySelector('.ubuntuChart');
    canvas.width = 300;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.beginPath();
    ctx.arc(145 , 50, 50, degToRad(120), degToRad(-90), true);
    ctx.lineTo(145, 50);
    ctx.fill();


    function scroll_to(id) {
        $('html,body').animate({
          scrollTop: $('#'+id).offset().top
        },'slow');
      }
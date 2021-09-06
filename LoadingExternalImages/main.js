window.onload = function () {

    // GET THE IMAGE.
    var img = new Image();
    img.src = './images/man.png';

    // WAIT TILL IMAGE IS LOADED.
    img.onload = function () {
        fill_canvas(img);       // FILL THE CANVAS WITH THE IMAGE.
    }

    function fill_canvas(img) {
        // CREATE CANVAS CONTEXT.
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0,500,500);       // DRAW THE IMAGE TO THE CANVAS.
    }
}
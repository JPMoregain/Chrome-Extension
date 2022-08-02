var contents = $('#contents');
var contentsParent = contents.parent();
contents.remove();
$.ajax({
    method: 'GET',
    url: 'https://unsplash.it/list',
    success: function(result) {
        // this is where the picture coming back from the AJAX request can be manipulated
        const randomImg = result[Math.floor(Math.random() * result.length)];
        const imgId = randomImg.id;
        let currentImg = '<img src="https://unsplash.it/1200/800?image=' + imgId + '">';
        contentsParent.prepend(currentImg);
        contentsParent.prepend('<p class="beautText">Imagine how productive you can be without watching YouTube videos!</p>');
    },
    error: function(err) {
        // if any errors occur during the process you can check out the error by logging the 'err' argument
    }
});

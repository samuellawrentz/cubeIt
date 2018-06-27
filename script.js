$('.main').cubeIt({border:'2px solid green'});
var cube = $('.main').data('cubeIt');

$('#slider').on('change', function(){
cube.update(parseInt(this.value));
})
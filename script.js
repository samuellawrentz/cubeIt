$('.main').cubeIt({border:'2px solid green', animate:false});
var cube = $('.main').data('cubeIt');

$('#slider').on('input', function(){
cube.update({size:parseInt(this.value), animate:true});
})
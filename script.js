$('.main').cubeIt({border:'2px solid green', animate:false});
var cube = $('.main').data('cubeIt');

$('#slider').on('input', function(){
cube.update({size:parseInt(this.value)});
});

$('input[type=radio]').on('click', function(){
    if(this.value=== 'on')
    cube.update({animate:true});
    else
    cube.update({animate:false});
});
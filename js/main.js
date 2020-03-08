// jQeury Document

$(document).ready(function(){
	
    $('.slider').cycle({
        fx: 'fade',
        speed: 1000,
        timeout: 1000,
        next: '.next',
        prev: '.prev',
        pager: '.pager'
    });
});
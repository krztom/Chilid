/**
 * Created by tomec on 13.05.2017.
 */
$(function () {
    $('.carousel').carousel({
        interval: 4000
    })
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });








})
$(document).ready(function(){
    var now = new Date();
    $('#datetime').text(now);
    
    $('#roomNumber').text('Your Room Number');
    var currentStatus = 'absent'; 

    
    $('#currentStatus').text(currentStatus);
    $('#currentStatusBox').addClass(currentStatus);
    $('#reliefTime').on('input', function() {
        $('#output').text($(this).val() + ' mins');
    });
});


// document.getElementById("reliefTime").stepUp(10);
//trying to make it so that the slider increases with increments of 10
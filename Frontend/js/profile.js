$(document).ready(function(){
    setInterval(()=>{
        var now = new Date().toLocaleTimeString();
        $('#datetime').text(now);
    }
    , 10);
     
    $('#roomNumber').text('Your Room Number');

    // Current Status Start
    var currentStatus = 'present'; /* Change current status value here  it will effect all*/
    $('#currentStatus').text(currentStatus);
    $('#currentStatusBox').addClass(currentStatus);
     

    // $('#reliefTime').on('input', function() {
    //     $('#output').text($(this).val() + ' mins');
    // });
});
document.getElementById('reliefTime').addEventListener('input', function() {
    document.getElementById('output').textContent = this.value + ' mins';
});

// document.getElementById("reliefTime").stepUp(10);
//trying to make it so that the slider increases with increments of 10




//written in jquery


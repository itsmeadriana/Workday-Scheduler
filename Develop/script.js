$(document).ready(function() {
    $(".btn").on('click', function() {
        let input=$(this).siblings('.description').val();
        let time=$(this).siblings('.description').attr('id');

        if(!input) {
            alert('You need to add a task description.');
            return;
        } else {
            localStorage.setItem(time, input);
            alert('Added to schedule!');
        }
    }
);

var colorTracker = function() {
    var currentTime = moment().hours();
    console.log(currentTime);

    $('.time-block').each(function() {
        var hourBlock = parseInt(
            $(this)
                .children('textarea')
                .attr('id')
        );
        console.log(hourBlock);

        if (hourBlock < currentTime) {
            $(this).addClass('past')
        } else if (hourBlock === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

 // display current day on page
 $('#currentDay').text(moment().format('dddd, MMMM Do'));

colorTracker();

var getSchedule = function() {

    $('#9.description').val(localStorage.getItem('9'));
    $('#10.description').val(localStorage.getItem('10'));
    $('#11.description').val(localStorage.getItem('11'));
    $('#12.description').val(localStorage.getItem('12'));
    $('#13.description').val(localStorage.getItem('13'));
    $('#14.description').val(localStorage.getItem('14'));
    $('#15.description').val(localStorage.getItem('15'));
    $('#16.description').val(localStorage.getItem('16'));
    $('#17.description').val(localStorage.getItem('17'));
}

getSchedule();
});

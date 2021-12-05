var schedule={}

var pencilIn = function() {
    $('.saveBtn').on('click', function() {

    })
}

var colorTimeBlock = function() {
    var currentTime = moment().hours();

    $('.time-block').each(function() {
        var hour = parseInt(
            $(this)
                .attribute('id')
                .split('-')[1]
        );
        if (hour < currentTime) {
            $(this).addClass('past')
        } else if (hour === currentTime) {
            $(this).addClass('present');
            $(this).removeClass('past');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('present');
        }
    });
}

var saveSchedule = function(time, task) {
    var taskData = {
        date: moment().format('l'),
        time: time,
        taskDes: task
    };
    schedule.push(taskData);
    localStorage.setItem("penciledIn", JSON.stringify(schedule));
}

  // get stored data from local storage
  $('#9am.description').val(localStorage.getItem('9am'));
  $('#10am.description').val(localStorage.getItem('10am'));
  $('#11am.description').val(localStorage.getItem('11am'));
  $('#12pm.description').val(localStorage.getItem('12pm'));
  $('#1pm.description').val(localStorage.getItem('1pm'));
  $('#2pm.description').val(localStorage.getItem('2pm'));
  $('#3pm.description').val(localStorage.getItem('3pm'));
  $('#4pm.description').val(localStorage.getItem('4pm'));
  $('#5pm.description').val(localStorage.getItem('5pm'));

  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
// });

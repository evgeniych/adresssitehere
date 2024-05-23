$(document).ready(function () {
    $('#step-1-btn').click(function () {
        $('#step-1').css('display', 'none');
        $('#step-2').css('display', 'flex');
    });

    // Form submission
    $('#modal__form').submit(function (event) {
        event.preventDefault();
        // Get selected values
        let day = $('#day').val();
        let month = $('#month').val();
        let year = $('#year').val();
        let town = $('#town').val();
        let option = $('#no-town:checked').val();

        // Validate and process form data
        if (day && month && year && (town || option)) {
            $('#step-2').css('display', 'none');
            $('#step-3').css('display', 'flex');

            let progress = 0;
            const progressCircle = $('#madal__progress__circle');
            const progressNumber = $('#madal__progress__circle__number');

            function updateProgress() {
                if (progress <= 100) {
                    progressNumber.text(progress + '%');
                    progressCircle.css('background', `conic-gradient(
                            #FC7C3C ${progress * 3.6}deg,
                            rgb(252, 124, 60, 0.1) ${progress * 3.6}deg
                        )`);
                    progress++;
                    requestAnimationFrame(updateProgress);
                }

                if (progress == 25) {
                    $('#solution-1 img').attr('src', 'assets/img/check.png');
                    $('#solution-2').css('display', 'flex');
                }
                if (progress == 50) {
                    $('#solution-2 img').attr('src', 'assets/img/check.png');
                    $('#solution-3').css('display', 'flex');
                }
                if (progress == 75) {
                    $('#solution-3 img').attr('src', 'assets/img/check.png');
                }
                if (progress == 100) {
                    $('#solution-btn').css('display', 'block');
                }
            }

            updateProgress();

        } else {
            alert('Please fill in all fields.');
        }

        $('#solution-btn').click(function () {
            $('#step-3').css('display', 'none');
            $('#step-4').css('display', 'flex');

        });
    });

});
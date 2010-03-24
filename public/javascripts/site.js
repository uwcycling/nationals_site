/*
 * Javascript codes.
 */

function initNationalsJS() {
    //$('#alerts').click(function () {
        //$(this).hide();
        //$('#container').removeClass('belowAlert');
    //});

    $('#popupPane').click(function () {
        $(this).fadeOut('fast');
    });

    $('#roadRacePopupLink').click(function () {
        $('#crit').css('display', 'none');
        $('#timeTrial').css('display', 'none');
        showPopup('roadRace');
    });

    $('#critPopupLink').click(function () {
        $('#roadRace').css('display', 'none');
        $('#timeTrial').css('display', 'none');
        showPopup('crit');
    });

    $('#timeTrialPopupLink').click(function () {
        $('#roadRace').css('display', 'none');
        $('#crit').css('display', 'none');
        showPopup('timeTrial');
    });
}

function showPopup(contentId) {
    $('#' + contentId).css('display', 'block');
    showPopupPane();
}

function showPopupPane() {
    $('#popupPane').fadeIn('fast');
}

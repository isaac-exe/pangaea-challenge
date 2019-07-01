var numTweets = 0;

$(function() {
    $('.tweet-input').focus(function() {
        $('.tweet-box').css('height', '135px');
        $('.tweet-input').css({'box-sizing': 'border-box', 'resize': 'none'});
        $('.info-container').css('display', 'inline-flex');
        $('.char-button-container').css('display', 'inline-flex');
        if ($('.tweet-input').val() == 'Say something...') {
            $('.tweet-input').val('');
        }
    })
});

$(function() {
    $('.search-box').focus(function() {
        if ($('.search-box').val() == 'Search Twitter 2.0') {
            $('.search-box').val('');
        } else {
            console.log(false);s
        }
    })
});

$(function() {
    $('.send-tweet').click(function() {
        if (tweetable()) {
            $('.tweet-box').css('height', 'auto');
            $('.info-container').css('display','none');
            $('.char-button-container').css('display','none');
            $('.char-count').text('0');
        }
    })
});

$(document).on('click', '.tab-1', function() {
    $(this).parent().siblings('.stats').toggle('fast');
});

$(document).on('keyup', '.tweet-input', function() {
    var len = $('.tweet-input').val().length;
    var lenstr = len.toString();
    $('.char-count').text(lenstr);

    if (len > 140) {
        $('.char-count').css('color','#e43025');
    }

    if (len < 140) {
        $('.char-count').css('color','#8a8e8f');
    }
});

$(function() {
    $('.send-tweet').click(function () {
        if (tweetable()){
            var text = $('.tweet-input').val();
            var d = new Date();
            var month = d.getMonth().toString();
            var day = d.getDay().toString();
            var year = d.getFullYear().toString();
            var meridian = 'AM';
            var hour = d.getHours();
            if (hour > 12) {
                var hourStr = (hour-12).toString();
            } else if (hour == 12) {
                var hourStr = hour.toString();
            } else if (hour == 0) {
                var hourStr = '12';
            } else {
                var hourStr = hour.toString();
            }

            if (hour > 11) {
                meridian = 'PM';
            }
            var min = d.getMinutes().toString();
            if (min.length == 1) {
                min = '0' + min;
            }

            var localDate = hourStr + ':' + min + ' ' + meridian + ' ' + month + '/' + day + '/' + year;

            var html = '<div class="tweet-container">\n' +
                '            <div class="contents">\n' +
                '                <img src="assets/avi-01.png"class="avi">\n' +
                '                <div class="tweet-text">\n' +
                '                    <span class="tweet-header">\n' +
                '                        <strong><p class="handle">@user</p></strong>\n' +
                '                        <p class="date">' + localDate + '</p>\n' +
                '                    </span>\n' +
                '                    <div class="tweet">' + text + '</div>\n' +
                '                    <span class="expand">\n' +
                '                        <button class="tab-1">Expand</button>\n' +
                '                        <button class="tab-2">Reply</button>\n' +
                '                        <button class="tab-3">Retweet</button>\n' +
                '                        <button class="tab-4">Favorite</button>\n' +
                '                        <button class="tab-5">Share</button>\n' +
                '                    </span>\n' +
                '\n' +
                '                    <div class="stats">\n' +
                '                        <span class="fav-rt-container">\n' +
                '                            <p class="info-stats-fav"><strong class="num">23</strong> Favorites</p>\n' +
                '                            <p class="info-stats-rts"><strong class="num">78</strong> RTs</p>\n' +
                '                        </span>\n' +
                '                        <div class="follower-avi-container">\n' +
                '                            <img src="assets/small-avi-01.png" class=\'small-avi\'>\n' +
                '                            <img src="assets/small-avi-02.png" class=\'small-avi\'>\n' +
                '                            <img src="assets/small-avi-03.png" class=\'small-avi\'>\n' +
                '                            <img src="assets/small-avi-04.png" class=\'small-avi\'>\n' +
                '                            <img src="assets/small-avi-05.png" class=\'small-avi\'>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '        </div>'
            $('.timeline').prepend(html);
            $('.tweet-input').val('Say something...');
            numTweets ++;
            var numTweetsStr = numTweets.toString();
            $('.tweet-num').html(numTweetsStr);
        }
    })
});

function tweetable() {
    var tweetLen = $('.tweet-input').val().length;
    if (tweetLen <= 140 && tweetLen > 0) {
        return true;
    } else {
        return false;
    }
}
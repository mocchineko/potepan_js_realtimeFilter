$(function () {
    const cardList = $('.target-box');
    const onKeyup = function () {
        let keyword = $(this).val();

        if (keyword.length > 0) {
            // 1文字以上入力されていた場合
            cardList.hide();
            cardList.filter(function (index) {
                return $(this).children('.keyword-list').text().indexOf(keyword) >= 0;
            }).show();
        } else {
            // 空欄だった場合
            cardList.show();
        }
    }

    // テキストボックスに何かしらの入力があった時のイベント
    $('#form-text').keyup(onKeyup);
});
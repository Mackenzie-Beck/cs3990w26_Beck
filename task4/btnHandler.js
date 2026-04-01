



$(document).ready(function() {
    $("#colors").on("click", function(event) {
        const $target = $(event.target);
        const $button = $target.closest("div[data-color]");
        if ($button.length) {
            const color = $button.data("color");
            $("#fruits li").each(function() {
                const $li = $(this);
                if ($li.data("color") === color) {
                    $li.addClass("highlight");
                } else {
                    $li.removeClass("highlight");
                }
            });
        }
    });
});
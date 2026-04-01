



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

    $("#fruits").on("click", ".star", function() {
        const $clickedStar = $(this);
        $clickedStar.prevAll(".star").addBack().addClass("orange");
        $clickedStar.nextAll(".star").removeClass("orange");
    });
});
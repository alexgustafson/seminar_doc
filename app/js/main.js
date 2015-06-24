$(function () {
    var content_height = 752;	// the height of the content, discluding the header/footer
    var page = 1;				// the beginning page number to show in the footer
    function buildNewsletter() {
        if ($('#newsletterContent').contents().length > 0) {
            // when we need to add a new page, use a jq object for a template
            // or use a long HTML string, whatever your preference
            $page = $(".page_template:first").clone().addClass("page").css("display", "block");
            // fun stuff, like adding page numbers to the footer
            $page.find(".footer span").append(page);
            $("body").append($page);
            page++;
            // here is the columnizer magic
            $('#newsletterContent').columnize({
                columns: 2,
                target: ".page:last .content",
                overflow: {
                    height: content_height,
                    id: "#newsletterContent",
                    doneFunc: function () {
                        console.log("done with page");
                        buildNewsletter();
                    }
                }
            });
        }
    }

    setTimeout(buildNewsletter, 3000);
});
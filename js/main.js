$(document).ready(function () {

    /* Smooth scroll */
    $('.smooth').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 30
        }, 500);
        return false;
    });

    /* Rating */

    // rating stars
    $("#main-rate").rateYo({
        rating: 4.4,
        starWidth: "25px",
        normalFill: "#a5a7aa",
        ratedFill: "#faad17",
        readOnly: true
    });

    $("#rate-field").rateYo({
        starWidth: "25px",
        normalFill: "#a5a7aa",
        ratedFill: "#faad17"
    });

    $('.rating-stars').each(function (i, obj) {
        $(obj).rateYo({
            rating: $(obj).attr('data-rating'),
            starWidth: "25px",
            normalFill: "#a5a7aa",
            ratedFill: "#faad17",
            readOnly: true
        });
    });

    // form submit
    $('#form-review').on('submit', function (event) {
        event.preventDefault();

        var form = $(this);

        $(form).find('button span').removeClass('d-none');

        setTimeout(function () {
            $('#review-field').val('');
            $(form).find('button span').addClass('d-none');
            $(form).find('button').addClass('disabled').html('Enviado').attr('disabled', 'disabled');
            $(form).find('.alert').removeClass('d-none');
            setTimeout(function () {
                $(form).find('.alert').css('opacity', '1')
            }, 500);
        }, 1500);
    });

    // votes

    $('#reviews').find('.badge').on('click', function () {
        var upvote = $(this).parent().find('span[data-type="upvote"]');
        var downvote = $(this).parent().find('span[data-type="downvote"]');
        var type = $(this).attr('data-type');
        var maxValue = parseInt($(this).attr('data-initial')) + 1;

        $(this).find('.total-votes').html('(' + maxValue + ')');

        if (type === 'upvote') {
            $(downvote).addClass('badge-secondary')
                .removeClass('badge-danger')
                .find('.total-votes').html('(' + $(downvote).attr('data-initial') + ')');
            $(upvote).addClass('badge-success').removeClass('badge-secondary');
        }

        if (type === 'downvote') {
            $(upvote).addClass('badge-secondary')
                .removeClass('badge-success')
                .find('.total-votes').html('(' + $(upvote).attr('data-initial') + ')');
            $(downvote).addClass('badge-danger').removeClass('badge-secondary');
        }

    });

    /* Faq */

    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".icon").addClass("icon-minus").removeClass("icon-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".icon").removeClass("icon-plus").addClass("icon-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".icon").removeClass("icon-minus").addClass("icon-plus");
    });

});
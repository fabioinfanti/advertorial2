$(document).ready(function() {

    function ajustarPreco() {

        kit_selecionado = "";
        if ($('#pote-1-2').hasClass("active")) {
            kit_selecionado = "1";
        } else if ($('#pote-3-2').hasClass("active")) {
            kit_selecionado = "3";
        } else if ($('#pote-6-2').hasClass("active")) {
            kit_selecionado = "6";
        }

        assinatura = false;
        if ($("#opcao-assinatura-2").length) {
            //Mobile
            assinatura = $("#opcao-assinatura-2").hasClass("active");
        } else if ($("#checkbox-subscriber-2").length) {
            //Desktop
            assinatura = $('#checkbox-subscriber-2').is(':checked');
        }

        switch (kit_selecionado) {
            case "1":
                if (assinatura) {
                    /* Assinatura */
                    $('#kit-preco-por-pote-2').text($('#kit-preco-por-pote-2').attr('data-assinatura-1-2'));
                    $('#kit-valor-parcela-2').text($('#kit-valor-parcela-2').attr('data-assinatura-1-2'));
                    $('#kit-economize-2').text($('#kit-economize-2').attr('data-assinatura-1-2'));
                    $('#kit-preco-a-vista-2').text($('#kit-preco-a-vista-2').attr('data-assinatura-1-2'));
                    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-assinatura-1-2'));
                    $('.termos-assinatura').show();
                } else {
                    /* Compra Única */
                    $('#kit-preco-por-pote-2').text($('#kit-preco-por-pote-2').attr('data-compra-unica-1-2'));
                    $('#kit-valor-parcela-2').text($('#kit-valor-parcela-2').attr('data-compra-unica-1-2'));
                    $('#kit-economize-2').text($('#kit-economize-2').attr('data-compra-unica-1-2'));
                    $('#kit-preco-a-vista-2').text($('#kit-preco-a-vista-2').attr('data-compra-unica-1-2'));
                    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-compra-unica-1-2'));
                    $('.termos-assinatura').hide();
                }
                break;
            case "3":
                if (assinatura) {
                    /* Assinatura */
                    $('#kit-preco-por-pote-2').text($('#kit-preco-por-pote-2').attr('data-assinatura-3-2'));
                    $('#kit-valor-parcela-2').text($('#kit-valor-parcela-2').attr('data-assinatura-3-2'));
                    $('#kit-economize-2').text($('#kit-economize-2').attr('data-assinatura-3-2'));
                    $('#kit-preco-a-vista-2').text($('#kit-preco-a-vista-2').attr('data-assinatura-3-2'));
                    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-assinatura-3-2'));
                    $('.termos-assinatura').show();
                } else {
                    /* Compra Única */
                    $('#kit-preco-por-pote-2').text($('#kit-preco-por-pote-2').attr('data-compra-unica-3-2'));
                    $('#kit-valor-parcela-2').text($('#kit-valor-parcela-2').attr('data-compra-unica-3-2'));
                    $('#kit-economize-2').text($('#kit-economize-2').attr('data-compra-unica-3-2'));
                    $('#kit-preco-a-vista-2').text($('#kit-preco-a-vista-2').attr('data-compra-unica-3-2'));
                    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-compra-unica-3-2'));
                    $('.termos-assinatura').hide();
                }
                break;
            case "6":
                if (assinatura) {
                    /* Assinatura */
                    $('#kit-preco-por-pote-2').text($('#kit-preco-por-pote-2').attr('data-assinatura-6-2'));
                    $('#kit-valor-parcela-2').text($('#kit-valor-parcela-2').attr('data-assinatura-6-2'));
                    $('#kit-economize-2').text($('#kit-economize-2').attr('data-assinatura-6-2'));
                    $('#kit-preco-a-vista-2').text($('#kit-preco-a-vista-2').attr('data-assinatura-6-2'));
                    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-assinatura-6-2'));
                    $('.termos-assinatura').show();
                } else {
                    /* Compra Única */
                    $('#kit-preco-por-pote-2').text($('#kit-preco-por-pote-2').attr('data-compra-unica-6-2'));
                    $('#kit-valor-parcela-2').text($('#kit-valor-parcela-2').attr('data-compra-unica-6-2'));
                    $('#kit-economize-2').text($('#kit-economize-2').attr('data-compra-unica-6-2'));
                    $('#kit-preco-a-vista-2').text($('#kit-preco-a-vista-2').attr('data-compra-unica-6-2'));
                    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-compra-unica-6-2'));
                    $('.termos-assinatura').hide();
                }
                break;
        }
    }

    /* Tooltip (Apenas Desktop) */
    if ($("#checkbox-subscriber-2").length) {
        $.protip();
    }

    /* Seta link inicial do botão */
    $('#btn_carrinho-2').attr("href", $('#btn_carrinho-2').attr('href-compra-unica-3'));

    /* Clique nos potes */
    $('#pote-1-2').on('click', function(event) {
        event.preventDefault();
        $('.pote').removeClass("active");
        $(this).addClass("active");
        ajustarPreco();
    });

    $('#pote-3-2').on('click', function(event) {
        event.preventDefault();
        $('.pote').removeClass("active");
        $(this).addClass("active");
        ajustarPreco();
    });

    $('#pote-6-2').on('click', function(event) {
        event.preventDefault();
        $('.pote').removeClass("active");
        $(this).addClass("active");
        ajustarPreco();
    });
    /* Clique nos potes */


    $('#opcao-compra-unica-2').on('click', function(event) {
        $(this).addClass("active");
        $('#opcao-assinatura-2').removeClass("active");
        ajustarPreco();
    });
    $('#opcao-assinatura-2').on('click', function(event) {
        $(this).addClass("active");
        $('#opcao-compra-unica-2').removeClass("active");
        ajustarPreco();
    });

    /* Checkbox */
    $('.checkbox-subscriber-2').on('change', function() {
        ajustarPreco();
        if ($(this).is(':checked')) {
            $('#texto-sim').addClass("text-success");
            $(this).parent().find('img').attr('src', './image/check-icon-mobile-checked.png');
            $('ul.img-list img').attr('src', './image/check-icon-green.png');
        } else {
            $('#texto-sim').removeClass("text-success");
            $(this).parent().find('img').attr('src', './image/check-icon-mobile.png');
            $('ul.img-list img').attr('src', './image/check-icon.png');
        }
    });

    /* Image preview */
    $('[data-quantity]').on('click', function() {
        var prefixo_produto = $('#product-preview').val();
        $('#product-preview').attr('src', './assets/img/buy/produtos/aaox' + prefixo_produto + '-' + $(this).data('quantity') + '.png');
    });
    $('#pills-buy-type .nav-link').on('click', function() {
        var prefixo_produto = $('#product-preview').val();
        var target = $(this).attr('href');
        $('#product-preview').attr('src', './assets/img/buy/produtos/aaox' + prefixo_produto + '-' + $(target).find('.nav-link.active').data('quantity') + '.png');
    });

});
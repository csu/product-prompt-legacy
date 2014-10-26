$(function() {
    var products = ['alarm clock', 'television', 'microwave', 'keyboard', 'water bottle', 'eBook reader', 'phone', 'chair', 'trash can'];
    var constraints = ['for the blind', 'for the elderly', 'for children', 'for families with children', 'for the deaf', 'for the mute', 'for the paralyzed'];
    $("#prompt-btn").click(function() {
        var product = products[Math.floor(Math.random()*products.length)];
        var prefix;
        if (product.charAt(0) == 'a')
            prefix = "Design an ";
        else
            prefix = "Design a ";
        $("#prompt").text(prefix + product + " " + constraints[Math.floor(Math.random()*constraints.length)] + ".");
        $(this).text("Get another prompt!");
    });
});
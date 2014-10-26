$(function() {
    var products = ['alarm clock', 'television', 'microwave', 'keyboard', 'water bottle', 'eBook reader', 'phone', 'chair', 'trash can', 'stopwatch', 'wallet'];
    var constraints = ['for the visually impaired', 'for the elderly', 'for children', 'for families with children', 'for the hearing impaired', 'for the speech impaired'];
    $("#prompt-btn").click(function() {
        var product = products[Math.floor(Math.random()*products.length)];
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        var prefix;
        if (vowels.contains(product.charAt(0)))
            prefix = "Design an ";
        else
            prefix = "Design a ";
        $("#prompt").text(prefix + product + " " + constraints[Math.floor(Math.random()*constraints.length)] + ".");
        $(this).text("Get another prompt!");
    });
});
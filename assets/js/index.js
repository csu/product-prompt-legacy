$(function(){var e=["alarm clock","television","microwave","keyboard","water bottle","eBook reader","phone","chair","trash can","stopwatch","wallet","keychain","bicycle","binder","notebook"],t=["for the visually impaired","for the elderly","for children","for families with children","for the hearing impaired","for the speech impaired","for astronauts"],r=["a","e","i","o","u"];$("#prompt-btn").click(function(){var a,o=e[Math.floor(Math.random()*e.length)];a=-1!==r.indexOf(o.charAt(0))?"Design an ":"Design a ",$("#prompt").text(a+o+" "+t[Math.floor(Math.random()*t.length)]+"."),$(this).text("Get another prompt!")})});
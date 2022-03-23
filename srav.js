<style>
    div.before-after {
        position: relative; font-size: 0;
        touch-action: none;
        -webkit-touch-callout: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    div.before-after>img {
        display: block;
        width: 100%; height: auto;
    }
    div.before-after>div {
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        width: 50%;
        background-size: cover;
    }
    div.before-after:hover {
        cursor: col-resize;
    }
</style>
<div style="width: 450px; margin: 0 auto">
    <div class="before-after">
        <img src="/images/p2.jpg">
        <div style="background-image:url(/images/p1.jpg)"></div>
    </div>
</div>
<script type="text/javascript">
    var u = document.querySelectorAll(".before-after");
    for(var i=0;i<u.length;i++){
        u[i].addEventListener("mousemove", trackLocation, false);
        u[i].addEventListener("touchstart", trackLocation, false);
        u[i].addEventListener("touchmove", trackLocation, false);
    }
    function trackLocation(e)
    {
        var o = getEventTarget(e);
        var i = o.parentNode;
        var d = i.getElementsByTagName("div")[0];
        i = i.getElementsByTagName("img")[0];

        var rect = i.getBoundingClientRect();
        var position = ((e.pageX - rect.left) / i.offsetWidth)*100;
        if (position <= 100) { d.style.width = position+"%"; }
    }
</script>

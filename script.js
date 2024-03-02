document.querySelector("#main .button").addEventListener("mouseover",function(){
    document.querySelector("#main .button>span").style.right="0%"

})
document.querySelector("#main .button").addEventListener("mouseout",function(){
    document.querySelector("#main .button>span").style.right="-100%"
    
})



    document.addEventListener("DOMContentLoaded", function () {
        // Select all links with hashes
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            // Listen for click events
            anchor.addEventListener('click', function (e) {
                // Prevent default behavior
                e.preventDefault();

                // Smooth scroll to the target section
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const circle = document.createElement("div");
        circle.classList.add("cursor-circle");
        document.body.appendChild(circle);
    
        document.addEventListener("mousemove", function (e) {
            moveCircle(e.clientX, e.clientY);
        });
    
        function moveCircle(x, y) {
            circle.style.left = x + "px";
            circle.style.top = y + "px";
        }
    });
    function toggleReadMore(shortId, fullId) {
        const shortContent = document.getElementById(shortId);
        const fullContent = document.getElementById(fullId);

        if (shortContent && fullContent) {
            shortContent.classList.toggle('hidden');
            fullContent.classList.toggle('hidden');
        }
    }
    
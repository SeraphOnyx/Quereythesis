document.getElementById('loadClimateClockBtn').addEventListener('click', function () {
    // Create the script element
    var script = document.createElement('script');
    script.src = 'https://climateclock.world/widget-v2.js';
    script.async = true;

    // Append the script to the body or a specific container
    document.body.appendChild(script);

    // Wait for the script to load, then trigger the animation
    script.onload = function () {
        // Find the container
        var container = document.getElementById('climateClockContainer');

        // Add the "show" class to trigger the pull-down animation
        container.style.display = 'block'; // Make the container visible before animation starts
        setTimeout(function () {
            container.classList.add('show');
        }, 10); // Delay to allow for the element to be visible before the transition starts
    };
});

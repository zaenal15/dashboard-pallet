var ctx = document.getElementById("myChart");

var data = {
    datasets: [
        {
            data: [300, 50],
            backgroundColor: [
                "#00507A",
                "#85D4FF",
            ],
            hoverBackgroundColor: [
                "#00507A",
                "#85D4FF",
            ]
						
						
        }]
};

var options = { 
	cutoutPercentage:40,
};


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});
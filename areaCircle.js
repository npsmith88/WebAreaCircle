function calcCircle() {
    
    var radius = document.getElementById("radius").value;
    var circumference = 2 * 3.14 * radius;
	var c1 = circumference.toFixed(2);
	var area = 3.14 * radius * radius;
	var a1 = area.toFixed(2);
    var displayString = "Output: Circumference = " + c1 + " and Area = " + a1 + " .";
    document.getElementById("resultLabel").innerHTML = displayString;
}
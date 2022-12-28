function TestsFunction() {
    var T = document.getElementById("children"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}

<button onclick="TestsFunction()">Tests</button>

<div id="TestsDiv" style="display:none">
    tests here!
</div>
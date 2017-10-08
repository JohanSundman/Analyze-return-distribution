
function analyze(func, totalRuns = 100){
	this.data = {}; // Empty dictionary
	
	// Collect the returns
	for(var n = 1; n <= totalRuns; n++){
		var temp = func();
		if(typeof this.data[temp] == 'undefined'){
			this.data[temp] = 0;
		}
		this.data[temp]++;
	}
	
	// Crunch the data
	this.percentage = {};
	for(outcome in this.data){
		this.percentage[outcome] = (this.data[outcome] / totalRuns) * 100; // Calculate percentage
	}
	
	// Present outcome
	var say = []; // array of messages
	say.push("The algorithm has been tested for "+totalRuns+" runs.");
	say.push("Distribution: ");
	for(outcome in this.percentage){ // Go through percentages
		say.push("    "+outcome+": "+this.percentage[outcome]+"%");
	}
	
	// Write it out
	for(var i = 0; i < say.length; i++){
		console.log(say[i]);
	}
}

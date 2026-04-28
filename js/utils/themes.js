// ************ Themes ************
var themes = ["default", "aqua", "crimson", "frosted", "cosmic", "sigma67ler", "icantsee"]

var colors = {
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	aqua: {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	crimson: {
		1: "#ff0404",
		2: "#bd2f16",
		3: "#ad221d",
		color: "#e24444",
		points: "#d14532",
		locked: "#ff6600",
		background: "#7a1e07",
		background_tooltip: "rgba(255, 174, 0, 0.75)",
	},
	frosted: {
		1: "#0d7ae7",
		2: "#2680da",
		3: "#1860a8",
		color: "#3690eb",
		points: "#60a4e7",
		locked: "#c24310",
		background: "#0c3a68",
		background_tooltip: "rgba(53, 93, 136, 0.75)",
	},
	cosmic: {
		1: "#252525",
		2: "#313131",
		3: "#2d2d2e",
		color: "#3e78a1",
		points: "#ffff52",
		locked: "#6e0d06",
		background: "#000000",
		background_tooltip: "rgba(21, 32, 44, 0.75)",
	},
	sigma67ler: {
		1: "#696969",//Grey
		2: "#000000",//Black
		3: "#592D10",//Brown *interesting choice, but i dont judge!*
		color: "#1a7512",//Dark Green
		points: "#6e27b4",//Dark Purple
		locked: "#700707",//Dark Red
		background: "#06477D",//Dark Blue
		background_tooltip: "rgb(172, 105, 105)",//Light Pink
	},
	icantsee: {
		1: "#ffffff",
		2: "#ffffff",
		3: "#ffffff",
		color: "#ffffff",
		points: "#ffffff",
		locked: "#ffffff",
		background: "#ffffff",
		background_tooltip: "rgba(255, 255, 255, 0.75)",
	},
}
function changeTheme() {

	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "default";
}

function switchTheme() {
	let index = themes.indexOf(options.theme)
	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	}
	else {
		index ++;
		options.theme = themes[index];
	}
	changeTheme();
	resizeCanvas();
}

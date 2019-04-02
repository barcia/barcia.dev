let settings = {
	default: {
		enabled: false,
		validityTime: 259200, //s. 259200s = 3 days.
	},
	user: {}
}

const storage = {
	set: function() {
		const date = new Date();
		settings.user.timestamp = date.getTime();
		localStorage.setItem('darkModeSettings', JSON.stringify(settings.user));
	},
	get: function() {
		return JSON.parse(localStorage.getItem('darkModeSettings'));
	}
}


const date =  new Date();


document.addEventListener('DOMContentLoaded', function() {
	const toggle = document.getElementById('darkMode');

	// Get the user settings if exists
	if (storage.get()) {
		settings.user = storage.get();
	}

	// Check the age of the settings
	let userSettingsAge = 0;
	if (settings.user) {
		userSettingsAge = parseInt((date.getTime() - settings.user.timestamp) / 1000); //in s.
	}

	// Apply the settings, if exists and they are not too old.
	// If no settings, enable the dark mode if is night
	if (settings.user && userSettingsAge < settings.default.validityTime) {
		settings.user.enabled ? setColorScheme("dark") : setColorScheme("light");
		toggle.checked = settings.user.enabled;
	} else if (date.getHours() > 19 || date.getHours() < 8) {
		toggle.checked = true;
		setColorScheme("dark");
	}


	// Event listener of the switch to toggle dark mode
	toggle.addEventListener('change', (event) => {
		if (event.target.checked) {
			settings.user.enabled = true;
			setColorScheme("dark");
		} else {
			settings.user.enabled = false;
			setColorScheme("light");
		}
		storage.set();
	});
})


function setColorScheme(colorScheme) {
	document.documentElement.dataset.colorScheme = colorScheme;
}

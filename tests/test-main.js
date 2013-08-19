var tests = [];
var file;

for (file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	baseUrl: '/base/js',

	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});

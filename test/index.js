var should = require('should');
var path = require('path');
var JsonViewEngine = require('../lib/engine');
var settings = {
	views: path.join(__dirname, 'views')
};
function getViewPath(view) {
	return path.join(settings.views, view + '.json');
}
var helpers = {
	getPostSlug: function (value, post) {

	}
};

describe('JsonViewEngine', function () {

	it('should load a view', function () {

		var engine = new JsonViewEngine();
		return engine.loadView(getViewPath('post'))
			.then(function (view) {
				should(view).eql(require('./views/post'));
			});

	});

	it('should render empty data', function () {

		var engine = new JsonViewEngine();
		return engine.renderData({test: {}}, {}, settings)
			.then(function (rendered) {
				should(rendered).eql({
					test: undefined
				});
			});

	});

	it('should render data', function () {

		var engine = new JsonViewEngine();
		var data = {hello: 'world'};

		return engine.renderData({hello: {}}, data, settings)
			.then(function (rendered) {
				should(rendered).eql(data);
			});

	});


});
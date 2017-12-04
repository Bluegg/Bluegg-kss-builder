/* jshint node:true */

module.exports = function(Twig) {
	'use strict';

	Twig.extend(function(Twig) {
		// example of extending a tag type that would
		// restrict content to the specified "level"
		Twig.exports.extendTag({
			// unique name for tag type
			type: 'kssSamples',
			// regex for matching tag
			regex: /^kssSamples\s+(.+)$/,

			// what type of tags can follow this one.
			next: ['endkssSamples'], // match the type of the end tag
			open: true,
			compile: function(token) {
				var expression = token.match[1];

				// turn the string expression into tokens.
				token.stack = Twig.expression.compile.apply(this, [
					{
						type: Twig.expression.type.expression,
						value: expression
					}
				]).stack;

				delete token.match; // cleanup
				return token;
			},
			parse: function(token, context, chain) {
				var doc = Twig.expression.parse.apply(this, [token.stack, context]);
				var output = [];
				var regex = /^(.*?)\s*:\s*(.*?)(?:\s-\s(.*))?$/gm;
				var test;

				while ((test = regex.exec(doc)) !== null) {
					var innerContext = Twig.ChildContext(context);
					innerContext.sample = {};
					innerContext.sample.title = test[1];
					innerContext.sample.img = test[2];
					if (test[3] !== undefined) {
						innerContext.sample.description = test[3];
					}

					output.push(Twig.parse.apply(this, [token.output, innerContext]));

					Twig.merge(context, innerContext, true);
				}

				return {
					chain: chain,
					output: Twig.output.apply(this, [output])
				};
			}
		});

		// a matching end tag type
		Twig.exports.extendTag({
			type: 'endkssSamples',
			regex: /^endkssSamples$/,
			next: [],
			open: false
		});
	});
};

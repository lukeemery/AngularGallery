angular.
	module('imageDetail').
	component('imageDetail', {
		templateUrl: 'image-detail/image-detail.template.html',
		controller: ['$routeParams', 'Image', 'Comment',
			function PhoneDetailController($routeParams, Image, Comment) {
				var self = this;
				self.comments = Comment.query();
				
				self.image = Image.details({photo_id: $routeParams.imageId}, function(image) {
					self.image = image['photo'];
				});
				
				self.addComment = function(comment) {
					Comment.save({
						imageId: comment.imageId,
						name: comment.name,
						content: comment.content
					}).$promise.then(
						function(response) {
							self.comments.push(angular.copy(comment));
							
							comment.name = null;
							comment.content = null;
						},
						function(error) {
							console.log('No Server Backend.');
							self.comments.push(angular.copy(comment));  // Demo Success
							
							comment.name = null;
							comment.content = null;
						}
					);
				}
			}
		]
	});
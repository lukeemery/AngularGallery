angular.
	module('imageList').
	component('imageList', {
		templateUrl: 'image-list/image-list.template.html',
		controller: function ImageListController(Image) {
			var self = this;
			self.photoset = Image.gallery(function(photoset){
				self.images = photoset['photoset']['photo'];
			});
		}
	});
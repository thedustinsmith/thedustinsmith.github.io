var Intro = {
	passions: [
		'Web Developer',
		'Kayaker',
		'Boat Builder',
		'Cardinals Fan',
		'Fun Guy',
		'Avid X Files Fan'
	],

	rotatePassion: function() {
		var ps = this.$passions.find("span");
		var prev = ps.filter('.before');
		var cur = ps.filter('.current');
		var last = ps.filter('.after');

		last.remove();
		cur.addClass('after').removeClass('current');
		var curWidth = prev.addClass('current').removeClass('before').width();

		if (Common.Vowels.indexOf(prev.text().substring(0, 1).toLowerCase()) > -1) this.$an.text('an');
		else this.$an.text('a');

		this.$passions.width(curWidth);

		if(this.ix >= this.passions.length -1) this.ix = 0;
		else this.ix += 1;

		this.$passions.append("<span class='before'>" + this.passions[this.ix] + "</span>");

		var self = this;
		self.passionTimeout = setTimeout(function() {
			self.rotatePassion.call(self);
		}, 5000);
	},

	initPassions: function() {
		this.ix = 3;

		var self = this;
		this.passionTimeout = setTimeout(function() {
			self.rotatePassion.call(self);
		}, 5000);
	},

	init: function () {
		var $passions = this.$passions = $("#passions");
		this.$an = $(".a-an");

		this.initPassions();
	}
};
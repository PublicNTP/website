'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
	queryInterface.bulkInsert('Categories', [
			{
				name: "Category 1",
				permalink: "/category-1"
			},
			{
				name: "Category 2",
				permalink: "/category-2"
			}	
		])
		queryInterface.bulkInsert('Tags', [
			{
				name: "tag-1"
			},
			{
				name: "tag-2"
			}	
		])
	queryInterface.bulkInsert('Posts', [
			{ 
				content: "skdlfjas  lksjdf  jlk sdlfk l slkfa l lka sdf af lksdlk lksjdf  ljfa lsdkfj lkaj sdlfk alksdf lka sdlkfj alsd jfla slfj lkj sdlkf jalkj k jsdkf jlskd jflkaj sdlkfj alksjf kjasdf jlaksj dfklj kalsjdf kla jslkfj laksjd flj asldfj aj sdlkfjksdla jflasj dflkjalkjs dflkjalksjdflkjaslkdjfkdsfljalsdjfla sdjflkjalskdfjksjdf ksd jfkjslkdfj lkj sdf k sjd kfsjdklfj kklj dskfj kljsdflj lksd jl kj fksj dflkj sdlkfj klj sdlfjl jsdlfkjlsjd flkjslkdfjlk jdklsj fldsjf lsflds jfsl",
				title: "Article 2",
				permalink: "/article-2",
				image_url: "/article-2.png",
				excerpt: "lksdfj lksd flk lksdfj lk slkdfj lksdfj lksj fdlkj sdf jlksd jflk jfslk djfksld fjkls fjlsdkf"
			},
			{ 
				content: "skdlfjas  lksjdf  jlk sdlfk l slkfa l lka sdf af lksdlk lksjdf  ljfa lsdkfj lkaj sdlfk alksdf lka sdlkfj alsd jfla slfj lkj sdlkf jalkj k jsdkf jlskd jflkaj sdlkfj alksjf kjasdf jlaksj dfklj kalsjdf kla jslkfj laksjd flj asldfj aj sdlkfjksdla jflasj dflkjalkjs dflkjalksjdflkjaslkdjfkdsfljalsdjfla sdjflkjalskdfjksjdf ksd jfkjslkdfj lkj sdf k sjd kfsjdklfj kklj dskfj kljsdflj lksd jl kj fksj dflkj sdlkfj klj sdlfjl jsdlfkjlsjd flkjslkdfjlk jdklsj fldsjf lsflds jfsl",
				title: "Article 1",
				permalink: "/article-1",
				image_url: "/article-1.png",
				excerpt: "lksdfj lksd flk lksdfj lk slkdfj lksdfj lksj fdlkj sdf jlksd jflk jfslk djfksld fjkls fjlsdkf"
			}
    ])];
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Tags');
  }
};

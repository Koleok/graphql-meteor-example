# ************************************************************
# Sequel Pro SQL dump
# Version 4500
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: dockerhost (MySQL 5.7.10)
# Database: reviews
# Generation Time: 2016-02-02 05:23:42 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table hateful_reviews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `hateful_reviews`;

CREATE TABLE `hateful_reviews` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `reviewer_id` int(11) NOT NULL,
  `post_id` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `reviewer_id` (`reviewer_id`),
  CONSTRAINT `hateful_reviews_ibfk_1` FOREIGN KEY (`reviewer_id`) REFERENCES `reviewers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `hateful_reviews` WRITE;
/*!40000 ALTER TABLE `hateful_reviews` DISABLE KEYS */;

INSERT INTO `hateful_reviews` (`id`, `text`, `reviewer_id`, `post_id`)
VALUES
	(1,' If it were thought that anything I wrote was influenced by Robert Frost, I would take that particular work of mine, shred it, and flush it down the toilet, hoping not to clog the pipes. and frame it, like in a really nice frame!',2,'G8BBAfg4n6bmRtXrM'),
	(2,'I can’t stand him. Nobody will think to ask because I’m supposedly jealous; but I out-sell him. I’m more popular than he is, and I don’t take him very seriously…oh, he comes on like the worker’s son, like a modern-day D.H. Lawrence, but he’s just another boring little middle-class boy hustling his way to the top if he can do it. I really like the guy. ',3,'HEh2HhpkSkEDrLLHu'),
	(3,'‘Paradise Lost’ is one of the books which the reader admires and lays down, and forgets to take up again. None ever wished it longer than it is. ',4,'7LgDcdiZnzvJW8Dog'),
	(5,' Putting my weakest books to the wall last night I came across a copy of ‘Howards End’ and had a look into it. Not good enough. E.M. Forster never gets any further than warming the teapot. He’s a rare fine hand at that. Feel this teapot. Is it not beautifully warm? Yes, but there ain’t going to be no tea. Ain’t nothing like a warm teapot!',5,'pmBiczWHX9XGjv8FG');

/*!40000 ALTER TABLE `hateful_reviews` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table reviewers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `reviewers`;

CREATE TABLE `reviewers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL DEFAULT '',
  `last_name` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `reviewers` WRITE;
/*!40000 ALTER TABLE `reviewers` DISABLE KEYS */;

INSERT INTO `reviewers` (`id`, `first_name`, `last_name`)
VALUES
	(2,'Dana','Streich'),
	(3,'Reagan','Reynolds'),
	(4,'Evangeline','Sauer'),
	(5,'Merl','Rogahn'),
	(6,'Rickie','Bergstrom'),
	(7,'Sanford','Botsford'),
	(8,'Frederik','Heathcote'),
	(9,'Albertha','Metz'),
	(10,'Sigrid','McLaughlin'),
	(11,'Felicity','Ward');

/*!40000 ALTER TABLE `reviewers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table unbiased_reviews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `unbiased_reviews`;

CREATE TABLE `unbiased_reviews` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `reviewer_id` int(11) NOT NULL,
  `post_id` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `reviewer_id` (`reviewer_id`),
  CONSTRAINT `unbiased_reviews_ibfk_1` FOREIGN KEY (`reviewer_id`) REFERENCES `reviewers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `unbiased_reviews` WRITE;
/*!40000 ALTER TABLE `unbiased_reviews` DISABLE KEYS */;

INSERT INTO `unbiased_reviews` (`id`, `text`, `reviewer_id`, `post_id`)
VALUES
	(3,'“Moby-Dick” was written in a cozy study with original fixtures in a beautiful house in the Berkshires—which is just spectacular at this time of year—by a talented writer and devoted husband and father named Herman Melville (who might have been gay, and that’s O.K.!). “Moby-Dick” is about a whale. This is good news because the ocean, a whale’s habitat, is majestic and powerful, and as we stand at its edge we are able to experience both transcendence and humility, which is such a gift.',5,'pmBiczWHX9XGjv8FG'),
	(5,'At first it seemed like the prose in this book would not allow me to give it the sort of positive review I am forever hankering to write. But then I noticed something. I noticed that when you see a woman reading this book and you’re kind of wondering if she’s looking at you, or if she might want to go to coffee or even for dinner—or even more!—you can stop wondering, because the answer to all is a resounding yes. If she’s holding this book you just automatically know that she is someone who is “down for anything,” or, as my more literary friends across the pond might say, “a right goer.” So this book is not only a fun read but also a great time-saver.',6,'HEh2HhpkSkEDrLLHu'),
	(6,'“Crime and Punishment” takes place in St. Petersburg. Right off the bat, having the novel set here makes you feel like you can do anything, because, in 1919, St. Petersburg was re-named Leningrad, but in 1991 it was re-named St. Petersburg, which was really a glorious comeback.\n\nIf St. Petersburg is the Little Engine That Could of city names, then the main character, Raskolnikov, is the Little Engine That Could of elderly pawnbroker murderers. No one can deny that he is a good example of both what you can achieve when you put your mind to something and, conversely, what happens when someone else puts their mind to punishing you for putting your mind to something.\n\nDostoyevsky wrote the book to get out of debt, and it sold millions and millions of copies, so in addition to being a good book it was very useful to the writer. What kind of person would not say “kudos” to that?',7,'7LgDcdiZnzvJW8Dog'),
	(7,'Bill O’Reilly taught high-school history back in the seventies, when high-school history was in its heyday, so, right away, I was optimistic. The first sentence, a “Note to Readers,” is very attention-getting: “The story you are about to read is true and truly shocking.” After that, I started to get a little lost, and was then distracted by a fly, which I managed to swat at and kill with the book. Then I killed another fly with it. What a great book!\n\nThe same authors have written a new book, “Killing Jesus,” and I can’t wait to get my hands on a copy.',8,'G8BBAfg4n6bmRtXrM'),
	(8,'I don’t know if I can describe the disappointment and betrayal I wrestled with when, halfway through Albom’s riveting account of people receiving phone calls from Heaven, it dawned on me that I was reading fiction. These feelings gave way to fury and then to despair, which, as you can imagine, was compounded by the realization that, having suddenly ceased to enjoy this book, I would not be able to review it.\n\nThen the strangest thing happened. My phone rang. I answered it. It was God, and He said to me, “Hello. I want to tell you that your work, writing positive book reviews? Well. It is not only your work. It is My work. By the way, this is probably the fourth or fifth phone call from Heaven.” I woke up with my head resting on my advance copy of “The First Phone Call From Heaven.” A thin stream of drool underlined the word “heaven.” Sure, it was only a dream. But it was a dream that let me know that what I was doing mattered, a dream that I never would have had without reading (half of) this book, which, naturally, I can now endorse without reservation.',9,'HEh2HhpkSkEDrLLHu');

/*!40000 ALTER TABLE `unbiased_reviews` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

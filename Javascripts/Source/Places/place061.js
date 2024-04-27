// Betty's Room

function ShowPlace61()
{
	var md = WritePlaceHeader();

	var perBetty = findPerson("Betty");
	var clvB = perBetty.getCharmedLevel();

	if (perLilith.isHere()) perLilith.showPerson("vampbettyroom.jpg");
	else if (clvB == 3) perBetty.showPerson("bettyroomd.jpg");
	else perBetty.showPersonRandom("bettyroom", 3);
	addPlaceTitle(md, "Betty\'s Room");

	if (clvB == 4) md.write('<p>Betty is kneeling on a cushion with her huge tits pressed together. Any freetime she has is spent right here patiently awaiting her ' + perYou.getMaster() + '\'s return.</p>');
	else if (isVisible()) md.write('<p>Betty welcomes you in, she is partly dressed as a cow-girl, you refrain from any comments about her breasts and how appropriate.</p>');
	else md.write('<p>You see Betty is partly dressed as a cow-girl, you cannot help but think about her breasts and how appropriate.</p>');

	startQuestions();

	if (clvB == 4) {
		if (perYou.isMaleSex() || (perYourBody.FindItem(45) > 0)) addLinkToPlace(md, "tell her to give you a tit-fuck", Place, 'type=bettytf');
		addLinkToPlace(md, 'show her what it could be like in the barn', Place, 'type=bettytied');
		if (perYou.isMaleSex()) {
			addLinkToPlace(md, 'lie down for a blowjob', Place, 'type=bettybj');
			addLinkToPlace(md, 'deepthroat her', Place, 'type=bettydeepbj');
			perBetty.addSleepLink(md, "sleep while she sucks", "Bedtime",
				'<p style="position:absolute;left:5%;top:10%;cursor:pointer;font-size:1.1em;width:40%"><b>Betty wants you to be hard the whole night. She will finish you off in the morning as a wake up call.</b>',
				'bedb.jpg', true
			);			
		}

	} else {
		if (perYou.isMaleSex() || (perYourBody.FindItem(45) > 0)) addLinkToPlace(md, "ask for a tit-fuck", Place, 'type=bettytf');
		addLinkToPlace(md, "ask " + (perYou.isMaleSex() ? "for a blowjob" : "her to lick you"), Place, 'type=bettybj');
		addLinkToPlaceC(md, "make love to Betty", Place, 'type=bettyfuck');
		addLinkToPlaceC(md, "take a bath with Betty", Place, 'type=bettybath');
		addLinkToPlaceC(md, "some bondage play", Place, 'type=bettybondage');
	}


	perBetty.addSleepLink(md, "sleep with Betty", "Bedtime",
		'<p style="position:absolute;left:5%;top:10%;cursor:pointer;font-size:1.1em;width:40%"><b>You take Betty to bed for the night.</b>',
		'bed.jpg', true
	);

	addLinkToPlace(md, "leave her house", 60);
	WritePlaceFooter(md);
}
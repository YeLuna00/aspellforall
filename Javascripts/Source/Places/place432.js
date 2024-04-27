// Melanie's House

function ShowPlace432()
{
	var md = WritePlaceHeader();

	var perMelanie = findPerson("Melanie");
	var clvM = perMelanie.getCharmedLevel();

	if (clvM <= 0 || isInvisible()) perMelanie.showPerson("mel1.jpg");
	else if (!isDay()) {
		if (clvM == 4 && perMelanie.checkFlag(3)) perMelanie.showPerson("mel4s.jpg");
		else perMelanie.showPerson("mel9-" + perMelanie.getSuffix() + "-night.jpg");
	} else perMelanie.showPerson("mel9-" + perMelanie.getSuffix() + "-day.jpg");
	
	addPlaceTitle(md, "Melanie\'s Home");

	if (clvM == 4) {
		if (perMelanie.checkFlag(3)) md.write('<p>Your Milf slave is resting, securely bound to remind her of her submission.</p>');
		else md.write('<p>Your Milf slave is locked in her exercise machine. You require your slaves to maintain peak physical condition so that they may please you better.</p>');
	} else if (clvM == 3) {
		if (isInvisible()) md.write('<p>Your Milf-friend Melanie is lounging around, currently she is only dressed in her underwear.</p>');
		else md.write('<p>Your Milf-friend Melanie is very happy to see her younger lover.</p>');
	} else {
		if (perMelanie.isCharmedBy("Davy")) {
			if (isVisible()) md.write('<p>"Please leave now young ' + perYou.getManWoman() + 'before I call the police."</p>');
			else md.write('<p>You see an attractive woman looking around expectantly, she asks "Master is that you?"</p>');
		} else {
			if (isVisible()) md.write('<p>"Hello young ' + perYou.getManWoman() + '. Did you need something or have something to deliver? I wasn\'t expecting visitors today."</p>');
			else md.write('<p>You see an attractive woman looking around expectantly.</p>');
		}
	}

	startQuestions();

	if (clvM == 4) {
		// Slave
		if (perMelanie.checkFlag(3)) addLinkToPlaceC(md, 'she needs more exercise', Place, '', 'You set your slave back on her exercise machine', '', "setPersonFlag('Melanie',3,false)");
		else addLinkToPlaceC(md, 'let her have a rest', Place, '', 'You take her off the machine and leave her securely tied', '', "setPersonFlag('Melanie',3)");
		
		addLinkToPlaceC(md, 'give the sweaty Milf a bath', Place, 'type=melaniebath');
		addLinkToPlaceC(md, 'use her face', Place, 'type=melanieface');
		addLinkToPlaceC(md, 'fuck her', Place, 'type=melaniefuck');
		addLinkToPlaceC(md, 'use a toy on her', Place, 'type=melanietoy');

		perMelanie.addSleepLink(md, "sleep here tonight", "Sleeping with Melanie",
			'<p style="position:absolute;left:5%;top:10%;cursor:pointer;font-size:1.1em;width:40%"><b>You decide to give Melanie the night off from her bondage and let her suck our cock while you sleep.</b>',
			(perYou.isMaleSex() && isExplicit() ? 'Explicit/' : '') + 'melsleep.jpg', true
		);
		
	} else if (clvM == 3) {
		// Girlfriend
		addLinkToPlaceC(md, "ask her " + (perYou.isMaleSex() ? "for a blowjob" : "to lick you"), Place, 'type=melaniebj');
		addLinkToPlaceC(md, "fuck your milf lover", Place, 'type=melaniefuck');
		if (perYou.isMaleSex()) addLinkToPlaceC(md, "fuck your milf lover's tits", Place, 'type=melanietitfuck');
		else if (perYourBody.FindItem(45) > 0) addLinkToPlaceC(md, "fuck your milf lover with a strap-on", Place, 'type=melaniestraponfuck');
		addLinkToPlaceC(md, "have a bath with Melanie", Place, 'type=melaniebath');
		
		if (!isInvisible()) {
			perMelanie.addDancingLink(md, 'talk to Melanie about dancing at the club?', 
				'You talk to Melanie about the Avernus club and about if she wants to have some fun and dance there,</p>' +
				'<p>&quot;Did Brandi tell you I used to work as an exotic dancer when I was studying?&quot; You deny talking to Aunt Brandi about this, but no matter it is agreed she will dance in the club later on for you.'
			);
		}
		perMelanie.addSleepLink(md, "sleep here tonight", "Sleeping with Melanie",
			'<p style="position:absolute;left:5%;top:10%;cursor:pointer;font-size:1.1em;width:40%"><b>You decide to spend the night with Melanie.</b>',
			'sleep.jpg', true
		);		
	}

	addLinkToPlace(md, "leave her house", 37);

	WritePlaceFooter(md);
}
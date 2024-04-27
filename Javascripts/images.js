// Images for events/scenes
var oImages = {
	
// fixed: images in the game with set filenames controlled in sourcecode. Person independent
fixed: {
	magazines_hard: 23,	// Magazines in your storage chest, hardcore. Numeric suffix, no limit, last image is fixed, female player only
	magazines_soft: 16,	// Magazines in your storage chest, softore.  Numeric suffix, no limit
	occult_books: 17,		// Occult books to study with Sir Ronald. Note: strictly a-z suffix supported currently, so 26 max
	monsters: 8,			// Monsters in the Sacred Clearing. a-z suffix
	phonewallpapers: 20,	// Wallpaper images in your phone, max 32
	tvplain: 1,				// Boring TV shows at home. Numeric suffix, unlimited
	tvkink: 8				// More kinky TV shows. Numeric suffix, unlimited. id 1,2 should be news type programs
},

Church: {
	Nun1: {
		Explicit: {
			straight: 1
		},
		pool: 1,
		straight: 1,
		lesbian: 1,
		pool_sex: 1
	},
	Nun2: {
		Explicit: {
			straight: 1
		},
		pool: 1,		
		straight: 1,
		lesbian: 1,
		pool_sex: 1
	},
	Nun3: {
		Explicit: {
			straight: 1
		},
		pool: 1,		
		straight: 1,
		lesbian: 1,
		pool_sex: 1
	},
	Nun4: {
		Explicit: {
			straight: 1
		},
		pool: 1,		
		straight: 1,
		lesbian: 1,
		pool_sex: 1
	},
	Nun5: {
		pool: 1,		
		straight: 1,
		lesbian: 1,
		pool_sex: 1
	},
	Nun6: {
		Explicit: {
			straight: 1
		},
		pool: 1,
		pool_sex: 1,
		straight: 1,
		lesbian: 1
	},
	Nun7: {
		Explicit: {
			straight: 1
		},
		straight: 1,
		lesbian: 1,
		pool: 1,
		pool_sex: 1
	},
	Nun8: {
		straight: 1,
		lesbian: 1
	},
	Nun9: {
		Explicit: {
			straight: 1
		},
		straight: 1,
		lesbian: 1
	},
	Nun10: {
		Explicit: {
			straight: 1
		},		
		pool: 1,
		straight: 1,
		lesbian: 1
	},
	Nun11: {
		Explicit: {
			straight: 1
		},		
		straight: 1,
		lesbian: 1,
		pool: 1,
		pool_sex: 1
	},
	Nun12: {
		Explicit: {
			straight: 1
		},			
		straight: 1,
		lesbian: 1,
		pool: 1,
		pool_sex: 1
	},
	Nun13: {
		Explicit: {
			straight: 1
		},			
		straight: 1,
		lesbian: 1,
		pool: 1,
		pool_sex: 1
	},
	Nun14: {
		Explicit: {
			straight: 1
		},			
		straight: 1,
		lesbian: 1,
		pool: 1,
		pool_sex: 1
	},
	Nun15: {
		Explicit: {
			straight: 1
		},			
		straight: 1,
		lesbian: 1,
		pool: 1,
		pool_sex: 1
	}
},

// Generic images for use in sex scenes
GenericSex: {
	breastexpansion: 4,
	breastreduction: 4,
	cockexpansion: 1,
	cockshrinking: 1,
	creampie: 2,
	foursome: 2,
	femalefemale: {
		lick: 1,
		trib: 2
	},
	futafemale: {
		pussy: 1
	},
	malefemale: {
		blowjob_blackhair: 1,
		blowjob_blondehiar: 2,
		blowjob_brownhair: 2,
		blowjob_redhair: 2,
		lick: 3,
		pussy: 3
	},
	threesome: {
		mff: 2,
		mmf_blondehair: 1,
		all: 2
	},
	tgm2f: 1,
	tgf2m: 1,
	
	Explicit: {
		femalefemale: {
			analstrapon: 2,
			doubledildo: 2,
			lick: 7,
			strapon: 8,
			trib: 6
		},
		futafemale: {
			pussy: 1
		},
		malefemale: {
			analstrapon: 3,
			anal: 4,
			blowjob: 5,
			pussy: 8,
			titfuck: 2
		},
		malemale: {
			anal: 2
		},
		threesome: {
			fff: 4,
			mff: 8,
			mff_red: 1,
			mff_oral: 5,
			mmf: 5
		}
	}
},

// Characters, child objects are named for the folders, then dress, the explicit
// Note: this can be added tp in a persons initialisation, also mods can update/overwrite
People: {
	Abby: {
		smssexy: "smssexya"
	},	
	Alison: {
		smssexy: "smssexya,smssexyb,smssexyc,smssexyd"
	},
	Anita: {
		smssexy: "smssexya,smssexyb"
	},	
	Ash: {
		smsselfie: "smsselfiea",
		smssexy: "smssexya"
	},	
	Betty: {
		smssexy: "smssexya,smssexyb,smssexyc"
	},
	Brandi: {
		poledance: 2,
		smssexy: "charm5s,brandi0a,smssexya,smssexyb,smssexyc"
	},
	Carol: {
		Carol: {
			smssexy: "smssexya,smssexyb,smssexyc,smssexyd"
		},
		Summer: {
			smssexy: "smssexya,smssexyb,smssexyc,smssexyd"
		}
	},
	Camryn: {
		smssexy: "smssexya,smssexyb,smssexyc"
	},
	Cherry: {
		smssexylover: 2,
		smssexyslave: 2
	},
	Diane: {
		smssexy: "smssexya,smssexyb,smssexyc"
	},	
	Didi: {
		smssexy: "smssexya,smssexyb"
	},	
	DoctorKay: {
		poledance: 2,
		smssexy: "smssexya,smssexyb,smssexyc,smssexyd"
	},	
	Ellie: {
		Carla: {
			poledance: 2,
			smssexy: "smssexya,smssexyb"
		},
		Alix: {
			poledance: 2,
			smssexy: "smssexya,smssexyb"
		}			
	},	
	Emily: {
		smssexy: "smssexya,smssexyb"
	},		
	GlenvaleTown: {
		aquarium: 6,
		aquariumnude: 1,
		church: 5,
		churchnude: 1,		
		generalstore: 2,
		generalstorenude: 1,
		generalstorepublic: 1,
		gym: 3,
		gymnude: 1,
		laundromat: 4,
		library: 2,
		librarynude: 3,
		librarypublic: 4,
		museum: 4,
		museumnude: 3,
		museumpublic: 3,
		park: 7,
		parknude: 7,
		parkpublic: 9,
		pool: 7,
		poolnude: 12,
		poolpublic: 5,
		shops: 3,
		shopsnude: 2,
		shopspublic: 2,
		streets: 10,
		streetsnude: 7,
		streetspublic: 5,
		sportsfield: 3,
		sportsfieldnude: 4,
		stripclub: 5,
		tennis: 4,
		tennisnude: 2,
		wildranges: 3,
		wildrangesnude: 2
	},
	JanetKelly: {
		smssexy: "smssexya,smssexyb"
	},
	Kellie: {
		smssexy: "smssexya,smssexyb"
	},
	Kylie: {
		Kylie: {
			smssexy: "smssexya,smssexyb"
		},
		Paige: {
			smssexy: "smssexya,smssexyb"
		}			
	},	
	Leigh: {
		Carla: {
			poledance: 2,
			smssexy: "smssexya,smssexyb"
		},
		Alix: {
			poledance: 2,
			smssexy: "smssexya,smssexyb"
		}			
	},
	Lola: {
		smssexy: "smssexya,smssexyb"
	},		
	Louise: {
		Monica: {
			louise12b: 1,
			louise12g: 2,
			Explicit: {
				louise12b: 1,
				louise12g: 1,
				louise_pool_sexb: 3,
				louise_pool_sexg: 1				
			}			
		},
		Kayla: {
			louise12b: 1,
			louise12g: 2,
			Explicit: {
				louise12b: 3,
				home_sexb: 3,
				home_sexg: 2,
				louise_pool_sexb: 3,
				louise_pool_sexg: 1
			}
		}
	},
	Melanie: {
		smssexy: "smssexya,smssexyb,smssexyc"
	},
	MissLogan: {
		Kate: {
			pc: 20,
			pctitus: 20,
			pctanika: 2
		}
	},
	Monique: {
		poledance: 2
	},	
	MotherSuperior: {
		poledance: 2
	},
	MrsGranger: {
		hotelroomb: 1,
		hotelroomg: 1,
		Explicit: {
			hotelroomb: 1
		}
	},
	MsReagan: {
		smssexy: "smssexya,smssexyb,smssexyc,smssexyd,smssexye"
	},
	OfficerBatton: {
		Breanne: {
			poledance: 2,
			smssexy: "polb4,trioeventoffbatton6,smssexya,smssexyb,smssexyc"
		},
		Katarina: {
			poledance: 2,
			smssexy: "polb6,trioeventoffbatton5,smssexya,smssexyb,smssexyc"
		}
	},
	Savanna: {
		smssexy: "smssexya,smssexyb,smssexyc"
	},
	Tammy: {
		smssexy: "smssexya,smssexyb"
	},	
	Tracy: {
		Ariel: {
			smsselfie: 3,
			smssexy: "smssexya,smssexyb,smssexyc"
		},
		Casey: {
			smsselfie: 3,
			smssexy: "smssexya,smssexyb,smssexyc"
		}
	},	
	VampyreLilith: {
		poledance: 2,
		movie: 3
	},
	Victoria: {
		smssexy: "smssexya,smssexyb,smssexyc"
	},
	Zali: {
		smssexy: "smssexya,smssexyb,smssexyc,smssexyd,smssexye"
	},	
},

// Player avatars
Player: {}
};

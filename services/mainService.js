angular.module('skateApp')

	.service('mainService', function () {

		var skateparks = [
			{
				name: 'The Cove',
				state: 'california',
				address: '1401 Olympic Blvd, Santa Monica, CA 90404',
				pic: 'images/TheCoveSantaMonica.jpg'
			},
			{
				name: 'Alga Norte',
				state: 'california',
				address: '6565 Alicante Rd, Carlsbad, CA 92009',
				pic: 'images/AlgaNorteCarlsbad.jpg'
			},
			{
				name: 'Craig Ranch',
				state: 'nevada',
				address: '628 W Craig Rd, North Las Vegas, NV 89032',
				pic: 'images/CraigRanchSkatePark.jpg'
			},
			{
				name: 'Anthem Skate Park',
				state: 'nevada',
				address: '2300 Reunion Dr, Henderson, NV 89052',
				pic: 'images/AnthemSkatePark.jpg'
			},
			{
				name: 'Herriman Skate Park',
				state: 'utah',
				address: '5900 West 13400 South, Herriman, UT 84096',
				pic: 'images/HerrimanSkatePark.jpg'
			},
			{
				name: 'Richard L. Guthrie Skate Park',
				state: 'utah',
				address: '2414 East Bengal Blvd, Cottonwood Heights, UT 84121',
				pic: 'images/GuthSkatePark.jpg'
			}

		];



		this.getData = function () {
			return skateparks;
		}


		var messages = [];
		var parkMessages = [];
		
		//------------ Add a new Park to the skateparks array -----------------

		this.addNewPark = function (namE, addy, stat, imgUrl) {
			var lowercaseState = stat.toLowerCase();
			
			for (var i = 0; i < skateparks.length; i++) {
				if (skateparks[i].name === namE) {
					return;
				}
			}
			skateparks.push({
				name: namE, state: lowercaseState, address: addy, pic: imgUrl
			});
		}

		

		
		//-------- get the messages for certain park ------------

		this.getMessages = function (parkNam) {
			parkMessages = [];
			for (var i = 0; i < messages.length; i++) {
				if (messages[i].parkName === parkNam) {
					parkMessages.push(messages[i]);
				}
			}
			console.log('thisis the park parkMessages', parkMessages);
			return parkMessages;
		}	
		
		//-----------add message to array of messages------
		
		this.addMessage = function (msg, name, user) {
			messages.push({ text: msg, parkName: name, user: user })
			console.log('this is the messages array', messages);
		}

	
		//------------gets a list of states----------------
		this.getStates = function () {
			var stateArr = [];
			for (var i = 0; i < skateparks.length; i++) {
				if (stateArr.indexOf(skateparks[i].state) === -1) {
					stateArr.push(skateparks[i].state);
					// console.log('stateArr', stateArr)
				}
			}
			return stateArr;
		}
		//--------- gets parks specific to state--------------

		this.getParks = function (stat) {
			this.stateParks = [];
			for (var i = 0; i < skateparks.length; i++) {
				if (skateparks[i].state === stat) {
					this.stateParks.push(skateparks[i]);
				}
			}



			return this.stateParks;

		}
		
		//-------------- get park data for solo page ----------
		
		this.getSinglePark = function (park) {
			for (var i = 0; i < skateparks.length; i++) {
				if (skateparks[i].name === park) {
					return skateparks[i];
				}
			}
		}
		//---------------------------------------------------
	});
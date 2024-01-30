let list = document.querySelector('ul');

const events = [
	{
		year: 1610,
		desc: 'First telescopic observation of the night sky: discovery of the Galilean moons, lunar craters and the phases of Venus.',
		researcher: 'Galileo Galilei'
	},
	{
		year: 1668,
		desc: 'First reflecting telescope.',
		researcher: 'Isaac Newton'
	},
	{
		year: 1781,
		desc: 'First telescopic discovery of planet (Uranus).',
		researcher: 'William Herschel'
	},
	{
		year: 1801,
		desc: 'First discovery of asteroid (Ceres).',
		researcher: 'Giuseppe Piazzi'
	},
	{
		year: 1813,
		desc: "First exposition of the rocket equation based on Newton's third law of motion: Treatise on the Motion of Rockets.",
		researcher: 'William Moore'
	},
	{
		year: 1840,
		desc: 'First clear telescopic photograph of another world: the Moon.',
		researcher: 'John William Draper'
	},
	{
		year: 1845,
		desc: 'First proper observation of other galaxies which are termed "whirlpool nebulae".',
		researcher: 'William Parsons'
	},
	{
		year: 1861,
		desc: 'A Journey Through Space makes first proposal of using rockets for space flight.',
		researcher: 'William Leitch'
	},
	{
		year: 1895,
		desc: 'First proposal of space elevator.',
		researcher: 'Konstantin Tsiolkovsky'
	},
	{
		year: 1914,
		desc: 'Goddard files for and is subsequently awarded U.S. patents on multistage and liquid-fueled rockets.',
		researcher: 'Robert H. Goddard'
	},
	{
		year: 1917,
		desc: 'First observation of an extrasolar planet (exoplanet) round Van Maanen 2 although it is not recognised as such at the time.',
		researcher: 'Adriaan van Maanen'
	},
	{
		year: 1924,
		desc: 'Society for Studies of Interplanetary Travel founded.',
		researcher: 'Konstantin Tsiolkovsky, Friedrich Zander, Yuri Kondratyuk, ...'
	},
	{
		year: 1926,
		desc: 'Goddard launches the first liquid-fueled rocket.',
		researcher: 'Robert H. Goddard'
	},
	{
		year: 1927,
		desc: 'Verein für Raumschiffahrt (Society for Space Travel) formed; it includes many top European rocket scientists.',
		researcher: ''
	},
	{
		year: 1933,
		desc: 'First detection of radio waves from an astronomical object.',
		researcher: 'Karl Jansky'
	},
	{
		year: 1944,
		desc: 'First spaceflight in history.First man-made object in space (later defined as above the Kármán line).',
		researcher: 'V-2 rocket (MW 18014) '
	},
	{
		year: 1946,
		desc: 'First space research flight (cosmic radiation experiments).',
		researcher: 'captured and improved V-2 rocket'
	},
	{
		year: 1949,
		desc: 'First two-stage liquid-fueled rocket, that sets a record altitude of 244 miles (393 km) (WAC Corporal missile mounted onto a V-2 rocket).',
		researcher: 'Bumper-5'
	},
	{
		year: 1956,
		desc: 'First rocket to pass the thermopause and enter the exosphere. At 682 miles (1,098 km) altitude and 3,335 miles range, the 3-stage Jupiter-C breaks both records and achieves MACH 18 velocity.',
		researcher: 'Jupiter-C'
	},
	{
		year: 1957,
		desc: 'First artificial satellite. First man-made signals from space.',
		researcher: 'Sputnik 1'
	},
	{
		year: 1958,
		desc: 'First use of solar power in space. The oldest artificial object still in space.',
		researcher: 'Vanguard 1'
	},
	{
		year: 1959,
		desc: 'First weather satellite.',
		researcher: 'Vanguard 2'
	},
	{
		year: 1960,
		desc: 'First probe launched to Mars.',
		researcher: 'Mars 1M'
	},
	{
		year: 1961,
		desc: 'First human spaceflight (Yuri Gagarin). First human-crewed orbital flight.',
		researcher: 'Vostok 1'
	},
	{
		year: 1962,
		desc: 'First planetary flyby with data returned (Venus). First successful planetary science mission.',
		researcher: 'Mariner 2'
	},
	{
		year: 1969,
		desc: 'First human on another celestial body (the Moon). First words spoken from another world.',
		researcher: 'Apollo 11'
	},
	{
		year: 1971,
		desc: 'First space station.',
		researcher: 'Salyut 1'
	},
	{
		year: 1973,
		desc: 'First mission sent to study Mercury.',
		researcher: 'Mariner 10'
	},
	{
		year: 1979,
		desc: 'First flyby of Saturn. First photograph of Titan from deep space.',
		researcher: 'Pioneer 11'
	},
	{
		year: 1983,
		desc: 'First spacecraft beyond the orbit of Neptune. First spacecraft beyond all Solar System planets.',
		researcher: 'Pioneer 10'
	},
	{
		year: 1986,
		desc: "First close up observations of a comet (Halley's Comet, 596 kilometers)",
		researcher: 'Giotto'
	},
	{
		year: 1992,
		desc: 'First confirmed observation of an exoplanet.',
		researcher: 'Aleksander Wolszczan & Dale Frail'
	},
	{
		year: 1995,
		desc: 'First laser communication from space.',
		researcher: 'ETS-VI'
	},
	{
		year: 2001,
		desc: 'First landing on an asteroid (433 Eros).',
		researcher: 'NEAR Shoemaker'
	},
	{
		year: 2005,
		desc: 'First confirmed cryovolcano (Enceladus).',
		researcher: 'Cassini–Huygens'
	},
	{
		year: 2007,
		desc: 'First confirmed lakes on the surface of another celestial body (lakes of Titan).',
		researcher: 'Cassini–Huygens'
	},
	{
		year: 2008,
		desc: 'First discovery of lunar water in the form of ice.',
		researcher: 'Chandrayaan-1'
	},
	{
		year: 2012,
		desc: 'First spacecraft to leave the heliosphere. First spacecraft in interstellar space.',
		researcher: 'Voyager 1'
	},
	{
		year: 2019,
		desc: 'First direct photograph of a black hole and its vicinity.',
		researcher: 'Event Horizon Telescope'
	},
	{
		year: 2021,
		desc: 'Launch of the largest space telescope to date.',
		researcher: 'James Webb Space Telescope'
	},
	{
		year: 2023,
		desc: 'First landing at the lunar south pole.',
		researcher: 'Chandrayaan-3'
	}
];

const addNewPoint = event => {
	let li = document.createElement('li');
	li.innerHTML = `<h2>${event.year}</h2>
			<p>${event.desc}</p>
      <div>${event.researcher}</div>`;
	list.appendChild(li);
};

events.forEach(ev => {
	addNewPoint(ev);
});

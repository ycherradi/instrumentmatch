'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Instruments', [
      { ownerId: 1, familyId: 1, name: "piccolo", manufacturer: "Burkhart", lastServiced: "< 6m", description: "Resona by Burkart piccolo - Grenadilla wood hand-cut headjoint with solid silver fittings, granadilla wood body with silver-plated mechanism, solid silver tenon and end-ring, Y-style arms, white gold springs (as of late 2019), split-E mechanism (standard), Resona pads, Burkart scale, A=442.", pricePerDay: 35, address_1: "500 N Dearborn St #1130", address_2: null, city: "Chicago", state: "Illinois", zip: 60610 },
      { ownerId: 2, familyId: 2, name: "trumpet", manufacturer: "Jupiter", lastServiced: "6m - 1yr", description: "The Jupiter 1100S intermediate Bb trumpet is a great-sounding, easy-playing trumpet with solid intonation and has features that are often solely found on professional-level instruments. With its less-resistant reverse leadpipe, it is suitable for students and professionals alike.", pricePerDay: 20, address_1: "5000 S East End Ave", address_2: null, city: "Chicago", state: "Illinois", zip: 60615 },
      { ownerId: 3, familyId: 3, name: "violin", manufacturer: "Stentor", lastServiced: "1yr - 2yrs", description: "Stentor violins, violas, cellos and double basses are carved from solid tonewoods, from the initial instrument shape to the finer details. Instruments are individually thicknessed for quality of sound.", pricePerDay: 30, address_1: "5053 W Augusta Blvd", address_2: null, city: "Chicago", state: "Illinois", zip: 60651 },
      { ownerId: 4, familyId: 4, name: "marimba", manufacturer: "Yamaha", lastServiced: "> 2yrs", description: "Graduated Padauk bars that produce a full tone and projection.", pricePerDay: 80, address_1: "506 Gregory Dr", address_2: null, city: "Chicago", state: "Illinois", zip: 60411 },
      { ownerId: 5, familyId: 5, name: "bansuri", manufacturer: "Murli", lastServiced: "< 6m", description: "The six hole instrument covers two and a half octaves of music. The bansuri is typically between 30 centimetres (12 in) and 75 centimetres (30 in) in length, and the thickness of a human thumb.", pricePerDay: 75, address_1: "509 Weyrauch St", address_2: null, city: "Chicago", state: "Illinois", zip: 60185 },
      { ownerId: 6, familyId: 1, name: "bass clarinet", manufacturer: "Buffet Crampon", lastServiced: "6m - 1yr", description: "The Prestige BC1193 bass clarinet is a perfect representative of Buffet Crampon’s savoir-faire at its highest level. It has an Eb/Ab lever and a low G resonance key, and is equipped with a double D spatula and a triple D spatula. Both of these clarinets, which have evolved and been perfected over many years of research and testing, possess the signature tone of Buffet Crampon instruments and have a warm, full timbre. They both have a neck in two parts for greater comfort without stress or stiffness. Buffet Crampon is the standard brand of reference for the bass clarinet and offers these two professional models in a choice of grenadilla wood or the Green LinE composite material.", pricePerDay: 39, address_1: "510 Nagel Ct", address_2: null, city: "Chicago", state: "Illinois", zip: 60185 },
      { ownerId: 7, familyId: 2, name: "trombone", manufacturer: "Yamaha", lastServiced: "1yr - 2yrs", description: "Two interchangeable leadpipes for superior tonal flexibility. Designed with world-renowned trombonists Andy Martin and Alastair Kay, the YSL-897Z Custom Z trombone is perfectly suited for a wide variety of performance situations and features two interchangeable leadpipes named Z1 for Mr. Martin and Z2 for Mr. Kay.", pricePerDay: 26, address_1: "5125 W Potomac Ave", address_2: null, city: "Chicago", state: "Illinois", zip: 60651 },
      { ownerId: 8, familyId: 3, name: "cello", manufacturer: "D'Luca", lastServiced: "> 2yrs", description: "The D'Luca Meister Ebony Cello MC1800 is meticulously hand carved from solid A rated spruce and maple to achieve an instrument that shines in tone and value. The top and back is graduated to precise measurements, allowing the cello to have a very clear and open sound. Ebony Pegs and Fingerboard.", pricePerDay: 32, address_1: "517 Carriage Dr", address_2: null, city: "West Chicago", state: "Illinois", zip: 60185 },
      { ownerId: 9, familyId: 4, name: "bass triangle", manufacturer: "TreeWorks", lastServiced: "6m - 1yr", description: "Handcrafted in Nashville, Tennessee, the TreeWorks TreHS06 is a 6 inch professional-grade triangle built from custom heat-tempered carbon steel alloy. The TreHS06 has been finished with satin chrome to maximize its response. Hand bent and tested by ear, the TreHS06 yields a shimmering full overtone spectrum with a balanced projection and sustain that blend beautifully in all musical settings.", pricePerDay: 59, address_1: "5325 S Cottage Grove Ave", address_2: null, city: "Chicago", state: "Illinois", zip: 60615 },
      { ownerId: 10, familyId: 5, name: "erhu", manufacturer: "Dunhuang", lastServiced: "1yr - 2yrs", description: "This is a professional grade erhu made by Shanghai No. 1 Musical Instrument Factory, Dunhuang Brand, Model#4A. The instrument comes with 4 bridges (2 sandalwood and 2 pine) , 3 padding, one bow,, a set of spare strings, pitch tuner, a pair of mechanical fine tuning device, and a hard case.", pricePerDay: 48, address_1: "818 Greenwood Ave", address_2: null, city: "Chicago Heights", state: "Illinois", zip: 60411 },
      { ownerId: 1, familyId: 1, name: "alto flute", manufacturer: "Trevor James", lastServiced: "< 6m", description: "The Trevor James alto flutes are extremely popular with flute players and doubling musicians. With a free-blowing and flexible sound, the hand finished .925 sterling silver lip and riser make this flute easy to play throughout the entire range. Ergonomic design and the addition of a D# roller reduces tension, minimizing playing fatigue for a more efficient and productive performance. The Trevor James copper alloy headjoint and body tubing is 85% copper throughout. This gives the alto a warm and deeply colorful sound with enhanced responsiveness in all registers. Perfect as a solo instrument, its brilliant sound is equally matched by its striking beauty.", pricePerDay: 52, address_1: "8232 S Evans Ave", address_2: null, city: "Chicago", state: "Illinois", zip: 60619 },
      { ownerId: 4, familyId: 1, name: "english horn", manufacturer: "Fox", lastServiced: "> 2yrs", description: "High-quality plastic resin body, hand-reamed and finished by Fox craftsman. Silver-plated posts, bands and bell ring. Stainless steel arbors and wire springs. Nickel silver keys with 18% nickel silver hinge tubing and heavy silver plating. Full conservatory mechanism (including left-hand F key) with the exception of the split-ring Eb - E trill key. Cork pads on low C and above. Teflon-tipped stainless steel adjusting screws. Each instrument comes with two standard Fox Model XL English horn bocals (numbers 2 and 3). Accessories include a French-style student single case, reed and reed case, silk swab and cork grease.", pricePerDay: 37, address_1: "680 N Lake Shore Dr", address_2: null, city: "Chicago", state: "Illinois", zip: 60611 },
      { ownerId: 5, familyId: 1, name: "tenor saxophone", manufacturer: "Selmer", lastServiced: "1yr - 2yrs", description: "The Reference Series Selmer Tenor Saxes were designed to pay homage to the vintage tones of the Balanced Action and Mark VI. These saxophones produce an amazingly rich tone that is reminiscent of vintage model Selmers while maintaining the modern intonation and ergonomics of Selmer saxophones today.", pricePerDay: 10, address_1: "7006 S Rhodes Ave", address_2: null, city: "Chicago", state: "Illinois", zip: 60637 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Instruments', null, {});
  }
};

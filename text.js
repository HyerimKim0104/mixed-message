const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Generate a random month index between 0 and 11
  const randomMonthIndex = Math.floor(Math.random() * 12);
  
  // Get the corresponding month name from the array
  const randomMonth = months[randomMonthIndex];
  
  // Generate a random day between 1 and 31
  const randomDay = Math.floor(Math.random() * 31) + 1;
  
  // Generate a random year between 2000 and 2022 (for example)
  const randomYear = Math.floor(Math.random() * (2030 - 2000 + 1)) + 2023;
  
  // Create the collection object
  const collection = {
    fortune: { month: randomMonth, day: randomDay, year: randomYear },
    wealth: { month: randomMonth, day: randomDay, year: randomYear },
    succeed: { month: randomMonth, day: randomDay, year: randomYear }
  };
  
  // Loop through the properties of the collection object
  for (let key in collection) {
    switch(key) {
        case 'fortune' :
          console.log(`You will be lucky on ${month} ${day} ${year}.`)
          break
        case 'wealth' :
          console.log(`You will bring in wealth on ${month} ${day} ${year}.`)
          break
        case 'succeed' :
          console.log(`You will succeed on ${month} ${day} ${year}.`)
          break
        default:
          console.log('There is not enough info.')
    }
  }
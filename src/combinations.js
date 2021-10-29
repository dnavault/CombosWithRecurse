 const combinations = (elements) => {
    if(elements.length === 0) return [ [] ];

    const firstEl = elements[0];
    const rest = elements.slice(1);
    const combsWithoutFirst = combinations(rest);
    const combsWithFirst = [];

    combsWithFirst.forEach( comb =>{
        const combWithFirst = [...comb,firstEl];
        combsWithFirst.push(combWithFirst);
    });

    return [...combsWithoutFirst,...combsWithFirst];

  };

 combinations(['a','b','c']);

 // [
 //   []  
 // ]  
const mcDonalds = {
    bigMac: 26.90,
    bigTasty: 39.90,
    mcFritasMedia: 13.90,
    topSundayChocolate: 11.90,
    isDelicious: true,
    city: 'Curitiba',
    unit: 'Park Shopping Barigui',
};



mcDonalds.bigMac = 78.75;
mcDonalds['bigMac'] = 178.01;


// console.log(Object.keys(mcDonalds));
// console.log(Object.values(mcDonalds));
// console.log(Object.entries(mcDonalds));

const cloneMcDonalds = Object.assign({}, mcDonalds);

console.log(cloneMcDonalds);




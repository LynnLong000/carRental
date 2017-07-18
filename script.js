// car dealership

var car  = {
    sedan: {
        price:450,
        vechcle:13
    },
    SUV: {
        price:550,
        vechcle:13
    },
    sports: {
        price:650,
        vechcle:13
    },
    request: function(here) {
        console.log('there are '+ this[here].vechcle+' '+here+' left!')
        console.log('you have rented a '+here);
        this[here].vechcle--;
        console.log('Now there are '+ this[here].vechcle+' '+here+' left!')
    }


};




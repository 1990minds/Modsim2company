function marks  (M){


    if (M <= 100  && M >=90 ) {
        return 'A'
    }

    if (M < 90  && M >=80 ) {
        return 'B'
    }

    if (M < 80  && M >=60 ) {
        return 'c'
    }

    if (M < 60  && M >=30 ) {
        return 'D'
    }

    if (M <30  && M >=0 ) {
        return 'F'
    }



}

console.log(marks(75))
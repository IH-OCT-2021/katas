//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript



function abbrevName(name) { //Kalju
    let arr = name.split(' ')
    let store = []
    for (let i = 0; i < arr.length; i++) {
        store.push(arr[i][0].toUpperCase())
    }
    return store.join('.')
}

function abbrevName(name) { //Eddie
    let string = name.split(' ')
    //Sam >> S + '.' + 'Harris' >> H
    return (string[0][0] + '.' + string[1][0]).toUpperCase()
}

function abbrevName(name) { //Natalia
    return ((name.split(' ')[0])[0]) + '.' + ((name.split(' ')[1])[0]).toUpperCase()
}

function abbrevName(name) { //Sylvia
    let firstInitial = name[0]
    let space = name.indexOf(' ') //3 
    console.log(space)
    return firstInitial.toUpperCase() + '.' + name[space + 1].toUpperCase()

}

function abbrevName(name) { //PABLO

    //Split Name 
    const arr = name.split(" ");

    let firstname = arr[0] //Sam

    let lastname = arr[1] //Harris

    let result = firstname[0].toUpperCase() + '.' + lastname[0].toUpperCase()

    return result
}

function abbrevName(name) { //CHRISTAN

    //Split Name 
    const arr = name.split(" ");
    //( Sam >> S + "." + Harris >> H  ).toUpperCase()
    let abbrev = (arr[0].charAt(0) + "." + arr[1].charAt(0)).toUpperCase();

    return abbrev

    // console.log(name, arr, arrOne, charOne,abrv)
}

abbrevName("Samuel Harris Frarmington Rodriguez III")


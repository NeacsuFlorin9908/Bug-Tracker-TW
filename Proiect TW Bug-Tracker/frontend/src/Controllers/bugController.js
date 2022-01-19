import bugModel from '../Models/bugModel'

export function retreiveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:1124412,
        name:"Crash on load",
        details:"Aplicatia se inchide dupa 3 secunde.",
        link:"Cand se deschide aplicatia aceasta se opreste dintr-o data.",
        assigned:"Andrei Iulian",
        creator:"Cristian Daniel",
        priority:1,
        severity:"Medium"

    }));
    data.push(new bugModel({
        _id:3242324,
        name:"Won't load",
        details:"Aplicatia nu se deschide.",
        link:"Aplicatia nu se deschide.",
        assigned:"Marian Mihai",
        creator:"Andreea Cristina",
        priority:3,
        severity:"High"

    }));
    data.push(new bugModel({
        _id:3242324,
        name:"Won't load",
        details:"Aplicatia nu se deschide.",
        link:"Aplicatia nu se deschide.",
        assigned:"Marian Mihai",
        creator:"Andreea Cristina",
        priority:2,
        severity:"High"

    }));


    let sorted = data.sort((a,b)=>{return a.priority-b.priority});
    return sorted;


}
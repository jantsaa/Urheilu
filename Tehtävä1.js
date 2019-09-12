"use strict";

class Person {
    constructor(firstNames, lastName, nickName, yearOfBirth){
        this._firstNames = firstNames;
        this._lastName = lastName;
        this._nickName = nickName;
        this._yearOfBirth = yearOfBirth;
        console.log("New Person created ", this);
    }
    get firstNames() {
        return this._firstNames;
    }
    set firstNames(value) {
        this._firstNames = value;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    get nickName() {
        return this._nickName;
    }
    set nickName(value) {
        this._nickName = value;
    }

    get yearOfBirth() {
        return this._yearOfBirth;
    }
    set yearOfBirth(value) {
        this._yearOfBirth = value;
    }
}

class Urheilija extends Person{
    constructor(firstNames, lastName, nickName, yearOfBirth, linkToImg, weight, sport, achievements){
    super(firstNames, lastName, nickName, yearOfBirth)
    this._linkToImg = linkToImg;
    this._weight = weight;
    this._sport = sport;
    this._achievements = achievements;
    }
    
    get linkToImg() {
        return this._linkToImg;
    }
    set linkToImg(value) {
        this._linkToImg = value;
    }

    
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }

    get sport() {
        return this._sport;
    }
    set sport(value) {
        this._sport = value;
    }

    get achievements() {
        return this._achievements;
    }
    set achievements(value) {
        this._achievements = value;
    }

   
    
}

var mike = new Urheilija("Mike", "Hannigan", "Mike", "1984", "www.imgur.com", 75, "basketball", "League Championship");
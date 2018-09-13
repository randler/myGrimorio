export class PersonBean {
    idPerson;
    AlliesAndOrganizations;
    antecedent;
    antecedentTraces = new AntecedentTraces;
    armorClass;
    attributes = new Atributes;
    characteristics = [];
    class = [];
    displacement;
    equipments = new Equipaments;
    history;
    hurt;
    userId;
    languages = [];
    lifePointsTemporary;
    lifePointsTotal;
    myMagics = new Magics;
    name;
    othersProficiencies = [];
    proficiencyBonus;
    race;
    skills = [];
    tendency;
    treasures = [];
    weapons = [new Weapons];
    xp;
}

class AntecedentTraces {
    personality;
    connections;
    defects;
    ideals;
}

class Atributes {
    charisma;
    constitution;
    dexterity;
    intelligency;
    knowledge;
    strength;
}

class Class {
   name;
   level;
}
class Equipaments {
    desc = [];
    money = new Money;
}
class Money {
    pc;
    pp;
    pe;
    po;
    pl;
}
class Magics {
    magics =[];
}
class Weapons {
    attacks = [];
    magics = [];
    bonus;
    damage;
    name;
}
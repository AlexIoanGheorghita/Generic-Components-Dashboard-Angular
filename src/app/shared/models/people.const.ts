import { EyeColor } from "./eye-color.enum";
import { Gender } from "./gender.enum";
import { HairColor } from "./hair-color.enum";
import { Hobbies } from "./hobbies.enum";
import { SkinColor } from "./skin-color.enum";
import { Person } from "./star-wars-person.model";

export const PEOPLE_LIST: Person[] = [
  { id: 1, name: "Luke Skywalker", height: 172, mass: 77, gender: Gender.MALE, hair_color: HairColor.BLOND, skin_color: SkinColor.FAIR, eye_color: EyeColor.BLUE, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.PAINTING, Hobbies.TENIS], birth_year: "19BBY" },
  { id: 2, name: "C-3PO", height: 167, mass: 75, gender: Gender.NOTAPPLICABLE, hair_color: HairColor.NOTAPPLICABLE, skin_color: SkinColor.GOLD, eye_color: EyeColor.YELLOW, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.HIKING], birth_year: "112BBY"},
  { id: 3, name: "R2-D2", height: 96, mass: 32, gender: Gender.NOTAPPLICABLE, hair_color: HairColor.NOTAPPLICABLE, skin_color: SkinColor.WHITE, eye_color: EyeColor.RED, homeworld: "https://swapi.dev/api/planets/8/", hobbies: [Hobbies.PROGRAMMING, Hobbies.COOKING], birth_year: "33BBY"},
  { id: 4, name: "Darth Vader", height: 202, mass: 136, gender: Gender.MALE, hair_color: HairColor.NONE, skin_color: SkinColor.WHITE, eye_color: EyeColor.YELLOW, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.READING, Hobbies.GAMING], birth_year: "41.9BBY"},
  { id: 5, name: "Leia Organa", height: 150, mass: 49, gender: Gender.FEMALE, hair_color: HairColor.BROWN, skin_color: SkinColor.LIGHT, eye_color: EyeColor.BROWN, homeworld: "https://swapi.dev/api/planets/2/", hobbies: [Hobbies.HIKING, Hobbies.READING, Hobbies.COOKING], birth_year: "19BBY"},
  { id: 6, name: "Owen Lars", height: 178, mass: 120, gender: Gender.MALE, hair_color: HairColor.BROWN, skin_color: SkinColor.LIGHT, eye_color: EyeColor.BLUE, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.PROGRAMMING], birth_year: "52BBY"},
  { id: 7, name: "Beru Whitesun lars", height: 165, mass: 75, gender: Gender.FEMALE, hair_color: HairColor.BROWN, skin_color: SkinColor.LIGHT, eye_color: EyeColor.BLUE, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.COOKING, Hobbies.READING, Hobbies.TENIS], birth_year: "47BBY"},
  { id: 8, name: "R5-D4", height: 97, mass: 32, gender: Gender.NOTAPPLICABLE, hair_color: HairColor.NOTAPPLICABLE, skin_color: SkinColor.WHITE, eye_color: EyeColor.RED, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.TENIS], birth_year: "unknown"},
  { id: 9, name: "Biggs Darklighter", height: 183, mass: 84, gender: Gender.MALE, hair_color: HairColor.BLACK, skin_color: SkinColor.LIGHT, eye_color: EyeColor.BROWN, homeworld: "https://swapi.dev/api/planets/1/", hobbies: [Hobbies.PAINTING], birth_year: "24BBY"},
  { id: 10, name: "Obi-Wan Kenobi", height: 182, mass: 77, gender: Gender.MALE, hair_color: HairColor.AUBURN, skin_color: SkinColor.FAIR, eye_color: EyeColor.BLUE, homeworld: "https://swapi.dev/api/planets/20/", hobbies: [Hobbies.COOKING, Hobbies.READING, Hobbies.PAINTING], birth_year: "57BBY"}
]

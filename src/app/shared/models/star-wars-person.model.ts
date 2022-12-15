import { EyeColor } from "./eye-color.enum";
import { Gender } from "./gender.enum";
import { HairColor } from "./hair-color.enum";
import { Hobbies } from "./hobbies.enum";
import { SkinColor } from "./skin-color.enum";

export interface Person {
    id: number,
    name: string,
    height: number,
    mass: number,
    hair_color: HairColor,
    skin_color: SkinColor,
    eye_color: EyeColor,
    birth_year: string,
    gender: Gender,
    homeworld: string,
    hobbies: Hobbies[]
}

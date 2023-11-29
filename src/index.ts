import { Herb, HerbName } from "./Herb.ts"

import { Garden } from "./Garden"

const garden = new Garden()

const thyme = garden.spawnHerb(HerbName.Thyme)

console.log(thyme.name)

const illegalHerb = garden.spawnHerb("illegal herb" as HerbName)

console.log(illegalHerb.name)

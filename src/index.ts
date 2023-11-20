import { Herb, HerbName } from "./Herb.ts"


try {
  const thyme = new Herb(HerbName.Thyme, 0)
  console.log(thyme)
}
catch (error: any) {
  console.log(error.message)
}

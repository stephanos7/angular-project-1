import { Spirit } from "../../shared/models/spirit";

const spirits: Object[] = [
{
  kind: "Whisky",
  description: `Whisky or whiskey is a type of distilled alcoholic beverage made from
                fermented grain mash. Various grains are used for different varieties, 
                including barley, corn, rye, and wheat. Whisky is typically aged in 
                wooden casks, generally made of charred white oak.`,
  cocktails: [{
                name: "Old Fashioned",
                Volume: 40,
                Ingredients: ["one", "two", "three"]
  }]
},
{
  kind: "Vodka",
  description: `Vodka is a distilled beverage composed primarily of water and
                 ethanol, sometimes with traces of impurities and flavorings.`,
  cocktails: [{
                name: "Martini",
                Volume: 28,
                Ingredients: ["four", "five", "six"]
  }]
},
{
  kind: "Gin",
  description: `Gin is a spirit which derives its predominant flavour from juniper
                berries. From its earliest origins in the Middle Ages, gin has evolved
                from use in herbal medicine to an object of commerce in the spirits 
                industry.`,
  cocktails: [{
                name: "Tonic",
                Volume: 38,
                Ingredients: ["seven", "eight", "nine"]
  }]
},
{
  kind: "Rum",
  description: `Rum is a distilled alcoholic beverage made from sugarcane byproducts,
                such as molasses, or directly from sugarcane juice, by a process of 
                fermentation and distillation. The distillate, a clear liquid, is then
                usually aged in oak barrels. The majority of the world's rum production
                occurs in the Caribbean and Latin America.`,
  cocktails: [{
                name: "Cuba Libre",
                Volume: 40,
                Ingredients: ["ten", "eleven", "twelve"]
  }]
}
];

export default spirits;
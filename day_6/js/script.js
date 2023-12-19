// Properities 
//1. length()
let actor_name = "Bipin Karki"
let director_name = "Pradeep Bhattrai"
console.log("Length Example")
console.log(actor_name.length)
console.log(director_name.length)
console.log("")

//Methods 
//1. toUpperCase() - returns all string character in UpperCase
let movie_name = "Jatra Jatra"
console.log("toUpperCase Example")
console.log(movie_name.toUpperCase())
console.log(actor_name.toUpperCase())
console.log(director_name.toUpperCase())
console.log("")

//2. toLowerCase() - returns all string character to lower case
let genre = "Comedy"
console.log("toUpperCase Example")
console.log(movie_name.toLowerCase())
console.log(actor_name.toLowerCase())
console.log(director_name.toLowerCase())
console.log(genre.toLowerCase())
console.log("")

//3. trim() - removes the space before and after string
let origin  = "   Nepal   "
let budget = "          Rs. 10000000000  "
console.log("Trim Example")
console.log(origin.trim())
console.log(budget.trim())
console.log("")

//4. replace() - replace old string with new  string 
//note: original string remains unbchanged because of their mutative behaviour 
//so new references is created while using this function 
let casting_director = "Mohan Lal Pandey"
let dop = "Purshopttam Pradhan"

console.log("Replace Example")
let result = casting_director.replace("Lal", "Prasad")
console.log("Actual String: " + casting_director)
console.log("Result : " + result)

let result_two = dop.replace("Purshopttam", "Parneshraj")
console.log("Actual String: " + dop)
console.log("Result : " + result_two)
console.log("")

//5. substring() - returns the piece of string form primary string 
let description = "This movie tells the story about three characters who are poor"
console.log("Substring Example")
let result_ss = description.substring(5,10) // returns string form index 5 upto 9 
let result_ss_i = description.substring(8) // returns string form index 8 upto end
console.log("Actual String:" + description)
console.log("Result : " + result_ss)
console.log("Result : " + result_ss_i)
console.log("")

//6. substr() - same as substring()
let actress_name = "Barsha Raut"
console.log("substr Example")
let result_ss_ii = actress_name.substr(4, 7)
console.log("Actual String: " + actress_name)
console.log("Result : " + result_ss_ii)
console.log("")

//7. replaceAll() - replaces all string
let production_house = "Black Horse Production"
console.log("replaceAll Example") 
console.log(production_house)
let new_production_house = production_house.replaceAll(production_house, "BlueStone Pictures")
console.log(new_production_house)
console.log("")

//8. Concat() - combines one or more string 
let production_banner = "Silver Screen"
let cinematography = "Vision Entertainment"
console.log("Concat Examples")

let movies_desc = production_banner.concat(cinematography)
console.log(movies_desc)
console.log("")
//note: we can also concat multiple string 
let desc = production_banner.concat("", cinematography, "", production_house)
console.log(desc)
console.log("")

//9. slice() - return thr piece of string - more like substring
let vfx = "Bikesh Entertainment"
console.log("Slice Example")
let vfx_result = vfx.slice(4, 2)
console.log("Actual String: "+vfx)
console.log("Result : " + vfx_result)
console.log("")

//10. trimStart() - trim string form start 
console.log("trimStart Example")
let  email  = "     blackhorse@gmail.com"
console.log("Actual Email :" + email)
console.log("Result : " + email.trimStart())
console.log("")
//11. trimEnd() - trim string form end 
console.log("trimEnd Example")
let  address  = "Baneshwor       "
console.log("Actual Email :" + address)
console.log("Result : " + address.trimEnd())
console.log("")
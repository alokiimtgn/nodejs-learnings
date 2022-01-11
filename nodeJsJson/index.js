const bioData = {
      name: "Alok Kumar",
      age : 22,
      company : "Mobcoder",
};

 // Converting Json Object to String
 const jsonData = JSON.stringify(bioData);
 console.log(jsonData);

 // Converting Json String to Json Object
 const obj = JSON.parse(jsonData);
 console.log('Parsed Data - Name : '+obj.age+" , Age : "+obj.age+" , Company : "+obj.company);
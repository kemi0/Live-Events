// const connection = require('./db-connection');

// const createTables =()=>{
//   const tableArray =[];

//   const events; 

//   const venues = `CREATE TABLE IF NOT EXISTS venues 
//       (venue_id INT NOT NULL auto_increment,
//        venue_name VARCHAR(100) NOT NULL,
//        venue_email VARCHAR(150),
//        address_id INT NOT NULL,
//        venue_image BLOB NOT NULL, 
//        venue_details VARCHAR(1000),
//        PRIMARY KEY(venue_id)
// )`; 
// tableArray.push(venues);
// // FOREIGN KEY (address) REFERENCES address(address)

//   const address = `CREATE TABLE IF NOT EXISTS address 
//     (address_id INT NOT NULL auto_increment, address_street VARCHAR(100) NOT NULL,city VARCHAR(25) NOT NULL, 
//     state VARCHAR(25) NOT NULL,
//     zip_id INT NOT NULL,
//     PRIMARY KEY(address_id) 
//  )`; 

// FOREIGN KEY (zip_id) REFERENCES zipCodes(zip_id)
  
// const zipCodes = `CREATE TABLE IF NOT EXISTS zipCodes 
//         (zip_id INT NOT NULL auto_increment,
//         zip_code INT NOT NULL,
//       PRIMARY KEY(zip_id) 
// )`; 
  
// const genres = `CREATE TABLE IF NOT EXISTS genres 
//         (genre_id INT NOT NULL auto_increment,
//         genre_name VARCHAR(25),
//       PRIMARY KEY(genre_id) 
// )`; 

// const performers = `CREATE TABLE IF NOT EXISTS performers 
//         (performer_id INT NOT NULL auto_increment,
//         performer_f_name VARCHAR(25),
//         performer_l_name VARCHAR(25),
//         band_id VARCHAR(100),
//         performer_details VARCHAR(1000),
//       PRIMARY KEY(performer_id),
     
// )`;
// FOREIGN KEY (band_id) REFERENCES bands (band_id)

// const bands = `CREATE TABLE IF NOT EXISTS bands 
//         (band_id INT NOT NULL auto_increment,
//         band_name VARCHAR(50),
//       PRIMARY KEY(band_id) 
// )`; 


// tableArray.map((table,index)=>{
//   connection.query(table,(err, result)=>{
//     if(err) throw err;
//     console.log(`Table ${index} created:`);
//     })
//   })

// //end of createTables }; 
// }


// module.exports = createTables;


/******************  COYPE to Mysql   ********************** */





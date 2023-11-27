// import {fetch} from 'node-fetch'
// let employ = [
//   { name: "rahul", age: 24, id: 1 },
//   { name: "rakesh", age: 25, id: 2 },
//   { name: "rohit", age: 26, id: 3 },
// ];
// const data = []
// employ.filter((s)=>{
//     data.push(s.id)
// })

// console.log(data);
// const dat = []
// employ.map((i)=>{
//     dat.push( i.age ,i.id , i.name)
// })

// console.log(dat);

// Fetching data from an API using async/await
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response, "response of api data============================");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function storeData() {
  try {
    const fetchedData = await fetchData();

    if (fetchedData) {
      localStorage.setItem("storedData", JSON.stringify(fetchedData));
      console.log("Data stored successfully:", fetchedData);
    } else {
      console.log("No data fetched or failed to fetch data.");
    }
  } catch (error) {
    console.error("Error storing data:", error);
  }
}

storeData();
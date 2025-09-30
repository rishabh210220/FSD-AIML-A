const url = "https://api.github.com/users/rishabsh210220";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
         <img src = {}
        console.log("data", data);
    })
    .catch((error) => {
        console.log("error", error);
    })
    .finally(() => {
        console.log("fetch operation completed");
    });
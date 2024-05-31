const bearList = document.querySelector(".bearList");

// Use CORS middleware

const getData = async () => {
    try {
        const response = await fetch("http://localhost:3456/api/bears/all");
        const dataSet = await response.json();
        return dataSet;
    } catch (error) {
        console.error("Error fetching the data:", error);
        return [];
    }
};
const deleteData = async (bear) => {
    try {
        const response = await fetch(`http://localhost:3456/api/bears/${bear.id}/delete`);
        const dataSet = await response.json();
        return dataSet;
    } catch (error) {
        console.error(`Error deleting bear : ${bear.name}`, error);
        return [];
    }
};
const editData = async (bear) => {
    //TODO
    try {
        const response = await fetch(`http://localhost:3456/api/bears/${bear.id}/edit`);
        const dataSet = await response.json();
        return dataSet;
    } catch (error) {
        console.error(`Error deleting bear : ${bear.name}`, error);
        return [];
    }
};

const updateBearList = async () => {
    const data = await getData();

    // Assuming `data` is an array and you want to log and display its contents.
    console.log(data[1]);

    // Example function to create HTML for each bear, adjust as necessary.
    const createBearItemHTML = bear => `
        <figure class="bear-item">
            <img src="assets/${bear.image}">
            <figcaption>
                <h2>${bear.name}</h2>
                <p>${bear.type}</p>
                <div>
                </div>
            </figcaption>
        </figure>
        
        `
    ;
    /*
        <a type='button' class='${bear.id}' onClick="deleteData(${bear})">delete<a/>
        <a type='button' class='${bear.id}'>edit<a/>
        ${document.querySelectorAll(`.${bear.id}`)[0].addEventListener("click", deleteData(`${bear}`))};
        ${document.querySelectorAll(`.${bear.id}`)[1].addEventListener("click", editData(`${bear}`))};
    */
    // Generate the HTML for the bear list.
    bearList.innerHTML = data.map(createBearItemHTML).join('');
};

// Call the function to update the bear list.
updateBearList();

//ours andin
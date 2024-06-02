const bearList = document.querySelector(".bearList");

// On utilise le middleware CORS dans le backend

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
/**/
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
/** */
const updateBearList = async () => {
    const data = await getData();
    /*
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
        // Generate the HTML for the bear list.
        bearList.innerHTML = data.map(createBearItemHTML).join('');
    */
   
    //DOM Injection
    const fragment = document.createDocumentFragment();
    const createBearNodeHTML = (bear) => {
        let figure = document.createElement("figure");
        let img = document.createElement("img");
            img.src=`assets/${bear.image}`;
            img.alt=`Image de ${bear.name} le ${bear.type}`;
        let figcaption = document.createElement("figcaption");
        let h2 = document.createElement("h2");
            h2.innerHTML = bear.name;
        let p = document.createElement("p");
            p.innerHTML = bear.type;
        let div = document.createElement("div");
            let erase = document.createElement("button");
                erase.innerHTML = "erase";
                erase.addEventListener("click", ()=>{deleteData(bear)});
            let edit = document.createElement("button");
                edit.innerHTML = "edit";
                edit.addEventListener("click", ()=>{editData(bear)});
        div.append(erase, edit);
        figcaption.append(h2, p, div);
        figure.append(img, figcaption);
        fragment.append(figure);
    };
    data.map(bear => createBearNodeHTML(bear));
    bearList.append(fragment);
};

// Call the function to update the bear list.
updateBearList();
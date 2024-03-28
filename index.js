var countrySateCityinfo = {
    Pakistan: {
        Punjab: ["Lahore", "Multan"],
        Sindh: ["Karachi", "Hyderabad"],
        KPK: ["Kohat", "Peshawar","Abbotabad","Bannu"],
        Balochistan: ["Gawadar", "Quetta"]


    },
    Australia: {
        victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
        queensland: ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville"]
    },

    Germany: {
        Bavaria: ["Munich", "Nuremberg"],
        Berlin: ["Berlin"]
    },
    Canada: 
        {
        Ontario: ["Toronto", "Ottawa"],
        Quebec: ["Montreal", "Quebec City"]
        },

    Japan:{
        tokyo: ["Shinjuku", "Shibuya", "Ginza", "Ikebukuro"],
        osaka: ["Osaka City", "Sakai", "Higashi-Osaka", "Suita"]
            
        }
    
    
}

window.onload = function(){
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city'),
        selects = document.querySelectorAll('select')

        selectState.disabled = true
        selectCity.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let country in countrySateCityinfo){
            // console.log(country);
            selectCountry.options[selectCountry.options.length] = new Option(country, country)
        }


        // country change
        selectCountry.onchange = (e) =>{
            
            selectState.disabled = false
            selectCity.disabled = true
           

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectState.length = 1
            selectCity.length = 1
          

            for(let state in countrySateCityinfo[e.target.value]){
                // console.log(state);
                selectState.options[selectState.options.length] = new Option(state, state)
            }
        }

        // state change
        selectState.onchange = (e) =>{
            selectCity.disabled = false
        

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectCity.length = 1
        

            for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
                // console.log(city);
                selectCity.options[selectCity.options.length] = new Option(city, city)
            }
        }

        // // change city



        // selectCity.onchange = (e) =>{
            selectState.onchange = (e) => {
                selectCity.disabled = false;
                selectCity.length = 1; // Reset city dropdown
            
                selects.forEach(select => {
                    if (select.disabled == true) {
                        select.style.cursor = "auto";
                    } else {
                        select.style.cursor = "pointer";
                    }
                });
            
                const selectedCountry = selectCountry.value;
                const selectedState = e.target.value;
                const cities = countrySateCityinfo[selectedCountry][selectedState];
            
                for (let i = 0; i < cities.length; i++) {
                    selectCity.options[selectCity.options.length] = new Option(cities[i], cities[i]);
                }
            }
}


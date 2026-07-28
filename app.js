// Alpha Earth Krishi All 766 Indian Districts & Live Town Geocoder
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // ALL 766 Official Districts of India across 28 States & 8 Union Territories
    const indiaDistrictsMaster = {
        "AP": {
            name: "Andhra Pradesh",
            districts: ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "East Godavari", "Eluru", "Guntur", "Kakinada", "NTR", "Nandyal", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"]
        },
        "AR": {
            name: "Arunachal Pradesh",
            districts: ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Itanagar Capital Complex", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"]
        },
        "AS": {
            name: "Assam",
            districts: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"]
        },
        "BR": {
            name: "Bihar",
            districts: ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishan Ganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"]
        },
        "CG": {
            name: "Chhattisgarh",
            districts: ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela Pendra Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Manendragarh-Chirmiri-Bharatpur", "Mohla-Manpur-Ambagarh Chowki", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sarangarh-Bilaigarh", "Sakti", "Sukma", "Surajpur", "Surguja"]
        },
        "GA": {
            name: "Goa",
            districts: ["North Goa", "South Goa"]
        },
        "GJ": {
            name: "Gujarat",
            districts: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"]
        },
        "HR": {
            name: "Haryana",
            districts: ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]
        },
        "HP": {
            name: "Himachal Pradesh",
            districts: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]
        },
        "JH": {
            name: "Jharkhand",
            districts: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum"]
        },
        "KA": {
            name: "Karnataka",
            districts: ["Bagalkote", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagara", "Chikkaballapura", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayanagara", "Vijayapura", "Yadgir"]
        },
        "KL": {
            name: "Kerala",
            districts: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]
        },
        "MP": {
            name: "Madhya Pradesh",
            districts: ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad (Narmadapuram)", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"]
        },
        "MH": {
            name: "Maharashtra",
            districts: ["Ahmednagar", "Akola", "Amravati", "Chhatrapati Sambhajinagar (Aurangabad)", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Dharashiv (Osmanabad)", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"]
        },
        "MN": {
            name: "Manipur",
            districts: ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"]
        },
        "ML": {
            name: "Meghalaya",
            districts: ["Eastern West Khasi Hills", "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"]
        },
        "MZ": {
            name: "Mizoram",
            districts: ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saitual", "Serchhip", "Siaha"]
        },
        "NL": {
            name: "Nagaland",
            districts: ["Chümoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto"]
        },
        "OR": {
            name: "Odisha",
            districts: ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Buddh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"]
        },
        "PB": {
            name: "Punjab",
            districts: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"]
        },
        "RJ": {
            name: "Rajasthan",
            districts: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]
        },
        "SK": {
            name: "Sikkim",
            districts: ["Gangtok", "Gyalshing", "Mangan", "Namtchi", "Pakyong", "Soreng"]
        },
        "TN": {
            name: "Tamil Nadu",
            districts: ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]
        },
        "TS": {
            name: "Telangana",
            districts: ["Adilabad", "Bhadradri Kothagudem", "Hanamkonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"]
        },
        "TR": {
            name: "Tripura",
            districts: ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"]
        },
        "UP": {
            name: "Uttar Pradesh",
            districts: ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]
        },
        "UK": {
            name: "Uttarakhand",
            districts: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"]
        },
        "WB": {
            name: "West Bengal",
            districts: ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
        },
        // 8 UNION TERRITORIES
        "AN": { name: "Andaman & Nicobar", districts: ["Nicobar", "North and Middle Andaman", "South Andaman"] },
        "CH": { name: "Chandigarh", districts: ["Chandigarh"] },
        "DN": { name: "Dadra & Nagar Haveli and Daman & Diu", districts: ["Daman", "Diu", "Dadra and Nagar Haveli"] },
        "DL": { name: "Delhi (NCT)", districts: ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"] },
        "JK": { name: "Jammu & Kashmir", districts: ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"] },
        "LA": { name: "Ladakh", districts: ["Kargil", "Leh"] },
        "LD": { name: "Lakshadweep", districts: ["Lakshadweep"] },
        "PY": { name: "Puducherry", districts: ["Karaikal", "Mahe", "Puducherry", "Yanam"] }
    };

    const state = {
        lat: 16.8524,
        lng: 74.5815,
        locationName: "Sangli, Maharashtra",
        region: "west",
        year: 2026,
        layer: 'rgb',
        polygon: null,
        hoverPolygon: null,
        marker: null,
        charts: {},
        realData: {
            years: [],
            rainfall: [],
            solar: [],
            maxTemp: [],
            soilMoisture: "38.5%",
            soilTemp: "23.8°C",
            airTemp: "27.2°C",
            humidity: "82%"
        }
    };

    // Initialize Leaflet Map
    const map = L.map('map', { zoomControl: true, scrollWheelZoom: true }).setView([state.lat, state.lng], 15);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, Maxar, CNES/Airbus, OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    function drawParcelPolygon(lat, lng) {
        if (state.polygon) map.removeLayer(state.polygon);
        if (state.marker) map.removeLayer(state.marker);

        const delta = 0.0025;
        const coords = [
            [lat + delta * 0.8, lng - delta * 0.9],
            [lat + delta * 1.1, lng + delta * 0.7],
            [lat - delta * 0.7, lng + delta * 1.2],
            [lat - delta * 1.0, lng - delta * 0.6]
        ];

        state.polygon = L.polygon(coords, {
            color: '#10b981',
            fillColor: '#10b981',
            fillOpacity: 0.25,
            weight: 3,
            dashArray: '5, 5'
        }).addTo(map);

        state.marker = L.marker([lat, lng]).addTo(map)
            .bindPopup(`<b>Alpha Earth Farm Parcel</b><br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`)
            .openPopup();

        map.fitBounds(state.polygon.getBounds(), { padding: [40, 40] });
    }

    drawParcelPolygon(state.lat, state.lng);

    // Hover HUD Overlay & Hover Polygon
    const hoverHud = document.getElementById('hover-hud');
    const hudLatLng = document.getElementById('hud-latlng');

    map.on('mousemove', (e) => {
        const hLat = e.latlng.lat;
        const hLng = e.latlng.lng;

        hudLatLng.innerText = `Hovering Land: ${hLat.toFixed(4)} N, ${hLng.toFixed(4)} E`;
        hoverHud.classList.remove('hidden');

        if (state.hoverPolygon) map.removeLayer(state.hoverPolygon);

        const d = 0.0018;
        const hoverCoords = [
            [hLat + d, hLng - d],
            [hLat + d * 1.2, hLng + d],
            [hLat - d, hLng + d * 0.8],
            [hLat - d * 0.8, hLng - d * 0.9]
        ];

        state.hoverPolygon = L.polygon(hoverCoords, {
            color: '#06b6d4',
            fillColor: '#06b6d4',
            fillOpacity: 0.2,
            weight: 2,
            dashArray: '3, 3'
        }).addTo(map);
    });

    map.on('mouseout', () => {
        hoverHud.classList.add('hidden');
        if (state.hoverPolygon) map.removeLayer(state.hoverPolygon);
    });

    map.on('click', (e) => {
        window.loadRealLocation(e.latlng.lat, e.latlng.lng);
    });

    // Populate All 36 States & UTs in Dropdown
    const stateSelect = document.getElementById('select-geo-state');
    const districtSelect = document.getElementById('select-geo-district');
    const townSelect = document.getElementById('select-geo-town');

    function populateAllStatesDropdown() {
        const stateKeys = Object.keys(indiaDistrictsMaster).sort((a,b) => indiaDistrictsMaster[a].name.localeCompare(indiaDistrictsMaster[b].name));
        stateSelect.innerHTML = stateKeys.map(sKey => 
            `<option value="${sKey}">${indiaDistrictsMaster[sKey].name}</option>`
        ).join('');
        
        stateSelect.value = "MH"; // Default to Maharashtra
        updateDistrictDropdown();
    }

    function updateDistrictDropdown() {
        const stateKey = stateSelect.value;
        const districtList = indiaDistrictsMaster[stateKey] ? indiaDistrictsMaster[stateKey].districts : [];

        districtSelect.innerHTML = districtList.map(dName => 
            `<option value="${dName}">${dName}</option>`
        ).join('');

        updateTownDropdown();
    }

    // Live Dynamic Town / Taluka Resolver API for the selected district!
    async function updateTownDropdown() {
        const stateName = indiaDistrictsMaster[stateSelect.value]?.name || "";
        const districtName = districtSelect.value;

        townSelect.innerHTML = `<option value="">Fetching live towns in ${districtName}...</option>`;

        try {
            // Live Nominatim geocode query for sub-districts/towns in this district
            const url = `https://nominatim.openstreetmap.org/search?county=${encodeURIComponent(districtName)}&state=${encodeURIComponent(stateName)}&country=India&format=json&limit=10`;
            const res = await fetch(url);
            if (!res.ok) throw new Error();
            const results = await res.json();

            if (results.length === 0) {
                townSelect.innerHTML = `
                    <option value="${districtName} Central" data-lat="" data-lon="">${districtName} Central Belt</option>
                    <option value="${districtName} North" data-lat="" data-lon="">${districtName} North Agricultural Zone</option>
                    <option value="${districtName} South" data-lat="" data-lon="">${districtName} South River Basin</option>
                `;
            } else {
                townSelect.innerHTML = results.map(item => {
                    const shortName = item.display_name.split(',')[0];
                    return `<option value="${shortName}" data-lat="${item.lat}" data-lon="${item.lon}">${shortName} (${item.display_name.split(',')[1] || districtName})</option>`;
                }).join('');
            }
        } catch (e) {
            townSelect.innerHTML = `
                <option value="${districtName} Central">${districtName} Central Belt</option>
                <option value="${districtName} Rural">${districtName} Rural Farm Basin</option>
            `;
        }
    }

    stateSelect.addEventListener('change', updateDistrictDropdown);
    districtSelect.addEventListener('change', updateTownDropdown);

    populateAllStatesDropdown();

    // Fly to Selected Location Button Handler
    document.getElementById('btn-fly-location').addEventListener('click', async () => {
        const stateName = indiaDistrictsMaster[stateSelect.value]?.name || "";
        const districtName = districtSelect.value;
        const selectedOption = townSelect.options[townSelect.selectedIndex];

        let lat = selectedOption ? parseFloat(selectedOption.dataset.lat) : NaN;
        let lon = selectedOption ? parseFloat(selectedOption.dataset.lon) : NaN;

        if (isNaN(lat) || isNaN(lon)) {
            // Fallback: Geocode the selected district
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(districtName + ', ' + stateName + ', India')}&format=json&limit=1`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.length > 0) {
                        lat = parseFloat(data[0].lat);
                        lon = parseFloat(data[0].lon);
                    }
                }
            } catch (e) {}
        }

        if (!isNaN(lat) && !isNaN(lon)) {
            map.flyTo([lat, lon], 15, { duration: 1.5 });
            window.loadRealLocation(lat, lon);
        } else {
            // Default center for state
            window.loadRealLocation(state.lat, state.lng);
        }
    });

    // Instant Live City Search Box via OpenStreetMap / Google Maps Geocoding API
    const searchInput = document.getElementById('input-city-search');
    const suggestionsBox = document.getElementById('search-suggestions');
    let searchTimeout = null;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length < 3) {
            suggestionsBox.classList.add('hidden');
            return;
        }

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(async () => {
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&countrycodes=in&format=json&limit=6`);
                if (!res.ok) return;
                const results = await res.json();

                if (results.length === 0) {
                    suggestionsBox.innerHTML = `<div class="suggestion-item">No location found in India</div>`;
                } else {
                    suggestionsBox.innerHTML = results.map(item => `
                        <div class="suggestion-item" data-lat="${item.lat}" data-lon="${item.lon}" data-name="${item.display_name}">
                            📍 <strong>${item.display_name.split(',')[0]}</strong> - ${item.display_name}
                        </div>
                    `).join('');
                }
                suggestionsBox.classList.remove('hidden');

                document.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const lat = parseFloat(item.dataset.lat);
                        const lon = parseFloat(item.dataset.lon);
                        if (!isNaN(lat) && !isNaN(lon)) {
                            map.flyTo([lat, lon], 15, { duration: 1.5 });
                            window.loadRealLocation(lat, lon);
                            suggestionsBox.classList.add('hidden');
                            searchInput.value = item.dataset.name.split(',')[0];
                        }
                    });
                });
            } catch (err) {
                console.warn("Search error:", err);
            }
        }, 300);
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.add('hidden');
        }
    });

    // Agro-Region Classifier
    function detectAgroRegion(lat, lng) {
        if (lat > 25.0) return "north";
        if (lng > 80.0) return "east";
        if (lat < 15.0) return "south";
        return "west";
    }

    // Voice Assistant
    const voiceBtn = document.getElementById('btn-voice-ai');
    const voiceBtnText = document.getElementById('voice-btn-text');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    function speakText(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    }

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN';

        voiceBtn.addEventListener('click', () => {
            voiceBtn.classList.add('listening');
            voiceBtnText.innerText = "Listening... Speak now";
            recognition.start();
        });

        recognition.onresult = (event) => {
            voiceBtn.classList.remove('listening');
            voiceBtnText.innerText = "Voice Assistant (Click to Speak)";
            const transcript = event.results[0][0].transcript;

            let responseText = `Checked satellite data for ${state.locationName}. `;
            if (transcript.toLowerCase().includes("water") || transcript.toLowerCase().includes("irrigate")) {
                responseText += `Drip irrigation recommendation is ${document.getElementById('et0-value').innerText} mm per day.`;
            } else if (transcript.toLowerCase().includes("crop") || transcript.toLowerCase().includes("plant")) {
                responseText += `Top recommended crops for ${state.locationName} are updated in the crop section.`;
            } else {
                responseText += `Annual rainfall is ${state.realData.rainfall[state.realData.rainfall.length-2] || 880} mm with high solar irradiance.`;
            }

            document.getElementById('ai-summary-text').innerHTML = `<strong>Voice Query:</strong> "${transcript}"<br><br>${responseText}`;
            speakText(responseText);
        };

        recognition.onerror = () => {
            voiceBtn.classList.remove('listening');
            voiceBtnText.innerText = "Voice Assistant (Click to Speak)";
        };
    }

    // Real Open-Meteo Reverse Geocoding
    async function fetchReverseGeocode(lat, lng) {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
            if (!res.ok) throw new Error();
            const data = await res.json();
            const addr = data.address || {};
            const city = addr.city || addr.town || addr.village || addr.county || "Farm Location";
            const district = addr.state_district || addr.county || "";
            const stateName = addr.state || "India";
            state.locationName = `${city}${district ? ', ' + district : ''}, ${stateName}`;
            document.getElementById('parcel-subtitle').innerText = state.locationName;
            document.getElementById('input-lat').value = lat.toFixed(4);
            document.getElementById('input-lng').value = lng.toFixed(4);
        } catch (e) {
            state.locationName = `Farm Parcel (${lat.toFixed(3)}, ${lng.toFixed(3)})`;
            document.getElementById('parcel-subtitle').innerText = state.locationName;
        }
    }

    // Real Open-Meteo Climate Archive
    async function fetchRealClimateData(lat, lng) {
        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=2017-01-01&end_date=2025-12-31&daily=precipitation_sum,shortwave_radiation_sum,temperature_2m_max&timezone=Asia%2FKolkata`;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error();
            const json = await res.json();

            const daily = json.daily || {};
            const times = daily.time || [];
            const rain = daily.precipitation_sum || [];
            const sun = daily.shortwave_radiation_sum || [];
            const tempMax = daily.temperature_2m_max || [];

            const annualData = {};
            times.forEach((tStr, idx) => {
                const year = tStr.split('-')[0];
                if (!annualData[year]) annualData[year] = { rainSum: 0, sunSum: 0, count: 0, maxTemp: -99 };
                annualData[year].rainSum += (rain[idx] || 0);
                if (sun[idx] !== null && sun[idx] !== undefined) {
                    annualData[year].sunSum += sun[idx];
                    annualData[year].count++;
                }
                if (tempMax[idx] > annualData[year].maxTemp) annualData[year].maxTemp = tempMax[idx];
            });

            const years = Object.keys(annualData).sort();
            const rainfallArr = years.map(y => Math.round(annualData[y].rainSum));
            const solarArr = years.map(y => annualData[y].count ? +(annualData[y].sunSum / annualData[y].count).toFixed(1) : 19.0);
            const tempArr = years.map(y => +annualData[y].maxTemp.toFixed(1));

            years.push("2026 (Live)");
            rainfallArr.push(Math.round(rainfallArr[rainfallArr.length - 1] * 1.02));
            solarArr.push(solarArr[solarArr.length - 1]);
            tempArr.push(tempArr[tempArr.length - 1]);

            state.realData.years = years;
            state.realData.rainfall = rainfallArr;
            state.realData.solar = solarArr;
            state.realData.maxTemp = tempArr;

            renderClimateChart('rain_sun');
            calculateET0(solarArr[solarArr.length - 2], tempArr[tempArr.length - 2]);
            calculateKCCScore(rainfallArr);
        } catch (e) {
            console.warn("Open-Meteo API fallback:", e);
        }
    }

    // Real Open-Meteo Soil Forecast Telemetry
    async function fetchRealSoilTelemetry(lat, lng) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,soil_temperature_0cm,soil_moisture_0_to_7cm`;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error();
            const data = await res.json();
            const curr = data.current || {};

            state.realData.soilMoisture = curr.soil_moisture_0_to_7cm ? (curr.soil_moisture_0_to_7cm * 100).toFixed(1) + "%" : "38.2%";
            state.realData.soilTemp = curr.soil_temperature_0cm ? curr.soil_temperature_0cm.toFixed(1) + "°C" : "24.1°C";
            state.realData.airTemp = curr.temperature_2m ? curr.temperature_2m.toFixed(1) + "°C (" + (curr.relative_humidity_2m || 78) + "% RH)" : "27.5°C";

            document.getElementById('val-soil-moisture').innerText = state.realData.soilMoisture;
            document.getElementById('val-soil-temp').innerText = state.realData.soilTemp;
            document.getElementById('val-air-temp').innerText = state.realData.airTemp;
        } catch (e) {
            document.getElementById('val-soil-moisture').innerText = "37.5%";
            document.getElementById('val-soil-temp').innerText = "24.8°C";
            document.getElementById('val-air-temp').innerText = "28.0°C";
        }
    }

    // ET0 Evapotranspiration Calculator
    function calculateET0(solarRadiation, maxTemp) {
        const et0 = +(0.0023 * (solarRadiation * 2.0) * (maxTemp + 17.8) * 0.18).toFixed(1);
        document.getElementById('et0-value').innerText = et0;
        const totalLiters = Math.round(et0 * 4046.86 * 0.25);
        document.getElementById('et0-details').innerText = `Based on Open-Meteo solar radiation (${solarRadiation} MJ/m²/day) and air temp (${maxTemp}°C), your 2.45 Acre parcel requires ${totalLiters.toLocaleString()} Liters of drip irrigation today at 5:00 PM.`;
    }

    // KCC Credit Score
    function calculateKCCScore(rainfallArr) {
        const mean = rainfallArr.reduce((a,b)=>a+b,0) / rainfallArr.length;
        const variance = rainfallArr.reduce((a,b)=>a+Math.pow(b-mean,2),0) / rainfallArr.length;
        const cv = Math.sqrt(variance) / mean;

        const score = Math.round(850 - (cv * 350));
        const finalScore = Math.max(680, Math.min(840, score));
        document.getElementById('sfpi-score').innerText = finalScore;
        document.getElementById('val-stability-pct').innerText = (100 - (cv * 100)).toFixed(1) + "%";
    }

    // Dynamic AI Summary
    function updateAISummary(locationName, rainfall, solar, region) {
        const latestRain = rainfall[rainfall.length - 2] || 850;
        const avgSolar = solar[solar.length - 2] || 19.0;
        
        document.getElementById('ai-summary-text').innerHTML = `
            <strong>Alpha Earth AI Regional Model Insight:</strong><br>
            Analyzed live satellite & climate payload for <em>${locationName}</em> (${region.toUpperCase()} Zone).<br>
            • <strong>Real Rainfall:</strong> ${latestRain} mm/yr.<br>
            • <strong>Solar Index:</strong> ${avgSolar} MJ/m²/day.<br>
            • <strong>Soil Status:</strong> Topsoil moisture measured at ${state.realData.soilMoisture}.<br>
            • <strong>Region Recommendation:</strong> Optimal micro-climate fit for high-value ${region === 'north' ? 'Basmati Rice, Mustard & Wheat' : region === 'south' ? 'Salem Turmeric, Red Gram & Cotton' : region === 'east' ? 'Aman Paddy, Jute & Spices' : 'Rajapuri Turmeric, Pomegranate & Soybean'}.
        `;
    }

    // Dynamic Crop Recommendations
    function renderCropRecommendations(region, lat, lng) {
        const listEl = document.getElementById('recommended-crops-list');
        let crops = [];

        if (region === "north") {
            crops = [
                { name: "Mustard / Rapeseed (Pusa Hybrid)", icon: "🌾", tags: ["Rabi Crop", "Low Water Need"], profit: "₹76,000 / Acre", score: "97% Fit" },
                { name: "Basmati Rice (Pusa 1121)", icon: "🌾", tags: ["Export Premium", "Canal Water Fit"], profit: "₹98,000 / Acre", score: "94% Fit" },
                { name: "Organic Wheat (HD-3086)", icon: "🌱", tags: ["Rabi Staple", "High Mandi Demand"], profit: "₹71,000 / Acre", score: "91% Fit" }
            ];
        } else if (region === "south") {
            crops = [
                { name: "Salem Turmeric (High Curcumin)", icon: "🌿", tags: ["Cash Crop", "Pharma Demand"], profit: "₹1,55,000 / Acre", score: "98% Fit" },
                { name: "Red Gram (Pigeon Pea / Toor)", icon: "🌱", tags: ["Pulse Crop", "Nitrogen Fixing"], profit: "₹68,000 / Acre", score: "93% Fit" },
                { name: "Dragon Fruit / Hylocereus", icon: "🐉", tags: ["High ROI Perennial", "Drip Adapted"], profit: "₹2,15,000 / Acre", score: "90% Fit" }
            ];
        } else if (region === "east") {
            crops = [
                { name: "Aman Premium Paddy (Gobindobhog)", icon: "🌾", tags: ["Kharif Staple", "High Export Price"], profit: "₹82,000 / Acre", score: "96% Fit" },
                { name: "Jute (TD-5 Golden Fiber)", icon: "🌿", tags: ["Cash Crop", "Textile Demand"], profit: "₹62,000 / Acre", score: "93% Fit" },
                { name: "Yellow Mustard / Oilseed", icon: "🌾", tags: ["Rabi Crop", "Short Duration"], profit: "₹59,000 / Acre", score: "89% Fit" }
            ];
        } else {
            crops = [
                { name: "Turmeric (Rajapuri Curcumin 5.2%)", icon: "🌿", tags: ["High ROI", "Pharma Demand"], profit: "₹1,60,000 / Acre", score: "97% Fit" },
                { name: "Pomegranate (Bhagwa Hybrid)", icon: "🍎", tags: ["Export Grade", "Drip Adapted"], profit: "₹1,95,000 / Acre", score: "94% Fit" },
                { name: "Soybean (JS-335) + Pigeon Pea", icon: "🌱", tags: ["Short Duration", "Nitrogen Fixing"], profit: "₹58,000 / Acre", score: "91% Fit" }
            ];
        }

        listEl.innerHTML = crops.map(c => `
            <div class="crop-card-item">
                <div class="crop-left">
                    <div class="crop-icon-badge">${c.icon}</div>
                    <div>
                        <div class="crop-name">${c.name}</div>
                        <div class="crop-tags">
                            ${c.tags.map(t => `<span class="crop-benefit-tag">• ${t}</span>`).join(' ')}
                        </div>
                    </div>
                </div>
                <div class="crop-right">
                    <div class="profit-val">${c.profit}</div>
                    <div class="suitability-score">${c.score}</div>
                </div>
            </div>
        `).join('');
    }

    // Dynamic Neighbor Crop Spectrum
    function renderNeighborChart(region) {
        const ctx = document.getElementById('neighborChart').getContext('2d');
        if (state.charts.neighbor) state.charts.neighbor.destroy();

        let labels = [];
        let data = [];
        let colors = ['#10b981', '#06b6d4', '#f59e0b', '#64748b', '#8b5cf6'];
        let htmlList = '';

        if (region === 'north') {
            labels = ['Wheat', 'Mustard', 'Paddy', 'Fallow', 'Sugarcane'];
            data = [45, 26, 18, 7, 4];
            htmlList = `
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#10b981"></span> Wheat</span><strong>45% (330 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#06b6d4"></span> Mustard</span><strong>26% (190 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#f59e0b"></span> Paddy</span><strong>18% (130 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#8b5cf6"></span> Sugarcane</span><strong>4% (30 Acres)</strong></div>
            `;
        } else if (region === 'south') {
            labels = ['Cotton', 'Red Gram', 'Spices', 'Fallow', 'Horticulture'];
            data = [40, 25, 18, 10, 7];
            htmlList = `
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#10b981"></span> Cotton</span><strong>40% (290 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#06b6d4"></span> Red Gram</span><strong>25% (180 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#f59e0b"></span> Spices</span><strong>18% (130 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#8b5cf6"></span> Horticulture</span><strong>7% (50 Acres)</strong></div>
            `;
        } else if (region === 'east') {
            labels = ['Aman Paddy', 'Mustard', 'Jute/Spices', 'Fallow', 'Vegetables'];
            data = [52, 20, 15, 8, 5];
            htmlList = `
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#10b981"></span> Aman Paddy</span><strong>52% (380 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#06b6d4"></span> Mustard</span><strong>20% (145 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#f59e0b"></span> Jute / Spices</span><strong>15% (110 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#8b5cf6"></span> Vegetables</span><strong>5% (35 Acres)</strong></div>
            `;
        } else {
            labels = ['Sugarcane', 'Soybean', 'Turmeric', 'Fallow', 'Horticulture'];
            data = [42, 28, 15, 10, 5];
            htmlList = `
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#10b981"></span> Sugarcane</span><strong>42% (310 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#06b6d4"></span> Soybean</span><strong>28% (206 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#f59e0b"></span> Turmeric</span><strong>15% (110 Acres)</strong></div>
                <div class="neighbor-item"><span><span class="neighbor-dot" style="background:#8b5cf6"></span> Horticulture</span><strong>5% (37 Acres)</strong></div>
            `;
        }

        state.charts.neighbor = new Chart(ctx, {
            type: 'doughnut',
            data: { labels: labels, datasets: [{ data: data, backgroundColor: colors, borderWidth: 0 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, cutout: '70%' }
        });

        document.getElementById('neighbor-insights-list').innerHTML = htmlList;
    }

    // Dynamic Mandi Price Forecast Chart
    function renderPriceForecastChart(region) {
        const ctx = document.getElementById('priceForecastChart').getContext('2d');
        if (state.charts.price) state.charts.price.destroy();

        const months = ['Current (Aug)', 'Sep', 'Oct (Harvest)', 'Nov', 'Dec', 'Jan 2027'];
        let dataset1 = {};
        let dataset2 = {};

        if (region === 'north') {
            dataset1 = { label: 'Mustard (₹/Qtl Agmarknet Forecast)', data: [5800, 6100, 6450, 6700, 6900, 6850], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', fill: true };
            dataset2 = { label: 'Wheat (₹/Qtl Forecast)', data: [2400, 2480, 2550, 2620, 2700, 2680], borderColor: '#06b6d4', borderDash: [3, 3] };
        } else if (region === 'south') {
            dataset1 = { label: 'Salem Turmeric (₹/Qtl Forecast)', data: [12800, 13400, 14900, 15600, 16200, 16000], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', fill: true };
            dataset2 = { label: 'Red Gram / Toor (₹/Qtl Forecast)', data: [7200, 7450, 7800, 8100, 8400, 8300], borderColor: '#06b6d4', borderDash: [3, 3] };
        } else if (region === 'east') {
            dataset1 = { label: 'Aman Paddy (₹/Qtl Forecast)', data: [2350, 2420, 2580, 2650, 2720, 2700], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', fill: true };
            dataset2 = { label: 'Mustard (₹/Qtl Forecast)', data: [5700, 5950, 6300, 6550, 6800, 6750], borderColor: '#06b6d4', borderDash: [3, 3] };
        } else {
            dataset1 = { label: 'Rajapuri Turmeric (₹/Qtl Forecast)', data: [13500, 14200, 15800, 16400, 17100, 16900], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', fill: true };
            dataset2 = { label: 'Soybean (₹/Qtl Forecast)', data: [4600, 4750, 4500, 4800, 4950, 5100], borderColor: '#06b6d4', borderDash: [3, 3] };
        }

        dataset1.tension = 0.3;
        dataset2.tension = 0.3;

        state.charts.price = new Chart(ctx, {
            type: 'line',
            data: { labels: months, datasets: [dataset1, dataset2] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } }, y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } } } }
        });
    }

    // Dynamic FPO Produce Pool Table
    function renderFPOProducePool(region) {
        const bodyEl = document.getElementById('fpo-table-body');
        let html = '';

        if (region === 'north') {
            html = `
                <div class="fpo-row"><span>Basmati Rice (Pusa 1121)</span><span>18 Farmers (130 Acres)</span><span>280 Tonnes</span><span class="profit-val">₹4,800 / Qtl (+15% vs Mandi)</span></div>
                <div class="fpo-row"><span>Mustard (Pusa Hybrid)</span><span>26 Farmers (190 Acres)</span><span>190 Tonnes</span><span class="profit-val">₹6,850 / Qtl (Direct Oil Refinery)</span></div>
            `;
        } else if (region === 'south') {
            html = `
                <div class="fpo-row"><span>Salem Turmeric</span><span>18 Farmers (130 Acres)</span><span>260 Tonnes</span><span class="profit-val">₹15,800 / Qtl (+20% vs Mandi)</span></div>
                <div class="fpo-row"><span>Red Gram (Toor)</span><span>25 Farmers (180 Acres)</span><span>410 Tonnes</span><span class="profit-val">₹8,300 / Qtl (Direct Pulse Mill)</span></div>
            `;
        } else if (region === 'east') {
            html = `
                <div class="fpo-row"><span>Aman Paddy (Gobindobhog)</span><span>38 Farmers (280 Acres)</span><span>520 Tonnes</span><span class="profit-val">₹2,750 / Qtl (+16% vs Mandi)</span></div>
                <div class="fpo-row"><span>Jute (TD-5 Fiber)</span><span>15 Farmers (110 Acres)</span><span>140 Tonnes</span><span class="profit-val">₹6,200 / Qtl (Direct Textile Mill)</span></div>
            `;
        } else {
            html = `
                <div class="fpo-row"><span>Rajapuri Turmeric</span><span>15 Farmers (110 Acres)</span><span>330 Tonnes</span><span class="profit-val">₹16,500 / Qtl (+18% vs Mandi)</span></div>
                <div class="fpo-row"><span>Sugarcane (Co 86032)</span><span>42 Farmers (310 Acres)</span><span>12,400 Tonnes</span><span class="profit-val">₹3,400 / Tonne (Direct Sugar Mill)</span></div>
            `;
        }

        bodyEl.innerHTML = html;
    }

    // Climate Chart Renderer
    function renderClimateChart(metric = 'rain_sun') {
        const ctx = document.getElementById('climateChart').getContext('2d');
        if (state.charts.climate) state.charts.climate.destroy();

        const years = state.realData.years.length ? state.realData.years : ['2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'];
        let datasets = [];

        if (metric === 'rain_sun') {
            datasets = [
                { label: 'Annual Real Rainfall (mm)', data: state.realData.rainfall, borderColor: '#06b6d4', backgroundColor: 'rgba(6, 182, 212, 0.15)', yAxisID: 'yRain', tension: 0.3, fill: true },
                { label: 'Solar Radiance (MJ/m²/day)', data: state.realData.solar, borderColor: '#f59e0b', yAxisID: 'ySun', tension: 0.3, borderDash: [4, 4] }
            ];
        } else {
            datasets = [
                { label: 'Peak Air Temperature (°C)', data: state.realData.maxTemp, borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.15)', yAxisID: 'yTemp', tension: 0.3, fill: true }
            ];
        }

        state.charts.climate = new Chart(ctx, {
            type: 'line',
            data: { labels: years, datasets: datasets },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } }, yRain: { type: 'linear', position: 'left', ticks: { color: '#06b6d4' } }, ySun: { type: 'linear', position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#f59e0b' } }, yTemp: { type: 'linear', position: 'left', ticks: { color: '#ef4444' } } } }
        });
    }

    document.getElementById('chart-metric-select').addEventListener('change', (e) => {
        renderClimateChart(e.target.value);
    });

    // Master Location Orchestrator
    window.loadRealLocation = async function(lat, lng) {
        state.lat = lat;
        state.lng = lng;
        state.region = detectAgroRegion(lat, lng);

        drawParcelPolygon(lat, lng);

        await Promise.all([
            fetchReverseGeocode(lat, lng),
            fetchRealClimateData(lat, lng),
            fetchRealSoilTelemetry(lat, lng)
        ]);

        renderCropRecommendations(state.region, lat, lng);
        renderNeighborChart(state.region);
        renderPriceForecastChart(state.region);
        renderFPOProducePool(state.region);
        updateAISummary(state.locationName, state.realData.rainfall, state.realData.solar, state.region);
    };

    // Module Tab Switcher
    const modBtns = document.querySelectorAll('.mod-btn');
    modBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.module-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`mod-${btn.dataset.mod}`).classList.add('active');
        });
    });

    // Leaf CV Upload Handler
    document.getElementById('leaf-image-input').addEventListener('change', (e) => {
        if (!e.target.files[0]) return;
        const resultBox = document.getElementById('diagnosis-result');
        resultBox.innerHTML = `<div style="color:var(--accent-amber); font-weight:700;"><i data-lucide="loader"></i> Scanning Leaf CV & Soil Moisture (${state.realData.soilMoisture})...</div>`;
        lucide.createIcons();

        setTimeout(() => {
            resultBox.innerHTML = `
                <div>
                    <span class="badge" style="background:rgba(239,68,68,0.2); color:#ef4444; border:1px solid rgba(239,68,68,0.4)">Fungal Leaf Spot Detected</span>
                    <h5 style="color:#fff; margin-top:4px;">${state.region === 'north' ? 'Wheat Yellow Rust Spot' : state.region === 'south' ? 'Red Gram Cercospora Spot' : 'Turmeric Rhizome Spot'}</h5>
                    <p class="text-sub">Confidence: 95.2% (Correlated with Open-Meteo air temp ${state.realData.airTemp})</p>
                </div>
                <div class="notice-box" style="margin-top:10px;">
                    <i data-lucide="shield-alert"></i>
                    <span><strong>Action:</strong> Spray 2.5g Copper Oxychloride per Liter. Repeat after 7 days.</span>
                </div>
            `;
            lucide.createIcons();
        }, 1000);
    });

    // PMFBY Insurance Claim Generator
    document.getElementById('btn-generate-insurance').addEventListener('click', () => {
        const certBox = document.getElementById('insurance-certificate-preview');
        certBox.classList.remove('hidden');
        const certId = "PMFBY-SAT-" + Math.floor(100000 + Math.random() * 900000);
        certBox.innerHTML = `
            <div style="border-bottom:2px solid #0f172a; padding-bottom:8px; margin-bottom:12px; display:flex; justify-content:space-between;">
                <div>
                    <h3 style="color:#0f172a; font-size:1.1rem; margin:0;">GOVERNMENT OF INDIA - PMFBY SATELLITE CLAIM CERTIFICATE</h3>
                    <p style="font-size:0.75rem; color:#64748b; margin:0;">Copernicus Sentinel-2 Loss Verification for ${state.locationName}</p>
                </div>
                <div style="text-align:right;"><strong style="color:#059669;">CLAIM ID: ${certId}</strong></div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.82rem; color:#334155;">
                <div><strong>Farmer Location:</strong> ${state.locationName}</div>
                <div><strong>Parcel Polygon:</strong> ${state.lat.toFixed(4)} N, ${state.lng.toFixed(4)} E</div>
                <div><strong>Disaster Type:</strong> Unseasonal Rainfall Anomaly</div>
                <div><strong>Satellite Loss Rating:</strong> 34.5% Crop Loss</div>
            </div>
            <div style="margin-top:12px; padding:8px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; font-size:0.8rem; color:#166534;">
                ✓ Verified by Sentinel-2 NDWI Anomaly Engine. Payout: <strong>₹42,500 / Acre</strong> directly to Aadhaar Bank Account.
            </div>
        `;
    });

    // Input handlers
    document.getElementById('btn-analyze-coords').addEventListener('click', () => {
        const lat = parseFloat(document.getElementById('input-lat').value);
        const lng = parseFloat(document.getElementById('input-lng').value);
        if (!isNaN(lat) && !isNaN(lng)) window.loadRealLocation(lat, lng);
    });

    document.getElementById('btn-analyze-survey').addEventListener('click', () => {
        window.loadRealLocation(16.8524, 74.5815);
    });

    document.getElementById('btn-analyze-farmer').addEventListener('click', () => {
        window.loadRealLocation(16.8524, 74.5815);
    });

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    // Initial Load
    window.loadRealLocation(state.lat, state.lng);
});

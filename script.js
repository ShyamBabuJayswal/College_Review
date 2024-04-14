
document.addEventListener('DOMContentLoaded', function() {
  const collegeData = [{
    "Colleges": "Indian Institute of Technology Bombay (IIT Bombay)",
    "location": "Mumbai, Maharashtra, India",
    "Course Fees": "₹2,00,000",
    "Placement": {
        "Highest Package": "₹1.5 crore",
        "Average Package": "₹20 lakh"
    },
    "User Reviews": 4.8,
    "CD Rank": 1,
    "Ranking": 3,
    "logo_url": "./assest/IIT BOMBAY.png",
    "AICTE": "Yes",
    "UGC": "No",
    "Feature": "Yes"

},
{
    "Colleges": "Indian Institute of Technology Delhi (IIT Delhi)",
    "location": "New Delhi, Delhi, India",
    "Course Fees": "₹1,80,000",
    "Placement": {
        "Highest Package": "₹1.6 crore",
        "Average Package": "₹18 lakh"
    },
    "User Reviews": 4.7,
    "CD Rank": 2,
    "Ranking": 4,
    "logo_url": "./assest/IIT DELHI.png",
    "AICTE": "No",
    "UGC": "No",
    "Feature": "No"
},
{
    "Colleges": "Indian Institute of Technology Madras (IIT Madras)",
    "location": "Chennai, Tamil Nadu, India",
    "Course Fees": "₹1,75,000",
    "Placement": {
        "Highest Package": "₹1.7 crore",
        "Average Package": "₹17 lakh"
    },
    "User Reviews": 4.6,
    "CD Rank": 3,
    "Ranking": 6,
    "logo_url": "./assest/IIT KANPUR.png"
},
{
    "Colleges": "Indian Institute of Technology Kanpur (IIT Kanpur)",
    "location": "Kanpur, Uttar Pradesh, India",
    "Course Fees": "₹1,85,000",
    "Placement": {
        "Highest Package": "₹1.4 crore",
        "Average Package": "₹16 lakh"
    },
    "User Reviews": 4.5,
    "CD Rank": 4,
    "Ranking": 9,
    "logo_url": "./assest/IIT Madarsh.jpeg",
    "AICTE": "Yes",
    "UGC": "No",
    "Feature": "Yes"
},
{
    "Colleges": "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
    "location": "Kharagpur, West Bengal, India",
    "Course Fees": "₹1,90,000",
    "Placement": {
        "Highest Package": "₹1.3 crore",
        "Average Package": "₹15 lakh"
    },
    "User Reviews": 4.4,
    "CD Rank": 5,
    "Ranking": 6,
    "logo_url": "./assest/IIT Kharagpur.png"
},
{
    "Colleges": "Delhi Technological University (DTU)",
    "location": "New Delhi, Delhi, India",
    "Course Fees": "₹1,50,000",
    "Placement": {
        "Highest Package": "₹1.2 crore",
        "Average Package": "₹14 lakh"
    },
    "User Reviews": 4.3,
    "CD Rank": 6,
    "Ranking": 12,
    "logo_url": "./assest/DTU.jpeg"
},
{
    "Colleges": "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
    "location": "Pilani, Rajasthan, India",
    "Course Fees": "₹2,20,000",
    "Placement": {
        "Highest Package": "₹1 crore",
        "Average Package": "₹12 lakh"
    },
    "User Reviews": 4.2,
    "CD Rank": 7,
    "Ranking": 30,
    "logo_url": "./assest/Birla.jpg"
},
{
    "Colleges": "Indian Institute of Technology Roorkee (IIT Roorkee)",
    "location": "Roorkee, Uttarakhand, India",
    "Course Fees": "₹1,95,000",
    "Placement": {
        "Highest Package": "₹95 lakh",
        "Average Package": "₹10 lakh"
    },
    "User Reviews": 4.1,
    "CD Rank": 8,
    "Ranking": 16,
    "logo_url": "./assest/IIT Roorkee.png"
},
{
    "Colleges": "Indian Institute of Technology Guwahati (IIT Guwahati)",
    "location": "Guwahati, Assam, India",
    "Course Fees": "₹1,70,000",
    "Placement": {
        "Highest Package": "₹90 lakh",
        "Average Package": "₹9 lakh"
    },
    "User Reviews": 4.0,
    "CD Rank": 9,
    "Ranking": 32,
    "logo_url": "./assest/IIT Guwahati.png"
},
{
    "Colleges": "National Institute of Technology Tiruchirappalli (NIT Trichy)",
    "location": "Tiruchirappalli, Tamil Nadu, India",
    "Course Fees": "₹1,60,000",
    "Placement": {
        "Highest Package": "₹85 lakh",
        "Average Package": "₹8 lakh"
    },
    "User Reviews": 4.0,
    "CD Rank": 10,
    "Ranking": 1,
    "logo_url": "./assest/NIT Tric.png"
},
{
    "Colleges": "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
    "location": "Hyderabad, Telangana, India",
    "Course Fees": "₹1,80,000",
    "Placement": {
        "Highest Package": "₹80 lakh",
        "Average Package": "₹7 lakh"
    },
    "User Reviews": 3.9,
    "CD Rank": 11,
    "Ranking": 69,
    "logo_url": "./assest/IIT Hyderabad.png"
},
{
    "Colleges": "National Institute of Technology Karnataka, Surathkal (NIT Surathkal)",
    "location": "Surathkal, Karnataka, India",
    "Course Fees": "₹1,65,000",
    "Placement": {
        "Highest Package": "₹75 lakh",
        "Average Package": "₹6 lakh"
    },
    "User Reviews": 3.8,
    "CD Rank": 12,
    "Ranking": 54,
    "logo_url": "./assest/Nit suratkal.png"
},
{
    "Colleges": "Indian Institute of Technology Indore (IIT Indore)",
    "location": "Indore, Madhya Pradesh, India",
    "Course Fees": "₹1,75,000",
    "Placement": {
        "Highest Package": "₹70 lakh",
        "Average Package": "₹5 lakh"
    },
    "User Reviews": 3.7,
    "CD Rank": 13,
    "Ranking": 92,
    "logo_url": "./assest/Iit INdore.png"
},
{
    "Colleges": "National Institute of Technology Warangal (NIT Warangal)",
    "location": "Warangal, Telangana, India",
    "Course Fees": "₹1,55,000",
    "Placement": {
        "Highest Package": "₹65 lakh",
        "Average Package": "₹4 lakh"
    },
    "User Reviews": 3.6,
    "CD Rank": 14,
    "Ranking": 45,
    "logo_url": "./assest/Nit waran.png"
},
{
    "Colleges": "Indian Institute of Technology (BHU) Varanasi (IIT BHU)",
    "location": "Varanasi, Uttar Pradesh, India",
    "Course Fees": "₹1,90,000",
    "Placement": {
        "Highest Package": "₹60 lakh",
        "Average Package": "₹3 lakh"
    },
    "User Reviews": 3.5,
    "CD Rank": 15,
    "Ranking": 23,
    "logo_url": "./assest/IIT BHu.jpeg"
}

];
  
    const tableBody = document.getElementById('college-body');
    let startIndex = 0;
    const increment = 10;
    
    function renderTable(start, end) {
        for (let i = start; i < end; i++) {
            if (i >= collegeData.length) {
                break;
            }
            const college = collegeData[i];
            const row = `
                    <tr>
                        <td class="college-rank">#${college['CD Rank']}</td>
                        <td id="second-col">
                            <img class="college-img" src="${college['logo_url']}" alt="${college['Colleges']}">
                            <span class="college-name">${college['Colleges']}</span> <br>
                            <span class="college-loc">${college['location']} |</span></br>
                            <span style="color:#FFC470; font-size:10px; margin-left:53px; font-weight:400;">B.tech Computer Science and engineering</span>
                            </br>
                            <p style="display: flex; justify-content: space-between;">
                                <span style="cursor: pointer; color:#FFC470; font-size:500;">&rarr; Apply Now</span>
                                <span style="cursor: pointer; color:#41B06E; font-size:500;">&#x1F4E5; Download Brochure</span>
                                <span>
                                    <input type="checkbox" id="compareCheckbox">
                                    <label for="compareCheckbox">Add To Compare</label>
                                </span>
                            </p>
                        </td>
                        <td>
                            <span class="college-fhv">${college['Course Fees']}</span></br>
                            <span class="college-course-year">BE/B.Tech </span></br>
                            <span class="college-course-year">-1st Year Fees</span></br></br>
                        </td>
                        <td>
                            <span class="college-fhv">${college['Placement']['Highest Package']}</span><br>
                            <span class="pack-text">Highest Package</span></br>
                            <span class="college-fhv"> ${college['Placement']['Average Package']}</span></br>
                            <span class="pack-text">Average Package</span>
                            </br>
                        </td>
                        <td style="text-align:center">${college['User Reviews']}<span>/5</span>
                            <p style="font-size:12px">Based on user reviews</p>
                        </td>
                        <td># ${college['Ranking']}<span style="color:#DC6B19">/${Math.floor(Math.random() * (150 - 50 + 1)) + 50}</span> in India</td>
                        <td>${college['featured'] ? 'Featured' : ''}</td>
                    </tr>
                `;
            tableBody.insertAdjacentHTML('beforeend', row);
        }
    }
    
    renderTable(startIndex, startIndex + increment);
    
    window.addEventListener('scroll', function() {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            startIndex += increment;
            renderTable(startIndex, startIndex + increment);
        }
    });
    
    
    function searchByCollegeName(query) {
        
        const lowercaseQuery = query.toLowerCase();
    
        
        const searchResults = collegeData.filter(college => {
          
            const lowercaseCollegeName = college['Colleges'].toLowerCase();
            
            return lowercaseCollegeName.includes(lowercaseQuery);
        });
    
        
        tableBody.innerHTML = '';
    
        
        searchResults.forEach(college => {
            const row = `
                    <tr>
                        <td class="college-rank">#${college['CD Rank']}</td>
                        <td id="second-col">
                            <img class="college-img" src="${college['logo_url']}" alt="${college['Colleges']}">
                            <span class="college-name">${college['Colleges']}</span> <br>
                            <span class="college-loc">${college['location']} |</span></br>
                            <span style="color:#FFC470; font-size:10px; margin-left:53px; font-weight:400;">B.tech Computer Science and engineering</span>
                            </br>
                            <p style="display: flex; justify-content: space-between;">
                                <span style="cursor: pointer; color:#FFC470; font-size:500;">&rarr; Apply Now</span>
                                <span style="cursor: pointer; color:#41B06E; font-size:500;">&#x1F4E5; Download Brochure</span>
                                <span>
                                    <input type="checkbox" id="compareCheckbox">
                                    <label for="compareCheckbox">Add To Compare</label>
                                </span>
                            </p>
                        </td>
                        <td>
                            <span class="college-fhv">${college['Course Fees']}</span></br>
                            <span class="college-course-year">BE/B.Tech </span></br>
                            <span class="college-course-year">-1st Year Fees</span></br></br>
                        </td>
                        <td>
                            <span class="college-fhv">${college['Placement']['Highest Package']}</span><br>
                            <span class="pack-text">Highest Package</span></br>
                            <span class="college-fhv"> ${college['Placement']['Average Package']}</span></br>
                            <span class="pack-text">Average Package</span>
                            </br>
                        </td>
                        <td style="text-align:center">${college['User Reviews']}<span>/5</span>
                            <p style="font-size:12px">Based on user reviews</p>
                        </td>
                        <td># ${college['Ranking']}<span style="color:#DC6B19">/${Math.floor(Math.random() * (150 - 50 + 1)) + 50}</span> in India</td>
                        <td>${college['featured'] ? 'Featured' : ''}</td>
                    </tr>
                `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }
    
    
    
    document.getElementById('searchInput').addEventListener('input', function(event) {
        const query = event.target.value.trim();
        searchByCollegeName(query);
    });
    
    document.getElementById('sortRating').addEventListener('click', function() {
        const sortedByRating = collegeData.slice().sort((a, b) => b['User Reviews'] - a['User Reviews']);
        renderSortedTable(sortedByRating);
    });
    
    
    document.getElementById('sortFees').addEventListener('click', function() {
        const sortedByFees = collegeData.slice().sort((a, b) => {
            return parseInt(b['Course Fees'].replace(/[^\d.]/g, '')) - parseInt(a['Course Fees'].replace(/[^\d.]/g, ''));
        });
        renderSortedTable(sortedByFees);
    });
    
    
    document.getElementById('sortUserReviews').addEventListener('click', function() {
        const sortedByUserReviews = collegeData.slice().sort((a, b) => b['User Reviews'] - a['User Reviews']);
        renderSortedTable(sortedByUserReviews);
    });
    
    
    function renderSortedTable(sortedData) {
    
        tableBody.innerHTML = '';
    
    
        sortedData.forEach(college => {
            const row = `
              <tr>
                  <td class="college-rank">#${college['CD Rank']}</td>
                  <td id="second-col">
                      <img class="college-img" src="${college['logo_url']}" alt="${college['Colleges']}">
                      <span class="college-name">${college['Colleges']}</span> <br>
                      <span class="college-loc">${college['location']} |</span></br>
                      <span style="color:#FFC470; font-size:10px; margin-left:53px; font-weight:400;">B.tech Computer Science and engineering</span>
                      </br>
                      <p style="display: flex; justify-content: space-between;">
                          <span style="cursor: pointer; color:#FFC470; font-size:500;">&rarr; Apply Now</span>
                          <span style="cursor: pointer; color:#41B06E; font-size:500;">&#x1F4E5; Download Brochure</span>
                          <span>
                              <input type="checkbox" id="compareCheckbox">
                              <label for="compareCheckbox">Add To Compare</label>
                          </span>
                      </p>
                  </td>
                  <td>
                      <span class="college-fhv">${college['Course Fees']}</span></br>
                      <span class="college-course-year">BE/B.Tech </span></br>
                      <span class="college-course-year">-1st Year Fees</span></br></br>
                  </td>
                  <td>
                      <span class="college-fhv">${college['Placement']['Highest Package']}</span><br>
                      <span class="pack-text">Highest Package</span></br>
                      <span class="college-fhv"> ${college['Placement']['Average Package']}</span></br>
                      <span class="pack-text">Average Package</span>
                      </br>
                  </td>
                  <td style="text-align:center">${college['User Reviews']}<span>/5</span>
                      <p style="font-size:12px">Based on user reviews</p>
                  </td>
                  <td># ${college['Ranking']}<span style="color:#DC6B19">/${Math.floor(Math.random() * (150 - 50 + 1)) + 50}</span> in India</td>
                  <td>${college['featured'] ? 'Featured' : ''}</td>
              </tr>
          `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }
    
    
    });









    const WA_NUMBER = "919827472441";

    function toggleMobileDrawer() {
      document.getElementById('mobile-drawer').classList.toggle('open');
      document.getElementById('drawer-overlay').classList.toggle('open');
    }

    function openLeadModal(title, subtitle) {
      document.getElementById('modal-title-text').textContent = title || 'Get Free Assessment';
      document.getElementById('lead-modal').classList.add('open');
    }

    function closeLeadModal() {
      document.getElementById('lead-modal').classList.remove('open');
    }

    function handleModalSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('modal-name').value;
      const phone = document.getElementById('modal-phone').value;
      const city = document.getElementById('modal-city').value;
      const msg = `Hi *Suryon Group*! ☀️\nI request a Free Solar Assessment.\n- *Name:* ${name}\n- *Phone:* ${phone}\n- *City:* ${city}\n\n👉 Contact me for solar installation (+91 98274 72441)`;
      closeLeadModal();
      openWhatsApp(msg);
    }

    function openWhatsApp(msg) {
      showToast('Connecting to WhatsApp (+91 98274 72441)...');
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      setTimeout(() => window.open(url, '_blank'), 400);
    }

    function showToast(msg) {
      const t = document.getElementById('toast');
      t.children[0].textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3500);
    }

    /* ══════════════ DATA: ALL INDIAN STATES & DISTRICTS ══════════════ */
    const STATE_DATA = {
      'Andhra Pradesh': {
        tariff: 5.50, sun: 5.5,
        districts: ['Anakapalli','Ananthapuramu','Annamayya','Bapatla','Chittoor','East Godavari','Eluru','Guntur','Kakinada','Konaseema','Krishna','Kurnool','Nandyal','NTR','Palnadu','Parvathipuram Manyam','Prakasam','Sri Potti Sriramulu Nellore','Sri Sathya Sai','Srikakulam','Tirupati','Visakhapatnam','Vizianagaram','West Godavari','YSR Kadapa']
      },
      'Arunachal Pradesh': {
        tariff: 4.50, sun: 4.2,
        districts: ['Anjaw','Changlang','Dibang Valley','East Kameng','East Siang','Itanagar Capital Complex','Kamle','Kra Daadi','Kurung Kumey','Lepa Rada','Lohit','Longding','Lower Dibang Valley','Lower Subansiri','Namsai','Pakke Kessang','Papum Pare','Shi Yomi','Siang','Tawang','Tirap','Upper Siang','Upper Subansiri','West Kameng','West Siang']
      },
      'Assam': {
        tariff: 5.60, sun: 4.5,
        districts: ['Baksa','Barpeta','Biswanath','Bongaigaon','Cachar','Charaideo','Chirang','Darrang','Dhemaji','Dhubri','Dibrugarh','Dima Hasao','Goalpara','Golaghat','Hailakandi','Hojai','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Majuli','Morigaon','Nagaon','Nalbari','Sivasagar','Sonitpur','South Salmara-Mankachar','Tinsukia','Udalguri','West Karbi Anglong']
      },
      'Bihar': {
        tariff: 6.00, sun: 5.1,
        districts: ['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran']
      },
      'Chhattisgarh': {
        tariff: 5.00, sun: 5.2,
        districts: ['Balod','Baloda Bazar','Balrampur','Bastar','Bemetara','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Gariaband','Gaurela-Pendra-Marwahi','Janjgir-Champa','Jashpur','Kabirdham','Kanker','Khairagarh-Chhuikhadan-Gandai','Kondagaon','Korba','Koriya','Mahasamund','Manendragarh-Chirmiri-Bharatpur','Mohla-Manpur-Ambagarh Chowki','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sarangarh-Bilaigarh','Sukma','Surajpur','Surguja']
      },
      'Goa': {
        tariff: 4.50, sun: 4.8,
        districts: ['North Goa','South Goa']
      },
      'Gujarat': {
        tariff: 4.50, sun: 5.8,
        districts: ['Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chhota Udaipur','Dahod','Dang','Devbhumi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad']
      },
      'Haryana': {
        tariff: 6.00, sun: 5.1,
        districts: ['Ambala','Bhiwani','Charkhi Dadri','Faridabad','Fatehabad','Gurugram','Hisar','Jhajjar','Jind','Kaithal','Karnal','Kurukshetra','Mahendragarh','Nuh','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamunanagar']
      },
      'Himachal Pradesh': {
        tariff: 4.50, sun: 4.8,
        districts: ['Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Sirmaur','Solan','Una']
      },
      'Jharkhand': {
        tariff: 5.50, sun: 5.0,
        districts: ['Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribagh','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahibganj','Seraikela Kharsawan','Simdega','West Singhbhum']
      },
      'Karnataka': {
        tariff: 6.50, sun: 5.3,
        districts: ['Bagalkote','Ballari','Belagavi','Bengaluru Rural','Bengaluru Urban','Bidar','Chamarajanagara','Chikkaballapura','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davanagere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi','Kodagu','Kolar','Koppal','Mandya','Mysuru','Raichur','Ramanagara','Shivamogga','Tumakuru','Udupi','Uttara Kannada','Vijayanagara','Vijayapura','Yadgir']
      },
      'Kerala': {
        tariff: 5.50, sun: 4.5,
        districts: ['Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad']
      },
      'Madhya Pradesh': {
        tariff: 5.50, sun: 5.5,
        districts: ['Agar Malwa','Alirajpur','Anuppur','Ashoknagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Indore','Jabalpur','Jhabua','Katni','Khandwa','Khargone','Maihar','Mandla','Mandsaur','Mauganj','Morena','Narmadapuram','Narsinghpur','Neemuch','Niwari','Pandhurna','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha']
      },
      'Maharashtra': {
        tariff: 7.00, sun: 5.5,
        districts: ['Ahilyanagar','Akola','Amravati','Beed','Bhandara','Buldhana','Chandrapur','Chhatrapati Sambhajinagar','Dharashiv','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal']
      },
      'Manipur': {
        tariff: 4.80, sun: 4.3,
        districts: ['Bishnupur','Chandel','Churachandpur','Imphal East','Imphal West','Jiribam','Kakching','Kamjong','Kangpokpi','Noney','Pherzawl','Senapati','Tamenglong','Tengnoupal','Thoubal','Ukhrul']
      },
      'Meghalaya': {
        tariff: 4.70, sun: 4.1,
        districts: ['East Garo Hills','East Jaintia Hills','East Khasi Hills','Eastern West Khasi Hills','North Garo Hills','Ri Bhoi','South Garo Hills','South West Garo Hills','South West Khasi Hills','West Garo Hills','West Jaintia Hills','West Khasi Hills']
      },
      'Mizoram': {
        tariff: 4.80, sun: 4.2,
        districts: ['Aizawl','Champhai','Hnahthial','Khawzawl','Kolasib','Lawngtlai','Lunglei','Mamit','Saitual','Serchhip','Siaha']
      },
      'Nagaland': {
        tariff: 4.70, sun: 4.2,
        districts: ['Chumoukedima','Dimapur','Kiphire','Kohima','Longleng','Mokokchung','Mon','Niuland','Noklak','Peren','Phek','Shamator','Tseminyu','Tuensang','Wokha','Zunheboto']
      },
      'Odisha': {
        tariff: 5.50, sun: 5.0,
        districts: ['Angul','Balangir','Balasore','Bargarh','Bhadrak','Boudh','Cuttack','Deogarh','Dhenkanal','Gajapati','Ganjam','Jagatsinghpur','Jajpur','Jharsuguda','Kalahandi','Kandhamal','Kendrapara','Kendujhar','Khordha','Koraput','Malkangiri','Mayurbhanj','Nabarangpur','Nayagarh','Nuapada','Puri','Rayagada','Sambalpur','Subarnapur','Sundargarh']
      },
      'Punjab': {
        tariff: 5.50, sun: 5.0,
        districts: ['Amritsar','Barnala','Bathinda','Faridkot','Fatehgarh Sahib','Fazilka','Firozpur','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Malerkotla','Mansa','Moga','Pathankot','Patiala','Rupnagar','Sahibzada Ajit Singh Nagar','Sangrur','Shahid Bhagat Singh Nagar','Sri Muktsar Sahib','Tarn Taran']
      },
      'Rajasthan': {
        tariff: 5.50, sun: 6.0,
        districts: ['Ajmer','Alwar','Anupgarh','Balotra','Banswara','Baran','Barmer','Beawar','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Deeg','Dholpur','Didwana-Kuchaman','Dungarpur','Gangapur City','Hanumangarh','Jaipur','Jaipur Rural','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Jodhpur Rural','Karauli','Kekri','Khairthal-Tijara','Kota','Kotputli-Behror','Nagaur','Neem Ka Thana','Pali','Phalodi','Pratapgarh','Rajsamand','Salumbar','Sanchore','Sawai Madhopur','Shahpura','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur']
      },
      'Sikkim': {
        tariff: 4.20, sun: 4.1,
        districts: ['East Sikkim','Gangtok','Gyalshing','Mangan','Namchi','Pakyong','Soreng']
      },
      'Tamil Nadu': {
        tariff: 5.50, sun: 5.1,
        districts: ['Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kanchipuram','Kanyakumari','Karur','Krishnagiri','Madurai','Mayiladuthurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Viluppuram','Virudhunagar']
      },
      'Telangana': {
        tariff: 5.50, sun: 5.5,
        districts: ['Adilabad','Bhadradri Kothagudem','Hanamkonda','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Kumuram Bheem Asifabad','Mahabubabad','Mahbuknagar','Mancherial','Medak','Medchal-Malkajgiri','Mulugu','Nagarkurnool','Nalgonda','Narayanpet','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Ranga Reddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal','Yadadri Bhuvanagiri']
      },
      'Tripura': {
        tariff: 4.90, sun: 4.4,
        districts: ['Dhalai','Gomati','Khowai','North Tripura','Sepahijala','South Tripura','Unakoti','West Tripura']
      },
      'Uttar Pradesh': {
        tariff: 5.50, sun: 5.0,
        districts: ['Agra','Aligarh','Ambedkar Nagar','Amethi','Amroha','Auraiya','Ayodhya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Farrukhabad','Fatehpur','Firozabad','Gautam Buddha Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Prayagraj','Raebareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi']
      },
      'Uttarakhand': {
        tariff: 4.60, sun: 4.6,
        districts: ['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi']
      },
      'West Bengal': {
        tariff: 7.00, sun: 4.8,
        districts: ['Alipurduar','Bankura','Birbhum','Cooch Behar','Dakshin Dinajpur','Darjeeling','Hooghly','Howrah','Jalpaiguri','Jhargram','Kalimpong','Kolkata','Malda','Murshidabad','Nadia','North 24 Parganas','Paschim Bardhaman','Paschim Medinipur','Purba Bardhaman','Purba Medinipur','Purulia','South 24 Parganas','Uttar Dinajpur']
      },
      'Andaman and Nicobar Islands': {
        tariff: 5.00, sun: 4.8,
        districts: ['Nicobar','North and Middle Andaman','South Andaman']
      },
      'Chandigarh': {
        tariff: 5.20, sun: 5.0,
        districts: ['Chandigarh']
      },
      'Dadra and Nagar Haveli and Daman and Diu': {
        tariff: 4.50, sun: 5.5,
        districts: ['Dadra and Nagar Haveli','Daman','Diu']
      },
      'Delhi': {
        tariff: 5.50, sun: 5.0,
        districts: ['Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','Shahdara','South Delhi','South East Delhi','South West Delhi','West Delhi']
      },
      'Jammu & Kashmir': {
        tariff: 4.50, sun: 5.1,
        districts: ['Anantnag','Bandipora','Baramulla','Budgam','Doda','Ganderbal','Jammu','Kathua','Kishtwar','Kulgam','Kupwara','Poonch','Pulwama','Rajouri','Ramban','Reasi','Samba','Shopian','Srinagar','Udhampur']
      },
      'Ladakh': {
        tariff: 4.20, sun: 6.5,
        districts: ['Kargil','Leh']
      },
      'Lakshadweep': {
        tariff: 5.00, sun: 5.0,
        districts: ['Lakshadweep']
      },
      'Puducherry': {
        tariff: 4.80, sun: 5.2,
        districts: ['Karaikal','Mahe','Puducherry','Yanam']
      }
    };

    const DISTRICT_OVERRIDES = {
      'Khordha': { tariff: 5.50, sun: 5.1 },
      'Cuttack': { tariff: 5.50, sun: 5.0 },
      'Raipur': { tariff: 5.10, sun: 5.3 },
      'Durg': { tariff: 5.00, sun: 5.2 },
      'Mumbai City': { tariff: 7.20, sun: 5.3 },
      'Mumbai Suburban': { tariff: 7.20, sun: 5.3 },
      'Pune': { tariff: 7.10, sun: 5.5 },
      'Bengaluru Urban': { tariff: 6.80, sun: 5.3 },
      'Gurugram': { tariff: 6.20, sun: 5.1 },
      'Gautam Buddha Nagar': { tariff: 6.20, sun: 5.1 },
      'Kolkata': { tariff: 7.20, sun: 4.8 }
    };

    let category = 'residential';
    let method = 'bill';
    let areaUnit = 'sqft';
    let lastCalcData = null;

    (function() {
      const sel = document.getElementById('sel-state');
      Object.keys(STATE_DATA).sort().forEach(s => {
        const o = document.createElement('option');
        o.value = s; o.textContent = s;
        if (s === 'Odisha') o.selected = true;
        sel.appendChild(o);
      });
      onStateChange();
    })();

    function setCategory(c) {
      category = c;
      document.getElementById('cat-res').classList.toggle('active', c==='residential');
      document.getElementById('cat-com').classList.toggle('active', c==='commercial');
      document.getElementById('subsidy-row').style.display = c==='residential' ? '' : 'none';
    }

    function setMethod(m) {
      method = m;
      ['bill','units','area'].forEach(x => {
        document.getElementById('inp-' + x).style.display = x===m ? '' : 'none';
        document.getElementById('meth-' + x).classList.toggle('active', x===m);
      });
    }

    function setAreaUnit(u) {
      areaUnit = u;
      document.getElementById('unit-sqft').classList.toggle('active', u==='sqft');
      document.getElementById('unit-sqm').classList.toggle('active', u==='sqm');
    }

    function updateRoofPct() {
      document.getElementById('roof-pct-display').textContent = document.getElementById('roof-pct-slider').value + '%';
    }

    function syncSlider() {
      const v = parseFloat(document.getElementById('monthly-bill').value) || 0;
      document.getElementById('bill-slider').value = Math.min(50000, Math.max(500, v));
    }

    function syncBillFromSlider() {
      document.getElementById('monthly-bill').value = document.getElementById('bill-slider').value;
    }

    function onStateChange() {
      const state = document.getElementById('sel-state').value;
      const distEl = document.getElementById('sel-district');
      distEl.innerHTML = '<option value="">— Select District —</option>';
      distEl.disabled = !state;

      if (state && STATE_DATA[state]) {
        const data = STATE_DATA[state];
        data.districts.sort().forEach(d => {
          const o = document.createElement('option');
          o.value = d; o.textContent = d;
          if (d === 'Khordha') o.selected = true;
          distEl.appendChild(o);
        });

        document.getElementById('tariff').value = data.tariff.toFixed(2);
        document.getElementById('sun-hrs').value = data.sun.toFixed(1);
      }
    }

    function onDistrictChange() {
      const state = document.getElementById('sel-state').value;
      const distName = document.getElementById('sel-district').value;
      if (state && distName && STATE_DATA[state]) {
        const stateObj = STATE_DATA[state];
        let tariff = stateObj.tariff;
        let sun = stateObj.sun;

        if (DISTRICT_OVERRIDES[distName]) {
          tariff = DISTRICT_OVERRIDES[distName].tariff;
          sun = DISTRICT_OVERRIDES[distName].sun;
        }

        document.getElementById('tariff').value = tariff.toFixed(2);
        document.getElementById('sun-hrs').value = sun.toFixed(1);
      }
    }

    function fmtINR(n) {
      if (n >= 100000) return '₹' + (n/100000).toFixed(2) + ' L';
      if (n >= 1000) return '₹' + Math.round(n).toLocaleString('en-IN');
      return '₹' + Math.round(n);
    }
    function fmtDec(n, d=1) { return parseFloat(n.toFixed(d)); }

    function calculate() {
      const btn = document.getElementById('calc-btn');
      btn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite">⚡</span> Calculating…';
      btn.disabled = true;
      setTimeout(() => {
        try { doCalc(); }
        catch(e) { showToast('⚠️ ' + e.message); }
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> Calculate My Solar Savings`;
        btn.disabled = false;
      }, 450);
    }

    function doCalc() {
      const tariff = parseFloat(document.getElementById('tariff').value) || 5.5;
      const sunHrs = parseFloat(document.getElementById('sun-hrs').value) || 5.0;
      const sysType = document.getElementById('sys-type').value;
      const PR = 0.78;

      let monthlyUnits = 0;
      if (method === 'bill') {
        const bill = parseFloat(document.getElementById('monthly-bill').value) || 0;
        if (!bill) throw new Error('Please enter your monthly electricity bill.');
        monthlyUnits = bill / tariff;
      } else if (method === 'units') {
        monthlyUnits = parseFloat(document.getElementById('monthly-units').value) || 0;
        if (!monthlyUnits) throw new Error('Please enter your monthly consumption in kWh.');
      } else {
        const rawArea = parseFloat(document.getElementById('roof-area').value) || 0;
        if (!rawArea) throw new Error('Please enter your roof area.');
        const pct = parseFloat(document.getElementById('roof-pct-slider').value) / 100;
        const sqft = areaUnit === 'sqm' ? rawArea * 10.764 : rawArea;
        const sysKW = (sqft * pct) / 90;
        monthlyUnits = sysKW * sunHrs * 30 * PR;
      }

      const eff = sysType === 'offgrid' ? 1.35 : (sysType === 'hybrid' ? 1.28 : 1.25);
      const sysKW = (monthlyUnits / 30 / (sunHrs * PR)) * eff;
      const monthlyGen = sysKW * sunHrs * 30 * PR;
      const covered = Math.min(monthlyGen, monthlyUnits);
      const monthlySav = covered * tariff;
      const annualSav = monthlySav * 12;

      let sav30 = 0, cur = annualSav;
      for (let y = 1; y <= 30; y++) { sav30 += cur; cur *= (1.05 * 0.995); }

      let cpkw = category === 'residential'
        ? (sysKW <= 3 ? 81000 : sysKW <= 10 ? 72000 : 65000)
        : (sysKW <= 10 ? 62000 : 55000);
      if (sysType === 'hybrid') cpkw += 12000;
      if (sysType === 'offgrid') cpkw += 20000;
      const sysCost = sysKW * cpkw;

      let subsidy = 0, subLabel = '';
      if (category === 'residential') {
        const sk = Math.min(sysKW, 3);
        subsidy = sk <= 2 ? sk * 30000 : 2 * 30000 + (sk - 2) * 18000;
        subLabel = sk <= 2 ? `${fmtDec(sk)} kW × ₹30,000` : 'max 3 kW';
        document.getElementById('subsidy-badge').textContent = subLabel;
      }
      const netCost = sysCost - subsidy;
      const payback = annualSav > 0 ? netCost / annualSav : 0;
      const roi = netCost > 0 ? (annualSav / netCost) * 100 : 0;
      const covPct = Math.min(100, (covered / monthlyUnits) * 100);

      const co2_30T = (monthlyGen * 12 * 30 * 0.82) / 1000;
      const trees = Math.round((co2_30T * 1000) / 625);

      lastCalcData = { sysKW, tariff, monthlySav, annualSav, sav30, sysCost, subsidy, netCost, payback, roi, covPct, co2_30T, trees };
      render(lastCalcData);
    }

    function render(d) {
      document.getElementById('empty-state').style.display = 'none';
      ['results','kpi-wrap','env-wrap'].forEach(id => {
        const el = document.getElementById(id);
        el.classList.add('show');
      });

      document.getElementById('r-syssize').innerHTML = `${fmtDec(d.sysKW,2)} <span>kW</span>`;
      document.getElementById('r-tariff-label').textContent = `Electricity Bill Savings (at ₹${parseFloat(d.tariff).toFixed(2)}/kWh)`;
      document.getElementById('r-monthly').textContent = fmtINR(d.monthlySav);
      document.getElementById('r-annual').textContent = fmtINR(d.annualSav);
      document.getElementById('r-30yr').textContent = fmtINR(d.sav30);
      document.getElementById('r-syscost').textContent = fmtINR(d.sysCost);

      if (category === 'residential' && d.subsidy > 0) {
        document.getElementById('r-subsidy').textContent = '− ' + fmtINR(d.subsidy);
        document.getElementById('subsidy-row').style.display = '';
      } else {
        document.getElementById('subsidy-row').style.display = 'none';
      }
      document.getElementById('r-netcost').textContent = fmtINR(d.netCost);
      document.getElementById('r-coverage-pct').textContent = Math.round(d.covPct) + '%';
      document.getElementById('r-payback').textContent = fmtDec(d.payback, 1);
      document.getElementById('r-roi').textContent = fmtDec(d.roi, 1);
      document.getElementById('r-co2').textContent = fmtDec(d.co2_30T, 1);
      document.getElementById('r-trees').textContent = d.trees.toLocaleString('en-IN');

      setTimeout(() => { document.getElementById('gauge-fill').style.width = d.covPct + '%'; }, 100);

      showToast(`✅ ${fmtDec(d.sysKW,2)} kW · saves ${fmtINR(d.annualSav)}/yr · ${fmtDec(d.payback,1)} yr payback`);
    }

    function connectWhatsAppCalcLead() {
      const state = document.getElementById('sel-state').value || 'Odisha';
      const district = document.getElementById('sel-district').value || 'Bhubaneswar';
      const bill = document.getElementById('monthly-bill').value || '6500';

      let msg = `Hi *Suryon Group*! ☀️\nI used your Solar Calculator.\n- *Category:* ${category}\n- *Location:* ${district}, ${state}\n- *Monthly Bill:* ₹${bill}\n`;
      if (lastCalcData) {
        msg += `- *Estimated Capacity:* ~ ${fmtDec(lastCalcData.sysKW, 2)} kW\n- *Annual Savings:* ~ ${fmtINR(lastCalcData.annualSav)}\n- *Net Investment:* ~ ${fmtINR(lastCalcData.netCost)}\n`;
      }
      msg += `\nI would like to get a free site assessment & exact solar quote (+91 98274 72441).`;

      openWhatsApp(msg);
    }
  
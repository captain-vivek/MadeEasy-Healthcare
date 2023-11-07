/*const getSelectedSymptoms = () => {
    const form = document.getElementById("symptomTracker");
    const selectedSymptoms = [];
    for (const symptomCheckbox of form.querySelectorAll("input[type='checkbox']:checked")) {
      selectedSymptoms.push(symptomCheckbox.value);
    }
    return selectedSymptoms;
  };
  
  // Create a database of symptoms, diagnosis, and recommendations.
  async function fetchDatabase() {
    const response = await fetch("/symptomDatabase.json");
    const data = await response.json();
  
    return data;
  }
  const database = await fetchDatabase();
  
  // Use the database to get the diagnosis and recommendation for the selected symptoms.
  function getDiagnosisAndRecommendation(selectedSymptoms) {
    const matchingItems = database.filter((item) => {
      return item.symptoms.every((symptom) => selectedSymptoms.includes(symptom));
    });
  
    if (matchingItems.length > 0) {
      return { diagnosis: matchingItems[0].diagnosis, recommendation: matchingItems[0].recommendation };
    } else {
      return null;
    }
  } 
  
  // Display the diagnosis and recommendation to the user.
  function displayDiagnosisAndRecommendation(diagnosis, recommendation) {
    const diagnosisElement = document.querySelector("#diagnosis");
    diagnosisElement.textContent = diagnosis;
  
    const recommendationElement = document.querySelector("#recommendation");
    recommendationElement.textContent = recommendation;
  
    // Render the changes to the page.
    diagnosisElement.parentNode.replaceChild(diagnosisElement.cloneNode(true), diagnosisElement);
    recommendationElement.parentNode.replaceChild(recommendationElement.cloneNode(true), recommendationElement);
  }
  
  // Add an event listener to the form submit button to call the `getDiagnosisAndRecommendation()` and `displayDiagnosisAndRecommendation()` functions.
  document.getElementById("symptomTracker").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const selectedSymptoms = getSelectedSymptoms();
    
    const { diagnosis, recommendation } = getDiagnosisAndRecommendation(selectedSymptoms);
  
    displayDiagnosisAndRecommendation(diagnosis, recommendation);
  });
*/

// Add an event listener to the form for handling form submission
document.getElementById('symptomTracker').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the selected symptoms
    const selectedSymptoms = document.querySelectorAll('input[name="symptoms[]"]:checked');
  
    // Create an array to store the selected symptom values
    const selectedSymptomValues = Array.from(selectedSymptoms).map(symptom => symptom.value);
  
    // Call a function to determine the diagnosis and recommendation based on the selected symptoms
    const { diagnosis, recommendation } = getDiagnosisAndRecommendation(selectedSymptomValues);
   
    // Display the diagnosis and recommendation in the HTML
    document.getElementById('diagnosis').textContent = `Diagnosis: ${diagnosis}`;
    document.getElementById('recommendation-text').textContent = `Recommendation: ${recommendation}`;
  });
  
  // Function to determine diagnosis and recommendation based on selected symptoms
  function getDiagnosisAndRecommendation(selectedSymptoms) {
    // Replace this with your actual logic to determine diagnosis and recommendation based on symptoms
    // Here's a simple example:
    let diagnosis = "Right now we are unable to proccess,Sorry !!!";
    let recommendation = "No recommendation available";
  
    if (selectedSymptoms.includes(('fever' && 'cough' && 'runny nose') || ('fever' && 'sore throat' && 'runny nose') || ('cough' && 'sore throat' && 'runny nose'))) {
        diagnosis = " Common cold, influenza, COVID-19";
        recommendation = " Get plenty of rest, drink fluids, and take over-the-counter medications to relieve your symptoms. See a doctor if your symptoms are severe or do not improve after a week.";
    }
    else if (selectedSymptoms.includes(('fever' && 'body aches' && 'fatigue') || ('fever' && 'headache' && 'fatigue') || ('fever' && 'fatigue'))) {
      diagnosis = " Influenza,  other viral infections";
      recommendation = " Get plenty of rest, drink fluids, and take over-the-counter medications to reduce fever and relieve pain. See a doctor if your symptoms are severe or do not improve after a few days.";
    }
    else if (selectedSymptoms.includes(('fever' && 'nausea' && 'vomiting') || ('fever' && 'nausea' && 'diarrhea') || ('nausea' && 'diarrhea'))) {
      diagnosis = " Gastroenteritis (stomach flu), food poisoning, other infections";
      recommendation = " Drink plenty of fluids to avoid dehydration. Avoid eating solid foods until your stomach has settled. See a doctor if your symptoms are severe or do not improve after a few days.";
    }
    else if (selectedSymptoms.includes(('fever' && 'cough' && 'body aches' && 'fatigue') || ('fever' && 'cough' && 'body aches' && 'fatigue') || ('body ache' && 'sore throat' && 'fatigue'))) {
      diagnosis = " Mononucleosis, strep throat, other bacterial infections";
      recommendation = " Antibiotics may be needed to treat the infection. Get plenty of rest, drink fluids, and take over-the-counter medications to relieve your symptoms. See a doctor if your symptoms do not improve after a few days.";
  }
  else if (selectedSymptoms.includes(('fever' && 'cough' && 'sore throat' && 'body ache' && 'fatigue' && 'nausea'))) {
    diagnosis = " Meningitis, encephalitis, other serious infections";
    recommendation = " Seek medical attention immediately.";
  }
  else if(selectedSymptoms.includes('fever')){
    diagnosis=" Fever is a common symptom of many different illnesses, including infections, inflammatory diseases, and cancer.";
    recommendation=" Rest, fluids, over-the-counter pain relievers, and light clothing. If fever is above 103 degrees Fahrenheit (39.4 degrees Celsius) or does not improve after a few days, seek medical attention.";
  }
  else if(selectedSymptoms.includes('cough')){
    diagnosis="  Cough is a common symptom of many different illnesses, including infections, allergies, and asthma.";
    recommendation=" Rest, fluids, and over-the-counter cough suppressants or expectorants. If cough is severe or does not improve after a few weeks, seek medical attention.";
  }
  else if(selectedSymptoms.includes('runny nose')){
    diagnosis="  Runny nose, also known as rhinitis, is a common symptom of many different illnesses, including infections, allergies, and non-allergic rhinitis.";
    recommendation=" Rest, fluids, and over-the-counter saline nasal sprays or decongestants. If runny nose is severe or does not improve after a few weeks, seek medical attention.";
  }
  else if(selectedSymptoms.includes('sore throat')){
    diagnosis="  Sore throat is a common symptom of many different illnesses, including infections, allergies, and dry air.";
    recommendation=" Rest, fluids, and over-the-counter pain relievers, such as acetaminophen (Tylenol) or ibuprofen (Advil). If sore throat is severe or does not improve after a few days, seek medical attention.";
  }
  else if(selectedSymptoms.includes('headache')){
    diagnosis="   Headaches can be caused by a variety of factors, including stress, dehydration, lack of sleep, and certain medical conditions.";
    recommendation=" Rest, fluids, and over-the-counter pain relievers, such as acetaminophen (Tylenol) or ibuprofen (Advil). If the headache is severe or does not improve with over-the-counter pain relievers, seek medical attention.";
  }
  else if(selectedSymptoms.includes('body aches')){
    diagnosis="  Body aches are a common symptom of many different illnesses, including infections, inflammatory diseases, and fibromyalgia.";
    recommendation=" Rest, fluids, and over-the-counter pain relievers, such as acetaminophen (Tylenol) or ibuprofen (Advil). If body aches are severe or do not improve after a few days, seek medical attention.";
  }
  else if(selectedSymptoms.includes('fatigue')){
    diagnosis="  Fatigue is a feeling of tiredness or lack of energy. It can be caused by a variety of factors, including infections, medical conditions, mental health conditions, certain medications, lack of sleep, stress, and overexertion.";
    recommendation=" Get enough sleep, eat a healthy diet, exercise regularly, manage stress, and avoid overexertion. If fatigue is severe or does not improve with lifestyle changes, seek medical attention.";
  }
  else if(selectedSymptoms.includes('nausea')){
    diagnosis="  Nausea can be caused by a variety of diseases, including infections, medications, pregnancy, and other medical conditions.";
    recommendation=" Rest, fluids, bland foods, and avoid foods and drinks that trigger your nausea. If your nausea is severe or accompanied by other symptoms, such as fever, vomiting, diarrhea, or abdominal pain, please see a doctor.";
  }
  else if(selectedSymptoms.includes('vomiting')){
    diagnosis="  Vomiting can be caused by a variety of diseases, including infections, food poisoning, gastroenteritis, motion sickness, pregnancy, and other medical conditions.";
    recommendation="If you are vomiting more than once an hour, unable to keep fluids down, or have other symptoms such as fever, diarrhea, or abdominal pain, please see a doctor.";
  }
  else if(selectedSymptoms.includes('diarrhea')){
    diagnosis="   Diarrhea is a condition characterized by loose or watery stools that occur more frequently than usual. It can be caused by a variety of factors, including infections, food poisoning, certain medications, and medical conditions such as irritable bowel syndrome (IBS).";
    recommendation="The most important treatment for diarrhea is to stay hydrated by drinking plenty of fluids. You can also drink oral rehydration solution (ORS), which is a mixture of water, sugar, and salt that helps to replace the electrolytes lost in diarrhea.";
  }
  
     else {
        diagnosis = "No specific diagnosis available for the selected symptoms.";
        recommendation = "Consult a healthcare professional for a proper evaluation.";
    }
  
    return { diagnosis, recommendation };
  }
  
  
  
  let mp=document.getElementById('map-link');
  const selectElement = document.getElementById('city-select');
  const selectedOptionValue = selectElement.value;
  
  
  // if(selectedOptionValue==="katraj"){
  //   mp.setAttribute("href","https://www.google.com/maps/search/katraj+hospitals/@18.447163,73.8467168,14z/data=!3m1!4b1?entry=ttu");
  // }
  // else if(selectedOptionValue==="kothrud"){
  //   mp.setAttribute("href","https://www.google.com/maps/search/kothrud+hospitals/@18.5023332,73.7929828,15z/data=!3m1!4b1?entry=ttu");
  // }
  // else if(selectedOptionValue==="shivajinagar"){
  //   mp.setAttribute("href","https://www.google.com/maps/search/shivajinagar+hospitals/@18.5024302,73.7620826,13z/data=!3m1!4b1?entry=ttu");
  // }
  
  document.getElementById('city-select').addEventListener('change', function() {
    var selectedCity = this.value;
    var mapUrl = 'https://www.google.com/maps/search/' + selectedCity +' hospitals';
    document.getElementById('map-link').href = mapUrl;
  });
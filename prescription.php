<!-- code By Pooja Gawali -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prescription</title>
    <link rel="stylesheet" href="presc.css">
    
</head>
<body>
    <!-- <form  action="pdf.php" method="POST"> -->
    <div class="background-image"></div>
    <!-- <div class="Box">
        <div class="presc">
        <form>
            <h1>Genaerate Your Prescription</h1>
        </form>
        </div>
    </div> -->
    <div class="container">
        <div class="box">
            <form  action="pdf.php" method="POST">
                <div class="title">
                    <div class="icons">
                        <img src="logo.jpg" class="logo">
                    <div class="tooltip">Made Medication easy</div>
                    </div>
                    
                    <h1>GENERATE YOUR PRESCRIPTION </h1>
                </div>
                

                <div class="intro">
                    
                    <div class="name">
                        <pre>Prescription Number : </pre>
                        <div class="inputBox">
                            <input type="number" name="Number" id="inputBox" placeholder="0">
                        </div>
                    </div>
                    <div class="date">
                        <pre>  Date of Prescription : </pre>
                        <div class="inputBox">
                        <input type="date" name="Date" id="inputBox">
                    </div>
                    </div> 
                </div>
                <div class="medTitle">
                    <img src="doctor.jpg" class="logo">
                    <h4>DOCTOR'S INFORMATION</h4>
                </div>
                

                <div class="intro">
                    
                    <div class="name">
                        <pre> Name of Doctor: </pre>
                        <div class="inputBox">
                            <input type="text" name="Ndoctor" id="inputBox" placeholder="Name">
                        </div>
                    </div>
                    <div class="date">
                        <pre>  Degree of Doctor : </pre>
                        <div class="inputBox">
                        <input type="number" name="Degree" id="inputBox" placeholder="Degree">
                    </div>
                    </div> 
                </div>
                <div class="intro">
                    <pre>Location of Hospital : </pre>
                    <div class="inputBox">
                        <textarea type="Address" name="location" id="inputBox" placeholder="Enter your Current address" rows="4" cols="60"></textarea>
                    </div>
                </div>
                
                <h4>PATIENT'S INFORMATION</h4>

                <div class="intro">
                    
                    <div class="name">
                        <pre> Name of Patient : </pre>
                        <div class="inputBox">
                            <input type="text" name="Name" id="inputBox" placeholder="Name">
                        </div>
                    </div>
                    <div class="date">
                        <pre>  Age of Patient : </pre>
                        <div class="inputBox">
                        <input type="number" name="Age" id="inputBox" placeholder="Age">
                    </div>
                    </div> 
                </div>

                <div class="intro">
                   
                    <div class="name phnNo" >
                        <pre>Phone Number : </pre>
                        <div class="inputBox">
                            <input type="tel" name="phnNo" id="inputBox" placeholder="Enter your phone number">
                        </div>
                    </div>
                    <div class="gender">
                        <pre class="genderText"> Gender :  </pre>
                        <div class="gend">
                            <input type="checkbox" id="gender1" name="female" value="Female" class="g1">
                            <label for="gender1"> Female</label><br>
                            <input type="checkbox" id="gender2" name="male" value="male" class="g2">
                            <label for="gender2"> Male</label><br>
                         </div>  
                    </div> 
                    
                </div>
                <div class="intro">
                    <pre>Address : </pre>
                    <div class="inputBox">
                        <textarea type="Address" name="Address" id="inputBox" placeholder="Enter your Current address" rows="4" cols="60"></textarea>
                    </div>
                </div>
                
                
                <div class="medTitle">
                    <img src="med.jpg" class="logo">
                    <h4>MEDICINE DETAILS</h4>
                </div>

            <div class="intro">
                <div class="container2">
                    <div class="wrap">
                        <h2>Add Medicine into the Prescription</h2>
                        <a  class="add">&plus;</a>
                        
                    </div>
                    <div class="inp-group" name="Medication" id="search">
                    </div>
                    <!-- <div class="results">
                        <li>Some content</li>
                        <li>Some content</li>
                        <li>Some content</li>
                        <li>Some content</li>

                    </div> -->
                </div>
            </div>

            <div class="intro">
                <div class="qr-footer">
                <input type="Submit" value="Submit" id="generateBtn" class="submit" name="Submit">
                    <!-- <a   name="Submit">Submit</a> -->
                </div>
            </div>
            
           

            </form>
        </div>

        
   
    <!-- <div>
        <video src="med.mp4" id="video-slider" loop autoplay muted class="video-container"></video>
    
    </div> -->
   

        
    </div>
<!-- </form> -->
<script src="script.js"></script>
    
</body>
</html>
<!-- code By Pooja Gawali -->

<!-- error_reporting(E_ALL);
ini_set('display_errors', 1); -->

<?php
if(!empty($_POST['Submit']))
{
   $Number = $_POST['Number'];
   $Date = $_POST['Date'];

   $Name = $_POST['Name'];
   $Age = $_POST['Age'];
   $phnNo = $_POST['phnNo'];
//    $female = $_POST['female'];
//    $male = $_POST['male'];
   $Address = $_POST['Address'];
   $Medication = $_POST['Medication'];
   $Strength = $_POST['Strength'];
   $Dose = $_POST['Dose'];
   $Duration = $_POST['Duration'];

    require("fpdf/fpdf.php");

    $pdf = new FPDF();
    $pdf->AddPage();

    $pdf->SetFont("Arial","B",16);
    //to set heading of pdf

    $pdf->Cell(0,10,"Patient's Medical Details",1,1,'C');
    //width=0(means 100%) and height = 10, border=1 , if there is something after this line to come in new line=1

    $pdf->Cell(20,10,"No.",1,0,'C');
    $pdf->Cell(20,10,"Date",1,0,'C');
    $pdf->Cell(50,10,"Name",1,0,'C');
    $pdf->Cell(20,10,"Age",1,0,'C');
    $pdf->Cell(40,10,"phnNo",1,0,'C');
    $pdf->Cell(0,10,"Address",1,1,'C');


    $pdf->Cell(20,10,$Number,1,0,'C');
    $pdf->Cell(20,10,$Date,1,0,'C');
    $pdf->Cell(50,10,$Name,1,0,'C');
    $pdf->Cell(20,10,$Age,1,0,'C');
    $pdf->Cell(40,10,$phnNo,1,0,'C');
    $pdf->Cell(40,10,$Address,1,1,'C');

    $pdf->Cell(0,10," ",1,1,'C');
    $pdf->Cell(0,10," Medication",1,1,'C');

   //  $pdf->Cell(50,10,"Medicine",1,0,'C');
   //  $pdf->Cell(20,10,"Strength",1,0,'C');
   //  $pdf->Cell(20,10,"Dose",1,0,'C');
   //  $pdf->Cell(0,10,"Duration",1,1,'C');

    $pdf->Cell(0,10,$Medication,1,0,'C');
   //  $pdf->Cell(20,10,$Strength,1,0,'C');
   //  $pdf->Cell(20,10,$Dose,1,0,'C');
   //  $pdf->Cell(0,10,$Duration,1,1,'C');



    $pdf->output();

}
?>
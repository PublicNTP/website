<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
   <head>
      <title>PublicNTP: Statistics</title>
      <meta http-equiv="refresh" content="300" />
   </head>

   <body>
      <h1>PublicNTP: Statistics</h1>

      <p>Click on any graph below for additional details.</p>

      <h2>Chicago, Illinois, USA (ORD2) - Stratum 2</h2>

      <div>
         <table style="border: 0;">
            <tr>
               <td>
         <a href="usage-ord2.php">
            <img 
               style="padding-left: 0.5in; width: 231; height: 154; border: 0;" 
               src="images/ord2-thumbnail.png" 
               alt="stratum2.ord2 estimated error graph" />
         </a>
               </td>

               <td>
         <a href="error-ord2.php">
            <img
               style="padding-left: 0.5in; width: 231; height: 154; border: 0;"
               src="images/ord2-error-thumbnail.png"
               alt="stratum2.ord2 estimated error graph" />
         </a>
               </td>
            </tr>
         </table>


      </div>

      <h2>Santa Clara, California, USA (SJC1) - Stratum 2</h2>

      <div>
         <table style="padding-bottom: 0.5in;" >

            <tr>
               <td>
         <a href="usage-sjc1.php">
            <img 
               style="padding-left: 0.5in; width: 231; height: 154; border: 0;"
               src="images/sjc1-thumbnail.png" 
               alt="stratum2.sjc1 thumbnail" />
         </a>
               </td>

               <td>

         <a href="error-sjc1.php">
            <img 
               style="padding-left: 0.5in; width: 231; height: 154; border: 0;" 
               src="images/sjc1-error-thumbnail.png"
               alt="stratum2.sjc1 estimated error thumbnail" />
         </a>
               </td>
            </tr>
         </table>
      </div>

      <p>Return to the <a href="http://publicntp.net">PublicNTP</a> home 
         page.</p>
   </body>
</html>

<?php
   include( '../../../util/logWebAccess.php' );
?>


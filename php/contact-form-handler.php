<?php
// Define the filename for the CSV file
$filename = 'contact-form-submissions.csv';

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Sanitize the form data
  $data = array(
    'name' => filter_input(INPUT_POST, 'name'),
    'email' => filter_input(INPUT_POST, 'email'),
    'message' => filter_input(INPUT_POST, 'message'),
  );
  
  // Open the CSV file in append mode
  $fp = fopen($filename, 'a');

  // Write the data to the CSV file
  fputcsv($fp, $data);

  // Close the file
  fclose($fp);

  // Redirect the user back to develop.html
  header('Location: develop.html');
  exit;
}


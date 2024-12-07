<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize the form data
    $name = filter_var(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']));
    $location = filter_var(trim($_POST['location']));
    $interest = filter_var(trim($_POST['interest']));

    // Open the CSV file in append mode
    $file = fopen("email-pdf-submissions.csv", "a");

    // Write the sanitized data to the CSV file
    fputcsv($file, array($name, $email, $location, $interest));

    // Close the file
    fclose($file);

    // Send confirmation email
    $subject = "Confirmation: Advocacy Guide PDF Request";
    $message = "Thank you for your interest in the project. We have received your request for the Advocacy Guide PDF.";
    $headers = "From: no-reply@example.com";

    mail($email, $subject, $message, $headers);

    // Redirect back to the current page
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

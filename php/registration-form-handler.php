<?php
    // open the file
    $file = fopen("registration-form-submissions.csv", "a");
    
    // get and sanitize the post data
    $businessName = filter_var(trim($_POST["business-name"]), );
    $locationType = filter_var(trim($_POST["location-type"]), );
    $address = filter_var(trim($_POST["address"]), );
    $phone = filter_var(trim($_POST["phone"]), );
    $website = filter_var(trim($_POST["website"]), );
    $contactPerson = filter_var(trim($_POST["contact-person"]), );
    $contactEmail = filter_var(trim($_POST["contact-email"]), );
    $freeOfferings = filter_var(trim($_POST["free-offerings"]), );
    $hours = filter_var(trim($_POST["hours"]), );
    $restrictions = filter_var(trim($_POST["restrictions"]), );
    $comments = filter_var(trim($_POST["comments"]), );
    $submitterName = filter_var(trim($_POST["submitter-name"]), );
    $submitterEmail = filter_var(trim($_POST["submitter-email"]), );
    $submitterRelationship = filter_var(trim($_POST["submitter-relationship"]), );

    // write the sanitized data to the file
    fputcsv($file, array($businessName, $locationType, $address, $phone, $website, $contactPerson, $contactEmail, $freeOfferings, $hours, $restrictions, $comments, $submitterName, $submitterEmail, $submitterRelationship));

    // close the file
    fclose($file);

    // redirect to resources.html
    header("Location: resources.html");
    exit;

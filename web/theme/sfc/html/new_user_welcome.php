<?php

defined('XIBO') or die("Sorry, you are not allowed to directly access this page.<br /> Please press the back button in your browser.");
?>
<div class="jumbotron">
    <div class="container">
        <h1><?php echo Theme::Translate('Welcome to the %s CMS!', Theme::GetConfig('app_name')); ?></h1>
        <p><?php echo Theme::Translate('Digital Signage for Everyone'); ?></p>
        <p><?php echo Theme::Translate('We hope you like %s and have given you some suggestions below to get you started.', Theme::GetConfig('app_name')); ?></p>
        <a class="btn btn-primary btn-lg" role="button" href="<?php echo HelpManager::Link('Dashboard', 'General'); ?>" target="_blank"><?php echo Theme::Translate('Getting Started Guide'); ?></a>
    </div>
</div>

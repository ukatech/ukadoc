use Mojolicious::Lite;

push @{app->static->paths}, '../ssphelp';
app->start;

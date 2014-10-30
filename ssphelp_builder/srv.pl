use Mojolicious::Lite;

push @{app->static->paths}, 'dist';
app->start;

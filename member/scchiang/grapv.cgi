#!/usr/bin/perl -w

use CGI;

my $q = CGI-> new;
print $q->header;
my $domain = $q->param('domainname');


print  $domain."\n";



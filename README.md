# avert.to

This is the repository for the [avert.to](https://avert.to) web page.

## What is Avert
Avert is a simple domain forwarding service, which leverages DNS to determine the destination of the redirect. 

## Setup
In the DNS zone for the source domain, create two records:

| Record     |Type  | Value                        |
|------------|------|------------------------------|
| source.com | CNAME | `cname.avert.to`               |
| txt.source.com | TXT | `"to=https://destination.com"` |

That's it!

### Options

Retain Location - to retain the complete url during redirection, append `~rewrite` to the TXT value. e.g. `"to=https://destination.com ~rewrite"` 


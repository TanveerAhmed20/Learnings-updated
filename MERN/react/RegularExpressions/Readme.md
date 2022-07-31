## Regular Expressions

`Regular Expresions or regex is a sequence of characters that define a search pattern`


#### Regex Basics 

* foobar &#x2611;
* fooxbar&#x2611;
* baryfoo
* foobar &#x2611;
*  fooxybar&#x2611;
*  foocbar &#x2611;

Here 1,2,4,5,6 have the requried patten foo*bar


### Example 2: 
* fooadcbar&#x2611;
* fooxxybar&#x2611;
* baryfoo 
* foobar &#x2611;
*  fooxybar&#x2611;
*  foocbar &#x2611;

Here 1,2,4,5,6 have the requried patten foo.*bar

### Regular Expressions - POSIX

## Challenge : 
|   Symbol   |   What does it represent | 
|-----  |:---|
|    * |  Zero or more occurrences of the character that precedes this asterisk  |  
|   .  |   A wildcard that represents any character |  
|   \s |  Represents whitespace |  
|[pqr] | A single characte which can be either a  'p' , 'q' or 'r' |
| [a-d]| A single character that falls in the range 'a-d' , i.e one of 'a' , 'b' , 'c' or 'd' |
|[^pq] | A single character that is neither p nor q|
| ^pattern| represnet the beginning of the line|
|pattern$|represents the end of the line|
|\s*|represents zero or more white spaces|



`Validate email Problem`

* bob.123@gmail.com
* alice-personal@yahoo.co.in
* admin@cloud.guru
* tom_business@amazon.ca
* george@yahoo.com `invalid`
* steve austin@gmail.com `invalid`


### Solution : 



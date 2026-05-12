<?php
//Comment section
// a single-line comment
# another single-line comment
/* a multi-line 
comment */
/*Syntax
    PHP syntax starts with "<?php" and ends with "?>"
    Always end a code line with semicolons (;)
    When using double quotes ("), variables can be inserted to the string
    When using single quotes ("), variables have to be inserted using the "." operator
*/
/*Codes
    Output
        * use echo to show something in the screen (output); can be used with or withtout parentheses; has no return value so it cant be used in expressions; is faster than print; can have more than one parameters; can contain html text;
        * use print to show something in the screen (output); can be used with or withtout parentheses; always return "1" so it can be used in expressions; is slower than echo; only accept one argument;
    String
        * strlen() functions return the length of a string; use in front of echo;
        * str_word_count() function counts the number of words in a string; use in front of echo;
        * str_contains() [or strpos] function checks if a string contains a specific substring. If a match is found, the function returns a boolean true. If no match is found, it will return a boolean false. Case-sensitive, use in front of var_dump;
        * strpos() function searches for a specific text within a string. If a match is found, the function returns the character position of the first match. If no match is found, it will return false. Case-sensitive;
        * str_starts_with() function checks if a string starts with a specific substring. If a match is found, the function returns a boolean true. If no match is found, it will return a boolean false. Case-sensitive;
        * str_ends_with() function checks if a string ends with a specific substring. If a match is found, the function returns a boolean true. If no match is found, it will return a boolean false. Case-sensitive;
        * The strtoupper() function returns a string in upper case. Use in front of echo;
        * The strtolower() function returns a string in lower case. Use in front of echo;
        * The str_replace() function replaces some characters with some other characters in a string. Use in front of echo

*/    
//Concept
    // variables are $variable
        // $EX and $ex are different variables
        // to assign a value to a variable, use '$variable = "value"'
        // to sum two variables, use "$var1 + $var2" (variables need to have an value)
    /* scope
        scope can be global, local or static
            global 
                global scope its when a variable is declared outside a function; can only be accessed outside a function
                    to use a global scope inside a function use the keyword ""global
            local 
                local scope its when a variable is declared inside a function; can only be accessed inside a function; after using the function, all local scope inside are excluded
            static 
                static scope its used to prevent a local scope to be excluded after its function used. To use a static scope use the keyword "static" to make it static
            $GLOBALS
                $GLOBALS stores all globals variables in a array; accessible within
    */
    /* var_dump
        uses to check the type of an variable;
        Example:$var = 10; var_dump ($var); = int(10);
     */
    /* data types
        string (text values)
            Strings are surrounded by single quotes;
            Example:$var = "please"; = String(6) "please"; string(6) por causa da quantidade de letras no texto;
        int (whole numbers)
        float or double (decimal numbers)
        bool [boolean] (true or false)
        array (multiple values)
            Example: $var = [10, 1.0, true, "texto"] = 
            array(4) - quantidade de items na 'lista' {
            [0] => int (10); (Contagem começa do zero);
            [1] => float (1.0); 
            [2] => bool (true);
            [3] => string(5) "texto";
            }
        object (stores data as objects)
            class Carro {
                public $cor = "Vermelho";
                public function buzinar() {
                    return "Beep!";
                    }
                }
                $meuCarro = new Carro(); 
                echo $meuCarro->cor; // Acessa a propriedade
        null (empty variable)
            $var; = NULL
        resourse (references external resources) 
            Resource gets an external info, like a SQL;
            Example: $arquivo = fopen("teste.txt", "r"); // $arquivo is one resource, you cant use echo in it, but you can pass for an reading function;
        mixed (any value [string, int, float, bool, array, object, null, resorce])
            Example: function processar(mixed $valor);
    */




        echo ("sla po");
?>
/*
We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

Preconditions:

non empty valid url
password always next to string section password=
assume password will not contain ampersand sign for sake of simplicity
to make it more real it has non ASCII characters
"password=" and "user" will occur only once
empty passwords are not validated but best solutions take empty passwords into account

Example:

input
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

output
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

Extra readings:

https://alvinalexander.com/java/jdbc-connection-string-mysql-postgresql-sqlserver
*/

import java.util.*;
public class PasswordHider {
  public static String hidePasswordFromConnection(String urlString) {
    int pos = urlString.indexOf("password=");
    int len = urlString.length();
    boolean isPassBefore = urlString.indexOf("user=") > urlString.indexOf("password=");
    String res = "";
    if(isPassBefore) {
      int userPos = urlString.indexOf("&user");
      int passwordSize = userPos - pos - 9;
      res = urlString.substring(0,pos+9) + String.join("", Collections.nCopies(passwordSize, "*")) + urlString.substring(userPos);
    }
    else {
      int passwordSize = (len - pos) - 9;
      res = urlString.substring(0, pos + 9) + String.join("", Collections.nCopies(passwordSize, "*")) ;
    }
   return res;
   }
}

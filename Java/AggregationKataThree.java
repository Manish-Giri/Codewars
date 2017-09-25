/*
Java 8 has introduced a sexy new Stream API which makes it possible to solve some data related problems in just a few lines of code. Let's try it out!

You have a Student class (see the class declaration below).

You have an array of students and you want to get some aggregate data.

THE TASK: get the names of the students by department.

Implement the method using Java 8 Stream API.

Have Fun!
*/

import java.util.stream.*;
import java.util.Map;
import java.util.List;

public class AggregationKataThree {

     public static Map<String, List<String>> getStudentNamesByDepartment(Stream<Student> students) {
       return students.collect(Collectors.groupingBy(Student::getDepartment, Collectors.mapping(Student::getName, Collectors.toList())));
    }
}

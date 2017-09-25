/*
Java 8 has introduced a sexy new Stream API which makes it possible to solve some data related problems in just a few lines of code. Let's try it out!

You have a Student class (see the class declaration below).

You have an array of students and you want to get some aggregate data.

THE TASK: get the number of students by department

Implement the method using Java 8 Stream API.
*/

import java.util.stream.*;
import java.util.*;

public class AggregationKataTwo {
    public static Map<String, Long> getNumberOfStudentsByDepartment(Stream<Student> students) {
        return students.collect(Collectors.groupingBy(Student::getDepartment, Collectors.counting()));
    }
}

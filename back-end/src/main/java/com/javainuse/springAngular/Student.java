package com.javainuse.springAngular;

import javax.persistence.*;

@Entity
@Table(name = "student_table")
public class Student {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String firstName;
    @Column
    private String LastName;
    @Column
    private int age;
    @Column
    private  String url;

//    public Student(String firstName, String lastName, int age,String url) {
//        this.firstName = firstName;
//        LastName = lastName;
//        this.age = age;
//        this.url=url;
//    }


    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
